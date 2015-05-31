System.register([], function (_export) {
  "use strict";

  var TableOfContents;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  return {
    setters: [],
    execute: function () {
      TableOfContents = (function () {
        function TableOfContents() {
          _classCallCheck(this, TableOfContents);

          this.examples = ["Intro", "On Validate", "Validators", "Logical Operators", "Form Submission", "I18N"];
        }

        _createClass(TableOfContents, [{
          key: "createRoutes",
          value: function createRoutes() {
            var routes = [];
            for (var i = 0; i < this.examples.length; i++) {
              var route = [this.examples[i].toLowerCase().replace(" ", "-")];
              if (i == 0) route.unshift("");
              routes.push({ route: route,
                moduleId: "./examples/" + this.examples[i].toLowerCase().replace(" ", "-") + "/index",
                nav: true,
                title: this.examples[i]
              });
            }
            return routes;
          }
        }]);

        return TableOfContents;
      })();

      _export("TableOfContents", TableOfContents);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYmxlLW9mLWNvbnRlbnRzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztNQUFhLGVBQWU7Ozs7Ozs7OztBQUFmLHFCQUFlO0FBRWYsaUJBRkEsZUFBZSxHQUViO2dDQUZGLGVBQWU7O0FBR3hCLGNBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxPQUFPLEVBQUUsYUFBYSxFQUFFLFlBQVksRUFBRSxtQkFBbUIsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLENBQUMsQ0FBQztTQUN4Rzs7cUJBSlUsZUFBZTs7aUJBTWQsd0JBQUU7QUFDWixnQkFBSSxNQUFNLEdBQUcsRUFBRSxDQUFDO0FBQ2hCLGlCQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQzVDO0FBQ0Usa0JBQUksS0FBSyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFDL0Qsa0JBQUcsQ0FBQyxJQUFJLENBQUMsRUFDUCxLQUFLLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQ3BCLG9CQUFNLENBQUMsSUFBSSxDQUNULEVBQUUsS0FBSyxFQUFHLEtBQUs7QUFDYix3QkFBUSxFQUFHLGFBQWEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLEdBQUcsUUFBUTtBQUN0RixtQkFBRyxFQUFHLElBQUk7QUFDVixxQkFBSyxFQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO2VBQ3pCLENBQUMsQ0FBQzthQUNOO0FBQ0QsbUJBQU8sTUFBTSxDQUFDO1dBQ2Y7OztlQXJCVSxlQUFlOzs7aUNBQWYsZUFBZSIsImZpbGUiOiJ0YWJsZS1vZi1jb250ZW50cy5qcyIsInNvdXJjZVJvb3QiOiIuLi9zcmMvIn0=