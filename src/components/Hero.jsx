import React from 'react';
import { Box, Typography, Button, Container, Grid } from '@mui/material';
import { styled, useTheme } from '@mui/system';
import { motion } from 'framer-motion';
import HeroIllustration from '../illustrations/HeroIllustration';

const HeroWrapper = styled(Box)(({ theme }) => ({
  position: 'relative',
  padding: theme.spacing(10, 0),
  overflow: 'visible', // Allow illustration to overflow
}));

const Hero = () => {
  return (
    <HeroWrapper>
      <Container maxWidth="lg">
        <Grid container alignItems="center" spacing={4}>
          <Grid item xs={12} md={6} sx={{ zIndex: 2 }}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Typography variant="h1" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
                Your Campus, <br/>Connected.
              </Typography>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Typography variant="h5" color="text.secondary" paragraph sx={{ my: 4, maxWidth: '500px' }}>
                The ultimate platform for university clubs and students to discover events, manage activities, and build community.
              </Typography>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
            >
                <Box sx={{ display: 'flex', gap: 2, mt: 4 }}>
                  <Button variant="contained" color="primary" size="large" sx={{ borderRadius: '50px', px: 5, py: 1.5, fontSize: '1.1rem', boxShadow: (theme) => `0px 10px 20px -5px ${theme.palette.primary.light}` }}>
                    Get Started
                  </Button>
                </Box>
            </motion.div>
          </Grid>
          <Grid item xs={12} md={6} sx={{ position: { md: 'absolute' }, right: 0, top: 0, height: '100%', zIndex: 1 }}>
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
                style={{ height: '100%', display: 'flex', alignItems: 'center' }}
            >
                <HeroIllustration />
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </HeroWrapper>
  );
};

export default Hero; 