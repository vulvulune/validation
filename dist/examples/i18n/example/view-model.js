System.register(['aurelia-validation'], function (_export) {
  'use strict';

  var Validation, ValidationConfig, Person;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_aureliaValidation) {
      Validation = _aureliaValidation.Validation;
      ValidationConfig = _aureliaValidation.ValidationConfig;
    }],
    execute: function () {
      Person = (function () {
        function Person(validation, validationConfig) {
          var _this = this;

          _classCallCheck(this, Person);

          this.globalValidationConfig = validationConfig;
          this.supportedLocales = ['de-DE', 'en-US', 'es-MX', 'fr-FR', 'nl-BE', 'nl-NL', 'sv-SE', 'tr-TR'];
          this.firstName = 'John';
          this.income = '56,300.00';

          this.validation = validation.on(this).ensure('firstName').isNotEmpty().hasLengthBetween(5, 10).ensure('income').isNotEmpty().isNumber();

          setTimeout(function () {
            _this.validation.validate();
          }, 1500);
        }

        _createClass(Person, [{
          key: 'currentLocale',
          get: function () {
            return this.globalValidationConfig.getValue('locale');
          },
          set: function (value) {
            this.globalValidationConfig.useLocale(value);
          }
        }], [{
          key: 'inject',
          value: function inject() {
            return [Validation, ValidationConfig];
          }
        }]);

        return Person;
      })();

      _export('Person', Person);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4YW1wbGVzL2kxOG4vZXhhbXBsZS92aWV3LW1vZGVsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztvQ0FHYSxNQUFNOzs7Ozs7OztzQ0FIWCxVQUFVOzRDQUNWLGdCQUFnQjs7O0FBRVgsWUFBTTtBQUVOLGlCQUZBLE1BQU0sQ0FFTCxVQUFVLEVBQUUsZ0JBQWdCLEVBQUU7OztnQ0FGL0IsTUFBTTs7QUFHZixjQUFJLENBQUMsc0JBQXNCLEdBQUcsZ0JBQWdCLENBQUM7QUFDL0MsY0FBSSxDQUFDLGdCQUFnQixHQUFHLENBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBQ2pHLGNBQUksQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDO0FBQ3hCLGNBQUksQ0FBQyxNQUFNLEdBQUcsV0FBVyxDQUFDOztBQUUxQixjQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQ2xDLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQ3hELE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQzs7QUFFNUMsb0JBQVUsQ0FBRSxZQUFNO0FBQUUsa0JBQUssVUFBVSxDQUFDLFFBQVEsRUFBRSxDQUFDO1dBQUUsRUFBQyxJQUFJLENBQUMsQ0FBQztTQUV6RDs7cUJBZFUsTUFBTTs7ZUFnQkEsWUFBRTtBQUNqQixtQkFBTyxJQUFJLENBQUMsc0JBQXNCLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1dBQ3ZEO2VBQ2dCLFVBQUMsS0FBSyxFQUFDO0FBQ3RCLGdCQUFJLENBQUMsc0JBQXNCLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO1dBQzlDOzs7aUJBcEJZLGtCQUFHO0FBQUUsbUJBQU8sQ0FBQyxVQUFVLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztXQUFDOzs7ZUFEOUMsTUFBTTs7O3dCQUFOLE1BQU0iLCJmaWxlIjoiZXhhbXBsZXMvaTE4bi9leGFtcGxlL3ZpZXctbW9kZWwuanMiLCJzb3VyY2VSb290IjoiLi4vc3JjLyJ9