(function() {
  'use strict';

  angular
      .module('gulpProxy')
      .service('webDevTec', webDevTec);

  /** @ngInject */
  function webDevTec($http) {

    this.getTec = getTec;

    function getTec() {
      return $http.get('/api/awesomethings')
        .then(function(response) {
          return response.data;
        });
    }
  }

})();
