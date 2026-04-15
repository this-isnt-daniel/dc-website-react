import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Collapse from '@mui/material/Collapse';

const InfoPage = () => {
  const [expandedSection, setExpandedSection] = useState('tournament');

  const resources = {
    tournament: {
      title: 'Tournament Standards',
      subtitle: 'For Organizers',
      icon: '🏆',
      color: '#ff4500', // Orange-red
      description: 'Everything tournament organizers need to run DC-endorsed events',
      items: [
        {
          title: 'Endorsement Conditions',
          description: 'Official guidelines for DC tournament endorsement and approval process',
          icon: '✓',
          type: 'PDF',
          new: false
        },
        {
          title: 'Tabulation Rules',
          description: 'Standard scoring methodology and breaking team calculations',
          icon: '📊',
          type: 'Guide',
          new: false
        },
        {
          title: 'Tabbycat Platform Guide',
          description: 'Complete tutorial on using the tournament management system',
          icon: '💻',
          type: 'Tutorial',
          new: false
        },
        {
          title: 'Motion Committee Submission',
          description: 'Submit your tournament motions for review',
          icon: '📧',
          type: 'Form',
          new: false,
          action: true
        },
        {
          title: 'Motion Archive',
          description: 'Searchable database of 500+ motions from past Sri Lankan tournaments',
          icon: '🗄️',
          type: 'Database',
          new: true
        },
      ]
    },
    adjudication: {
      title: 'Adjudication Toolkit',
      subtitle: 'For Judges',
      icon: '⚖️',
      color: '#dc2626', // Bright red
      description: 'Resources to help adjudicators deliver consistent, high-quality feedback',
      items: [
        {
          title: 'Local Adjudication Scale',
          description: 'Sri Lankan 60-80 speaker scoring rubric with detailed breakdowns',
          icon: '📏',
          type: 'Reference',
          new: false
        },
        {
          title: 'WSDC Briefing Documents',
          description: 'International adjudication standards from WSDC 2023',
          icon: '🌍',
          type: 'PDF',
          new: false
        },
        {
          title: 'Speaker Tabs Archive',
          description: 'Historical tournament results and score distributions',
          icon: '📈',
          type: 'Archive',
          new: false
        },
        {
          title: 'Adjudicator Registry',
          description: '150+ DC-accredited judges with contact info and accreditation levels',
          icon: '👥',
          type: 'Directory',
          new: true
        },
      ]
    },
    debaters: {
      title: 'Debater\'s Growth',
      subtitle: 'For Students',
      icon: '🎓',
      color: '#8B0000', // Deep red
      description: 'Tools and guidance to help debaters improve and compete nationally',
      items: [
        {
          title: 'National Team Selection Path',
          description: 'Complete guide to National Pool trials and CV requirements',
          icon: '🇱🇰',
          type: 'Guide',
          new: false
        },
        {
          title: 'Debating Resource Library',
          description: 'Curated collection of case studies, frameworks, and practice materials',
          icon: '📚',
          type: 'Library',
          new: false
        },
        {
          title: 'Video Library',
          description: 'Watch 50+ championship finals from Sri Lankan tournaments',
          icon: '🎥',
          type: 'Videos',
          new: true
        },
        {
          title: 'Coach Matching Service',
          description: 'Request to be paired with an experienced debate coach',
          icon: '🤝',
          type: 'Form',
          new: true,
          action: true
        },
        {
          title: 'Institutional Registry',
          description: 'Directory of 200+ active schools and debate societies',
          icon: '🏫',
          type: 'Directory',
          new: true
        },
        {
          title: 'FAQs',
          description: 'Answers to common questions about competitive debate in Sri Lanka',
          icon: '❓',
          type: 'FAQ',
          new: false
        },
      ]
    }
  };

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <Box sx={{ minHeight: '100vh', backgroundColor: '#121212', fontFamily: 'Montserrat, sans-serif' }}>
      {/* Header */}
      <Box sx={{ backgroundColor: '#050505', p: { xs: 4, md: 6 }, pb: { xs: 6, md: 8 }, borderBottom: '1px solid #222', textAlign: 'center' }}>
        <Box sx={{ maxWidth: '1200px', mx: 'auto' }}>
          <Box sx={{ display: 'inline-block', p: '8px 24px', backgroundColor: '#8B0000', color: '#fff', fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '2px', borderRadius: '50px', mb: 3 }}>
            Resource Center
          </Box>
          <Typography variant="h1" sx={{ fontSize: { xs: '2.5rem', md: '4rem' }, fontWeight: 900, mb: 2, color: '#ffffff', fontFamily: 'Montserrat' }}>
            Tools & Resources
          </Typography>
          <Typography sx={{ fontSize: { xs: '1rem', md: '1.25rem' }, color: '#aaaaaa', maxWidth: '700px', mx: 'auto', lineHeight: 1.6, fontFamily: 'Montserrat' }}>
            Comprehensive toolkit organized by role: Organizers, Judges, and Debaters
          </Typography>
        </Box>
      </Box>

      {/* Quick Stats */}
      <Box sx={{ maxWidth: '1200px', mx: 'auto', p: 4, display: 'flex', justifyContent: 'center', gap: { xs: 4, md: 8 }, flexWrap: 'wrap', mt: -2 }}>
        <Box sx={{ textAlign: 'center' }}>
          <Typography sx={{ display: 'block', fontSize: { xs: '2rem', md: '2.5rem' }, fontWeight: 800, color: '#ffffff', mb: 0.5, fontFamily: 'Montserrat' }}>15</Typography>
          <Typography sx={{ fontSize: '0.9rem', color: '#888', fontWeight: 600, fontFamily: 'Montserrat', textTransform: 'uppercase', letterSpacing: '1px' }}>Total Resources</Typography>
        </Box>
        <Box sx={{ textAlign: 'center' }}>
          <Typography sx={{ display: 'block', fontSize: { xs: '2rem', md: '2.5rem' }, fontWeight: 800, color: '#ffffff', mb: 0.5, fontFamily: 'Montserrat' }}>5</Typography>
          <Typography sx={{ fontSize: '0.9rem', color: '#888', fontWeight: 600, fontFamily: 'Montserrat', textTransform: 'uppercase', letterSpacing: '1px' }}>New This Year</Typography>
        </Box>
        <Box sx={{ textAlign: 'center' }}>
          <Typography sx={{ display: 'block', fontSize: { xs: '2rem', md: '2.5rem' }, fontWeight: 800, color: '#ffffff', mb: 0.5, fontFamily: 'Montserrat' }}>3</Typography>
          <Typography sx={{ fontSize: '0.9rem', color: '#888', fontWeight: 600, fontFamily: 'Montserrat', textTransform: 'uppercase', letterSpacing: '1px' }}>Categories</Typography>
        </Box>
      </Box>

      {/* Accordion Sections */}
      <Box sx={{ maxWidth: '1200px', mx: 'auto', p: { xs: 2, md: 4 }, pb: 10, display: 'flex', flexDirection: 'column', gap: 3 }}>
        {Object.entries(resources).map(([key, category]) => {
          const isExpanded = expandedSection === key;
          
          return (
            <Box key={key} sx={{ background: '#1a1a1a', borderRadius: '16px', overflow: 'hidden', border: '1px solid #333', transition: 'border-color 0.3s' }}>
              {/* Section Header */}
              <Box
                component="button"
                onClick={() => toggleSection(key)}
                sx={{
                  width: '100%',
                  p: { xs: 2, md: 3 },
                  background: 'transparent',
                  border: 'none',
                  borderLeft: `4px solid ${isExpanded ? category.color : '#333'}`,
                  cursor: 'pointer',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  transition: 'all 0.3s',
                  textAlign: 'left',
                  outline: 'none',
                  '&:focus': { outline: 'none' },
                  '&:focus-visible': { outline: 'none' },
                  '@media (hover: hover)': {
                      '&:hover': {
                          backgroundColor: 'rgba(255,255,255,0.02)'
                      }
                  },
                  WebkitTapHighlightColor: 'transparent'
                }}
              >
                <Box sx={{ display: 'flex', gap: { xs: 2, md: 3 }, alignItems: 'center', flex: 1 }}>
                  <Box sx={{
                    width: { xs: '50px', md: '70px' },
                    height: { xs: '50px', md: '70px' },
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: { xs: '1.5rem', md: '2rem' },
                    flexShrink: 0,
                    background: 'rgba(0, 0, 0, 0.4)',
                    border: `1px solid ${category.color}40`,
                  }}>
                    {category.icon}
                  </Box>
                  <Box sx={{ flex: 1 }}>
                    <Typography sx={{ fontSize: { xs: '1.25rem', md: '1.75rem' }, fontWeight: 800, mb: 0.5, color: '#ffffff', fontFamily: 'Montserrat' }}>
                      {category.title}
                    </Typography>
                    <Typography sx={{ fontSize: '0.9rem', color: category.color, fontWeight: 700, mb: 0.5, fontFamily: 'Montserrat', textTransform: 'uppercase', letterSpacing: '1px' }}>
                      {category.subtitle}
                    </Typography>
                    <Typography sx={{ fontSize: { xs: '0.85rem', md: '0.95rem' }, color: '#aaa', lineHeight: 1.5, maxWidth: '600px', fontFamily: 'Montserrat', display: { xs: 'none', sm: 'block' } }}>
                      {category.description}
                    </Typography>
                  </Box>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <Box sx={{
                    padding: '8px 16px',
                    background: '#242424',
                    borderRadius: '50px',
                    fontSize: '0.85rem',
                    fontWeight: 700,
                    color: '#ccc',
                    fontFamily: 'Montserrat',
                    display: { xs: 'none', sm: 'block' }
                  }}>
                    {category.items.length} Resources
                  </Box>
                  <KeyboardArrowDownIcon sx={{ 
                    fontSize: '2rem', 
                    color: '#888', 
                    transition: 'transform 0.3s', 
                    transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)' 
                  }} />
                </Box>
              </Box>

              {/* Section Content */}
              <Collapse in={isExpanded} timeout="auto" unmountOnExit>
                <Box sx={{
                  background: '#121212',
                  p: { xs: 2, md: 4 },
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                  gap: 3,
                  borderTop: '1px solid #222'
                }}>
                  {category.items.map((item, idx) => (
                    <Box 
                      key={idx} 
                      sx={{
                        background: '#1a1a1a',
                        p: 3,
                        borderRadius: '12px',
                        border: '1px solid #333',
                        transition: 'all 0.2s',
                        '&:hover': {
                          borderColor: category.color,
                          transform: 'translateY(-2px)',
                          boxShadow: `0 4px 20px ${category.color}15`
                        }
                      }}
                    >
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                        <Box sx={{
                          width: '40px',
                          height: '40px',
                          borderRadius: '8px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '1.25rem',
                          background: '#242424',
                          border: `1px solid ${category.color}40`,
                        }}>
                          {item.icon}
                        </Box>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, alignItems: 'flex-end' }}>
                          {item.new && (
                            <Box sx={{ padding: '4px 8px', background: category.color, color: '#fff', fontSize: '0.65rem', fontWeight: 800, borderRadius: '4px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                              New
                            </Box>
                          )}
                          {item.action && (
                            <Box sx={{ padding: '4px 8px', background: '#f59e0b', color: '#000', fontSize: '0.65rem', fontWeight: 800, borderRadius: '4px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                              Action
                            </Box>
                          )}
                        </Box>
                      </Box>
                      
                      <Typography sx={{ fontSize: '1.1rem', fontWeight: 700, mb: 1, color: '#ffffff', fontFamily: 'Montserrat' }}>
                        {item.title}
                      </Typography>
                      <Typography sx={{ fontSize: '0.9rem', color: '#aaa', lineHeight: 1.5, mb: 3, fontFamily: 'Montserrat' }}>
                        {item.description}
                      </Typography>
                      
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', pt: 2, borderTop: '1px solid #333' }}>
                        <Typography sx={{ fontSize: '0.75rem', fontWeight: 700, color: '#777', textTransform: 'uppercase', letterSpacing: '1px', fontFamily: 'Montserrat' }}>
                          {item.type}
                        </Typography>
                        <Button sx={{ 
                          fontSize: '0.8rem', 
                          fontWeight: 700, 
                          color: category.color,
                          fontFamily: 'Montserrat',
                          '&:hover': { background: `${category.color}15` }
                        }}>
                          Access →
                        </Button>
                      </Box>
                    </Box>
                  ))}
                </Box>
              </Collapse>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default InfoPage;