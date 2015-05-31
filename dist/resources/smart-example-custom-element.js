System.register(['aurelia-framework', './example-context'], function (_export) {
  'use strict';

  var bindable, inject, ExampleContext, SmartExampleCustomElement;

  var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer.call(target); Object.defineProperty(target, key, descriptor); }

  return {
    setters: [function (_aureliaFramework) {
      bindable = _aureliaFramework.bindable;
      inject = _aureliaFramework.inject;
    }, function (_exampleContext) {
      ExampleContext = _exampleContext.ExampleContext;
    }],
    execute: function () {
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
          initializer: null,
          enumerable: true
        }, {
          key: 'model',
          decorators: [bindable],
          initializer: null,
          enumerable: true
        }, {
          key: 'view',
          decorators: [bindable],
          initializer: null,
          enumerable: true
        }, {
          key: 'base',
          decorators: [bindable],
          initializer: null,
          enumerable: true
        }, {
          key: 'titleChanged',
          value: function titleChanged(newValue) {}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc291cmNlcy9zbWFydC1leGFtcGxlLWN1c3RvbS1lbGVtZW50LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozt3Q0FLYSx5QkFBeUI7Ozs7Ozs7Ozs7bUNBTDlCLFFBQVE7aUNBQ1IsTUFBTTs7dUNBQ04sY0FBYzs7O0FBR1QsK0JBQXlCOzs7QUFNekIsaUJBTkEseUJBQXlCLENBTXhCLE9BQU8sRUFBRTs7Ozs7Ozs7Ozs7QUFDbkIsY0FBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7QUFDdkIsY0FBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7QUFDakIsY0FBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7QUFDbEIsY0FBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7QUFDakIsY0FBSSxDQUFDLEtBQUssR0FBSSxnQkFBZ0IsQ0FBQztBQUMvQixjQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztTQUN4Qjs7eUNBYlUseUJBQXlCOzs7O3VCQUNuQyxRQUFROzs7Ozt1QkFDUixRQUFROzs7Ozt1QkFDUixRQUFROzs7Ozt1QkFDUixRQUFROzs7OztpQkFVRyxzQkFBQyxRQUFRLEVBQUMsRUFDckI7OztpQkFFVSxxQkFBQyxRQUFRLEVBQUU7QUFDcEIsZ0JBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxHQUFHLFdBQVcsR0FBRyxRQUFRLENBQUM7QUFDM0MsZ0JBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztXQUM3Qjs7O2lCQUNPLG9CQUFFO0FBQ1IsZ0JBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1dBQzdCOzs7aUJBQ08sb0JBQ1I7QUFDRSxnQkFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7V0FDdkI7OztBQTNCVSxpQ0FBeUIsR0FEckMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxDQUNWLHlCQUF5QixLQUF6Qix5QkFBeUI7ZUFBekIseUJBQXlCOzs7MkNBQXpCLHlCQUF5QiIsImZpbGUiOiJyZXNvdXJjZXMvc21hcnQtZXhhbXBsZS1jdXN0b20tZWxlbWVudC5qcyIsInNvdXJjZVJvb3QiOiIuLi9zcmMvIn0=