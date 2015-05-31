System.register([], function (_export) {
  'use strict';

  _export('isExternalLink', isExternalLink);

  _export('titleToSlug', titleToSlug);

  function checkDomain(url) {
    if (url.indexOf('//') === 0) {
      url = location.protocol + url;
    }
    return url.toLowerCase().replace(/([a-z])?:\/\//, '$1').split('/')[0];
  }

  function isExternalLink(url) {
    return (url.indexOf(':') > -1 || url.indexOf('//') > -1) && checkDomain(location.href) !== checkDomain(url);
  }

  function titleToSlug(text) {
    return text.toLowerCase().replace(/[^\w ]+/g, '').replace(/ +/g, '-');
  }

  return {
    setters: [],
    execute: function () {}
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInV0aWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OzRCQVFnQixjQUFjOzt5QkFNZCxXQUFXOztBQWIzQixXQUFTLFdBQVcsQ0FBQyxHQUFHLEVBQUU7QUFDeEIsUUFBSSxHQUFHLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRztBQUM1QixTQUFHLEdBQUcsUUFBUSxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUM7S0FDL0I7QUFDRCxXQUFPLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxPQUFPLENBQUMsZUFBZSxFQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztHQUN0RTs7QUFFTSxXQUFTLGNBQWMsQ0FBQyxHQUFHLEVBQUU7QUFDbEMsV0FBUyxDQUFFLEdBQUcsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksR0FBRyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQSxJQUNyRCxXQUFXLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBRztHQUN4RDs7QUFHTSxXQUFTLFdBQVcsQ0FBQyxJQUFJLEVBQUU7QUFDaEMsV0FBTyxJQUFJLENBQ1IsV0FBVyxFQUFFLENBQ2IsT0FBTyxDQUFDLFVBQVUsRUFBQyxFQUFFLENBQUMsQ0FDdEIsT0FBTyxDQUFDLEtBQUssRUFBQyxHQUFHLENBQUMsQ0FBQztHQUN2QiIsImZpbGUiOiJ1dGlsLmpzIiwic291cmNlUm9vdCI6Ii4uL3NyYy8ifQ==