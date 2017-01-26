/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.ui.buttons', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('ui.buttons', {
          url: '/buttons',
          templateUrl: 'app/pages/ui/buttons/buttons.html',
          controller: 'ButtonPageCtrl',
          title: '按钮',
          sidebarMeta: {
            order: 100,
          },
        });
  }

})();
