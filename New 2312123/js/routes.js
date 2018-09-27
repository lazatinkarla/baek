angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('contacts', {
    url: '/page3',
    templateUrl: 'templates/contacts.html',
    controller: 'contactsCtrl'
  })

  .state('myJagiBaek', {
    url: '/page4',
    templateUrl: 'templates/myJagiBaek.html',
    controller: 'myJagiBaekCtrl'
  })

  .state('suhoSsi', {
    url: '/page5',
    templateUrl: 'templates/suhoSsi.html',
    controller: 'suhoSsiCtrl'
  })

  .state('cheniiii', {
    url: '/page6',
    templateUrl: 'templates/cheniiii.html',
    controller: 'cheniiiiCtrl'
  })

  .state('pCY', {
    url: '/page7',
    templateUrl: 'templates/pCY.html',
    controller: 'pCYCtrl'
  })

  .state('sehunAh', {
    url: '/page8',
    templateUrl: 'templates/sehunAh.html',
    controller: 'sehunAhCtrl'
  })

  .state('dodong', {
    url: '/page9',
    templateUrl: 'templates/dodong.html',
    controller: 'dodongCtrl'
  })

  .state('kaiii', {
    url: '/page10',
    templateUrl: 'templates/kaiii.html',
    controller: 'kaiiiCtrl'
  })

  .state('xiu', {
    url: '/page11',
    templateUrl: 'templates/xiu.html',
    controller: 'xiuCtrl'
  })

  .state('lMH', {
    url: '/page12',
    templateUrl: 'templates/lMH.html',
    controller: 'lMHCtrl'
  })

  .state('wookie', {
    url: '/page13',
    templateUrl: 'templates/wookie.html',
    controller: 'wookieCtrl'
  })

$urlRouterProvider.otherwise('/page3')


});