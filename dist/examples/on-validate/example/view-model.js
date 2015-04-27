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

          this.firstName = 'John';
          this.lastName = 'Doe';

          this.validation = validation.on(this).ensure('firstName').isNotEmpty().hasLengthBetween(3, 10).ensure('lastName').isNotEmpty().hasLengthBetween(3, 30).onValidate(function () {
            return new Promise(function (fulfil) {
              setTimeout(function () {
                fulfil({
                  firstName: 'Already taken',
                  lastName: false
                });
              }, 3000);
            });
          }, function (onValidateError) {
            alert('Please try again later');
          });
        }

        _createClass(Person, [{
          key: 'welcome',
          value: function welcome() {
            var _this = this;

            this.validation.validate().then(function () {
              alert('Welcome ' + _this.firstName);
            });
          }
        }, {
          key: 'resetValidation',
          value: function resetValidation() {
            this.firstName = 'John';
            this.lastName = 'Doe';
            this.validation.clear();
          }
        }], [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4YW1wbGVzL29uLXZhbGlkYXRlL2V4YW1wbGUvdmlldy1tb2RlbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO2lEQUNhLE1BQU07Ozs7c0NBRFgsVUFBVTs7Ozs7Ozs7O0FBQ0wsWUFBTTtBQUVOLGlCQUZBLE1BQU0sQ0FFTCxVQUFVLEVBQUU7Z0NBRmIsTUFBTTs7QUFHZixjQUFJLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQztBQUN4QixjQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQzs7QUFFdEIsY0FBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUNsQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQ2pCLFVBQVUsRUFBRSxDQUNaLGdCQUFnQixDQUFDLENBQUMsRUFBQyxFQUFFLENBQUMsQ0FDeEIsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUNoQixVQUFVLEVBQUUsQ0FDWixnQkFBZ0IsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDLENBQ3hCLFVBQVUsQ0FBRSxZQUFNO0FBQ2pCLG1CQUFPLElBQUksT0FBTyxDQUFFLFVBQUMsTUFBTSxFQUFLO0FBQzlCLHdCQUFVLENBQUMsWUFBTTtBQUNkLHNCQUFNLENBQUM7QUFDTCwyQkFBUyxFQUFHLGVBQWU7QUFDM0IsMEJBQVEsRUFBRyxLQUFLO2lCQUNqQixDQUFDLENBQUE7ZUFDSixFQUFFLElBQUksQ0FBQyxDQUFDO2FBQ1YsQ0FBQyxDQUFDO1dBQ0osRUFBQyxVQUFDLGVBQWUsRUFBRztBQUFFLGlCQUFLLENBQUMsd0JBQXdCLENBQUMsQ0FBQTtXQUFDLENBQUMsQ0FBQztTQUM1RDs7cUJBdkJVLE1BQU07O2lCQXdCVixtQkFBRTs7O0FBQ1AsZ0JBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxFQUFFLENBQUMsSUFBSSxDQUM3QixZQUFNO0FBQ0osbUJBQUssY0FBWSxNQUFLLFNBQVMsQ0FBRyxDQUFDO2FBQ3BDLENBQ0YsQ0FBQztXQUNIOzs7aUJBQ2MsMkJBQ2Y7QUFDRSxnQkFBSSxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUM7QUFDeEIsZ0JBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO0FBQ3RCLGdCQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssRUFBRSxDQUFDO1dBQ3pCOzs7aUJBbkNZLGtCQUFHO0FBQUUsbUJBQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQztXQUFDOzs7ZUFENUIsTUFBTTs7O3dCQUFOLE1BQU0iLCJmaWxlIjoiZXhhbXBsZXMvb24tdmFsaWRhdGUvZXhhbXBsZS92aWV3LW1vZGVsLmpzIiwic291cmNlUm9vdCI6Ii9zcmMvIn0=