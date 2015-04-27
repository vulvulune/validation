System.register(['aurelia-validation'], function (_export) {
  var Validation, ensure, _classCallCheck, _createDecoratedClass, Person;

  return {
    setters: [function (_aureliaValidation) {
      Validation = _aureliaValidation.Validation;
      ensure = _aureliaValidation.ensure;
    }],
    execute: function () {
      'use strict';

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

      _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (initializers) initializers[key] = descriptor.initializer; } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

      Person = (function () {
        var _instanceInitializers = {};

        function Person(validation) {
          _classCallCheck(this, Person);

          this.firstName = _instanceInitializers.firstName.call(this);

          this.validation = validation.on(this);
        }

        _createDecoratedClass(Person, [{
          key: 'firstName',
          decorators: [ensure(function (it) {
            it.isNotEmpty().hasLengthBetween(3, 10);
          })],
          initializer: function () {
            return 'John';
          },
          enumerable: true
        }], [{
          key: 'inject',
          value: function inject() {
            return [Validation];
          }
        }], _instanceInitializers);

        return Person;
      })();

      _export('Person', Person);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4YW1wbGVzL2ludHJvL2RlY29yYXRvci1leGFtcGxlL3ZpZXctbW9kZWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtrRUFHYSxNQUFNOzs7O3NDQUhYLFVBQVU7a0NBQ1YsTUFBTTs7Ozs7Ozs7O0FBRUQsWUFBTTs7O0FBTU4saUJBTkEsTUFBTSxDQU1MLFVBQVUsRUFBRTtnQ0FOYixNQUFNOztlQUlmLFNBQVMseUJBQVQsU0FBUzs7QUFHVCxjQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDdkM7OzhCQVJVLE1BQU07O3VCQUdoQixNQUFNLENBQUMsVUFBUyxFQUFFLEVBQUM7QUFBRSxjQUFFLENBQUMsVUFBVSxFQUFFLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQyxDQUFBO1dBQUUsQ0FBQzs7bUJBQ2pELE1BQU07Ozs7O2lCQUhQLGtCQUFHO0FBQUUsbUJBQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQztXQUFDOzs7ZUFENUIsTUFBTTs7O3dCQUFOLE1BQU0iLCJmaWxlIjoiZXhhbXBsZXMvaW50cm8vZGVjb3JhdG9yLWV4YW1wbGUvdmlldy1tb2RlbC5qcyIsInNvdXJjZVJvb3QiOiIvc3JjLyJ9