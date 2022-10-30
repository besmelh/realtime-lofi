import React, { useState } from 'react';
import './App.css';
import axios from 'axios';
import styled from 'styled-components';

const Container = styled.div`
  margin: 50px 0;
  width: 80%;
  max-width: 1200px;
`;

const SearchBar = styled.input`
  width: 400px;
  padding: 20px;
  border-radius: 30px;
  border: none;
`;

function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState('');

  const units = 'metric';
  // const units = 'imperial';

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=${units}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`;

  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      axios.get(url).then((response) => {
        setData(response.data);
        console.log(response.data);
      });
      setLocation('');
    }
  };

  return (
    <div className='App'>
      <Container>
        <SearchBar
          value={location}
          onChange={(event) => setLocation(event.target.value)}
          onKeyPress={searchLocation}
          placeholder='Enter Location'
          type='text'
        ></SearchBar>
        <h2>The weather in your location is:</h2>
        {data.main ? <h1>{data.main.temp.toFixed()}°C</h1> : null}
        {data.weather ? <h1>{data.weather[0].main}</h1> : null}
      </Container>
    </div>
  );
}

export default App;
