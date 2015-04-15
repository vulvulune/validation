System.register(['aurelia-framework'], function (_export) {
  var bindable, _classCallCheck, _createDecoratedClass, NavBarCustomElement;

  return {
    setters: [function (_aureliaFramework) {
      bindable = _aureliaFramework.bindable;
    }],
    execute: function () {
      'use strict';

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

      _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (initializers) initializers[key] = descriptor.initializer; } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

      NavBarCustomElement = (function () {
        var _instanceInitializers = {};

        function NavBarCustomElement() {
          _classCallCheck(this, NavBarCustomElement);

          this.router = _instanceInitializers.router.call(this);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdi1iYXItY3VzdG9tLWVsZW1lbnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijt3REFFYSxtQkFBbUI7Ozs7bUNBRnhCLFFBQVE7Ozs7Ozs7OztBQUVILHlCQUFtQjs7O2lCQUFuQixtQkFBbUI7Z0NBQW5CLG1CQUFtQjs7ZUFDcEIsTUFBTSx5QkFBTixNQUFNOzs7OEJBREwsbUJBQW1COzt1QkFDN0IsUUFBUTs7bUJBQVUsSUFBSTs7Ozs7ZUFEWixtQkFBbUI7OztxQ0FBbkIsbUJBQW1CIiwiZmlsZSI6Im5hdi1iYXItY3VzdG9tLWVsZW1lbnQuanMiLCJzb3VyY2VSb290IjoiL3NyYy8ifQ==