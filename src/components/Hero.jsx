import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import { styled } from '@mui/system';

const HeroWrapper = styled(Box)(({ theme }) => ({
  position: 'relative',
  padding: theme.spacing(20, 0),
  overflow: 'hidden',
  textAlign: 'center',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: `radial-gradient(circle at 10% 20%, ${theme.palette.primary.main}33, transparent 30%), radial-gradient(circle at 80% 90%, ${theme.palette.secondary.main}33, transparent 30%)`,
    zIndex: 1,
  },
}));

const HeroContent = styled(Container)(({ theme }) => ({
  position: 'relative',
  zIndex: 2,
}));

const Hero = () => {
  return (
    <HeroWrapper>
      <HeroContent maxWidth="md">
        <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
          Welcome to iGPALife
        </Typography>
        <Typography variant="h5" color="text.secondary" paragraph sx={{ my: 4 }}>
          The all-in-one platform for university clubs and students to manage events, and track social activities.
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mt: 4 }}>
          <Button variant="contained" color="primary" size="large" sx={{ borderRadius: '25px', px: 4, py: 1.5, textTransform: 'none', fontSize: '1rem' }}>
            Get Started
          </Button>
          <Button variant="outlined" color="primary" size="large" sx={{ borderRadius: '25px', px: 4, py: 1.5, textTransform: 'none', fontSize: '1rem' }}>
            Learn More
          </Button>
        </Box>
      </HeroContent>
    </HeroWrapper>
  );
};

export default Hero; 