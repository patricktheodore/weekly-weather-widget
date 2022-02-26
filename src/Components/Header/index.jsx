import * as React from 'react';
import { Box, Avatar, Typography, Stack } from '@mui/material';
import CloudOutlinedIcon from '@mui/icons-material/CloudOutlined';

export default function index() {
    return (
        <Box className='header' sx={{ textAlign: 'center', justifyContent: 'center', display: 'flex', alignItems: 'center' }}>
            <Stack spacing={2} direction='column' alignItems={'center'}>
                <Avatar sx={{ width: 200, height: 200, my: 5, boxShadow: 9 }}>
                    <CloudOutlinedIcon sx={{ fontSize: 100 }} />
                </Avatar>
                <Typography sx={{ fontSize: '1.5rem', textAlign: 'center'}}>
                    Weekly Weather Widget
                </Typography>
            </Stack>
        </Box>
    )
}
