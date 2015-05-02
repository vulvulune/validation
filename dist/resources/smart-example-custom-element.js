System.register(['aurelia-framework', './example-context'], function (_export) {
  var bindable, inject, ExampleContext, _classCallCheck, _createDecoratedClass, _defineDecoratedPropertyDescriptor, SmartExampleCustomElement;

  return {
    setters: [function (_aureliaFramework) {
      bindable = _aureliaFramework.bindable;
      inject = _aureliaFramework.inject;
    }, function (_exampleContext) {
      ExampleContext = _exampleContext.ExampleContext;
    }],
    execute: function () {
      'use strict';

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

      _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

      _defineDecoratedPropertyDescriptor = function (target, key, descriptors) { var _descriptor = descriptors[key]; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer(); Object.defineProperty(target, key, descriptor); };

      SmartExampleCustomElement = (function () {
        var _instanceInitializers = {};

        function SmartExampleCustomElement(context) {
          _classCallCheck(this, _SmartExampleCustomElement);

          _defineDecoratedPropertyDescriptor(this, 'title', _instanceInitializers);

          _defineDecoratedPropertyDescriptor(this, 'model', _instanceInitializers);

          _defineDecoratedPropertyDescriptor(this, 'view', _instanceInitializers);

          _defineDecoratedPropertyDescriptor(this, 'base', _instanceInitializers);

          this.context = context;
          this.base = null;
          this.model = null;
          this.view = null;
          this.title = 'An excample...';
          this.hasResult = false;
        }

        var _SmartExampleCustomElement = SmartExampleCustomElement;

        _createDecoratedClass(_SmartExampleCustomElement, [{
          key: 'title',
          decorators: [bindable],
          initializer: function () {},
          enumerable: true
        }, {
          key: 'model',
          decorators: [bindable],
          initializer: function () {},
          enumerable: true
        }, {
          key: 'view',
          decorators: [bindable],
          initializer: function () {},
          enumerable: true
        }, {
          key: 'base',
          decorators: [bindable],
          initializer: function () {},
          enumerable: true
        }, {
          key: 'titleChanged',
          value: function titleChanged(newValue) {
            debugger;
          }
        }, {
          key: 'baseChanged',
          value: function baseChanged(newValue) {
            this.context.base = 'examples/' + newValue;
            this.context.example = this;
          }
        }, {
          key: 'attached',
          value: function attached() {
            this.baseChanged(this.base);
          }
        }, {
          key: 'complete',
          value: function complete() {
            this.hasResult = true;
          }
        }], null, _instanceInitializers);

        SmartExampleCustomElement = inject(ExampleContext)(SmartExampleCustomElement) || SmartExampleCustomElement;
        return SmartExampleCustomElement;
      })();

      _export('SmartExampleCustomElement', SmartExampleCustomElement);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc291cmNlcy9zbWFydC1leGFtcGxlLWN1c3RvbS1lbGVtZW50LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7b0hBS2EseUJBQXlCOzs7O21DQUw5QixRQUFRO2lDQUNSLE1BQU07O3VDQUNOLGNBQWM7Ozs7Ozs7Ozs7O0FBR1QsK0JBQXlCOzs7QUFNekIsaUJBTkEseUJBQXlCLENBTXhCLE9BQU8sRUFBRTs7Ozs7Ozs7Ozs7QUFDbkIsY0FBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7QUFDdkIsY0FBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7QUFDakIsY0FBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7QUFDbEIsY0FBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7QUFDakIsY0FBSSxDQUFDLEtBQUssR0FBSSxnQkFBZ0IsQ0FBQztBQUMvQixjQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztTQUN4Qjs7eUNBYlUseUJBQXlCOzs7O3VCQUNuQyxRQUFROzs7Ozt1QkFDUixRQUFROzs7Ozt1QkFDUixRQUFROzs7Ozt1QkFDUixRQUFROzs7OztpQkFVRyxzQkFBQyxRQUFRLEVBQUM7QUFDcEIscUJBQVM7V0FDVjs7O2lCQUVVLHFCQUFDLFFBQVEsRUFBRTtBQUNwQixnQkFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEdBQUcsV0FBVyxHQUFHLFFBQVEsQ0FBQztBQUMzQyxnQkFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1dBQzdCOzs7aUJBQ08sb0JBQUU7QUFDUixnQkFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7V0FDN0I7OztpQkFDTyxvQkFDUjtBQUNFLGdCQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztXQUN2Qjs7O0FBNUJVLGlDQUF5QixHQURyQyxNQUFNLENBQUMsY0FBYyxDQUFDLENBQ1YseUJBQXlCLEtBQXpCLHlCQUF5QjtlQUF6Qix5QkFBeUI7OzsyQ0FBekIseUJBQXlCIiwiZmlsZSI6InJlc291cmNlcy9zbWFydC1leGFtcGxlLWN1c3RvbS1lbGVtZW50LmpzIiwic291cmNlUm9vdCI6Ii9zcmMvIn0=