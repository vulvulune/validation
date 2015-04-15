System.register(['aurelia-validation'], function (_export) {
  var Validation, _classCallCheck, _createClass, Person;

  return {
    setters: [function (_aureliaValidation) {
      Validation = _aureliaValidation.Validation;
    }],
    execute: function () {
      'use strict';

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

      _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

      Person = (function () {
        function Person(validation) {
          _classCallCheck(this, Person);

          this.passesProperty = '333-22-4444';

          this.userNameProperty = '';

          this.validation = validation.on(this).ensure('passesProperty').passes(function (newValue) {
            return /^\d{3}-\d{2}-\d{4}$/.test(newValue);
          }).withMessage('Not a valid SSN').ensure('userNameProperty').passes(function (newValue) {
            return new Promise(function (accept, reject) {
              setTimeout(function () {
                reject('username already taken');
              }, 1500);
            });
          });
        }

        _createClass(Person, null, [{
          key: 'inject',
          value: function inject() {
            return [Validation];
          }
        }]);

        return Person;
      })();

      _export('Person', Person);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4YW1wbGVzL3ZhbGlkYXRvcnMvcGFzc2VzL3ZpZXctbW9kZWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtpREFDYSxNQUFNOzs7O3NDQURYLFVBQVU7Ozs7Ozs7OztBQUNMLFlBQU07QUFFTixpQkFGQSxNQUFNLENBRUwsVUFBVSxFQUFFO2dDQUZiLE1BQU07O0FBR2YsY0FBSSxDQUFDLGNBQWMsR0FBRyxhQUFhLENBQUM7O0FBRXBDLGNBQUksQ0FBQyxnQkFBZ0IsR0FBRyxFQUFFLENBQUM7O0FBRTNCLGNBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FDbEMsTUFBTSxDQUFDLGdCQUFnQixDQUFDLENBQ3RCLE1BQU0sQ0FBQyxVQUFDLFFBQVEsRUFBSztBQUFFLG1CQUFPLHFCQUFxQixDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztXQUFFLENBQUMsQ0FDdEUsV0FBVyxDQUFDLGlCQUFpQixDQUFDLENBQ2hDLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxDQUN4QixNQUFNLENBQ0wsVUFBQyxRQUFRLEVBQUs7QUFFWixtQkFBTyxJQUFJLE9BQU8sQ0FBRSxVQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUs7QUFDdEMsd0JBQVUsQ0FBQyxZQUFLO0FBQ2Qsc0JBQU0sQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO2VBQ2xDLEVBQUUsSUFBSSxDQUFDLENBQUM7YUFDVixDQUFDLENBQUM7V0FDSixDQUNGLENBQUM7U0FDUDs7cUJBdEJVLE1BQU07O2lCQUNKLGtCQUFHO0FBQUUsbUJBQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQztXQUFDOzs7ZUFENUIsTUFBTTs7O3dCQUFOLE1BQU0iLCJmaWxlIjoiZXhhbXBsZXMvdmFsaWRhdG9ycy9wYXNzZXMvdmlldy1tb2RlbC5qcyIsInNvdXJjZVJvb3QiOiIvc3JjLyJ9