import React from 'react';
import { Box, Container, Typography, Link, Grid, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
  return (
    <Box component="footer" sx={{
        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
        py: 6,
        mt: 12
    }}>
      <Container maxWidth="lg">
        <Grid container spacing={5}>
            <Grid item xs={12} sm={4}>
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                    iGPALife
                </Typography>
                <Typography variant="subtitle1" color="text.secondary">
                    Enhancing university life through better event management.
                </Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                    Links
                </Typography>
                <Link href="#" color="text.secondary" display="block">Home</Link>
                <Link href="#" color="text.secondary" display="block">About</Link>
                <Link href="#" color="text.secondary" display="block">Contact</Link>
            </Grid>
            <Grid item xs={12} sm={4}>
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                    Follow Us
                </Typography>
                <IconButton href="#" color="inherit"><FacebookIcon /></IconButton>
                <IconButton href="#" color="inherit"><TwitterIcon /></IconButton>
                <IconButton href="#" color="inherit"><InstagramIcon /></IconButton>
            </Grid>
        </Grid>
        <Typography variant="body2" color="text.secondary" align="center" sx={{ mt: 5 }}>
          {'© '}
          {new Date().getFullYear()}
          {' iGPALife. All rights reserved.'}
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer; 