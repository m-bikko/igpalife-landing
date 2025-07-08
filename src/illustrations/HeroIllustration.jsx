import React from 'react';
import { Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { motion } from 'framer-motion';

const floatingVariant = {
    float: (i) => ({
        y: [0, -10, 0],
        transition: {
            duration: 3 + i * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
        },
    }),
};

const HeroIllustration = () => {
    const theme = useTheme();
    return (
        <Box position="relative" width={1} height={1}>
            <svg width="100%" height="100%" viewBox="0 0 500 500">
                {/* Abstract shapes and lines */}
                <motion.circle cx="100" cy="100" r="80" fill={theme.palette.primary.light} opacity="0.5" variants={floatingVariant} custom={1} animate="float" />
                <motion.circle cx="400" cy="400" r="100" fill={theme.palette.secondary.light} opacity="0.4" variants={floatingVariant} custom={2} animate="float" />
                <path d="M 50,450 Q 250,250 450,50" stroke={theme.palette.primary.main} strokeWidth="2" fill="none" strokeDasharray="5,5" />
                <path d="M 100,150 C 200,50 350,50 450,150" stroke={theme.palette.secondary.main} strokeWidth="3" fill="none" />

                {/* Floating "UI" elements */}
                <motion.g variants={floatingVariant} custom={3} animate="float">
                    <rect x="50" y="200" width="150" height="100" rx="10" fill={theme.palette.background.paper} stroke={theme.palette.divider} />
                    <rect x="70" y="220" width="110" height="10" rx="5" fill={theme.palette.grey[200]} />
                    <rect x="70" y="240" width="80" height="10" rx="5" fill={theme.palette.grey[200]} />
                </motion.g>

                <motion.g variants={floatingVariant} custom={1.5} animate="float">
                    <rect x="300" y="300" width="120" height="80" rx="10" fill={theme.palette.background.paper} stroke={theme.palette.divider} />
                    <circle cx="325" cy="325" r="10" fill={theme.palette.primary.main} />
                    <rect x="345" y="320" width="60" height="10" rx="5" fill={theme.palette.grey[200]} />
                </motion.g>
            </svg>
        </Box>
    );
};

export default HeroIllustration; 