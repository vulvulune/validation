System.register(['aurelia-framework', 'commonmark', '../util'], function (_export) {
  'use strict';

  var inject, noView, skipContentProcessing, commonmark, isExternalLink, titleToSlug, reader, writer, MarkdownCustomElement;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function getHtml(markdown) {
    return writer.render(reader.parse(markdown));
  }

  function fixIndent(markdown) {
    var result = /^( +)\S/im.exec(markdown);
    if (result) {
      markdown = markdown.replace(new RegExp('^ {' + result[1].length.toString() + '}', 'gim'), '');
    }
    return markdown;
  }

  function fixBlockQuotes(markdown) {
    return markdown.replace(/^(\s*)&gt;/gim, function (match, p1) {
      return p1 + '>';
    });
  }

  function updateAnchorTargets(element) {
    var anchors = element.getElementsByTagName('a'),
        i,
        ii;
    for (i = 0, ii = anchors.length; i < ii; i++) {
      if (!isExternalLink(anchors[i].href)) continue;
      anchors[i].target = '_blank';
    }
  }

  function makeHeadingsLinkable(element) {}

  function applySyntaxHighlighting(element) {
    var codes = element.getElementsByTagName('code'),
        i,
        ii;
    for (i = 0, ii = codes.length; i < ii; i++) {
      if (codes[i].parentNode.tagName !== 'PRE') continue;

      codes[i].textContent = codes[i].textContent.trim();

      if (!/language-/.test(codes[i].className)) codes[i].className = codes[i].className + ' language-javascript';

      Prism.highlightElement(codes[i]);
    }
  }
  return {
    setters: [function (_aureliaFramework) {
      inject = _aureliaFramework.inject;
      noView = _aureliaFramework.noView;
      skipContentProcessing = _aureliaFramework.skipContentProcessing;
    }, function (_commonmark) {
      commonmark = _commonmark['default'];
    }, function (_util) {
      isExternalLink = _util.isExternalLink;
      titleToSlug = _util.titleToSlug;
    }],
    execute: function () {
      reader = new commonmark.Parser();
      writer = new commonmark.HtmlRenderer();

      MarkdownCustomElement = (function () {
        function MarkdownCustomElement(element) {
          _classCallCheck(this, _MarkdownCustomElement);

          this.element = element;
          element.className += ' markdown-body';
          this.setContent(element.innerHTML || '');
        }

        var _MarkdownCustomElement = MarkdownCustomElement;

        _createClass(_MarkdownCustomElement, [{
          key: 'valueChanged',
          value: function valueChanged(newValue) {
            this.setContent(newValue);
          }
        }, {
          key: 'setContent',
          value: function setContent(markdown) {
            markdown = fixIndent(markdown);
            markdown = fixBlockQuotes(markdown);
            this.element.innerHTML = getHtml(markdown);

            updateAnchorTargets(this.element);
            makeHeadingsLinkable(this.element);
            applySyntaxHighlighting(this.element);
          }
        }]);

        MarkdownCustomElement = skipContentProcessing(MarkdownCustomElement) || MarkdownCustomElement;
        MarkdownCustomElement = noView(MarkdownCustomElement) || MarkdownCustomElement;
        MarkdownCustomElement = inject(Element)(MarkdownCustomElement) || MarkdownCustomElement;
        return MarkdownCustomElement;
      })();

      _export('MarkdownCustomElement', MarkdownCustomElement);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc291cmNlcy9tYXJrZG93bi1jdXN0b20tZWxlbWVudC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7c0ZBTUksTUFBTSxFQUNOLE1BQU0sRUF1RkcscUJBQXFCOzs7Ozs7QUFyRmxDLFdBQVMsT0FBTyxDQUFDLFFBQVEsRUFBRTtBQUN6QixXQUFPLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO0dBQzlDOztBQUVELFdBQVMsU0FBUyxDQUFDLFFBQVEsRUFBRTtBQXFCM0IsUUFBSSxNQUFNLEdBQUcsV0FBVyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUN4QyxRQUFJLE1BQU0sRUFBRTtBQUNWLGNBQVEsR0FBRyxRQUFRLENBQUMsT0FBTyxDQUFDLElBQUksTUFBTSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxHQUFHLEdBQUcsRUFBRSxLQUFLLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztLQUMvRjtBQUNELFdBQU8sUUFBUSxDQUFDO0dBQ2pCOztBQUVELFdBQVMsY0FBYyxDQUFDLFFBQVEsRUFBRTtBQUNoQyxXQUFPLFFBQVEsQ0FBQyxPQUFPLENBQUMsZUFBZSxFQUFFLFVBQUMsS0FBSyxFQUFFLEVBQUU7YUFBSyxFQUFFLEdBQUcsR0FBRztLQUFBLENBQUMsQ0FBQztHQUNuRTs7QUFFRCxXQUFTLG1CQUFtQixDQUFDLE9BQU8sRUFBRTtBQUVwQyxRQUFJLE9BQU8sR0FBRyxPQUFPLENBQUMsb0JBQW9CLENBQUMsR0FBRyxDQUFDO1FBQzNDLENBQUM7UUFBRSxFQUFFLENBQUM7QUFDVixTQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxHQUFHLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRTtBQUMzQyxVQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFDbEMsU0FBUztBQUNYLGFBQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsUUFBUSxDQUFDO0tBQzlCO0dBQ0Y7O0FBRUQsV0FBUyxvQkFBb0IsQ0FBQyxPQUFPLEVBQUUsRUFVdEM7O0FBRUQsV0FBUyx1QkFBdUIsQ0FBQyxPQUFPLEVBQUU7QUFDeEMsUUFBSSxLQUFLLEdBQUcsT0FBTyxDQUFDLG9CQUFvQixDQUFDLE1BQU0sQ0FBQztRQUM1QyxDQUFDO1FBQUUsRUFBRSxDQUFDO0FBQ1YsU0FBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsR0FBRyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUU7QUFFekMsVUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLE9BQU8sS0FBSyxLQUFLLEVBQ3ZDLFNBQVM7O0FBR1gsV0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxDQUFDOztBQUduRCxVQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLEVBQ3ZDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsR0FBRyxzQkFBc0IsQ0FBQzs7QUFPbkUsV0FBSyxDQUFDLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQ2xDO0dBQ0Y7OztpQ0ExRk8sTUFBTTtpQ0FDTixNQUFNO2dEQUNOLHFCQUFxQjs7Ozs2QkFFckIsY0FBYzswQkFBRSxXQUFXOzs7QUFFL0IsWUFBTSxHQUFHLElBQUksVUFBVSxDQUFDLE1BQU0sRUFBRTtBQUNoQyxZQUFNLEdBQUcsSUFBSSxVQUFVLENBQUMsWUFBWSxFQUFFOztBQXVGN0IsMkJBQXFCO0FBQ3JCLGlCQURBLHFCQUFxQixDQUNwQixPQUFPLEVBQUU7OztBQUNuQixjQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztBQUN2QixpQkFBTyxDQUFDLFNBQVMsSUFBSSxnQkFBZ0IsQ0FBQztBQUN0QyxjQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxTQUFTLElBQUksRUFBRSxDQUFDLENBQUM7U0FDMUM7O3FDQUxVLHFCQUFxQjs7OztpQkFPcEIsc0JBQUMsUUFBUSxFQUFFO0FBQ3JCLGdCQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1dBQzNCOzs7aUJBRVMsb0JBQUMsUUFBUSxFQUFFO0FBQ25CLG9CQUFRLEdBQUcsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQy9CLG9CQUFRLEdBQUcsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQ3BDLGdCQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7O0FBRTNDLCtCQUFtQixDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUNsQyxnQ0FBb0IsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDbkMsbUNBQXVCLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1dBQ3ZDOzs7QUFuQlUsNkJBQXFCLEdBRGpDLHFCQUFxQixDQUNULHFCQUFxQixLQUFyQixxQkFBcUI7QUFBckIsNkJBQXFCLEdBRmpDLE1BQU0sQ0FFTSxxQkFBcUIsS0FBckIscUJBQXFCO0FBQXJCLDZCQUFxQixHQUhqQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBR0gscUJBQXFCLEtBQXJCLHFCQUFxQjtlQUFyQixxQkFBcUI7Ozt1Q0FBckIscUJBQXFCIiwiZmlsZSI6InJlc291cmNlcy9tYXJrZG93bi1jdXN0b20tZWxlbWVudC5qcyIsInNvdXJjZVJvb3QiOiIuLi9zcmMvIn0=