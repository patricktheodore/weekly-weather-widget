import { Avatar, Container, Divider, Stack, Typography } from '@mui/material'
import React from 'react';
import { getDay } from '../../utils/helpers';
import DownArrow from '../../assets/down-arrow.png';
import { trimWeather } from '../../utils/helpers';
import UpArrow from '../../assets/up-arrow.png';
import ClearSky from '../../assets/sun.svg';
import BrokenClouds from '../../assets/brokenclouds.svg';
import ScatteredClouds from '../../assets/scatteredclouds.svg';
import FewClouds from '../../assets/fewclouds.svg';
import Mist from '../../assets/mist.svg';
import Showers from '../../assets/showers.svg';
import Snow from '../../assets/snow.svg';
import Thunder from '../../assets/thunderstorm.svg';
import Rain from '../../assets/rain.svg';

export default function ForecastRow(props) {

    const getIcon = (data) => {
        if (data === 'clear sky') {
            return (
            <Avatar src={ClearSky} sx={{ width: 40, height: 40 }} />
            )
        } else if (data === 'few clouds') {
            return (
                <Avatar src={FewClouds} sx={{ width: 40, height: 40 }} />
            )
        } else if (data === 'broken clouds') {
            return (
                <Avatar src={BrokenClouds} sx={{ width: 40, height: 40 }} />
            )
        } else if (data === 'scattered clouds') {
            return (
                <Avatar src={ScatteredClouds} sx={{ width: 40, height: 40 }} />
            )
        } else if (data === 'shower rain') {
            return (
                <Avatar src={Showers} sx={{ width: 40, height: 40 }} />
            )
        } else if (data === 'rain') {
            return (
                <Avatar src={Rain} sx={{ width: 40, height: 40 }} />
            )
        } else if (data === 'thunderstorm') {
            return (
                <Avatar src={Thunder} sx={{ width: 40, height: 40 }} />
            )
        } else if (data === 'snow') {
            return (
                <Avatar src={Snow} sx={{ width: 40, height: 40 }} />
            )
        } else if (data === 'mist') {
            return (
                <Avatar src={Mist} sx={{ width: 40, height: 40 }} />
            )
        } else {
            return (
                <Avatar src={ClearSky} sx={{ width: 40, height: 40 }} />
            )
        }
    }

    return (
        <Container className='forecastRow'>
            <Stack direction={'row'} justifyContent='space-between' alignItems='center' spacing={2}>
                <Typography sx={{ color: 'white', fontSize: '1.2rem', fontFamily: `'Raleway', sans-serif`, width: '3rem' }}>
                    {getDay(props.data.dt)}
                </Typography>
                {getIcon(props.data.weather[0].description)}
                {/* <Avatar src={Thunder} sx={{ width: 40, height: 40 }} /> */}
                <Stack direction={'row'}>
                    <Avatar src={DownArrow} sx={{ width: 20, height: 30, pr: '0.1rem' }} />
                    <Typography sx={{ color: 'white', fontSize: '1.2rem', fontFamily: `'Raleway', sans-serif` }}>
                        {trimWeather(props.data.temp.min)}&deg;
                    </Typography>
                </Stack>
                <Stack direction={'row'}>
                    <Avatar src={UpArrow} sx={{ width: 20, height: 30, pr: '0.1rem' }} />
                    <Typography sx={{ color: 'white', fontSize: '1.2rem', fontFamily: `'Raleway', sans-serif` }}>
                        {trimWeather(props.data.temp.max)}&deg;
                    </Typography>
                </Stack>
            </Stack>
            <Divider sx={{ background: '#d4d4d4', mt: '0.5rem' }} />
        </Container>
    )
}
