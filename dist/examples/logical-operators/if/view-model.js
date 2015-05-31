System.register(['aurelia-validation'], function (_export) {
  'use strict';

  var Validation, Person;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_aureliaValidation) {
      Validation = _aureliaValidation.Validation;
    }],
    execute: function () {
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
          }).isNotEmpty().isNumber()['if'](function () {
            return _this.customer.level === 'Silver';
          }).isGreaterThan(5000)['else']()['if'](function () {
            return _this.customer.level === 'Gold';
          }).isGreaterThan(10000)['else']().isGreaterThan(20000).endIf().endIf();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4YW1wbGVzL2xvZ2ljYWwtb3BlcmF0b3JzL2lmL3ZpZXctbW9kZWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O2tCQUNhLE1BQU07Ozs7Ozs7O3NDQURYLFVBQVU7OztBQUNMLFlBQU07QUFFTixpQkFGQSxNQUFNLENBRUwsVUFBVSxFQUFFOzs7Z0NBRmIsTUFBTTs7QUFHZixjQUFJLENBQUMscUJBQXFCLEdBQUcsQ0FBQyxRQUFRLEVBQUUsTUFBTSxFQUFFLFVBQVUsQ0FBQyxDQUFDO0FBQzVELGNBQUksQ0FBQyxRQUFRLEdBQUc7QUFDZCxpQkFBSyxFQUFHLE1BQU07QUFDZCx5QkFBYSxFQUFHLEtBQUs7V0FDdEIsQ0FBQztBQUNGLGNBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FDbEMsTUFBTSxDQUFDLGdCQUFnQixDQUFDLENBQ3RCLFVBQVUsRUFBRSxDQUNaLElBQUksQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUMsQ0FDbEMsTUFBTSxDQUFDLHdCQUF3QixFQUFFLFVBQUMsTUFBTSxFQUFLO0FBQUMsa0JBQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUE7V0FBQyxDQUFDLENBQ3JGLFVBQVUsRUFBRSxDQUNaLFFBQVEsRUFBRSxNQUNSLENBQUMsWUFBTTtBQUFFLG1CQUFPLE1BQUssUUFBUSxDQUFDLEtBQUssS0FBSyxRQUFRLENBQUE7V0FBQyxDQUFDLENBQ2xELGFBQWEsQ0FBQyxJQUFJLENBQUMsUUFDakIsRUFBRSxNQUNGLENBQUMsWUFBTTtBQUFDLG1CQUFPLE1BQUssUUFBUSxDQUFDLEtBQUssS0FBSyxNQUFNLENBQUE7V0FBQyxDQUFDLENBQy9DLGFBQWEsQ0FBQyxLQUFLLENBQUMsUUFDbEIsRUFBRSxDQUNKLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FDdEIsS0FBSyxFQUFFLENBQ1QsS0FBSyxFQUFFLENBQUM7U0FDZDs7cUJBeEJVLE1BQU07O2lCQUNKLGtCQUFHO0FBQUUsbUJBQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQztXQUFDOzs7ZUFENUIsTUFBTTs7O3dCQUFOLE1BQU0iLCJmaWxlIjoiZXhhbXBsZXMvbG9naWNhbC1vcGVyYXRvcnMvaWYvdmlldy1tb2RlbC5qcyIsInNvdXJjZVJvb3QiOiIuLi9zcmMvIn0=