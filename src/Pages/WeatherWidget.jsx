import React from 'react';
import Header from '../Components/Header';
import Forecast from '../Containers/Forecast';
import { Box, Stack, Container } from '@mui/material'

export default function WeatherWidget() {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center' }} className={'backgroundWaves layer1'}>
      <Stack direction={'column'}>
        <Forecast />
      </Stack>
    </Box>
  )
}

