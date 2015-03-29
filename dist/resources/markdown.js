System.register(["aurelia-framework", "commonmark", "../util"], function (_export) {
  var Behavior, commonmark, isExternalLink, titleToSlug, _createClass, _classCallCheck, reader, writer, Markdown;

  function getHtml(markdown) {
    return writer.render(reader.parse(markdown));
  }

  function fixIndent(markdown) {
    /*
    This is intended to remove indentation that is not really part of
    the markdown, to preserve the ability to indent the markup properly.
     In the example below the total indentation will be reduced by 4 characters.
     |
    |<template>
    |  <markdown>
    |    # hello world
    |
    |    lorem ipsum bla bla
    |
    |        var x = 3;
    |
    |  </markdown>
    |</template>
    |
     */
    var result = /^( +)\S/im.exec(markdown);
    if (result) {
      markdown = markdown.replace(new RegExp("^ {" + result[1].length.toString() + "}", "gim"), "");
    }
    return markdown;
  }

  function fixBlockQuotes(markdown) {
    return markdown.replace(/^(\s*)&gt;/gim, function (match, p1) {
      return p1 + ">";
    });
  }

  function updateAnchorTargets(element) {
    // external links need target="_blank"
    var anchors = element.getElementsByTagName("a"),
        i,
        ii;
    for (i = 0, ii = anchors.length; i < ii; i++) {
      if (!isExternalLink(anchors[i].href)) continue;
      anchors[i].target = "_blank";
    }
  }

  function makeHeadingsLinkable(element) {}

  function applySyntaxHighlighting(element) {
    var codes = element.getElementsByTagName("code"),
        i,
        ii;
    for (i = 0, ii = codes.length; i < ii; i++) {
      // don't mess with code elements that are not enclosed in a pre.
      if (codes[i].parentNode.tagName !== "PRE") continue;

      // trim the code to avoid strange appearance with line numbers.
      codes[i].textContent = codes[i].textContent.trim();

      // make sure there's a language-* class.
      if (!/language-/.test(codes[i].className)) codes[i].className += " language-javascript";

      // // make sure the parent pre has the line-numbers class.
      // if (!/line-numbers/.test(codes[i].parentNode.className))
      //   codes[i].parentNode.className += ' line-numbers';

      // apply syntax highlighting.
      Prism.highlightElement(codes[i]);
    }
  }

  return {
    setters: [function (_aureliaFramework) {
      Behavior = _aureliaFramework.Behavior;
    }, function (_commonmark) {
      commonmark = _commonmark["default"];
    }, function (_util) {
      isExternalLink = _util.isExternalLink;
      titleToSlug = _util.titleToSlug;
    }],
    execute: function () {
      "use strict";

      _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      reader = new commonmark.Parser();
      writer = new commonmark.HtmlRenderer();
      Markdown = _export("Markdown", (function () {
        function Markdown(element) {
          _classCallCheck(this, Markdown);

          this.element = element;
          element.className += " markdown-body";
          this.setContent(element.innerHTML || "");
        }

        _createClass(Markdown, {
          valueChanged: {
            value: function valueChanged(newValue) {
              this.setContent(newValue);
            }
          },
          setContent: {
            value: function setContent(markdown) {
              markdown = fixIndent(markdown);
              markdown = fixBlockQuotes(markdown);
              this.element.innerHTML = getHtml(markdown);

              updateAnchorTargets(this.element);
              makeHeadingsLinkable(this.element);
              applySyntaxHighlighting(this.element);
            }
          }
        }, {
          metadata: {
            value: function metadata() {
              return Behavior.customElement("markdown").withProperty("value", "valueChanged").noView().skipContentProcessing();
            }
          },
          inject: {
            value: function inject() {
              return [Element];
            }
          }
        });

        return Markdown;
      })());
    }
  };
});

//var headings = element.querySelectorAll('h1,h2,h3,h4,h5,h6'),
//    i, ii, h, title, slug;
//for(i = 0, ii = headings.length; i < ii; i++) {
//  h = headings[i];
//  title = h.textContent;
//  slug = titleToSlug(title);
//  h.id = slug;
//  h.innerHTML = `<a id="${slug}" class="anchor" href="#${slug}" aria-hidden="true"><span class="glyphicon glyphicon-link"></span></a>${title}`;
//}
//# sourceMappingURL=data:application/json;base64,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