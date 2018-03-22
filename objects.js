var playlist = {[a]: "z", [b]:"y", [c]:"x"}; 

function updatePlaylist(play, artistName, songTitle){
  return playlist.assign(play, { [artistName]: songTitle})
}

function removeFromPlaylist(playlist, artistName){
delete playlist.c
return removeFromPlaylist
}