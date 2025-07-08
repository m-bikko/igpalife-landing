import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Team from './components/Team';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';
import Section from './components/Section';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#673ab7',
      light: '#ede7f6',
    },
    secondary: {
      main: '#ffc107',
      light: '#fff8e1',
    },
    background: {
      default: '#ffffff',
      paper: '#f5f5f5',
    },
    text: {
      primary: '#212121',
      secondary: '#616161',
    },
    success: {
        main: '#4caf50',
    },
  },
  typography: {
    fontFamily: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 800,
      fontSize: '3.5rem',
      letterSpacing: '-1.5px',
    },
    h2: {
      fontWeight: 700,
      fontSize: '3rem',
      letterSpacing: '-0.5px',
    },
    h3: {
      fontWeight: 600,
      fontSize: '2.2rem',
    },
    h4: {
        fontWeight: 600,
        fontSize: '1.8rem',
    },
    h5: {
        fontWeight: 500,
    },
    h6: {
        fontWeight: 500,
    },
    button: {
        textTransform: 'none',
        fontWeight: 600,
    }
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <main>
        <Hero />
        <Section title="A Platform for Everyone">
          <Features />
        </Section>
        <Section title="Meet the Team" sx={{ bgcolor: 'background.paper' }}>
            <Team />
        </Section>
        <Section title="What Our Users Say">
            <Testimonials />
        </Section>
        <CTA />
      </main>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
