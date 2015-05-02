System.register(['aurelia-framework', './example-context'], function (_export) {
  var inject, bindable, ExampleContext, _classCallCheck, _createDecoratedClass, _defineDecoratedPropertyDescriptor, Example;

  return {
    setters: [function (_aureliaFramework) {
      inject = _aureliaFramework.inject;
      bindable = _aureliaFramework.bindable;
    }, function (_exampleContext) {
      ExampleContext = _exampleContext.ExampleContext;
    }],
    execute: function () {
      'use strict';

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

      _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

      _defineDecoratedPropertyDescriptor = function (target, key, descriptors) { var _descriptor = descriptors[key]; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer(); Object.defineProperty(target, key, descriptor); };

      Example = (function () {
        var _instanceInitializers = {};

        function Example(context) {
          _classCallCheck(this, _Example);

          _defineDecoratedPropertyDescriptor(this, 'base', _instanceInitializers);

          this.context = context;
          this.model = null;
          this.view = null;
          this.hasResult = false;
        }

        var _Example = Example;

        _createDecoratedClass(_Example, [{
          key: 'base',
          decorators: [bindable],
          initializer: function () {
            return '';
          },
          enumerable: true
        }, {
          key: 'baseChanged',
          value: function baseChanged(newValue) {
            this.context.base = newValue;
            this.context.example = this;
          }
        }, {
          key: 'complete',
          value: function complete(shouldComplete) {
            debugger;
            this.result = shouldComplete;
          }
        }], null, _instanceInitializers);

        Example = inject(ExampleContext)(Example) || Example;
        return Example;
      })();

      _export('Example', Example);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc291cmNlcy9leGFtcGxlLWN1c3RvbS1lbGVtZW50LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7b0hBS2EsT0FBTzs7OztpQ0FMWixNQUFNO21DQUNOLFFBQVE7O3VDQUNSLGNBQWM7Ozs7Ozs7Ozs7O0FBR1QsYUFBTzs7O0FBRVAsaUJBRkEsT0FBTyxDQUVOLE9BQU8sRUFBRTs7Ozs7QUFDbkIsY0FBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7QUFDdkIsY0FBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7QUFDbEIsY0FBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7QUFDakIsY0FBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7U0FDeEI7O3VCQVBVLE9BQU87Ozs7dUJBQ2pCLFFBQVE7O21CQUFRLEVBQUU7Ozs7O2lCQVFSLHFCQUFDLFFBQVEsRUFBRTtBQUNwQixnQkFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEdBQUcsUUFBUSxDQUFDO0FBQzdCLGdCQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7V0FDN0I7OztpQkFDTyxrQkFBQyxjQUFjLEVBQ3ZCO0FBQ0UscUJBQVM7QUFDVCxnQkFBSSxDQUFDLE1BQU0sR0FBRyxjQUFjLENBQUM7V0FDOUI7OztBQWpCVSxlQUFPLEdBRG5CLE1BQU0sQ0FBQyxjQUFjLENBQUMsQ0FDVixPQUFPLEtBQVAsT0FBTztlQUFQLE9BQU87Ozt5QkFBUCxPQUFPIiwiZmlsZSI6InJlc291cmNlcy9leGFtcGxlLWN1c3RvbS1lbGVtZW50LmpzIiwic291cmNlUm9vdCI6Ii9zcmMvIn0=