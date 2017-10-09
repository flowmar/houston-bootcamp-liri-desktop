// Declare variables
let songTitle;
let artistName;

let songInput = $('input#song-title');
let artistInput = $('input#artist-name');

// Function to set the songTitle and artistName to the value of the input elements
function setSpotify() {
  songInput = $('input#song-title');
  artistInput = $('input#artist-name');

  songTitle = songInput[0].value;
  artistName = artistInput[0].value;
  console.log(songTitle + ' by ' + artistName);
  executeSpotify(songTitle, artistName);
}

function executeSpotify(songTitle, artistName) {}

console.log(songTitle + ' by ' + artistName);

$('#spotify').on('click', e => {
  $('#button-area-2').html(`
<input type=\"text\" id=\"song-title\"/>
<label htmlFor=\"song-title\">Song Title</label>
<br/>
<input type=\"text\" id=\"artist-name\"/>
<label htmlFor=\"artist-name\">Artist</label>`);

  console.log(songTitle + ' by ' + artistName);

  if (songTitle !== '' || artistName !== '') {
    $('#submit').html(`
          <button class=\"btn btn-elegant\" onclick={setSpotify()}>SUBMIT</button>
          `);
  }
});
