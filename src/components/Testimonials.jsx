import React from 'react';
import { Container, Grid, Card, CardContent, Typography, Box, Avatar } from '@mui/material';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

const testimonials = [
  {
    name: 'Sarah L.',
    role: 'President, Tech Club',
    avatar: 'SL',
    quote: 'iGPALife revolutionized how we manage our events. The room booking feature is a lifesaver, and our members love how easy it is to see all upcoming activities.'
  },
  {
    name: 'David Chen',
    role: 'Student',
    avatar: 'DC',
    quote: "Finally, a single place to track all my campus activities! I've discovered so many interesting clubs and events I wouldn't have known about otherwise."
  },
  {
    name: 'Dr. Emily Carter',
    role: 'Faculty Advisor',
    avatar: 'EC',
    quote: 'As an administrator, I appreciate the oversight and streamlined approval process. It has made managing student organizations much more efficient and transparent.'
  },
];

const Testimonials = () => {
  return (
    <Box sx={{ py: 12, backgroundColor: 'background.default' }}>
      <Container maxWidth="lg">
        <Typography variant="h4" component="h2" align="center" gutterBottom sx={{ fontWeight: 'bold', mb: 10 }}>
          What Our Users Say
        </Typography>
        <Grid container spacing={4}>
          {testimonials.map((item) => (
            <Grid item xs={12} md={4} key={item.name}>
                <Card sx={{
                    p: 4,
                    backgroundColor: 'rgba(255, 255, 255, 0.6)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(0, 0, 0, 0.05)',
                    borderRadius: '16px',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between'
                }}>
                    <Box>
                        <FormatQuoteIcon sx={{ fontSize: 40, color: 'primary.main', mb: 2 }} />
                        <Typography variant="body1" sx={{ fontStyle: 'italic', mb: 3 }}>
                            {item.quote}
                        </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Avatar sx={{ bgcolor: 'primary.main', mr: 2, color: 'white' }}>{item.avatar}</Avatar>
                        <Box>
                            <Typography variant="h6" component="p" sx={{ fontWeight: 'bold' }}>
                                {item.name}
                            </Typography>
                            <Typography color="text.secondary">
                                {item.role}
                            </Typography>
                        </Box>
                    </Box>
                </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Testimonials; 