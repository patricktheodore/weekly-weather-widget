/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react';
import { Box, Stack, Avatar, Typography, IconButton, TextField, Icon } from '@mui/material';
import { getCurrentDate } from '../../utils/helpers';
import { trimWeather } from '../../utils/helpers';
import ExpandCircleDownSharpIcon from '@mui/icons-material/ExpandCircleDownSharp';


export default function index(props) {
    return (
        <Box sx={{ textAlign: 'center', justifyContent: 'center', display: 'flex', alignItems: 'center' }}>
            <Stack spacing={4} direction={'column'} alignItems={'center'}>
                <Typography sx={{ color: '#d4d4d4', fontSize: '3rem', fontFamily: `'Raleway', sans-serif`, mt: 4, mb: 0 }}>
                    {props.weatherData.name}
                </Typography>
                <Typography className='date' sx={{ color: '#d4d4d4', fontSize: '1.5rem', fontFamily: `'Raleway', sans-serif`, mt: 0 }}>
                    {getCurrentDate()}
                </Typography>
                <Typography className='currentTemp' mr={3} sx={{ color: '#d4d4d4', fontSize: '5rem', fontFamily: `'Raleway', sans-serif` }}>
                    {trimWeather(props.weatherData.main.temp)}&deg;
                </Typography>
                <Typography className='description' sx={{ color: '#d4d4d4', fontSize: '1.5rem', fontFamily: `'Raleway', sans-serif` }}>
                    {props.weatherData.weather[0].description}
                </Typography>
            </Stack>
        </Box>
    )
}
