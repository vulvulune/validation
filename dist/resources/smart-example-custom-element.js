System.register(['aurelia-framework', './example-context'], function (_export) {
  var bindable, inject, ExampleContext, _classCallCheck, _createDecoratedClass, SmartExampleCustomElement;

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

      _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (initializers) initializers[key] = descriptor.initializer; } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

      SmartExampleCustomElement = (function () {
        var _instanceInitializers = {};

        function SmartExampleCustomElement(context) {
          _classCallCheck(this, _SmartExampleCustomElement);

          this.title = _instanceInitializers.title.call(this);
          this.base = _instanceInitializers.base.call(this);
          this.model = _instanceInitializers.model.call(this);
          this.view = _instanceInitializers.view.call(this);
          this.result = _instanceInitializers.result.call(this);

          this.context = context;
        }

        var _SmartExampleCustomElement = SmartExampleCustomElement;

        _createDecoratedClass(_SmartExampleCustomElement, [{
          key: 'title',
          decorators: [bindable],
          initializer: function () {
            return 'An excample...';
          },
          enumerable: true
        }, {
          key: 'base',
          decorators: [bindable],
          initializer: function () {
            return null;
          },
          enumerable: true
        }, {
          key: 'model',
          decorators: [bindable],
          initializer: function () {
            return null;
          },
          enumerable: true
        }, {
          key: 'view',
          decorators: [bindable],
          initializer: function () {
            return null;
          },
          enumerable: true
        }, {
          key: 'result',
          decorators: [bindable],
          initializer: function () {
            return false;
          },
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
        }], null, _instanceInitializers);

        SmartExampleCustomElement = inject(ExampleContext)(SmartExampleCustomElement) || SmartExampleCustomElement;
        return SmartExampleCustomElement;
      })();

      _export('SmartExampleCustomElement', SmartExampleCustomElement);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc291cmNlcy9zbWFydC1leGFtcGxlLWN1c3RvbS1lbGVtZW50LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Z0ZBS2EseUJBQXlCOzs7O21DQUw5QixRQUFRO2lDQUNSLE1BQU07O3VDQUNOLGNBQWM7Ozs7Ozs7OztBQUdULCtCQUF5Qjs7O0FBUXpCLGlCQVJBLHlCQUF5QixDQVF4QixPQUFPLEVBQUU7OztlQVBYLEtBQUsseUJBQUwsS0FBSztlQUNMLElBQUkseUJBQUosSUFBSTtlQUNKLEtBQUsseUJBQUwsS0FBSztlQUNMLElBQUkseUJBQUosSUFBSTtlQUNKLE1BQU0seUJBQU4sTUFBTTs7QUFJZCxjQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztTQUN4Qjs7eUNBVlUseUJBQXlCOzs7O3VCQUNuQyxRQUFROzttQkFBUyxnQkFBZ0I7Ozs7O3VCQUNqQyxRQUFROzttQkFBUSxJQUFJOzs7Ozt1QkFDcEIsUUFBUTs7bUJBQVMsSUFBSTs7Ozs7dUJBQ3JCLFFBQVE7O21CQUFRLElBQUk7Ozs7O3VCQUNwQixRQUFROzttQkFBVSxLQUFLOzs7OztpQkFNWixzQkFBQyxRQUFRLEVBQUMsRUFBRzs7O2lCQUVkLHFCQUFDLFFBQVEsRUFBRTtBQUNwQixnQkFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEdBQUcsV0FBVyxHQUFHLFFBQVEsQ0FBQztBQUMzQyxnQkFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1dBQzdCOzs7aUJBQ08sb0JBQUU7QUFDUixnQkFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7V0FDN0I7OztBQW5CVSxpQ0FBeUIsR0FEckMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxDQUNWLHlCQUF5QixLQUF6Qix5QkFBeUI7ZUFBekIseUJBQXlCOzs7MkNBQXpCLHlCQUF5QiIsImZpbGUiOiJyZXNvdXJjZXMvc21hcnQtZXhhbXBsZS1jdXN0b20tZWxlbWVudC5qcyIsInNvdXJjZVJvb3QiOiIvc3JjLyJ9