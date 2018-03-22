var playlist = {[a]: "z", [b]:"y", [c]:"x"}; 

function updatePlaylist(playlist, artistName, songTitle){
  return playlist.assign({} playlist, {[artistName]: songTitle})
  return playlist
}

function removeFromPlaylist(playlist, artistName){
delete playlist.c
return removeFromPlaylist
}