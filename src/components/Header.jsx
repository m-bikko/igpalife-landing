import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <AppBar
      position="sticky"
      elevation={scrolled ? 4 : 0}
      sx={{
        backdropFilter: scrolled ? 'blur(10px)' : 'none',
        backgroundColor: scrolled ? 'rgba(18, 18, 18, 0.8)' : 'transparent',
        transition: 'background-color 0.3s ease, box-shadow 0.3s ease',
      }}
    >
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: 'bold' }}>
          iGPALife
        </Typography>
        <Box>
          <Button color="inherit" sx={{ fontWeight: 600 }}>Home</Button>
          <Button color="inherit" sx={{ fontWeight: 600 }}>About</Button>
          <Button color="inherit" sx={{ fontWeight: 600 }}>Contact</Button>
          <Button variant="contained" color="primary" sx={{ ml: 2, borderRadius: '20px', fontWeight: 600 }}>
            Login
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header; 