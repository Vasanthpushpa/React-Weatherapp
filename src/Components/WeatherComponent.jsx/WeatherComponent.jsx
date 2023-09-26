import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useQuery } from 'react-query';
import "./WeatherComponent.css"

const WeatherComponent = () => {
  const apiKey = '3108bc5c8c524b8096543905232509'; 
  const [cityName,setCityName] = useState('')
  const [weatherdata,setWeatherData] = useState('')

  const handleCity =(event) =>{
    setCityName(event.target.value)
  }

  const fetchWeather =async() =>{
    const response = await axios.get(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${cityName}`)
    console.log(response);
    setWeatherData(response.data)
  }

  
  useEffect(()=>{
    navigator.geolocation.getCurrentPosition(async(position)=>{
      const {latitude , longitude} = position.coords;
      const response = await axios.get(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${latitude},${longitude}`)
      setWeatherData(response.data)
      
    })
    
  },[])

 

  return (
    <React.Fragment>
      <div className='weather-app'>
        <h1>Get Weather</h1>
        <form>
          <input
          type='text'
          name='cityName'
          id='cityName'
          value={cityName}
          onChange={handleCity}
          />
        </form>
       <button onClick={fetchWeather}>Click</button>
      <div className='weather-card'>
      {weatherdata && (
        <p>Location : {weatherdata.location.name}</p>
     
      )}
      {weatherdata.current && (
        <div>
        <p>Temperature : {weatherdata.current.temp_c}&deg;C</p>
        <img src={weatherdata.current.condition.icon}/>
        <p>Condition : {weatherdata.current.condition.text}</p>
        </div>
        

      )}
      </div>
      </div>
    </React.Fragment>
  );
};

export default WeatherComponent;
