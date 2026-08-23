import React from 'react';
import Box from '@mui/material/Box';
import PageHero from '../components/PageHero';
import InfoHub from '../components/InfoHub';
import tournamentEssentialsSections from '../data/tournamentEssentials';
import styles from '../styles/infoStyles';

const TournamentEssentialsPage = () => (
  <Box sx={styles.container}>
    <PageHero
      title="Tournament Essentials"
      subtitle="Everything an organizing committee needs — permissions, endorsement, adjudication standards, tabulation, and the document library"
    />
    <InfoHub sections={tournamentEssentialsSections} defaultSection="organizing-tournaments" />
  </Box>
);

export default TournamentEssentialsPage;
