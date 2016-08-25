juke.config(function ($stateProvider) {

  $stateProvider.state('albums', {
    url: '/albums',
    templateUrl:'/templates/albums.html',
    controller: 'AlbumsCtrl'
  });

  $stateProvider.state('album', {
    url: '/album/:albumId',
    templateUrl:'/templates/album.html',
    controller: 'AlbumCtrl'
  });



  $stateProvider.state('artists', {
    url: '/artists',
    templateUrl:'/templates/artists.html',
    controller: 'ArtistsCtrl'
  });


})