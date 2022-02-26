import React from 'react';
import { Box, Stack, Avatar, Typography, IconButton, TextField } from '@mui/material';
import CloudOutlinedIcon from '@mui/icons-material/CloudOutlined';
import KeyboardArrowDownSharpIcon from '@mui/icons-material/KeyboardArrowDownSharp';
// location
// current temp large
// forecast image, rain, cloud, thunder sun etc
// low high small
// chevron down for more information

export default function index() {
    return (
        <Box sx={{ textAlign: 'center', justifyContent: 'center', display: 'flex', alignItems: 'center' }}>
            <Stack spacing={4} direction={'column'} alignItems={'center'}>
                <Typography>
                    West Perth
                </Typography>
                <Typography>
                    Sat 26th Feb
                </Typography>
                <Typography>
                    31&deg;C
                </Typography>
                <Avatar sx={{ width: 50, height: 50 }}>
                    <CloudOutlinedIcon />
                </Avatar>
                <Typography>
                    Lo: 17 | Hi: 37
                </Typography>
                <IconButton>
                    <Avatar>
                        <KeyboardArrowDownSharpIcon />
                    </Avatar>
                </IconButton>
            </Stack>
        </Box>
    )
}
