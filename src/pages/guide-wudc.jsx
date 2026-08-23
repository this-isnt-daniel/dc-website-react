import React from 'react';
import Box from '@mui/material/Box';
import PageHero from '../components/PageHero';
import InfoHub from '../components/InfoHub';
import wudcGuideSections from '../data/wudcGuide';
import styles from '../styles/infoStyles';

const GuideWudcPage = () => (
  <Box sx={styles.container}>
    <PageHero
      title="Guide to WUDC"
      subtitle="British Parliamentary debating at university level — the four teams, extensions, adjudication, and the jargon"
    />
    <InfoHub sections={wudcGuideSections} defaultSection="the-format" />
  </Box>
);

export default GuideWudcPage;
