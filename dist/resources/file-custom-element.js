System.register(['aurelia-framework', './example-context'], function (_export) {
  var inject, bindable, ExampleContext, _classCallCheck, _createClass, extensionLanguageMap, FileCustomElement;

  function getLanguage(filename) {
    var extension = /\.(\w+)$/.exec(filename)[1].toLowerCase();
    return extensionLanguageMap[extension];
  }

  return {
    setters: [function (_aureliaFramework) {
      inject = _aureliaFramework.inject;
      bindable = _aureliaFramework.bindable;
    }, function (_exampleContext) {
      ExampleContext = _exampleContext.ExampleContext;
    }],
    execute: function () {
      'use strict';

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

      _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

      extensionLanguageMap = {
        js: 'javascript',
        html: 'markup'
      };

      FileCustomElement = (function () {
        function FileCustomElement(context) {
          _classCallCheck(this, _FileCustomElement);

          this.context = context;
          this.info = null;
        }

        var _FileCustomElement = FileCustomElement;

        _createClass(_FileCustomElement, [{
          key: 'attached',
          value: function attached() {
            this.propertyChanged();
          }
        }, {
          key: 'propertyChanged',
          value: function propertyChanged() {
            var src = this.src,
                context = this.context,
                example = context.example;

            this.info = {
              name: src,
              moduleId: context.base + '/' + src.substr(0, src.indexOf('.')),
              language: getLanguage(src),
              url: 'src/' + context.base + '/' + src,
              repoUrl: context.githubBase + '/src/' + context.base + '/' + src
            };

            if (this.view === 'true') example.view = this.info;

            if (this.model === 'true') example.model = this.info;

            example.result = example.view && example.model;
          }
        }]);

        FileCustomElement = bindable({ name: 'model', changedHandler: 'propertyChanged' })(FileCustomElement) || FileCustomElement;
        FileCustomElement = bindable({ name: 'view', changedHandler: 'propertyChanged' })(FileCustomElement) || FileCustomElement;
        FileCustomElement = bindable({ name: 'src', changedHandler: 'propertyChanged' })(FileCustomElement) || FileCustomElement;
        FileCustomElement = inject(ExampleContext)(FileCustomElement) || FileCustomElement;
        return FileCustomElement;
      })();

      _export('FileCustomElement', FileCustomElement);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc291cmNlcy9maWxlLWN1c3RvbS1lbGVtZW50LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7dUVBSUksb0JBQW9CLEVBZVgsaUJBQWlCOztBQVY5QixXQUFTLFdBQVcsQ0FBQyxRQUFRLEVBQUU7QUFDN0IsUUFBSSxTQUFTLEdBQUcsQUFBQyxVQUFVLENBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDO0FBQzdELFdBQU8sb0JBQW9CLENBQUMsU0FBUyxDQUFDLENBQUM7R0FDeEM7Ozs7aUNBWk8sTUFBTTttQ0FDTixRQUFROzt1Q0FDUixjQUFjOzs7Ozs7Ozs7QUFFbEIsMEJBQW9CLEdBQUc7QUFDekIsVUFBRSxFQUFFLFlBQVk7QUFDaEIsWUFBSSxFQUFFLFFBQVE7T0FDZjs7QUFZWSx1QkFBaUI7QUFFakIsaUJBRkEsaUJBQWlCLENBRWYsT0FBTyxFQUFFOzs7QUFDcEIsY0FBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7QUFDdkIsY0FBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7U0FDbEI7O2lDQUxVLGlCQUFpQjs7OztpQkFPcEIsb0JBQUU7QUFDUixnQkFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1dBQ3hCOzs7aUJBQ2MsMkJBQUc7QUFDaEIsZ0JBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHO2dCQUFFLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTztnQkFBRSxPQUFPLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQzs7QUFFdEUsZ0JBQUksQ0FBQyxJQUFJLEdBQUc7QUFDVixrQkFBSSxFQUFFLEdBQUc7QUFDVCxzQkFBUSxFQUFFLE9BQU8sQ0FBQyxJQUFJLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDOUQsc0JBQVEsRUFBRSxXQUFXLENBQUMsR0FBRyxDQUFDO0FBQzFCLGlCQUFHLEVBQUUsTUFBTSxHQUFHLE9BQU8sQ0FBQyxJQUFJLEdBQUcsR0FBRyxHQUFHLEdBQUc7QUFDdEMscUJBQU8sRUFBRSxPQUFPLENBQUMsVUFBVSxHQUFHLE9BQU8sR0FBRyxPQUFPLENBQUMsSUFBSSxHQUFHLEdBQUcsR0FBRyxHQUFHO2FBQ2pFLENBQUM7O0FBRUYsZ0JBQUksSUFBSSxDQUFDLElBQUksS0FBSyxNQUFNLEVBQ3RCLE9BQU8sQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQzs7QUFFM0IsZ0JBQUksSUFBSSxDQUFDLEtBQUssS0FBSyxNQUFNLEVBQ3ZCLE9BQU8sQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQzs7QUFFNUIsbUJBQU8sQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDLElBQUksSUFBSSxPQUFPLENBQUMsS0FBSyxDQUFDO1dBQ2hEOzs7QUE1QlUseUJBQWlCLEdBRjdCLFFBQVEsQ0FBQyxFQUFFLElBQUksRUFBRyxPQUFPLEVBQUUsY0FBYyxFQUFHLGlCQUFpQixFQUFFLENBQUMsQ0FFcEQsaUJBQWlCLEtBQWpCLGlCQUFpQjtBQUFqQix5QkFBaUIsR0FIN0IsUUFBUSxDQUFDLEVBQUUsSUFBSSxFQUFHLE1BQU0sRUFBRSxjQUFjLEVBQUcsaUJBQWlCLEVBQUUsQ0FBQyxDQUduRCxpQkFBaUIsS0FBakIsaUJBQWlCO0FBQWpCLHlCQUFpQixHQUo3QixRQUFRLENBQUMsRUFBRSxJQUFJLEVBQUcsS0FBSyxFQUFFLGNBQWMsRUFBRyxpQkFBaUIsRUFBRSxDQUFDLENBSWxELGlCQUFpQixLQUFqQixpQkFBaUI7QUFBakIseUJBQWlCLEdBTDdCLE1BQU0sQ0FBQyxjQUFjLENBQUMsQ0FLVixpQkFBaUIsS0FBakIsaUJBQWlCO2VBQWpCLGlCQUFpQjs7O21DQUFqQixpQkFBaUIiLCJmaWxlIjoicmVzb3VyY2VzL2ZpbGUtY3VzdG9tLWVsZW1lbnQuanMiLCJzb3VyY2VSb290IjoiL3NyYy8ifQ==