'use strict';

describe('Directive: component', function () {

  // load the directive's module
  beforeEach(module('hackatonWebangularApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<component></component>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the component directive');
  }));
});
