System.register([], function (_export) {
  var _createClass, _classCallCheck, TableOfContents;

  return {
    setters: [],
    execute: function () {
      "use strict";

      _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      TableOfContents = _export("TableOfContents", (function () {
        function TableOfContents() {
          _classCallCheck(this, TableOfContents);

          this.examples = ["Intro", "Validators", "Logical Operators"]; //TODO can't we just enumerate the examples folder? :(
        }

        _createClass(TableOfContents, {
          createRoutes: {
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
          }
        });

        return TableOfContents;
      })());
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYmxlLW9mLWNvbnRlbnRzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7cUNBQWEsZUFBZTs7Ozs7Ozs7Ozs7QUFBZixxQkFBZTtBQUVmLGlCQUZBLGVBQWUsR0FFYjtnQ0FGRixlQUFlOztBQUd4QixjQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsT0FBTyxFQUFFLFlBQVksRUFBRSxtQkFBbUIsQ0FBQyxDQUFDO1NBQzlEOztxQkFKVSxlQUFlO0FBTTFCLHNCQUFZO21CQUFBLHdCQUFFO0FBQ1osa0JBQUksTUFBTSxHQUFHLEVBQUUsQ0FBQztBQUNoQixtQkFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUM1QztBQUNFLG9CQUFJLEtBQUssR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBQy9ELG9CQUFHLENBQUMsSUFBSSxDQUFDLEVBQ1AsS0FBSyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUNwQixzQkFBTSxDQUFDLElBQUksQ0FDVCxFQUFFLEtBQUssRUFBRyxLQUFLO0FBQ2IsMEJBQVEsRUFBRyxhQUFhLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxHQUFHLFFBQVE7QUFDdEYscUJBQUcsRUFBRyxJQUFJO0FBQ1YsdUJBQUssRUFBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztpQkFDekIsQ0FBQyxDQUFDO2VBQ047QUFDRCxxQkFBTyxNQUFNLENBQUM7YUFDZjs7OztlQXJCVSxlQUFlIiwiZmlsZSI6InRhYmxlLW9mLWNvbnRlbnRzLmpzIiwic291cmNlUm9vdCI6Ii9zcmMvIn0=