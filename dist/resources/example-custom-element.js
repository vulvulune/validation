System.register(['aurelia-framework', './example-context'], function (_export) {
  var inject, bindable, ExampleContext, _classCallCheck, _createDecoratedClass, Example;

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

      _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (initializers) initializers[key] = descriptor.initializer; } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

      Example = (function () {
        var _instanceInitializers = {};

        function Example(context) {
          _classCallCheck(this, _Example);

          this.base = _instanceInitializers.base.call(this);

          this.context = context;
          this.model = null;
          this.view = null;
          this.result = false;
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
        }], null, _instanceInitializers);

        Example = inject(ExampleContext)(Example) || Example;
        return Example;
      })();

      _export('Example', Example);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc291cmNlcy9leGFtcGxlLWN1c3RvbS1lbGVtZW50LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Z0ZBS2EsT0FBTzs7OztpQ0FMWixNQUFNO21DQUNOLFFBQVE7O3VDQUNSLGNBQWM7Ozs7Ozs7OztBQUdULGFBQU87OztBQUVQLGlCQUZBLE9BQU8sQ0FFTixPQUFPLEVBQUU7OztlQURYLElBQUkseUJBQUosSUFBSTs7QUFFWixjQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztBQUN2QixjQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztBQUNsQixjQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztBQUNqQixjQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztTQUNyQjs7dUJBUFUsT0FBTzs7Ozt1QkFDakIsUUFBUTs7bUJBQVEsRUFBRTs7Ozs7aUJBUVIscUJBQUMsUUFBUSxFQUFFO0FBQ3BCLGdCQUFJLENBQUMsT0FBTyxDQUFDLElBQUksR0FBRyxRQUFRLENBQUM7QUFDN0IsZ0JBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztXQUM3Qjs7O0FBWlUsZUFBTyxHQURuQixNQUFNLENBQUMsY0FBYyxDQUFDLENBQ1YsT0FBTyxLQUFQLE9BQU87ZUFBUCxPQUFPOzs7eUJBQVAsT0FBTyIsImZpbGUiOiJyZXNvdXJjZXMvZXhhbXBsZS1jdXN0b20tZWxlbWVudC5qcyIsInNvdXJjZVJvb3QiOiIvc3JjLyJ9