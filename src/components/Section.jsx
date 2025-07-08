import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { motion } from 'framer-motion';

const Section = ({ title, children, ...props }) => {
  return (
    <Box component="section" sx={{ py: 12 }} {...props}>
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Typography variant="h2" component="h2" align="center" gutterBottom sx={{ fontWeight: 'bold', mb: 10 }}>
            {title}
          </Typography>
          {children}
        </motion.div>
      </Container>
    </Box>
  );
};

export default Section; 