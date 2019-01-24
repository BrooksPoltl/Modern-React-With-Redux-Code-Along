const songsReducer = () =>{
    return [
            {title:'thank u, next', duration: '2:46'},
            { title: 'SICKO MODE', duration: '3:12' },
            { title: 'Better Now', duration: '2:51' },
            { title: 'In my Feelings', duration: '3:32' }
    ]
}

const selectedSongReducer = (selectedSong = null, action)=>{
    if(action.type ==='SONG_SELECTED'){
        return action.payload;
    }
    return selectedSong
}