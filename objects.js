var playlist = {[a]: "z", [b]:"y", [c]:"x"}; 

var updatePlaylist = function updatePlaylist(playlist, artistName, songTitle){
  playlist[artistName] = songTitle
  return playlist
}

function removeFromPlaylist(playlist, artistName){
}