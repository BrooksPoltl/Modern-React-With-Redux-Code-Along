import React from 'react';
import './SeasonDisplay.css'

const seasonConfig = {
    summer: {
        seasonHelper: 'lets hit the beach!',
        icon: 'sun'
    },
    winter: {
        seasonHelper: 'Burr, it is cold',
        icon: 'snowflake'
    },
}
const getSeason = (lat,month) =>{
    if(month > 2 && month < 9){
        return   lat > 0 ? 'summer': 'winter';
    }
    else{
        return lat > 0 ? 'winter' : 'summer';
    }
}
const SeasonDisplay = props =>{
    const season = getSeason(props.lat, new Date().getMonth());
    const { seasonHelper, icon } = seasonConfig[season];
    return (
        <div className = {`season-display ${season}`}>
            <i  className = {`icon-left massive ${icon} icon`}/>
            <h1>{seasonHelper}</h1>
            <i className = {`icon-right massive ${icon} icon`}/>
        </div>
    )
}

export default SeasonDisplay