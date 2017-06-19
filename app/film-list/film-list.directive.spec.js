describe('filmList', function() {

  // Load the module that contains the `countriesDropDown` component before each test
  beforeEach(module('filmList'));

  // Test the controller
  describe('filmList', function() {

    it('should contain a list of films', inject(function($componentController) {
      var ctrl = $componentController('filmList');
      expect(ctrl.resp).toBeTruthy();
    }));

  });

});