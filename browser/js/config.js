juke.config(function ($stateProvider) {

  $stateProvider.state('albums', {
    url: '/albums',
    templateUrl:'/templates/albums.html',
    resolve: {
      albums: function(AlbumFactory) {
        return AlbumFactory.fetchAll()
      }
    },
    controller: 'AlbumsCtrl'
  });

  $stateProvider.state('album', {
    url: '/album/:albumId',
    templateUrl:'/templates/album.html',
    resolve: {
      album: function(AlbumFactory, $stateParams) {
        return AlbumFactory.fetchById($stateParams.albumId)
      }
    },
    controller: 'AlbumCtrl'
  });

  $stateProvider.state('artists', {
    url: '/artists',
    templateUrl:'/templates/artists.html',
    resolve: {
      artists: function(ArtistFactory) {
        return ArtistFactory.fetchAll()
      }
    },
    controller: 'ArtistsCtrl'
  });

  $stateProvider.state('artist', {
    url: '/artist/:artistId',
    templateUrl: '/templates/artist.html',
    resolve: {
      artist: function(ArtistFactory, $stateParams) {
        return ArtistFactory.fetchById($stateParams.artistId)
      }
    },
    controller: 'ArtistCtrl'
  })
  .state('artist.songs', {
    url: '/artist/:artistId/songs',
    templateUrl: '/templates/artistsongs.html'
  })
  .state('artist.albums', {
    url: '/artist/:artistId/albums',
    templateUrl: '/templates/artistalbums.html'
  })

})