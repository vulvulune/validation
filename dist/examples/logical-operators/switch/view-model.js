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
          var _this = this;

          _classCallCheck(this, Person);

          this.allowedCustomerLevels = ['Silver', 'Gold', 'Platinum'];
          this.customer = {
            level: 'Gold',
            monthlyIncome: 10000
          };
          this.validation = validation.on(this).ensure('customer.level').isNotEmpty().isIn(this.allowedCustomerLevels).ensure('customer.monthlyIncome', function (config) {
            config.computedFrom(['customer.level']);
          }).isNotEmpty().isNumber()['switch'](function () {
            return _this.customer.level;
          })['case']('Gold').isGreaterThan(10000)['case']('Platinum').isGreaterThan(20000)['default']().isGreaterThan(5000).endSwitch();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4YW1wbGVzL2xvZ2ljYWwtb3BlcmF0b3JzL3N3aXRjaC92aWV3LW1vZGVsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7aURBQ2EsTUFBTTs7OztzQ0FEWCxVQUFVOzs7Ozs7Ozs7QUFDTCxZQUFNO0FBRU4saUJBRkEsTUFBTSxDQUVMLFVBQVUsRUFBRTs7O2dDQUZiLE1BQU07O0FBR2YsY0FBSSxDQUFDLHFCQUFxQixHQUFHLENBQUMsUUFBUSxFQUFFLE1BQU0sRUFBRSxVQUFVLENBQUMsQ0FBQztBQUM1RCxjQUFJLENBQUMsUUFBUSxHQUFHO0FBQ2QsaUJBQUssRUFBRyxNQUFNO0FBQ2QseUJBQWEsRUFBRyxLQUFLO1dBQ3RCLENBQUM7QUFDRixjQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQ2xDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUN0QixVQUFVLEVBQUUsQ0FDWixJQUFJLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLENBQ2xDLE1BQU0sQ0FBQyx3QkFBd0IsRUFBRSxVQUFDLE1BQU0sRUFBSztBQUFDLGtCQUFNLENBQUMsWUFBWSxDQUFDLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFBO1dBQUMsQ0FBQyxDQUNyRixVQUFVLEVBQUUsQ0FDWixRQUFRLEVBQUUsVUFDSixDQUFDLFlBQU07QUFBRSxtQkFBTyxNQUFLLFFBQVEsQ0FBQyxLQUFLLENBQUE7V0FBQyxDQUFDLFFBQ3JDLENBQUMsTUFBTSxDQUFDLENBQ1YsYUFBYSxDQUFDLEtBQUssQ0FBQyxRQUNsQixDQUFDLFVBQVUsQ0FBQyxDQUNkLGFBQWEsQ0FBQyxLQUFLLENBQUMsV0FDZixFQUFFLENBQ1AsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUN2QixTQUFTLEVBQUUsQ0FBQztTQUNsQjs7cUJBdkJVLE1BQU07O2lCQUNKLGtCQUFHO0FBQUUsbUJBQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQztXQUFDOzs7ZUFENUIsTUFBTTs7O3dCQUFOLE1BQU0iLCJmaWxlIjoiZXhhbXBsZXMvbG9naWNhbC1vcGVyYXRvcnMvc3dpdGNoL3ZpZXctbW9kZWwuanMiLCJzb3VyY2VSb290IjoiL3NyYy8ifQ==