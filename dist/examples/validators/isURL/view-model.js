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

          this.urlProperty = 'http://aurelia.io';

          this.validation = validation.on(this).ensure('urlProperty').isURL();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4YW1wbGVzL3ZhbGlkYXRvcnMvaXNVUkwvdmlldy1tb2RlbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7a0JBQ2EsTUFBTTs7Ozs7Ozs7c0NBRFgsVUFBVTs7O0FBQ0wsWUFBTTtBQUVOLGlCQUZBLE1BQU0sQ0FFTCxVQUFVLEVBQUU7Z0NBRmIsTUFBTTs7QUFHZixjQUFJLENBQUMsV0FBVyxHQUFHLG1CQUFtQixDQUFDOztBQUV2QyxjQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQ2xDLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUNsQzs7cUJBUFUsTUFBTTs7aUJBQ0osa0JBQUc7QUFBRSxtQkFBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1dBQUM7OztlQUQ1QixNQUFNOzs7d0JBQU4sTUFBTSIsImZpbGUiOiJleGFtcGxlcy92YWxpZGF0b3JzL2lzVVJML3ZpZXctbW9kZWwuanMiLCJzb3VyY2VSb290IjoiLi4vc3JjLyJ9