import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Collapse from '@mui/material/Collapse';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import RichText from './RichText';
import styles from '../styles/infoStyles';

// Sidebar-plus-accordion hub shared by /information and the guide pages.
//
// `sections` is an object keyed by slug:
//   { title, description, faqs: [{ id, question, answer }], documents?: [{ title, type, size, link, description? }] }
// A section renders a document grid when it declares `documents`, otherwise FAQ accordions.
const InfoHub = ({ sections, defaultSection }) => {
    const sectionKeys = Object.keys(sections);
    const [activeSection, setActiveSection] = useState(defaultSection || sectionKeys[0]);
    const [expandedFaq, setExpandedFaq] = useState(null);

    const currentSection = sections[activeSection] || sections[sectionKeys[0]];

    const renderContent = (sectionKey) => {
        const section = sections[sectionKey];
        if (!section) return null;

        if (section.documents?.length) {
            return (
                <Box sx={styles.documentsSection}>
                    <Box sx={styles.documentCategory}>
                        <Box sx={styles.documentList}>
                            {section.documents.map((doc, idx) => (
                                <Box
                                    component="a"
                                    key={idx}
                                    href={doc.link || '#'}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    sx={{ ...styles.documentItem, textDecoration: 'none', transition: 'all 0.2s', '&:hover': { background: '#2a2a2a', transform: 'translateY(-4px)', boxShadow: '0 8px 24px rgba(0,0,0,0.4)', borderColor: '#8B0000' } }}
                                >
                                    <Box sx={styles.documentInfo}>
                                        <Typography component="h4" sx={styles.documentTitle}>{doc.title}</Typography>
                                        {doc.description && <Typography sx={styles.documentDescription}>{doc.description}</Typography>}
                                        <Box sx={styles.documentMeta}>
                                            <Typography component="span" sx={styles.documentType}>{doc.type}</Typography>
                                            {doc.size && doc.size !== '—' && (
                                                <>
                                                    <Box component="span" sx={styles.metaDivider}>•</Box>
                                                    <Typography component="span" sx={styles.documentSize}>{doc.size}</Typography>
                                                </>
                                            )}
                                        </Box>
                                    </Box>
                                    <Typography sx={{ color: '#ff4d4d', fontWeight: 'bold', fontSize: '0.85rem', mt: 'auto', pt: 2, fontFamily: 'Montserrat', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                        {doc.type === 'PDF' ? 'DOWNLOAD PDF ↓' : 'VISIT LINK →'}
                                    </Typography>
                                </Box>
                            ))}
                        </Box>
                    </Box>
                </Box>
            );
        }

        return (
            <Box sx={styles.faqSection}>
                {(section.faqs || []).map((faq) => {
                    const isExpanded = expandedFaq === faq.id;
                    return (
                        <Box key={faq.id} sx={styles.faqItem}>
                            <Box
                                component="button"
                                onClick={() => setExpandedFaq(isExpanded ? null : faq.id)}
                                sx={styles.faqQuestion}
                            >
                                <Box component="span" sx={styles.faqQuestionText}>{faq.question}</Box>
                                <KeyboardArrowDownIcon sx={{
                                    ...styles.faqIcon,
                                    transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
                                    fontSize: '1.25rem',
                                }} />
                            </Box>
                            <Collapse in={isExpanded} timeout="auto" unmountOnExit>
                                <Box sx={styles.faqAnswerContent}>
                                    <RichText text={faq.answer} />
                                </Box>
                            </Collapse>
                        </Box>
                    );
                })}
            </Box>
        );
    };

    return (
        <Box sx={styles.content}>

            {/* ========================================= */}
            {/* DESKTOP LAYOUT: SIDEBAR + MAIN PANE */}
            {/* ========================================= */}
            <Box sx={{ display: { xs: 'none', lg: 'grid' }, gridTemplateColumns: '320px 1fr', gap: '3rem', width: '100%' }}>

                {/* Sidebar Navigation */}
                <Box component="aside" sx={styles.sidebar}>
                    <Box sx={styles.sidebarHeader}>Browse by Topic</Box>
                    {Object.entries(sections).map(([key, section]) => (
                        <Box
                            component="button"
                            key={key}
                            onClick={() => {
                                setActiveSection(key);
                                setExpandedFaq(null);
                            }}
                            sx={{
                                ...styles.sidebarButton,
                                ...(activeSection === key ? styles.sidebarButtonActive : {})
                            }}
                        >
                            <Box sx={styles.sidebarText}>
                                <Box sx={styles.sidebarTitle}>{section.title}</Box>
                                <Box sx={styles.sidebarDesc}>{section.description}</Box>
                            </Box>
                            {activeSection === key && (
                                <Box component="span" sx={{ ...styles.activeIndicator, display: 'flex', alignItems: 'center' }}>
                                    <KeyboardArrowRightIcon />
                                </Box>
                            )}
                        </Box>
                    ))}
                </Box>

                {/* Main Content Area */}
                <Box component="main" sx={styles.mainContent}>
                    <Box sx={styles.sectionHeader}>
                        <Box>
                            <Typography component="h2" sx={styles.sectionTitle}>{currentSection.title}</Typography>
                            <Typography sx={styles.sectionDescription}>{currentSection.description}</Typography>
                        </Box>
                    </Box>

                    {renderContent(activeSection)}
                </Box>
            </Box>

            {/* ========================================= */}
            {/* MOBILE LAYOUT: NESTED ACCORDIONS */}
            {/* ========================================= */}
            <Box sx={{ display: { xs: 'flex', lg: 'none' }, flexDirection: 'column', gap: '1rem', width: '100%' }}>
                {Object.entries(sections).map(([key, section]) => {
                    const isSectionOpen = activeSection === key;
                    return (
                        <Box key={key} sx={{ background: '#1a1a1a', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,0,0,0.3)' }}>
                            <Box
                                component="button"
                                onClick={() => {
                                    setActiveSection(isSectionOpen ? null : key);
                                    setExpandedFaq(null);
                                }}
                                sx={{
                                    ...styles.sidebarButton,
                                    marginBottom: 0,
                                    borderRadius: 0,
                                    padding: '1.5rem',
                                    background: isSectionOpen ? '#8B0000' : 'transparent',
                                    borderLeft: 'none',
                                    '&:hover': {
                                        background: isSectionOpen ? '#a10000' : '#242424',
                                    }
                                }}
                            >
                                <Box sx={styles.sidebarText}>
                                    <Box sx={styles.sidebarTitle}>{section.title}</Box>
                                    <Box sx={styles.sidebarDesc}>{section.description}</Box>
                                </Box>
                                <KeyboardArrowDownIcon sx={{
                                    fontSize: '1.5rem',
                                    color: '#fff',
                                    transform: isSectionOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                                    transition: 'transform 0.3s'
                                }} />
                            </Box>

                            <Collapse in={isSectionOpen} timeout="auto" unmountOnExit>
                                <Box sx={{ padding: '0 1.5rem 1.5rem 1.5rem', background: '#1a1a1a' }}>
                                    <Box sx={{ pt: 2, borderTop: '1px solid #333' }}>
                                        {renderContent(key)}
                                    </Box>
                                </Box>
                            </Collapse>
                        </Box>
                    );
                })}
            </Box>

        </Box>
    );
};

export default InfoHub;
