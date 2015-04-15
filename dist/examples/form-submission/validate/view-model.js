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
          this.validation = validation.on(this).ensure('firstName').isNotEmpty().hasLengthBetween(5, 10);
        }

        _createClass(Person, [{
          key: 'welcome',
          value: function welcome() {
            var _this = this;

            this.validation.validate().then(function () {
              alert('Welcome ' + _this.firstName);
            });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4YW1wbGVzL2Zvcm0tc3VibWlzc2lvbi92YWxpZGF0ZS92aWV3LW1vZGVsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7aURBQ2EsTUFBTTs7OztzQ0FEWCxVQUFVOzs7Ozs7Ozs7QUFDTCxZQUFNO0FBRU4saUJBRkEsTUFBTSxDQUVMLFVBQVUsRUFBRTtnQ0FGYixNQUFNOztBQUdmLGNBQUksQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDO0FBQ3hCLGNBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FDbEMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUNqQixVQUFVLEVBQUUsQ0FDWixnQkFBZ0IsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDLENBQUM7U0FDN0I7O3FCQVJVLE1BQU07O2lCQVNWLG1CQUFFOzs7QUFDUCxnQkFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxJQUFJLENBQzdCLFlBQU07QUFDSixtQkFBSyxjQUFZLE1BQUssU0FBUyxDQUFHLENBQUM7YUFDcEMsQ0FDRixDQUFDO1dBQ0g7OztpQkFkWSxrQkFBRztBQUFFLG1CQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7V0FBQzs7O2VBRDVCLE1BQU07Ozt3QkFBTixNQUFNIiwiZmlsZSI6ImV4YW1wbGVzL2Zvcm0tc3VibWlzc2lvbi92YWxpZGF0ZS92aWV3LW1vZGVsLmpzIiwic291cmNlUm9vdCI6Ii9zcmMvIn0=