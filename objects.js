var playlist = {a: "z", b:"y", c:"x"}; 

function updatePlaylist(obj, artistName, songTitle){
  obj[artistName] = songTitle
  return obj
}

function removeFromPlaylist(obj, artistName){
Object.assign({}, playlist, {})
return playlist
}