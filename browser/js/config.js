juke.config(function ($stateProvider) {
  $stateProvider.state('albums', {
    url: '/albums',
    templateUrl:'/templates/albums.html',
    controller: 'AlbumsCtrl'
  });
})