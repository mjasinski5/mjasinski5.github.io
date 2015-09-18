'use strict';

describe('Service: Component', function () {

  // load the service's module
  beforeEach(module('hackatonWebangularApp'));

  // instantiate service
  var Component;
  beforeEach(inject(function (_Component_) {
    Component = _Component_;
  }));

  it('should do something', function () {
    expect(!!Component).toBe(true);
  });

});
