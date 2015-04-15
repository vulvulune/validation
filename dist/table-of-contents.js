System.register([], function (_export) {
  var _classCallCheck, _createClass, TableOfContents;

  return {
    setters: [],
    execute: function () {
      "use strict";

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYmxlLW9mLWNvbnRlbnRzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7cUNBQWEsZUFBZTs7Ozs7Ozs7Ozs7QUFBZixxQkFBZTtBQUVmLGlCQUZBLGVBQWUsR0FFYjtnQ0FGRixlQUFlOztBQUd4QixjQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsT0FBTyxFQUFFLGFBQWEsRUFBRSxZQUFZLEVBQUUsbUJBQW1CLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxDQUFDLENBQUM7U0FDeEc7O3FCQUpVLGVBQWU7O2lCQU1kLHdCQUFFO0FBQ1osZ0JBQUksTUFBTSxHQUFHLEVBQUUsQ0FBQztBQUNoQixpQkFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUM1QztBQUNFLGtCQUFJLEtBQUssR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBQy9ELGtCQUFHLENBQUMsSUFBSSxDQUFDLEVBQ1AsS0FBSyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUNwQixvQkFBTSxDQUFDLElBQUksQ0FDVCxFQUFFLEtBQUssRUFBRyxLQUFLO0FBQ2Isd0JBQVEsRUFBRyxhQUFhLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxHQUFHLFFBQVE7QUFDdEYsbUJBQUcsRUFBRyxJQUFJO0FBQ1YscUJBQUssRUFBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztlQUN6QixDQUFDLENBQUM7YUFDTjtBQUNELG1CQUFPLE1BQU0sQ0FBQztXQUNmOzs7ZUFyQlUsZUFBZTs7O2lDQUFmLGVBQWUiLCJmaWxlIjoidGFibGUtb2YtY29udGVudHMuanMiLCJzb3VyY2VSb290IjoiL3NyYy8ifQ==