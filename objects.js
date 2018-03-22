var playlist = {a: "z", b:"y", c:"x"}; 

function updatePlaylist(playlist, artistName, songTitle){
  return Object.assign({},{artistName, songTitle})
}

function removeFromPlaylist(playlist, artistName){
delete playlist.c;
if(playlist===true)
return playlist
}