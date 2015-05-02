System.register(['aurelia-framework'], function (_export) {
  var bindable, _classCallCheck, _createDecoratedClass, _defineDecoratedPropertyDescriptor, NavBarCustomElement;

  return {
    setters: [function (_aureliaFramework) {
      bindable = _aureliaFramework.bindable;
    }],
    execute: function () {
      'use strict';

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

      _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

      _defineDecoratedPropertyDescriptor = function (target, key, descriptors) { var _descriptor = descriptors[key]; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer(); Object.defineProperty(target, key, descriptor); };

      NavBarCustomElement = (function () {
        var _instanceInitializers = {};

        function NavBarCustomElement() {
          _classCallCheck(this, NavBarCustomElement);

          _defineDecoratedPropertyDescriptor(this, 'router', _instanceInitializers);
        }

        _createDecoratedClass(NavBarCustomElement, [{
          key: 'router',
          decorators: [bindable],
          initializer: function () {
            return null;
          },
          enumerable: true
        }], null, _instanceInitializers);

        return NavBarCustomElement;
      })();

      _export('NavBarCustomElement', NavBarCustomElement);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdi1iYXItY3VzdG9tLWVsZW1lbnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs0RkFFYSxtQkFBbUI7Ozs7bUNBRnhCLFFBQVE7Ozs7Ozs7Ozs7O0FBRUgseUJBQW1COzs7aUJBQW5CLG1CQUFtQjtnQ0FBbkIsbUJBQW1COzs7Ozs4QkFBbkIsbUJBQW1COzt1QkFDN0IsUUFBUTs7bUJBQVUsSUFBSTs7Ozs7ZUFEWixtQkFBbUI7OztxQ0FBbkIsbUJBQW1CIiwiZmlsZSI6Im5hdi1iYXItY3VzdG9tLWVsZW1lbnQuanMiLCJzb3VyY2VSb290IjoiL3NyYy8ifQ==