(function() {
  'use strict';

  angular
    .module('gulpProxy')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
