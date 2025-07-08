import React from 'react';
import { Container, Grid, Card, CardContent, Typography, Box } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';

const features = [
  {
    title: 'Student',
    description: 'Browse and enroll in events, manage your activities, and connect with clubs.',
    icon: <SchoolIcon fontSize="large" color="primary" />,
  },
  {
    title: 'Head of Club',
    description: 'Create and manage events for your club, reserve rooms, and engage with members.',
    icon: <SupervisorAccountIcon fontSize="large" color="primary" />,
  },
  {
    title: 'Admin',
    description: 'Approve event and room reservation requests, manage clubs, and oversee platform activity.',
    icon: <AdminPanelSettingsIcon fontSize="large" color="primary" />,
  },
];

const Features = () => {
  return (
    <Box sx={{ py: 12 }}>
      <Container maxWidth="lg">
        <Typography variant="h4" component="h2" align="center" gutterBottom sx={{ fontWeight: 'bold', mb: 10 }}>
          A Platform for Everyone
        </Typography>
        <Grid container spacing={4}>
          {features.map((feature) => (
            <Grid item xs={12} md={4} key={feature.title}>
              <Card sx={{
                textAlign: 'center',
                p: 4,
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '16px',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-10px)',
                  boxShadow: (theme) => `0 20px 30px ${theme.palette.primary.main}33`,
                }
              }}>
                <Box sx={{ mb: 2, color: 'primary.main' }}>{feature.icon}</Box>
                <CardContent>
                  <Typography variant="h5" component="h3" gutterBottom sx={{ fontWeight: 'bold' }}>
                    {feature.title}
                  </Typography>
                  <Typography color="text.secondary">
                    {feature.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Features; 