System.register(['aurelia-validation', 'aurelia-framework'], function (_export) {
  'use strict';

  var Validation, ensure, inject, RegisterViewModel;

  var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer.call(target); Object.defineProperty(target, key, descriptor); }

  return {
    setters: [function (_aureliaValidation) {
      Validation = _aureliaValidation.Validation;
      ensure = _aureliaValidation.ensure;
    }, function (_aureliaFramework) {
      inject = _aureliaFramework.inject;
    }],
    execute: function () {
      RegisterViewModel = (function () {
        var _instanceInitializers = {};

        function RegisterViewModel(validation) {
          _classCallCheck(this, _RegisterViewModel);

          _defineDecoratedPropertyDescriptor(this, 'name', _instanceInitializers);

          _defineDecoratedPropertyDescriptor(this, 'email', _instanceInitializers);

          this.validation = validation.on(this);
        }

        var _RegisterViewModel = RegisterViewModel;

        _createDecoratedClass(_RegisterViewModel, [{
          key: 'name',
          decorators: [ensure(function (it) {
            it.isNotEmpty().hasLengthBetween(3, 10);
          })],
          initializer: function () {
            return '';
          },
          enumerable: true
        }, {
          key: 'email',
          decorators: [ensure(function (it) {
            it.isNotEmpty().isEmail();
          })],
          initializer: function () {
            return '';
          },
          enumerable: true
        }, {
          key: 'register',
          value: function register() {
            this.validation.validate().then(function () {
              alert('Welcome!');
            });
          }
        }], null, _instanceInitializers);

        RegisterViewModel = inject(Validation)(RegisterViewModel) || RegisterViewModel;
        return RegisterViewModel;
      })();

      _export('RegisterViewModel', RegisterViewModel);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4YW1wbGVzL2ludHJvL2Jsb2cvdmlldy1tb2RlbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7a0NBS2EsaUJBQWlCOzs7Ozs7Ozs7O3NDQUx0QixVQUFVO2tDQUNWLE1BQU07O2lDQUNOLE1BQU07OztBQUdELHVCQUFpQjs7O0FBTWpCLGlCQU5BLGlCQUFpQixDQU1oQixVQUFVLEVBQUU7Ozs7Ozs7QUFDdEIsY0FBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3ZDOztpQ0FSVSxpQkFBaUI7Ozs7dUJBQzNCLE1BQU0sQ0FBQyxVQUFTLEVBQUUsRUFBQztBQUFFLGNBQUUsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDLENBQUE7V0FBRSxDQUFDOzttQkFDdEQsRUFBRTs7Ozs7dUJBQ1YsTUFBTSxDQUFDLFVBQVMsRUFBRSxFQUFDO0FBQUUsY0FBRSxDQUFDLFVBQVUsRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFBO1dBQUUsQ0FBQzs7bUJBQ3hDLEVBQUU7Ozs7O2lCQU1KLG9CQUFFO0FBRVIsZ0JBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxFQUFFLENBQUMsSUFBSSxDQUFFLFlBQU07QUFDckMsbUJBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQzthQUNuQixDQUFDLENBQUM7V0FDSjs7O0FBZlUseUJBQWlCLEdBRDdCLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FDTixpQkFBaUIsS0FBakIsaUJBQWlCO2VBQWpCLGlCQUFpQjs7O21DQUFqQixpQkFBaUIiLCJmaWxlIjoiZXhhbXBsZXMvaW50cm8vYmxvZy92aWV3LW1vZGVsLmpzIiwic291cmNlUm9vdCI6Ii4uL3NyYy8ifQ==