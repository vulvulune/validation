System.register(["aurelia-framework", "aurelia-http-client"], function (_export) {
  var Behavior, HttpClient, _createClass, _classCallCheck, httpClient, Source;

  return {
    setters: [function (_aureliaFramework) {
      Behavior = _aureliaFramework.Behavior;
    }, function (_aureliaHttpClient) {
      HttpClient = _aureliaHttpClient.HttpClient;
    }],
    execute: function () {
      "use strict";

      _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      httpClient = new HttpClient().configure(function (builder) {
        return builder.withResponseType("text");
      });
      Source = _export("Source", (function () {
        function Source(element) {
          _classCallCheck(this, Source);

          this.element = element;
        }

        _createClass(Source, {
          valueChanged: {
            value: function valueChanged(newValue) {
              var _this = this;

              if (!newValue) {
                this.element.innerHTML = "";
                return;
              }

              httpClient.get(newValue).then(function (response) {
                _this.element.textContent = response.content.trim();
                Prism.highlightElement(_this.element);
              });
            }
          }
        }, {
          metadata: {
            value: function metadata() {
              return Behavior.attachedBehavior("source").withProperty("value", "valueChanged", "source");
            }
          },
          inject: {
            value: function inject() {
              return [Element];
            }
          }
        });

        return Source;
      })());
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc291cmNlcy9zb3VyY2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtNQUFRLFFBQVEsRUFDUixVQUFVLGlDQUVkLFVBQVUsRUFFRCxNQUFNOzs7O0FBTFgsY0FBUSxxQkFBUixRQUFROztBQUNSLGdCQUFVLHNCQUFWLFVBQVU7Ozs7Ozs7OztBQUVkLGdCQUFVLEdBQUcsSUFBSSxVQUFVLEVBQUUsQ0FBQyxTQUFTLENBQUMsVUFBQSxPQUFPO2VBQUksT0FBTyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQztPQUFBLENBQUM7QUFFM0UsWUFBTTtBQVFOLGlCQVJBLE1BQU0sQ0FRTCxPQUFPLEVBQUU7Z0NBUlYsTUFBTTs7QUFTZixjQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztTQUN4Qjs7cUJBVlUsTUFBTTtBQVlqQixzQkFBWTttQkFBQSxzQkFBQyxRQUFRLEVBQUU7OztBQUNyQixrQkFBSSxDQUFDLFFBQVEsRUFBRTtBQUNiLG9CQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7QUFDNUIsdUJBQU87ZUFDUjs7QUFFRCx3QkFBVSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FDckIsSUFBSSxDQUFDLFVBQUEsUUFBUSxFQUFJO0FBQ2hCLHNCQUFLLE9BQU8sQ0FBQyxXQUFXLEdBQUcsUUFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztBQUNuRCxxQkFBSyxDQUFDLGdCQUFnQixDQUFDLE1BQUssT0FBTyxDQUFDLENBQUM7ZUFDdEMsQ0FBQyxDQUFDO2FBQ047OztBQXRCTSxrQkFBUTttQkFBQSxvQkFBRTtBQUNmLHFCQUFPLFFBQVEsQ0FDWixnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FDMUIsWUFBWSxDQUFDLE9BQU8sRUFBRSxjQUFjLEVBQUUsUUFBUSxDQUFDLENBQUM7YUFDcEQ7O0FBRU0sZ0JBQU07bUJBQUEsa0JBQUc7QUFBRSxxQkFBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2FBQUU7Ozs7ZUFQMUIsTUFBTSIsImZpbGUiOiJyZXNvdXJjZXMvc291cmNlLmpzIiwic291cmNlUm9vdCI6Ii9zcmMvIn0=