import React from 'react';
import { Grid, Typography, Box } from '@mui/material';
import { motion } from 'framer-motion';

const features = [
  {
    title: 'Student',
    description: 'Browse and enroll in events, manage your activities, and connect with clubs.',
    icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
            <path d="M6.5 2H20v15H6.5A2.5 2.5 0 0 1 4 14.5v-10A2.5 2.5 0 0 1 6.5 2z" />
        </svg>
    ),
  },
  {
    title: 'Head of Club',
    description: 'Create and manage events for your club, reserve rooms, and engage with members.',
    icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
            <line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line>
            <line x1="3" y1="10" x2="21" y2="10"></line>
            <path d="m9 16 2 2 4-4" />
        </svg>
    ),
  },
  {
    title: 'Admin',
    description: 'Approve event and room reservation requests, manage clubs, and oversee platform activity.',
    icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            <path d="m9 12 2 2 4-4" />
        </svg>
    ),
  },
];

const Features = () => {
  return (
    <Box sx={{ py: 12 }}>
      <Grid container spacing={4}>
        {features.map((feature, index) => (
          <Grid item xs={12} md={4} key={feature.title}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Box sx={{
                p: 4,
                borderRadius: '24px',
                height: '100%',
                bgcolor: index === 0 ? 'primary.light' : index === 1 ? 'secondary.light' : 'success.light',
              }}>
                <Box sx={{ mb: 2, color: 'primary.main' }}>{feature.icon}</Box>
                <Typography variant="h5" component="h3" gutterBottom sx={{ fontWeight: 'bold' }}>
                    {feature.title}
                </Typography>
                <Typography color="text.secondary">
                    {feature.description}
                </Typography>
              </Box>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Features; 