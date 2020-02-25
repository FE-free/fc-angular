import * as tslib_1 from "tslib";
import { AppPage } from './app.po';
import { browser, logging } from 'protractor';
describe('workspace-project App', () => {
    let page;
    beforeEach(() => {
        page = new AppPage();
    });
    it('should display welcome message', () => {
        page.navigateTo();
        expect(page.getTitleText()).toEqual('Welcome to fc-angular!');
    });
    afterEach(() => tslib_1.__awaiter(this, void 0, void 0, function* () {
        // Assert that there are no errors emitted from the browser
        const logs = yield browser.manage().logs().get(logging.Type.BROWSER);
        expect(logs).not.toContain(jasmine.objectContaining({
            level: logging.Level.SEVERE,
        }));
    }));
});
//# sourceMappingURL=app.e2e-spec.js.map