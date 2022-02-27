/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect } from 'react';
import { Stack, Container, TextField, Switch, Typography, Box } from '@mui/material';
import Daily from '../../Components/Daily';
import Weekly from '../../Components/Weekly';

export default function index() {
  const [weatherData, setWeatherData] = useState({});
  const [state, setState] = useState('Perth');

  const apiKey = process.env.REACT_APP_OPEN_WEATEHER_API_KEY;
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${state}&appid=${apiKey}&units=metric`

  useEffect(() => {
    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => setWeatherData(data))
  }, [apiUrl]);

  console.log(weatherData);
  console.log(weatherData.name);

  const handleSubmit = (event) => {
    event.preventDefault();
    setState(event.target[0].value);
  }

  return (
    <Container sx={{ justifyContent: 'center', textAlign: 'center' }}>
      {weatherData.main ? (

        <Stack
          direction={{ xs: 'column', md: 'row' }}
          spacing={{ xs: 5, md: 20 }}
        >
          <Daily weatherData={weatherData} />
          <Weekly weatherData={weatherData} />
        </Stack>
      ) : (
        <Typography>
          Loading...
        </Typography>
      )}

      <Stack direction={'row'} component='form' onSubmit={handleSubmit} sx={{ mb: '2rem' }}>
        <TextField
          inputProps={{ style: { fontFamily: `'Raleway', 'Helvetica', 'Arial', sans-serif`, textAlign: 'center', color: '#d4d4d4' } }}
          InputLabelProps={{ style: { fontFamily: `'Raleway', 'Helvetica', 'Arial', sans-serif`, color: '#d4d4d4', } }}
          margin="normal"
          fullWidth
          id="name"
          label='Search'
          name="name"
          autoComplete="city"
          autoFocus
          variant='filled'
        />
      </Stack>
      <Stack direction={'row'}  sx={{ justifyContent: 'center', textAlign: 'center', alignItems: 'center', mb: '15rem' }}>
        <Typography sx={{ color: '#d4d4d4', fontSize: '1rem', fontFamily: `'Raleway', sans-serif`, pr: '1.2rem' }}>Celcius</Typography>
        <Switch defaultChecked color='default' />
        <Typography sx={{ color: '#d4d4d4', fontSize: '1rem', fontFamily: `'Raleway', sans-serif`, pl: '1.2rem' }}>Fahrenheit</Typography>
      </Stack>
    </Container>
  )
}

