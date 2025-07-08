import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import { motion } from 'framer-motion';

const CTA = () => {
  return (
    <Box sx={{ bgcolor: 'primary.main', py: 10, color: 'white' }}>
      <Container maxWidth="md">
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
        >
            <Typography variant="h3" component="h2" align="center" gutterBottom sx={{ fontWeight: 'bold' }}>
              Ready to Streamline Your Campus Life?
            </Typography>
            <Typography variant="h6" align="center" sx={{ my: 4, opacity: 0.9 }}>
              Join thousands of students and clubs already making the most of their university experience with iGPALife.
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
              <Button 
                variant="contained" 
                color="secondary" 
                size="large" 
                sx={{ 
                    borderRadius: '50px', 
                    px: 5, 
                    py: 1.5, 
                    fontSize: '1.1rem',
                    color: 'primary.main'
                }}
              >
                Sign Up for Free
              </Button>
            </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default CTA; 