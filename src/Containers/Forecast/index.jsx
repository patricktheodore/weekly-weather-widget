/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect } from 'react';
import { Stack, Container, TextField, Switch, Typography, Box, IconButton } from '@mui/material';
import Daily from '../../Components/Daily';
import Weekly from '../../Components/Weekly';

export default function index() {
  const [weatherData, setWeatherData] = useState({});
  const [state, setState] = useState('Perth');
  const [units, setUnits] = useState('metric')

  const apiKey = process.env.REACT_APP_OPEN_WEATEHER_API_KEY;
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${state}&appid=${apiKey}&units=${units}`

  useEffect(() => {
    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => setWeatherData(data))
  }, [apiUrl]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setState(event.target[0].value);
  }

  const toggleUnits = () => {
    if (units === 'metric') {
      setUnits('imperial');
    } else {
      setUnits('metric')
    }
  }

  return (
    <Container sx={{ justifyContent: 'center', textAlign: 'center' }}>
      {weatherData.main ? (

        <Stack
          direction={{ xs: 'column', md: 'row' }}
          spacing={{ xs: 5, md: 20 }}
        >
          <Daily weatherData={weatherData} units={units}/>
          <Weekly weatherData={weatherData} units={units}/>
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
        <Switch id='unitToggle' color='default' onChange={toggleUnits}/>
        <Typography sx={{ color: '#d4d4d4', fontSize: '1rem', fontFamily: `'Raleway', sans-serif`, pl: '1.2rem' }}>Fahrenheit</Typography>
      </Stack>
    </Container>
  )
}

