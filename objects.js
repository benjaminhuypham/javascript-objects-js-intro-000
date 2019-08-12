var playlist = {'Taylor Swift': 'you belongs to me',
                'Adele': 'set fire to the rain',
                'Katy Perry': 'firework'
               };

var updatePlaylist = (playlist, artistName, songTitle) => {
    return paylist = Object.assign({}, playlist, {[artistName]: songTitle});
};
