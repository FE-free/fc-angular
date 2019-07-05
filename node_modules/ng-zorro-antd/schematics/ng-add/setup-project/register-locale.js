"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const schematics_1 = require("@angular/cdk/schematics");
const ast_utils_1 = require("@schematics/angular/utility/ast-utils");
const change_1 = require("@schematics/angular/utility/change");
const config_1 = require("@schematics/angular/utility/config");
const ng_ast_utils_1 = require("@schematics/angular/utility/ng-ast-utils");
const chalk_1 = require("chalk");
const ts = require("typescript");
function registerLocale(options) {
    return (host) => {
        const workspace = config_1.getWorkspace(host);
        const project = schematics_1.getProjectFromWorkspace(workspace, options.project);
        const appModulePath = ng_ast_utils_1.getAppModulePath(host, schematics_1.getProjectMainFile(project));
        const moduleSource = schematics_1.getSourceFile(host, appModulePath);
        const locale = getCompatibleLocal(options);
        const localePrefix = locale.split('_')[0];
        const recorder = host.beginUpdate(appModulePath);
        const changes = [
            ast_utils_1.insertImport(moduleSource, appModulePath, 'NZ_I18N', 'ng-zorro-antd'),
            ast_utils_1.insertImport(moduleSource, appModulePath, locale, 'ng-zorro-antd'),
            ast_utils_1.insertImport(moduleSource, appModulePath, 'registerLocaleData', '@angular/common'),
            ast_utils_1.insertImport(moduleSource, appModulePath, localePrefix, `@angular/common/locales/${localePrefix}`, true),
            registerLocaleData(moduleSource, appModulePath, localePrefix),
            ...insertI18nTokenProvide(moduleSource, appModulePath, locale)
        ];
        changes.forEach((change) => {
            if (change instanceof change_1.InsertChange) {
                recorder.insertLeft(change.pos, change.toAdd);
            }
        });
        host.commitUpdate(recorder);
        return host;
    };
}
exports.registerLocale = registerLocale;
function getCompatibleLocal(options) {
    const defaultLocal = 'en_US';
    if (options.locale === options.i18n) {
        return options.locale;
    }
    else if (options.locale === defaultLocal) {
        console.log();
        console.log(`${chalk_1.default.bgYellow('WARN')} ${chalk_1.default.cyan('--i18n')} option will be deprecated, ` +
            `use ${chalk_1.default.cyan('--locale')} instead`);
        return options.i18n;
    }
    else {
        return options.locale || defaultLocal;
    }
}
function registerLocaleData(moduleSource, modulePath, locale) {
    const allImports = ast_utils_1.findNodes(moduleSource, ts.SyntaxKind.ImportDeclaration);
    const allFun = ast_utils_1.findNodes(moduleSource, ts.SyntaxKind.ExpressionStatement);
    const registerLocaleDataFun = allFun.filter(node => {
        const fun = node.getChildren();
        return fun[0].getChildren()[0] && fun[0].getChildren()[0].getText() === 'registerLocaleData';
    });
    if (registerLocaleDataFun.length === 0) {
        return ast_utils_1.insertAfterLastOccurrence(allImports, `\n\nregisterLocaleData(${locale});`, modulePath, 0);
    }
    else {
        console.log();
        console.log(chalk_1.default.yellow(`Could not add the registerLocaleData to your app.module file (${chalk_1.default.blue(modulePath)}).` +
            `because there is already a registerLocaleData function.`));
        console.log(chalk_1.default.yellow(`Please manually add the following code to your app.module:`));
        console.log(chalk_1.default.cyan(`registerLocaleData(${locale});`));
        return new change_1.NoopChange();
    }
}
function insertI18nTokenProvide(moduleSource, modulePath, locale) {
    const metadataField = 'providers';
    const nodes = ast_utils_1.getDecoratorMetadata(moduleSource, 'NgModule', '@angular/core');
    const addProvide = ast_utils_1.addSymbolToNgModuleMetadata(moduleSource, modulePath, 'providers', `{ provide: NZ_I18N, useValue: ${locale} }`, null);
    let node = nodes[0]; // tslint:disable-line:no-any
    if (!node) {
        return [];
    }
    const matchingProperties = node.properties
        .filter(prop => prop.kind === ts.SyntaxKind.PropertyAssignment)
        .filter((prop) => {
        const name = prop.name;
        switch (name.kind) {
            case ts.SyntaxKind.Identifier:
                return name.getText(moduleSource) === metadataField;
            case ts.SyntaxKind.StringLiteral:
                return name.text === metadataField;
        }
        return false;
    });
    if (!matchingProperties) {
        return [];
    }
    if (matchingProperties.length) {
        const assignment = matchingProperties[0];
        if (assignment.initializer.kind !== ts.SyntaxKind.ArrayLiteralExpression) {
            return [];
        }
        const arrLiteral = assignment.initializer;
        if (arrLiteral.elements.length === 0) {
            return addProvide;
        }
        else {
            node = arrLiteral.elements.filter(e => e.getText && e.getText().includes('NZ_I18N'));
            if (node.length === 0) {
                return addProvide;
            }
            else {
                console.log();
                console.log(chalk_1.default.yellow(`Could not provide the locale token to your app.module file (${chalk_1.default.blue(modulePath)}).` +
                    `because there is already a locale token in provides.`));
                console.log(chalk_1.default.yellow(`Please manually add the following code to your provides:`));
                console.log(chalk_1.default.cyan(`{ provide: NZ_I18N, useValue: ${locale} }`));
                return [];
            }
        }
    }
    else {
        return addProvide;
    }
}
//# sourceMappingURL=register-locale.js.map