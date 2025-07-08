import React from 'react';
import { Grid, Typography, Box, Avatar } from '@mui/material';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import { motion } from 'framer-motion';

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
    <Grid container spacing={8}>
      {testimonials.map((item, index) => (
        <Grid item xs={12} md={4} key={item.name}>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
            >
                <Box sx={{ height: '100%' }}>
                    <FormatQuoteIcon sx={{ fontSize: 60, color: 'primary.main', mb: 2, opacity: 0.2 }} />
                    <Typography variant="h6" sx={{ fontStyle: 'italic', mb: 3 }}>
                        {item.quote}
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', mt: 4 }}>
                        <Avatar sx={{ bgcolor: 'primary.main', mr: 2, color: 'white' }}>{item.avatar}</Avatar>
                        <Box>
                            <Typography variant="body1" component="p" sx={{ fontWeight: 'bold' }}>
                                {item.name}
                            </Typography>
                            <Typography color="text.secondary" variant="body2">
                                {item.role}
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </motion.div>
        </Grid>
      ))}
    </Grid>
  );
};

export default Testimonials; 