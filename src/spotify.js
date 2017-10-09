const electron = require('electron');
const fs = require('fs');
const exec = require('child_process').exec;
const os = require('os');
const display = require('./display.js');

const SpotifyWebApi = require('spotify-web-api-node');

const spotifyWebApi = new SpotifyWebApi({
  clientID: clientId,
  clientSecret: clientSecret
});

if ((song = '')) {
  song = 'Saw the Sign';
}

if ((artist = '')) {
  song = 'Ace of Base';
}

// Send the client credentials to the server to return an access token
spotifyApi
  .clientCredentialsGrant()
  .then(
    function(data) {
      spotifyApi.setAccessToken(data.body['access_token']);
    },
    function(err) {
      console.log('Something went wrong when retrieving an access token', err);
    }
  )
  .then(function() {
    spotifyApi.searchTracks('track: ' + song + ' artist ' + artist).then(
      function(data) {
        console.log('You searched for \nTrack:' + song + '\nArtist: ' + artist);
        console.log(
          '\nThere are ' +
            data.body.tracks.total +
            ' total results. \nHere is the top result: '
        );
        console.log('Track: ' + data.body.tracks.items[0].name);
        console.log('Artist: ' + data.body.tracks.items[0].artists[0].name);
        console.log('Album: ' + data.body.tracks.items[0].album.name);
        console.log(
          'Link: ' + data.body.tracks.items[0].album.external_urls.spotify
        );
      },
      function(err) {
        console.error(err);
      }
    );
  });
