import logo from './logo.svg';
import './App.css';
import React, {useEffect, useState} from "react";
import AirQuality from './AirQuality'

const App = () => {
  const [query,setQuery] = useState([77.7,80.5]);
  const [info,setInfo] = useState([]);
  const [search,setSearch] = useState('');
  const [quality,setQuality] = useState([]);
  let latitude = 0;
  let longitude = 0;

  useEffect( () => {
    getWeather();
  },[info])  

  const updateSearch = e => {
    setSearch(e.target.value);
  }
  const getSearch = e => {
      e.preventDefault();
      var tmp = search.split(",");
      setQuery([parseInt(tmp[0]),parseInt(tmp[1])]);
      setSearch('');
  }
  let aqi,CO,NO;
  const getWeather = async () => {
    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/air_pollution?lat=${query[0]}&lon=${query[1]}&appid=f99361a9a779206a57f118e8ec9d9614`
    );
    const data = await response.json();
    aqi = await data.list[0].main.aqi;
    CO = await data.list[0].components.co;
    NO = await data.list[0].components.no;
    setInfo([aqi,CO,NO]); 
    setQuality(data);
    
  };

  

  return(
    <div className="App">
        <form className="search-form" onSubmit={getSearch}>
          <input className="search-bar" type="text" onChange={updateSearch}></input>
          <button className="search-button">Search</button>
        </form>
        <div className="quality">
          <AirQuality key={info[0]}
                      aqi={info[0]}
                      CO={info[1]}
                      NO={info[2]}
          />
          </div>
    </div>
    
  )
}

export default App;
