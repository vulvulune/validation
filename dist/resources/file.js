System.register(["aurelia-framework", "./example-context"], function (_export) {
  var Behavior, ExampleContext, _createClass, _classCallCheck, extensionLanguageMap, File;

  function getLanguage(filename) {
    var extension = /\.(\w+)$/.exec(filename)[1].toLowerCase();
    return extensionLanguageMap[extension];
  }

  return {
    setters: [function (_aureliaFramework) {
      Behavior = _aureliaFramework.Behavior;
    }, function (_exampleContext) {
      ExampleContext = _exampleContext.ExampleContext;
    }],
    execute: function () {
      "use strict";

      _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      extensionLanguageMap = {
        js: "javascript",
        html: "markup"
      };
      File = _export("File", (function () {
        function File(context) {
          _classCallCheck(this, File);

          this.context = context;
          this.info = null;
        }

        _createClass(File, {
          propertyChanged: {
            value: function propertyChanged() {
              var src = this.src,
                  context = this.context,
                  example = context.example;

              this.info = {
                name: src,
                moduleId: context.base + "/" + src.substr(0, src.indexOf(".")),
                language: getLanguage(src),
                url: "src/" + context.base + "/" + src,
                repoUrl: context.githubBase + "/src/" + context.base + "/" + src
              };

              if (this.view === "true") example.view = this.info;

              if (this.model === "true") example.model = this.info;

              example.result = example.view && example.model;
            }
          }
        }, {
          metadata: {
            value: function metadata() {
              return Behavior.customElement("file").withProperty("src", "propertyChanged").withProperty("view", "propertyChanged").withProperty("model", "propertyChanged");
            }
          },
          inject: {
            value: function inject() {
              return [ExampleContext];
            }
          }
        });

        return File;
      })());
    }
  };
});
//# sourceMappingURL=data:application/json;base64,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