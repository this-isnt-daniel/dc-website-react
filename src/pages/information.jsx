import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Collapse from '@mui/material/Collapse';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const InformationHub = () => {
  const [activeSection, setActiveSection] = useState('getting-started');
  const [expandedFaq, setExpandedFaq] = useState(null);

  const sections = {
    'getting-started': {
      title: 'Getting Started',
      description: 'For schools and new debaters',
      faqs: [
        {
          id: 'what-we-do',
          question: 'What do we do?',
          answer: `The Debaters' Council is the premier school debating body in Sri Lanka. We organize, govern, and elevate competitive debating across the nation.

**What We Do:**
- Endorse and standardize debating tournaments to ensure a high-quality competitive circuit nationwide.
- Help schools establish and sustain debating societies
- Conduct nationwide workshops and introductory sessions to promote debating.
- Select and train the National Debating Team to represent Sri Lanka at the World Schools Debating Championship (WSDC)
- Maintain standard adjudication and tabulation rules for fairness and competitive integrity

Currently, official DC Membership is open exclusively to schools within the Sri Lankan debating circuit.
**Benefits for DC Members:**
- Official invitations to all DC-endorsed tournaments
- Access to exclusive workshops and training sessions for both students and teachers
- Eligibility for students to try out for the National Team`
        },
        {
          id: 'register-school',
          question: 'How can my school register with the Debaters\' Council?',
          answer: `To register your school as a DC member institution, please complete the [registration form](https://forms.gle/wvtiLdaoKhs2p7uc7).

Before filling out the form, ensure you have:
1. **A formal letter** expressing your club's intent to join, signed by the Teacher-in-Charge or Principal (to be uploaded in the form)
2. **Proof of payment** for the annual membership fee of LKR 4,000 (payment instructions are provided in the form)
3. **Contact details** for a designated student representative (ideally the team captain) for WhatsApp communication

Contact us at debaterscouncil@gmail.com if you have any questions.`
        },
        {
          id: 'benefits-of-registration',
          question: 'Why Join the Debaters\' Council?',
          answer: `- **Access to Competitions:** Your school will be added to an emailing list that all other DC registered schools are required to invite when organizing tournaments. Additionally, your school will receive priority invitations to participate in these events over other schools
- **Discounted Registration Fees:** Enjoy reduced fees for all Debaters' Council workshops and other activities
- **Networking Opportunities:** Connect with other debating clubs, coaches, and debaters across the region
- **Resource Sharing:** More access to debate materials and coaching resources
- **Official Recognition:** Gain official recognition and credibility for your school's debating program
- **Regular Updates:** Stay informed about upcoming events, competitions, and announcements
- **Community Support:** Be part of a vibrant community dedicated to promoting debate and critical thinking`
        },
        {
          id: 'first-tournament',
          question: 'How do I participate in my first tournament?',
          answer: `Getting started in competitive debate:

1. **Join your school's debating club** or start one if it doesn't exist
2. **Learn the format** - Most Sri Lankan tournaments use WSDC (World Schools) format
3. **Practice & Improve** - See the 'Improving as a Debater' section on this page for resources and tips
4. **Register for tournaments** - Watch for announcements in the member schools groups for tournaments

You can reach out to us via email if you need help with setting up a club in your school`
        },
        {
          id: 'debate-formats',
          question: 'What debate formats are used in Sri Lanka?',
          answer: `The main formats in the Sri Lankan circuit:

**WSDC (World Schools Debating Championship)** - Our primary format ([Read the WSDC Handbook](https://docs.google.com/document/d/10I7HdhOEDC2JtekXl-xQ--5DIlMrxegWXWwlL7z9DIs/edit?tab=t.pdr4gqv6xyvn))
- 3 speakers per team, 8-minute speeches
- Impromptu motions (30 min prep)
- Reply speeches (4 minutes)


**British Parliamentary (BP)** - Used at university level ([Read the WUDC Manual](https://drive.google.com/file/d/1pXoKtAdigoL5w94cKDcQ8nCQ5fN06pMp/view))
- 4 teams of 2 speakers
- 7-minute speeches
- Impromptu motions(15 min prep)

Download our complete format guides in the Resources section.`
        },
      ]
    },
    'national-team': {
      title: 'National Team Selection',
      description: 'Path to representing Sri Lanka',
      faqs: [
        {
          id: 'selection-process',
          question: 'How does the National Team selection process work?',
          answer: `Each year the opportunity to apply for the national team pool is given to debaters.
          
Submit your debate CV highlighting your personal achievements as a speaker and your debate experience.

Shortlisted applicants may again be called in for a selection process if deemed necessary.

If chosen for the pool, you embark on specialized training. This training refines your skills while also presenting another opportunity for evaluation.

The culmination of this training initiates the final selection phase, determining the composition of the national team and development squad.`
        },
        {
          id: 'pool-eligibility',
          question: 'Who is eligible for the National Pool?',
          answer: `Eligibility requirements for the National Pool:

As per the WSDC Tournament Committee and Debate Rules (updated September 2024), debaters must fulfill all of the following criteria regarding their current education status and age to be eligible for the National Pool 2026:

**(4.2) Age**
A member of a nation's team must:
- a. have reached their 14th birthday by the first day of debates at the Championships, and
- b. not have reached their 20th birthday by the day of the grand final at the Championships.

**(4.3) Education Status**
- a. A member of a nation's team must have been attending classes as a full-time student at a secondary school in the nation within eight months of the first day of debates at the Championship. (i.e. to apply, you must be taking classes upto December 2025)
- b. A member of a nation's team must not be enrolled at a tertiary or post-secondary school institution where their first term of study begins on or before the first day of debates at the Championship. (i.e. to apply, you must not be enrolled in a tertiary instituition)
- c. For the purposes of this rule,
  - (i) Students completing an extra year of schooling beyond normal requirements at an institution that is plainly a secondary school only, but which gives no tertiary credits, are eligible providing they meet the age criteria.
  - (ii) Students completing an extra year of schooling beyond normal requirements at an institution that is plainly a secondary school only, but who may be given credits at some subsequent tertiary institution, are eligible providing they meet the age criteria.
  - (iii) Students completing at least one year or more, at an institution that spans both secondary and tertiary levels, but who may be given credits at the tertiary level, are eligible providing they meet the age criteria and are not clearly completing the first year at a tertiary level.
  - (iv) Students completing at least one year or more, at an institution that gives credits at the tertiary levels for entry into another tertiary institution at the third year or above, are ineligible even if they meet the age criteria.
  - (v) A student who is home-schooled is eligible to be a member of a team representing the nation in which the student lives provided that they are studying at below tertiary level and provided they meet the age criteria in 4.2.`
        },
        {
          id: 'development-squad',
          question: 'How can I apply for the development squad?',
          answer: `If you haven't made it to the National Team, don't worry! We also open Development Squad applications. Here we choose people who have given good performances in the local circuit and train them with experienced coaches to help them improve their performance in the local circuit and also boost their chances of making it to the National Team the next year.`
        }

      ]
    },
    'organizing-tournaments': {
      title: 'Tournament Organization',
      description: 'For organizers and hosts',
      faqs: [
        {
          id: 'how-to-organize',
          question: 'How to organize a tournament?',
          answer: `Organizing a debate tournament is a complex task, and we recommend getting the aid of a person with prior tournament organizing experience in order to ensure a smooth event. The process can be streamlined into a sequence of structured steps as outlined below. You can find a step-by-step guide on how to organize a tournament here.

**1. Obtain Permissions**
Seek the necessary permissions from relevant authorities within your educational institution to host an event. Obtain official clearance to organize the tournament on your school premises.

**2. Request Endorsement**
Initiate the process by sending a formal email to our organization, requesting endorsement for the tournament. In your email, kindly provide details about the scale of the tournament and the proposed dates for the event. Please note that tournaments should not be organized on public holidays or on consecutive weekends. If a tournament by another institution is already scheduled to be held the week prior or following your proposed dates kindly consider rescheduling.

**3. Member School Invitations**
Extend formal invitations to all member schools associated with The Debaters' Council. The emails can be found in the DC schools registry. The school representative in the Tournament Coordination WhatsApp group is requested to share the invitation and registration link within the WhatsApp group as well.

**4. Inviting Adjudicators**
Extend invitations to experienced and qualified adjudicators for the tournament. While institutional judges undoubtedly contribute valuable expertise, we emphasize the importance of broadening the judging pool to ensure robustness and avoid over-dependence. Furthermore, it is important to establish a Core Adjudication Panel (CAP) which usually consists of 1-3 veteran adjudicators. The CAP is responsible for allocating judges, solving disputes, setting motions, issuing motion clarifications, and other such tasks.

**5. Submission of Motions**
Submit the proposed debate motions to the DC Motions Committee for approval by sending an email to dcmotionscommittee@gmail.com. These motions should be submitted at least two weeks prior to the scheduled tournament.

**6. Tabulation Process**
Utilize Tabbycat for tabulation throughout the tournament. It is imperative to adhere rigorously to all regulations and guidelines set forth by The Debaters' Council at all stages of tabulation.`
        },
        {
          id: 'tabulation-guide',
          question: 'How does tournament tabulation work?',
          answer: `DC Standard Tabulation Rules:

**Software & Oversight:**
- **Tabbycat Software:** All DC-endorsed tournaments utilize Tabbycat software for reliable and transparent tabulation.
- **Experienced CA:** Each tournament must have an experienced Chief Adjudicator (CA) to manage and oversee the tabs.
- **DC Standards:** Tabs must be kept strictly up to the standards and regulations enforced by The Debaters' Council at all times.

**Speaker Scores:**
We strictly follow the standard WSDC scoring scale (60-80 points).

**Need a Tabmaster?**
If your organizing committee needs assistance finding an experienced tabmaster, please reach out to us at debaterscouncil@gmail.com and we can help connect you with qualified individuals.

Access the "Tabulation Rules & Procedures" PDF in Resources for complete methodology.`
        },
      ]
    },
    'improving-skills': {
      title: 'Improving as a Debater',
      description: 'Training and development',
      faqs: [
        {
          id: 'getting-better',
          question: 'How can I improve my debating skills?',
          answer: `Here are three key ways to improve your debating skills:

**1. Practice Regularly**
The best way to improve is through consistent practice. If you need help with individual or club coaching, you can reach out to us and we can set you up with a coach.

**2. Watch Debates**
There are a lot of online recorded resources available. Additionally, you can check the DC YouTube channel for motion debrief videos and recorded debates.

**3. Turn Up to Tournaments**
Participate in as many tournaments as you can. Practical experience is invaluable, and you will naturally improve by competing and learning from your rounds.

**Helpful Resources:**
- [The Debaters' Council YouTube Channel](https://youtube.com/@debaterscouncil-srilanka6367?si=3U62AWSq7-PzVGG-)
- [DebateData - Debate Motion Database](https://debatedata.io)
- [Debate Resources Compilation](https://docs.google.com/spreadsheets/d/1FkJ7FlD64-Kga9kwHVgm863lJTnmeC3abbwleCIQ9vY/htmlview#) *(Note: Not compiled by the DC; all credits go to the relevant authors)*`
        },
        {
          id: 'workshop-schedule',
          question: 'What workshops does DC offer?',
          answer: `We offer a variety of workshops to cater to different skill levels:

- **Intermediate Workshops:** Held every few months for school and universitty debaters looking to elevate their skills.
- **Introductory Workshops:** District-level sessions aimed at new debaters and emerging clubs.
- **Workshops for your Club:** We also conduct specialized workshops for clubs upon request.

If your club is interested in a workshop, please contact us at debaterscouncil@gmail.com.`
        },
      ]
    },
    'corporate-partnerships': {
      title: 'Corporate & Institutional',
      description: 'Workshops and partnerships',
      faqs: [
        {
          id: 'corporate-workshops',
          question: 'Does DC offer corporate workshops or tournaments?',
          answer: `We have in the past conducted corporate workshops and internal tournaments. If your organization is interested in such programs, please reach out to us at debaterscouncil@gmail.com and we can discuss further.`
        },
      ]
    },
    'resources-documents': {
      title: 'Resources',
      description: '',
      faqs: [] // No FAQs here, just document links
    }
  };

  const documents = {
    'Resources': [
      { title: 'Debaters\' Council YouTube Channel', type: 'Link', size: '—', link: 'https://youtube.com/@debaterscouncil-srilanka6367?si=3U62AWSq7-PzVGG-' },
      { title: 'Local Adjudication Scale', type: 'Link', size: '—', link: 'https://drive.google.com/file/d/1SxFif1-ylT1AbQ4UPaPXxgEDOjAJL92T/view?usp=sharing' },
      { title: 'Local Speaker Tabs', type: 'Link', size: '—', link: 'https://drive.google.com/drive/folders/1aNgvY6WZcbcq8bXN5sYksqZEdr56BNVK' },
      { title: 'Tabulation Rules & Procedures', type: 'PDF', size: '180 KB', link: 'https://drive.google.com/file/d/1Qjl_VzHmblrT66iIgNFqPpAb6HWb0yxC/view' },
      { title: 'Tournament Endorsement Conditions', type: 'PDF', size: '245 KB', link: 'https://drive.google.com/file/d/1yzSqXPLhnLlc2RdCudSaTsyBMYTVaUr4/view' },
    ]
  };

  const currentSection = sections[activeSection || 'getting-started'];

  // Helper function to render bold markdown (**text**), italics (*text*), and links ([text](url))
  const renderTextWithBold = (text) => {
    const parts = text.split(/(\*\*.*?\*\*|\*.*?\*|\[.*?\]\(.*?\))/g);
    return parts.map((part, index) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <Box component="span" key={index} sx={{ fontWeight: 'bold', color: '#ff4d4d' }}>{part.slice(2, -2)}</Box>;
      } else if (part.startsWith('*') && part.endsWith('*')) {
        return <Box component="span" key={index} sx={{ fontStyle: 'italic', color: '#ff4d4d' }}>{part.slice(1, -1)}</Box>;
      } else if (part.startsWith('[') && part.includes('](') && part.endsWith(')')) {
        const titleMatch = part.match(/\[(.*?)\]/);
        const urlMatch = part.match(/\((.*?)\)/);
        if (titleMatch && urlMatch) {
          return (
            <Box 
              component="a" 
              href={urlMatch[1]} 
              target="_blank" 
              rel="noopener noreferrer" 
              key={index} 
              sx={{ color: '#ff4d4d', textDecoration: 'underline', '&:hover': { color: '#ff7b7b' } }}
            >
              {titleMatch[1]}
            </Box>
          );
        }
      }
      return <React.Fragment key={index}>{part}</React.Fragment>;
    });
  };

  // Content Renderer for FAQs/Documents
  const renderContent = (sectionKey) => {
    const section = sections[sectionKey];
    if (!section) return null;

    if (sectionKey === 'resources-documents') {
      return (
        <Box sx={styles.documentsSection}>
          {Object.entries(documents).map(([category, docs]) => (
            <Box key={category} sx={styles.documentCategory}>
              <Typography component="h3" sx={styles.documentCategoryTitle}>{category}</Typography>
              <Box sx={styles.documentList}>
                {docs.map((doc, idx) => (
                  <Box 
                    component="a" 
                    key={idx} 
                    href={doc.link || '#'}
                    target={doc.type === 'Link' ? '_blank' : undefined}
                    rel={doc.type === 'Link' ? 'noopener noreferrer' : undefined}
                    sx={{ ...styles.documentItem, textDecoration: 'none', transition: 'all 0.2s', '&:hover': { background: '#2a2a2a', transform: 'translateY(-4px)', boxShadow: '0 8px 24px rgba(0,0,0,0.4)', borderColor: '#8B0000' } }}
                  >
                    <Box sx={styles.documentInfo}>
                      <Typography component="h4" sx={styles.documentTitle}>{doc.title}</Typography>
                      {doc.description && <Typography sx={styles.documentDescription}>{doc.description}</Typography>}
                      <Box sx={styles.documentMeta}>
                        <Typography component="span" sx={styles.documentType}>{doc.type}</Typography>
                        {doc.size !== '—' && (
                          <>
                            <Box component="span" sx={styles.metaDivider}>•</Box>
                            <Typography component="span" sx={styles.documentSize}>{doc.size}</Typography>
                          </>
                        )}
                      </Box>
                    </Box>
                    <Typography sx={{ color: '#ff4d4d', fontWeight: 'bold', fontSize: '0.85rem', mt: 'auto', pt: 2, fontFamily: 'Montserrat', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        {doc.type === 'Link' ? 'VISIT LINK →' : 'DOWNLOAD PDF ↓'}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Box>
          ))}
        </Box>
      );
    }

    return (
      <Box sx={styles.faqSection}>
        {section.faqs.map((faq) => {
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
                  {faq.answer.split('\n').map((paragraph, idx) => (
                    <Typography key={idx} sx={{...styles.answerParagraph, mt: paragraph.trim() === '' ? 0 : 1}}>
                      {renderTextWithBold(paragraph)}
                    </Typography>
                  ))}
                </Box>
              </Collapse>
            </Box>
          );
        })}
      </Box>
    );
  };

  return (
    <Box sx={styles.container}>
      {/* Header */}
      <Box sx={styles.header}>
        <Typography component="h1" sx={styles.title}>Information & Resources</Typography>
        <Typography sx={styles.subtitle}>
          Everything you need to know about the Debaters' Council, tournaments, and competitive debate in Sri Lanka
        </Typography>
      </Box>

      {/* Main Content Wrappers */}
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

            {/* Inner Content Component (FAQ Accordions / Documents) */}
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
    </Box>
  );
};

const styles = {
  container: {
    minHeight: '100vh',
    background: '#121212',
    fontFamily: 'Montserrat, sans-serif',
  },
  header: {
    background: '#050505',
    padding: { xs: '3rem 1.5rem', md: '4rem 2rem' },
    borderBottom: '1px solid #222',
    textAlign: 'center',
  },
  title: {
    fontSize: { xs: '2rem', md: '3rem' },
    fontWeight: '900',
    marginBottom: '1rem',
    color: '#fff',
    fontFamily: 'Montserrat',
  },
  subtitle: {
    fontSize: { xs: '1rem', md: '1.25rem' },
    color: '#aaa',
    maxWidth: '800px',
    margin: '0 auto',
    lineHeight: '1.6',
    fontFamily: 'Montserrat',
  },
  content: {
    maxWidth: '1400px',
    margin: '0 auto',
    padding: { xs: '2rem 1rem', md: '3rem 2rem' },
  },
  sidebar: {
    position: 'sticky',
    top: '2rem',
    alignSelf: 'start',
  },
  sidebarHeader: {
    fontSize: '0.85rem',
    fontWeight: '800',
    textTransform: 'uppercase',
    letterSpacing: '0.1em',
    color: '#888',
    marginBottom: '1.5rem',
    paddingLeft: '1rem',
    fontFamily: 'Montserrat',
  },
  sidebarButton: {
    width: '100%',
    padding: '1.25rem 1rem',
    background: '#1a1a1a',
    border: 'none',
    borderLeft: '3px solid transparent',
    borderRadius: '8px',
    marginBottom: '0.5rem',
    cursor: 'pointer',
    transition: 'all 0.2s',
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    textAlign: 'left',
    fontFamily: 'Montserrat',
    color: '#fff',
    outline: 'none',
    '&:hover': {
        background: '#242424',
    }
  },
  sidebarButtonActive: {
    background: '#8B0000',
    borderLeftColor: '#ff4d4d',
    boxShadow: '0 2px 8px rgba(139,0,0,0.4)',
    '&:hover': {
        background: '#8B0000',
    }
  },
  sidebarIcon: {
    fontSize: '1.75rem',
    flexShrink: 0,
  },
  sidebarText: {
    flex: 1,
  },
  sidebarTitle: {
    fontSize: '1rem',
    fontWeight: '700',
    color: '#fff',
    marginBottom: '0.25rem',
    fontFamily: 'Montserrat',
  },
  sidebarDesc: {
    fontSize: '0.85rem',
    color: '#bbb',
    fontFamily: 'Montserrat',
  },
  activeIndicator: {
    fontSize: '1.25rem',
    color: '#fff',
  },
  mainContent: {
    background: '#1a1a1a',
    borderRadius: '12px',
    padding: { xs: '1.5rem', md: '2.5rem' },
    boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
  },
  sectionHeader: {
    display: 'flex',
    gap: '1.5rem',
    marginBottom: '3rem',
    paddingBottom: '2rem',
    borderBottom: '2px solid #333',
    alignItems: 'center',
  },
  sectionIcon: {
    fontSize: { xs: '2.5rem', md: '3.5rem' },
  },
  sectionTitle: {
    fontSize: { xs: '1.75rem', md: '2.25rem' },
    fontWeight: '800',
    marginBottom: '0.5rem',
    color: '#fff',
    fontFamily: 'Montserrat',
  },
  sectionDescription: {
    fontSize: '1.05rem',
    color: '#aaa',
    fontFamily: 'Montserrat',
  },
  faqSection: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  faqItem: {
    border: '1px solid #333',
    borderRadius: '8px',
    overflow: 'hidden',
    background: '#222',
  },
  faqQuestion: {
    width: '100%',
    padding: '1.5rem',
    background: '#222',
    border: 'none',
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    transition: 'all 0.2s',
    textAlign: 'left',
    color: '#fff',
    outline: 'none',
    '&:hover': {
      background: '#2a2a2a',
    }
  },
  faqQuestionText: {
    fontSize: '1.15rem',
    fontWeight: '700',
    color: '#fff',
    lineHeight: '1.5',
    fontFamily: 'Montserrat',
  },
  faqIcon: {
    fontSize: '0.85rem',
    color: '#aaa',
    transition: 'transform 0.3s',
  },
  faqAnswerContent: {
    padding: '0 1.5rem 1.5rem',
    background: '#1a1a1a',
  },
  answerParagraph: {
    fontSize: '0.95rem',
    lineHeight: '1.8',
    color: '#ddd',
    margin: 0,
    whiteSpace: 'pre-line',
    fontFamily: 'Montserrat',
  },
  documentsSection: {
    display: 'flex',
    flexDirection: 'column',
    gap: '3rem',
  },
  documentCategory: {
    
  },
  documentCategoryTitle: {
    fontSize: '1.5rem',
    fontWeight: '800',
    marginBottom: '1.5rem',
    color: '#fff',
    fontFamily: 'Montserrat',
  },
  documentList: {
    display: 'grid',
    gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' },
    gap: '1.5rem',
  },
  documentItem: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: '1.5rem',
    background: '#222',
    borderRadius: '12px',
    border: '1px solid #333',
    textAlign: 'left',
    height: '100%',
    cursor: 'pointer',
    color: 'inherit',
  },
  documentIcon: {
    fontSize: '2rem',
    flexShrink: 0,
  },
  documentInfo: {
    flex: 1,
  },
  documentTitle: {
    fontSize: '1.05rem',
    fontWeight: '700',
    marginBottom: '0.5rem',
    color: '#fff',
    fontFamily: 'Montserrat',
  },
  documentDescription: {
    fontSize: '0.95rem',
    color: '#aaa',
    marginBottom: '0.5rem',
    lineHeight: '1.5',
    fontFamily: 'Montserrat',
  },
  documentMeta: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: { xs: 'center', sm: 'flex-start' },
    gap: '0.5rem',
  },
  documentType: {
    fontSize: '0.85rem',
    fontWeight: '700',
    color: '#888',
    fontFamily: 'Montserrat',
  },
  metaDivider: {
    color: '#444',
  },
  documentSize: {
    fontSize: '0.85rem',
    color: '#888',
    fontFamily: 'Montserrat',
  },
  downloadButton: {
    padding: '0.875rem 1.75rem',
    background: '#8B0000',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    fontSize: '0.95rem',
    fontWeight: '700',
    cursor: 'pointer',
    flexShrink: 0,
    fontFamily: 'Montserrat',
    transition: 'background 0.2s',
    outline: 'none',
    width: { xs: '100%', sm: 'auto' },
    '&:hover': {
      background: '#a10000',
    }
  },
};

export default InformationHub;