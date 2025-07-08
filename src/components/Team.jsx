import React from 'react';
import { Container, Grid, Card, CardContent, Typography, Box, Avatar } from '@mui/material';

const teamMembers = [
  {
    name: 'Monti',
    role: 'Project Manager',
    avatar: 'M',
  },
  {
    name: 'Beimbet',
    role: 'UI/UX Designer',
    avatar: 'B',
  },
  {
    name: 'Archy',
    role: 'Lead Frontend Developer',
    avatar: 'A',
  },
  {
      name: 'Yasin',
      role: 'Frontend Developer',
      avatar: 'Y',
  },
  {
    name: 'Nurdaulet',
    role: 'Backend Developer',
    avatar: 'N',
  },
];

const Team = () => {
  return (
    <Box sx={{ py: 12 }}>
      <Container maxWidth="lg">
        <Typography variant="h4" component="h2" align="center" gutterBottom sx={{ fontWeight: 'bold', mb: 10 }}>
          Meet the Team
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {teamMembers.map((member) => (
            <Grid item xs={12} sm={6} md={2.4} key={member.name}>
              <Card sx={{
                textAlign: 'center',
                p: 3,
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '16px',
                height: '100%',
              }}>
                <Avatar sx={{ width: 80, height: 80, margin: '0 auto 16px', bgcolor: 'secondary.main', fontSize: '2rem' }}>
                  {member.avatar}
                </Avatar>
                <CardContent>
                  <Typography variant="h6" component="h3" sx={{ fontWeight: 'bold' }}>
                    {member.name}
                  </Typography>
                  <Typography color="text.secondary">
                    {member.role}
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

export default Team; 