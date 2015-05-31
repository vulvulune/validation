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

          this.alphaNumericOrWhitespaceProperty = 'abc';

          this.validation = validation.on(this).ensure('alphaNumericOrWhitespaceProperty').containsOnlyAlpha();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4YW1wbGVzL3ZhbGlkYXRvcnMvY29udGFpbnNPbmx5QWxwaGEvdmlldy1tb2RlbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7a0JBQ2EsTUFBTTs7Ozs7Ozs7c0NBRFgsVUFBVTs7O0FBQ0wsWUFBTTtBQUVOLGlCQUZBLE1BQU0sQ0FFTCxVQUFVLEVBQUU7Z0NBRmIsTUFBTTs7QUFHZixjQUFJLENBQUMsZ0NBQWdDLEdBQUcsS0FBSyxDQUFDOztBQUU5QyxjQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQ2xDLE1BQU0sQ0FBQyxrQ0FBa0MsQ0FBQyxDQUFDLGlCQUFpQixFQUFFLENBQUM7U0FDbkU7O3FCQVBVLE1BQU07O2lCQUNKLGtCQUFHO0FBQUUsbUJBQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQztXQUFDOzs7ZUFENUIsTUFBTTs7O3dCQUFOLE1BQU0iLCJmaWxlIjoiZXhhbXBsZXMvdmFsaWRhdG9ycy9jb250YWluc09ubHlBbHBoYS92aWV3LW1vZGVsLmpzIiwic291cmNlUm9vdCI6Ii4uL3NyYy8ifQ==