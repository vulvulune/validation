System.register(['aurelia-validation'], function (_export) {
  var Validation, ValidationConfig, _classCallCheck, _createClass, Person;

  return {
    setters: [function (_aureliaValidation) {
      Validation = _aureliaValidation.Validation;
      ValidationConfig = _aureliaValidation.ValidationConfig;
    }],
    execute: function () {
      'use strict';

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

      _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

      Person = (function () {
        function Person(validation, validationConfig) {
          var _this = this;

          _classCallCheck(this, Person);

          this.globalValidationConfig = validationConfig;
          this.supportedLocales = ['de-DE', 'en-US', 'fr-FR', 'nl-BE', 'nl-NL', 'sv-SV', 'tr-TR'];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4YW1wbGVzL2kxOG4vZXhhbXBsZS92aWV3LW1vZGVsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7bUVBR2EsTUFBTTs7OztzQ0FIWCxVQUFVOzRDQUNWLGdCQUFnQjs7Ozs7Ozs7O0FBRVgsWUFBTTtBQUVOLGlCQUZBLE1BQU0sQ0FFTCxVQUFVLEVBQUUsZ0JBQWdCLEVBQUU7OztnQ0FGL0IsTUFBTTs7QUFHZixjQUFJLENBQUMsc0JBQXNCLEdBQUcsZ0JBQWdCLENBQUM7QUFDL0MsY0FBSSxDQUFDLGdCQUFnQixHQUFHLENBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFDeEYsY0FBSSxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUM7QUFDeEIsY0FBSSxDQUFDLE1BQU0sR0FBRyxXQUFXLENBQUM7O0FBRTFCLGNBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FDbEMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDLFVBQVUsRUFBRSxDQUFDLGdCQUFnQixDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FDeEQsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFVBQVUsRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDOztBQUU1QyxvQkFBVSxDQUFFLFlBQU07QUFBRSxrQkFBSyxVQUFVLENBQUMsUUFBUSxFQUFFLENBQUM7V0FBRSxFQUFDLElBQUksQ0FBQyxDQUFDO1NBRXpEOztxQkFkVSxNQUFNOztlQWdCQSxZQUFFO0FBQ2pCLG1CQUFPLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUM7V0FDdkQ7ZUFDZ0IsVUFBQyxLQUFLLEVBQUM7QUFDdEIsZ0JBQUksQ0FBQyxzQkFBc0IsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7V0FDOUM7OztpQkFwQlksa0JBQUc7QUFBRSxtQkFBTyxDQUFDLFVBQVUsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO1dBQUM7OztlQUQ5QyxNQUFNOzs7d0JBQU4sTUFBTSIsImZpbGUiOiJleGFtcGxlcy9pMThuL2V4YW1wbGUvdmlldy1tb2RlbC5qcyIsInNvdXJjZVJvb3QiOiIvc3JjLyJ9