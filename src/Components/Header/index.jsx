import * as React from 'react';
import { Box, Avatar, Typography, Stack, Container } from '@mui/material';
import CloudOutlinedIcon from '@mui/icons-material/CloudOutlined';

export default function index() {
    return (
        <Box className='header' sx={{ textAlign: 'center', justifyContent: 'center', display: 'flex', alignItems: 'center', background: 'none' }}>
            <Stack spacing={2} direction='column' alignItems={'center'}>
                <Avatar sx={{ width: 200, height: 200, my: 5, BoxShadow: 9 }}>
                    <CloudOutlinedIcon sx={{ fontSize: 100 }} />
                </Avatar>
            </Stack>
        </Box>
    )
}
