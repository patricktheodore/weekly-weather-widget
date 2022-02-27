/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect } from 'react';
import { Stack, Container, TextField, Button, Typography, Paper, Box } from '@mui/material';
import { trimWeather } from '../../utils/helpers';
import ForecastRow from './ForecastRow';



export default function weekly(props) {
  const [weatherData, setWeatherData] = useState({});
  const cityLat = props.weatherData.coord.lat;
  const cityLon = props.weatherData.coord.lon;
  const apiKey = process.env.REACT_APP_OPEN_WEATEHER_API_KEY;
  const apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${cityLat}&lon=${cityLon}&exclude=minutely,alerts&units=${props.units}&appid=${apiKey}`;

  useEffect(() => {
    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => setWeatherData(data))
  }, [apiUrl]);

  console.log(weatherData);
  console.log(weatherData.daily);


  return (
    <Box className='forecastCont' sx={{ width: '100%' }}>
      {weatherData.daily ? (
        <Container>
          <Paper className='forecastRowsCont' sx={{ backgroundColor: '#02204e'}}>
            {weatherData.daily.slice(1).map((day) => {
              return <ForecastRow data={day} key={day.dt} />
            })}
          </Paper>
        </Container>
      ) : (
        <Typography>
          Loading...
        </Typography>
      )}
    </Box>
  )
}
