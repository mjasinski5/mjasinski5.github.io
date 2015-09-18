'use strict';

describe('Service: LsCacheFactory', function () {

  // load the service's module
  beforeEach(module('hackatonWebangularApp'));

  // instantiate service
  var LsCacheFactory;
  beforeEach(inject(function (_LsCacheFactory_) {
    LsCacheFactory = _LsCacheFactory_;
  }));

  it('should do something', function () {
    expect(!!LsCacheFactory).toBe(true);
  });

});
