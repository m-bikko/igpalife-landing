import React from 'react';
import { Grid, Card, CardContent, Typography, Box, Avatar } from '@mui/material';
import { motion } from 'framer-motion';

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
    <Grid container spacing={4} justifyContent="center">
      {teamMembers.map((member, index) => (
        <Grid item xs={12} sm={6} md={2.4} key={member.name}>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                style={{ height: '100%' }}
            >
              <Card sx={{
                textAlign: 'center',
                p: 3,
                borderRadius: '16px',
                height: '100%',
                bgcolor: 'background.default'
              }}>
                <Avatar sx={{ width: 80, height: 80, margin: '0 auto 16px', bgcolor: 'secondary.main', fontSize: '2rem', color: 'white' }}>
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
          </motion.div>
        </Grid>
      ))}
    </Grid>
  );
};

export default Team; 