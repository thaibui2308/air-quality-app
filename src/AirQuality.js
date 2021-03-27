import React from 'react';

function checkQuality(aqi) {
    if (aqi==1) return 'Good'
    else if (aqi==2) return 'Fair'
    else if (aqi==3) return 'Moderate'
    else if (aqi==4) return 'Poor';
    else return 'Very Poor'
}

const AirQuality = ({aqi,CO,NO}) => {
    return(
        <div>
            <h1>Air Quality Index: {checkQuality(aqi)}</h1>
            <ul>
                <li>Сoncentration of CO (Carbon monoxide): {CO}μg/m3</li>
                <li>Сoncentration of NO (Nitrogen monoxide): {NO}μg/m3</li>
            </ul>
        </div>
    )
}

export default AirQuality;