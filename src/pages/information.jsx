import React from 'react';
import Box from '@mui/material/Box';
import PageHero from '../components/PageHero';
import InfoHub from '../components/InfoHub';
import infoSections from '../data/infoSections';
import styles from '../styles/infoStyles';

const InformationHub = () => (
  <Box sx={styles.container}>
    <PageHero
      title="Information & Resources"
      subtitle="Everything you need to know about the Debaters' Council, tournaments, and competitive debate in Sri Lanka"
    />
    <InfoHub sections={infoSections} defaultSection="getting-started" />
  </Box>
);

export default InformationHub;
