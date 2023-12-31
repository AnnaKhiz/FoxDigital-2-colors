(function ($, window, document, undefined) {
    var pluginName = 'floatify',
        p = {},
        defaults = {
            position: 'left',
            hGap: 10
        };

    p[pluginName] = function () {
        function _class(el, config) {
            _classCallCheck(this, _class);

            this.el = el;
            this.$el = $(el);

            if (/submit|checkbox|radio|hidden/.test(this.$el.attr('type'))) return;

            this.config = $.extend({}, defaults, config);

            this._defaults = defaults;

            this.init();
        }

        _createClass(_class, [{
            key: 'init',
            value: function init() {
                this.updateHTML();
                this.wireEvents();

                this.toggle(this.el);
            }
        }, {
            key: 'updateHTML',
            value: function updateHTML() {
                var ph = this.$el.attr('placeholder');

                if (typeof ph === 'undefined') return;

                // add id to input, if not exists
                if (typeof this.$el.attr('id') === 'undefined') this.$el.attr('id', ph.toLowerCase().replace(/ /g, '-'));

                // add floatify class to element parent
                this.$el.parent().addClass('floatify');
                this.$el.parent().addClass('floatify__' + this.config.position);

                // add float label
                var $label = $('<label />', {
                    class: 'floatify__label',
                    text: ph,
                    for: this.$el.attr('id'),
                    css: _defineProperty({}, 'margin-' + this.config.position, this.config.hGap || 0)
                }).insertAdjacentHTML('beforeBegin', this.$el);

                // remove placeholder attribute from element and add floatify__input class
                this.$el.addClass('floatify__input');
            }
        }, {
            key: 'toggle',
            value: function toggle(el) {
                var $this = $(el);

                if ($this.val().length) $this.parent().addClass('floatify__active');else $this.parent().removeClass('floatify__active');
            }
        }, {
            key: 'wireEvents',
            value: function wireEvents() {
                var _this = this;

                this.$el.on('input paste', function (e) {
                    return _this.toggle(e.currentTarget);
                });
            }
        }]);

        return _class;
    }();

    $.fn[pluginName] = function (options) {
        return this.each(function () {
            if (!$.data(this, 'plugin_' + pluginName)) {
                $.data(this, 'plugin_' + pluginName, new p[pluginName](this, options));
            }
        });
    };
})(jQuery, window, document);

/***/
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

    /***/ })
/******/ ]);