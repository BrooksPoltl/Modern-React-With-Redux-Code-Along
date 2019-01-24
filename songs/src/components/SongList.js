import React, { Component } from 'react';
import { connect } from 'react-redux'
class SongList extends Component{
    render(){
        return <div>songlist</div>
    }
}
const mapStateToProps = (state) =>{
    return {
        songs: state.songs,
    }
}
export default connect(mapStateToProps)(SongList)