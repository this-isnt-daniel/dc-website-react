import React from 'react';
import Box from '@mui/material/Box';
import PageHero from '../components/PageHero';
import InfoHub from '../components/InfoHub';
import wsdcGuideSections from '../data/wsdcGuide';
import styles from '../styles/infoStyles';

const GuideWsdcPage = () => (
  <Box sx={styles.container}>
    <PageHero
      title="Guide to WSDC"
      subtitle="The World Schools format as it is run in Sri Lanka — speaker roles, adjudication, and National Pool eligibility"
    />
    <InfoHub sections={wsdcGuideSections} defaultSection="the-format" />
  </Box>
);

export default GuideWsdcPage;
