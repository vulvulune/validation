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
          _classCallCheck(this, Person);

          this.firstName = 'John';
          this.validation = validation.on(this).ensure('firstName').isNotEmpty().hasLengthBetween(5, 10);
        }

        _createClass(Person, [{
          key: 'welcome',
          value: function welcome() {
            alert('Welcome ' + this.firstName);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4YW1wbGVzL2Zvcm0tc3VibWlzc2lvbi9kaXNhYmxlZC1iaW5kL3ZpZXctbW9kZWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O2tCQUNhLE1BQU07Ozs7Ozs7O3NDQURYLFVBQVU7OztBQUNMLFlBQU07QUFFTixpQkFGQSxNQUFNLENBRUwsVUFBVSxFQUFFO2dDQUZiLE1BQU07O0FBR2YsY0FBSSxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUM7QUFDeEIsY0FBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUNsQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQ2pCLFVBQVUsRUFBRSxDQUNaLGdCQUFnQixDQUFDLENBQUMsRUFBQyxFQUFFLENBQUMsQ0FBQztTQUM3Qjs7cUJBUlUsTUFBTTs7aUJBU1YsbUJBQUU7QUFDTCxpQkFBSyxjQUFZLElBQUksQ0FBQyxTQUFTLENBQUcsQ0FBQztXQUN0Qzs7O2lCQVZZLGtCQUFHO0FBQUUsbUJBQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQztXQUFDOzs7ZUFENUIsTUFBTTs7O3dCQUFOLE1BQU0iLCJmaWxlIjoiZXhhbXBsZXMvZm9ybS1zdWJtaXNzaW9uL2Rpc2FibGVkLWJpbmQvdmlldy1tb2RlbC5qcyIsInNvdXJjZVJvb3QiOiIuLi9zcmMvIn0=