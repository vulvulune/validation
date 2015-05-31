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

          this.matchesProperty = '333-22-4444';

          this.validation = validation.on(this).ensure('matchesProperty').matches(/^\d{3}-\d{2}-\d{4}$/);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4YW1wbGVzL3ZhbGlkYXRvcnMvbWF0Y2hlcy92aWV3LW1vZGVsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztrQkFDYSxNQUFNOzs7Ozs7OztzQ0FEWCxVQUFVOzs7QUFDTCxZQUFNO0FBRU4saUJBRkEsTUFBTSxDQUVMLFVBQVUsRUFBRTtnQ0FGYixNQUFNOztBQUdmLGNBQUksQ0FBQyxlQUFlLEdBQUcsYUFBYSxDQUFDOztBQUVyQyxjQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQ2xDLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1NBQzdEOztxQkFQVSxNQUFNOztpQkFDSixrQkFBRztBQUFFLG1CQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7V0FBQzs7O2VBRDVCLE1BQU07Ozt3QkFBTixNQUFNIiwiZmlsZSI6ImV4YW1wbGVzL3ZhbGlkYXRvcnMvbWF0Y2hlcy92aWV3LW1vZGVsLmpzIiwic291cmNlUm9vdCI6Ii4uL3NyYy8ifQ==