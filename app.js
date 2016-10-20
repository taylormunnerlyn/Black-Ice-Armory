angular.module('app', ["ui.router"])
  .config(function($stateProvider, $urlRouterProvider){
    $urlRouterProvider
      .otherwise('/')

    $stateProvider
      .state('products', {
        url: '/',
        templateUrl: '/products/products.tpl.html',
        controller: 'CarouselCtrl'
      })
      .state('about', {
        url: '/about',
        templateUrl: '/about/about.tpl.html'
      })
      .state('contact', {
        url: '/contact',
        templateUrl: '/contact/contact.tpl.html'
      })
      .state('dealer_locator', {
        url: '/dealer_locator',
        templateUrl: '/dealer_locator/dealer_locator.tpl.html'
      })
      .state('dealer', {
        url: '/dealer',
        templateUrl: '/dealer/dealer.tpl.html'
      })
  })
