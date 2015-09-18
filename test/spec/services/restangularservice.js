'use strict';

describe('Service: RestAngularService', function () {

  // load the service's module
  beforeEach(module('hackatonWebangularApp'));

  // instantiate service
  var RestAngularService;
  beforeEach(inject(function (_RestAngularService_) {
    RestAngularService = _RestAngularService_;
  }));

  it('should do something', function () {
    expect(!!RestAngularService).toBe(true);
  });

});
