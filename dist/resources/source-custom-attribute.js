System.register(['aurelia-framework', 'aurelia-http-client'], function (_export) {
  var inject, HttpClient, _classCallCheck, _createClass, httpClient, SourceCustomAttribute;

  return {
    setters: [function (_aureliaFramework) {
      inject = _aureliaFramework.inject;
    }, function (_aureliaHttpClient) {
      HttpClient = _aureliaHttpClient.HttpClient;
    }],
    execute: function () {
      'use strict';

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

      _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

      httpClient = new HttpClient().configure(function (builder) {
        return builder.withResponseType('text');
      });

      SourceCustomAttribute = (function () {
        function SourceCustomAttribute(element) {
          _classCallCheck(this, _SourceCustomAttribute);

          this.element = element;
        }

        var _SourceCustomAttribute = SourceCustomAttribute;

        _createClass(_SourceCustomAttribute, [{
          key: 'valueChanged',
          value: function valueChanged(newValue) {
            var _this = this;

            if (!newValue) {
              this.element.innerHTML = '';
              return;
            }

            httpClient.get(newValue).then(function (response) {
              _this.element.textContent = response.content.trim();
              Prism.highlightElement(_this.element);
            });
          }
        }]);

        SourceCustomAttribute = inject(Element)(SourceCustomAttribute) || SourceCustomAttribute;
        return SourceCustomAttribute;
      })();

      _export('SourceCustomAttribute', SourceCustomAttribute);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc291cmNlcy9zb3VyY2UtY3VzdG9tLWF0dHJpYnV0ZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO3lEQUdJLFVBQVUsRUFHRCxxQkFBcUI7Ozs7aUNBTjFCLE1BQU07O3NDQUNOLFVBQVU7Ozs7Ozs7OztBQUVkLGdCQUFVLEdBQUcsSUFBSSxVQUFVLEVBQUUsQ0FBQyxTQUFTLENBQUMsVUFBQSxPQUFPO2VBQUksT0FBTyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQztPQUFBLENBQUM7O0FBRzNFLDJCQUFxQjtBQUNyQixpQkFEQSxxQkFBcUIsQ0FDcEIsT0FBTyxFQUFFOzs7QUFDbkIsY0FBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7U0FDeEI7O3FDQUhVLHFCQUFxQjs7OztpQkFLcEIsc0JBQUMsUUFBUSxFQUFFOzs7QUFDckIsZ0JBQUksQ0FBQyxRQUFRLEVBQUU7QUFDYixrQkFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO0FBQzVCLHFCQUFPO2FBQ1I7O0FBRUQsc0JBQVUsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQ3JCLElBQUksQ0FBQyxVQUFBLFFBQVEsRUFBSTtBQUNoQixvQkFBSyxPQUFPLENBQUMsV0FBVyxHQUFHLFFBQVEsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7QUFDbkQsbUJBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFLLE9BQU8sQ0FBQyxDQUFDO2FBQ3RDLENBQUMsQ0FBQztXQUNOOzs7QUFoQlUsNkJBQXFCLEdBRGpDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FDSCxxQkFBcUIsS0FBckIscUJBQXFCO2VBQXJCLHFCQUFxQjs7O3VDQUFyQixxQkFBcUIiLCJmaWxlIjoicmVzb3VyY2VzL3NvdXJjZS1jdXN0b20tYXR0cmlidXRlLmpzIiwic291cmNlUm9vdCI6Ii9zcmMvIn0=