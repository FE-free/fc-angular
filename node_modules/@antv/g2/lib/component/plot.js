function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

/**
 * @fileOverview The class of canvas plot
 * @author sima.zhang
 */
var Util = require('../util');

var _require = require('../renderer'),
    Group = _require.Group;

var AUTO_STR = 'auto';

var PlotBack =
/*#__PURE__*/
function (_Group) {
  _inheritsLoose(PlotBack, _Group);

  function PlotBack() {
    return _Group.apply(this, arguments) || this;
  }

  var _proto = PlotBack.prototype;

  _proto.getDefaultCfg = function getDefaultCfg() {
    return {
      /**
       * 类型
       * @type {String}
       */
      type: 'plotBack',

      /**
       * 画布边距
       * @type {Number | Array | Object | "auto"}
       */
      padding: null,

      /**
       * 大背景
       * @type {Object}
       */
      background: null,

      /**
       * 绘图区域范围
       * @type {Object}
       */
      plotRange: null,

      /**
       * 绘图区域背景
       * @type {Object}
       */
      plotBackground: null
    };
  };

  _proto._beforeRenderUI = function _beforeRenderUI() {
    this._calculateRange();
  };

  _proto._renderUI = function _renderUI() {
    this._renderBackground();

    this._renderPlotBackground();
  };

  _proto._renderBackground = function _renderBackground() {
    var self = this;
    var background = self.get('background');

    if (background) {
      var canvas = this.get('canvas');
      var width = self.get('width') || canvas.get('width');
      var height = self.get('height') || canvas.get('height');
      var cfg = {
        x: 0,
        y: 0,
        width: width,
        height: height
      };
      var rect = self.get('backgroundShape');

      if (!rect) {
        rect = this.addShape('rect', {
          attrs: Util.mix(cfg, background)
        });
        this.set('backgroundShape', rect);
      } else {
        rect.attr(cfg);
      }
    } else {
      return;
    }
  };

  _proto._renderPlotBackground = function _renderPlotBackground() {
    var self = this;
    var plotBackground = self.get('plotBackground');

    if (plotBackground) {
      var plotRange = self.get('plotRange');
      var width = plotRange.br.x - plotRange.bl.x;
      var height = plotRange.br.y - plotRange.tr.y;
      var tl = plotRange.tl;
      var cfg = {
        x: tl.x,
        y: tl.y,
        width: width,
        height: height
      };
      var plotBackShape = self.get('plotBackShape');

      if (!plotBackShape) {
        if (plotBackground.image) {
          cfg.img = plotBackground.image;
          plotBackShape = self.addShape('image', {
            attrs: cfg
          });
        } else {
          // 矩形
          Util.mix(cfg, plotBackground);
          plotBackShape = self.addShape('rect', {
            attrs: cfg
          });
        }

        self.set('plotBackShape', plotBackShape);
      } else {
        plotBackShape.attr(cfg);
      }
    } else {
      return;
    }
  };

  _proto._convert = function _convert(val, isHorizontal) {
    if (Util.isString(val)) {
      if (val === AUTO_STR) {
        val = 0;
      } else if (val.indexOf('%') !== -1) {
        var canvas = this.get('canvas');
        var width = this.get('width') || canvas.get('width');
        var height = this.get('height') || canvas.get('height');
        val = parseInt(val, 10) / 100;
        val = isHorizontal ? val * width : val * height;
      }
    }

    return val;
  };

  _proto._calculateRange = function _calculateRange() {
    var self = this;
    var plotRange = self.get('plotRange');

    if (Util.isNil(plotRange)) {
      plotRange = {};
    }

    var padding = self.get('padding');
    var canvas = this.get('canvas');
    var width = self.get('width') || canvas.get('width');
    var height = self.get('height') || canvas.get('height');
    var allPadding = Util.toAllPadding(padding);

    var top = self._convert(allPadding[0], false);

    var right = self._convert(allPadding[1], true);

    var bottom = self._convert(allPadding[2], false);

    var left = self._convert(allPadding[3], true);

    var minX = Math.min(left, width - right);
    var maxX = Math.max(left, width - right);
    var minY = Math.min(height - bottom, top);
    var maxY = Math.max(height - bottom, top);
    plotRange.tl = {
      x: minX,
      y: minY
    }; // top-left

    plotRange.tr = {
      x: maxX,
      y: minY
    }; // top-right

    plotRange.bl = {
      x: minX,
      y: maxY
    }; // bottom-left

    plotRange.br = {
      x: maxX,
      y: maxY
    }; // bottom-right

    plotRange.cc = {
      x: (maxX + minX) / 2,
      y: (maxY + minY) / 2
    };
    this.set('plotRange', plotRange);
  };

  _proto.repaint = function repaint() {
    this._calculateRange();

    this._renderBackground();

    this._renderPlotBackground();

    return this;
  };

  return PlotBack;
}(Group);

module.exports = PlotBack;