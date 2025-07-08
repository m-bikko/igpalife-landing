import React from 'react';
import { Container, Grid, Typography, Box, Avatar } from '@mui/material';

const steps = [
  {
    step: '01',
    title: 'Find Your Club',
    description: 'Discover and join university clubs that match your interests.',
  },
  {
    step: '02',
    title: 'Enroll in Events',
    description: 'Easily sign up for events, workshops, and activities hosted by clubs.',
  },
  {
    step: '03',
    title: 'Track Your Activities',
    description: 'Keep a record of all your social and extracurricular activities in one place.',
  },
];

const HowItWorks = () => {
  return (
    <Box sx={{ py: 12 }}>
      <Container maxWidth="lg">
        <Typography variant="h4" component="h2" align="center" gutterBottom sx={{ fontWeight: 'bold', mb: 10 }}>
          How It Works
        </Typography>
        <Grid container spacing={4}>
          {steps.map((item) => (
            <Grid item xs={12} md={4} key={item.step}>
              <Box sx={{
                textAlign: 'center',
                p: 4,
                backgroundColor: 'rgba(255, 255, 255, 0.6)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(0, 0, 0, 0.05)',
                borderRadius: '16px',
                height: '100%',
              }}>
                <Avatar sx={{ bgcolor: 'primary.main', width: 56, height: 56, margin: '0 auto 16px', color: 'white', fontWeight: 'bold' }}>
                  {item.step}
                </Avatar>
                <Typography variant="h6" component="h3" gutterBottom sx={{ fontWeight: 'bold' }}>
                  {item.title}
                </Typography>
                <Typography color="text.secondary">
                  {item.description}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default HowItWorks; 