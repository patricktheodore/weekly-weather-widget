/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react';
import { Stack, Container, TextField, Button } from '@mui/material';
import Daily from '../../Components/Daily';
import Weekly from '../../Components/Weekly';

export default function index() {
  const [cityName, setCityName] = useState('');

  let cityData = [];


  const APIKey = "fb5ee4acd32f9e510ff4bf073921379e";

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCityName(value);
  }

  // api call here for props data
  const handleSubmit = async (event) => {
    event.preventDefault();

    let queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + APIKey + "&units=metric";

    return fetch(queryURL)
      .then(response => response.json())
      .then(data => {
        console.log(data.coord.lat);
        getForecast(data.coord.lat, data.coord.lon)
      });
  }

  const getForecast = (cityLat, cityLon) => {
    fetch("https://api.openweathermap.org/data/2.5/onecall?lat=" + cityLat + "&lon=" + cityLon + "&exclude=minutely,hourly,alerts&units=metric&appid=" + APIKey)
      .then(function (response) {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        console.log(data);
        cityData = data;
        console.log(cityData)
      });
  }

  return (
    <Container sx={{ justifyContent: 'center', textAlign: 'center' }}>
      <Stack direction={'column'} component='form' onSubmit={handleSubmit}>
        <TextField
          inputProps={{ style: { fontFamily: `'Raleway', 'Helvetica', 'Arial', sans-serif`, textAlign: 'center' } }}
          InputLabelProps={{ style: { fontFamily: `'Raleway', 'Helvetica', 'Arial', sans-serif` } }}
          margin="normal"
          fullWidth
          id="name"
          label='Search'
          name="name"
          autoComplete="city"
          autoFocus
          onChange={handleChange}
        />
        <Button
          type='submit'
          fullWidth
          variant='contained'
        >
          Search
        </Button>
      </Stack>
      <Stack
        direction={{ xs: 'column', md: 'row' }}
        spacing={{ xs: 5, md: 20 }}
      >
        <Daily />
        <Weekly />
      </Stack>
    </Container>
  )
}
