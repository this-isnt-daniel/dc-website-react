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
      icon: '🎯',
      description: 'For schools and new debaters',
      faqs: [
        {
          id: 'register-school',
          question: 'How can my school register with the Debaters\' Council?',
          answer: `To register your school as a DC member institution:

1. **Submit a formal letter** expressing your club's intent to join, signed by the Teacher-in-Charge or relevant school authority

2. **Pay the annual membership fee** of LKR 4,000 which supports DC activities and initiatives

3. **Provide contact details** - Name and contact number of a designated person (ideally the team captain) for WhatsApp communication

4. **Requirements**: Schools must have an active debating club and commitment to participate in the circuit

Once registered, you'll receive:
- Access to the DC schools registry for tournament invitations
- Membership in the Tournament Coordination WhatsApp group
- Eligibility to send debaters for National Pool trials
- Access to training resources and workshops

Contact us at info@debaterscouncil.lk to begin the registration process.`
        },
        {
          id: 'first-tournament',
          question: 'How do I participate in my first tournament?',
          answer: `Getting started in competitive debate:

1. **Join your school's debating club** or start one if it doesn't exist
2. **Learn the format** - Most Sri Lankan tournaments use WSDC (World Schools) format
3. **Watch tournament recordings** available in our Video Library
4. **Attend DC workshops** - Check our Events calendar for upcoming training sessions
5. **Register for tournaments** - Watch for announcements in the schools WhatsApp group

We recommend starting with smaller, school-level tournaments before moving to larger competitions. Your Teacher-in-Charge can help with registrations.`
        },
        {
          id: 'debate-formats',
          question: 'What debate formats are used in Sri Lanka?',
          answer: `The main formats in the Sri Lankan circuit:

**WSDC (World Schools Debating Championship)** - Our primary format
- 3 speakers per team, 8-minute speeches
- Prepared motions (released 1 hour before) and impromptu motions (15 min prep)
- Reply speeches (4 minutes)
- Points of Information (POIs) allowed

**Asian Schools Format** - Used in some tournaments
- Similar to WSDC with slight modifications

**British Parliamentary (BP)** - Used at university level
- 4 teams of 2 speakers
- 7-minute speeches
- Completely impromptu (15 min prep)

Download our complete format guides in the Resources section.`
        },
      ]
    },
    'national-team': {
      title: 'National Team Selection',
      icon: '🇱🇰',
      description: 'Path to representing Sri Lanka',
      faqs: [
        {
          id: 'pool-eligibility',
          question: 'Who is eligible for the National Pool?',
          answer: `Eligibility requirements for the National Pool:

**Academic Status:**
- Must be currently enrolled in a secondary school in Sri Lanka
- Age limit as per WSDC rules (typically under 19 on tournament date)

**Experience:**
- No minimum tournament requirement, but competitive experience is highly valued
- Strong performance in local tournaments increases selection chances

**Application:**
- Submit a comprehensive debate CV including:
  - Tournament participation and results
  - Speaker awards and rankings
  - Adjudication experience (if any)
  - School debate activities and leadership

Applications typically open in Q1 each year. Watch our Announcements page for the official call.`
        },
        {
          id: 'selection-process',
          question: 'How does the National Team selection process work?',
          answer: `The selection process has multiple stages:

**Stage 1: Application Review**
- Submit debate CV and application form
- Selection committee reviews all applications
- Shortlist announced (~30-40 debaters)

**Stage 2: National Pool Formation**
- Shortlisted debaters invited to trials
- Multiple rounds of debates assessed by senior judges
- 15-20 debaters selected for the National Pool

**Stage 3: Pool Training**
- Intensive training sessions over several months
- Practice debates, case building, strategy development
- Coached by former national team members and senior adjudicators

**Stage 4: Final Team Selection**
- Final evaluation debates
- 5 debaters selected (typically 3 main speakers + 2 reserves)

**Stage 5: Pre-WSDC Training**
- Focused preparation for the championship
- International practice sessions
- Strategy development with coaches

Timeline: Applications in Q1, trials in Q2, team announcement in Q3, WSDC typically in July-August.`
        },
        {
          id: 'improve-chances',
          question: 'How can I improve my chances of National Pool selection?',
          answer: `Strengthen your application:

**Tournament Participation:**
- Compete regularly in DC-endorsed tournaments
- Aim for breaking rounds and speaker awards
- Participate in both school-level and open tournaments

**Skill Development:**
- Attend DC workshops and training sessions
- Study past WSDC debates (available in our Video Library)
- Practice with experienced debaters
- Consider getting a coach through our Coach Matching Service

**Build Your CV:**
- Document all tournament results
- Include adjudication experience
- Note any coaching or training roles
- Mention debate club leadership positions

**Stay Connected:**
- Follow DC announcements
- Participate in National Pool trials even if not selected initially
- Seek feedback from senior judges

The selection committee values both natural talent and demonstrated commitment to improvement.`
        },
      ]
    },
    'organizing-tournaments': {
      title: 'Tournament Organization',
      icon: '🏆',
      description: 'For organizers and hosts',
      faqs: [
        {
          id: 'tournament-requirements',
          question: 'What are the requirements for hosting a DC-endorsed tournament?',
          answer: `Requirements for DC endorsement:

**Pre-Tournament:**
1. **Permission** - Obtain official clearance from your institution
2. **Endorsement Request** - Email DC with tournament details (scale, dates, format)
3. **Scheduling** - Avoid public holidays and consecutive weekends with other tournaments
4. **Motion Approval** - Submit motions to dcmotionscommittee@gmail.com at least 2 weeks prior

**Tournament Standards:**
- Minimum 8 participating teams
- At least one DC-accredited adjudicator on the panel
- Use of Tabbycat or approved tabulation software
- Adherence to DC tabulation rules

**Post-Tournament:**
- Submit complete results within 7 days
- Provide speaker tabs and team rankings
- Share feedback with DC

**Invitations:**
- Must invite all DC member schools
- Share invitation in Tournament Coordination WhatsApp group
- Allow minimum 3 weeks registration period

Download the complete "Tournament Endorsement Conditions" document from the Resources section.`
        },
        {
          id: 'tabulation-guide',
          question: 'How does tournament tabulation work?',
          answer: `DC Standard Tabulation Rules:

**Speaker Scores:**
- Scale: 60-80 points
- 75-80: Exceptional, tournament-winning standard
- 70-74: Excellent, breaking team quality
- 65-69: Good, solid debating
- 60-64: Adequate, room for improvement

**Team Points:**
- Win: 3 points
- Loss: 0 points
- (No draws in WSDC format)

**Breaking Teams:**
- Ranked by total team points
- Tiebreaker 1: Total speaker points
- Tiebreaker 2: Head-to-head result
- Tiebreaker 3: Average margin of victory

**Software:**
- Use Tabbycat (recommended) - see our Tabbycat Guide
- Alternative: Manual tabulation following DC Excel template

**Results Submission:**
- Full tab with speaker scores for all debates
- Team rankings and breaking teams
- Top speaker list
- Submit to results@debaterscouncil.lk within 7 days

Access the "Tabulation Rules & Procedures" PDF in Resources for complete methodology.`
        },
        {
          id: 'motions-submission',
          question: 'How do I submit motions for approval?',
          answer: `Motion submission process:

**Submission Requirements:**
Email dcmotionscommittee@gmail.com with:
- Tournament name and date
- Format (Prepared/Impromptu ratio)
- Number of preliminary rounds
- Proposed motions for each round
- Infoslides (if applicable)

**Timeline:**
- Submit at least 2 weeks before tournament
- Committee reviews within 5 business days
- May suggest modifications or alternatives
- Final approval required before tournament

**Motion Quality Standards:**
- Clear, debatable propositions
- Balanced (neither side has obvious advantage)
- Appropriate difficulty level
- Topically diverse across rounds
- No repeated topics from recent tournaments

**Resources:**
- Check Motion Archive for 500+ past motions
- Ensure no recent duplicates
- Review Motion Committee feedback from previous tournaments

The committee helps ensure competitive fairness and educational value.`
        },
      ]
    },
    'improving-skills': {
      title: 'Improving as a Debater',
      icon: '📚',
      description: 'Training and development',
      faqs: [
        {
          id: 'getting-better',
          question: 'How can I improve my debating skills?',
          answer: `Comprehensive improvement strategy:

**1. Regular Practice**
- Participate in weekly club debates
- Find a debate partner for practice sessions
- Use our Resource Library for practice motions

**2. Study the Best**
- Watch finals from our Video Library
- Study WSDC championship debates
- Analyze what top speakers do differently

**3. Formal Training**
- Attend DC workshops (check Events calendar)
- Consider our Coach Matching Service
- Participate in National Pool trials for feedback

**4. Focus Areas:**

*Content Knowledge*
- Read widely on current affairs
- Build case libraries on common topics
- Study argument frameworks

*Speaking Skills*
- Record and review your speeches
- Work on clarity and pace
- Practice vocal variety and emphasis

*Strategic Thinking*
- Learn POI strategy
- Master rebuttal techniques
- Understand thematic analysis

**5. Get Feedback**
- Request written adjudication feedback
- Ask experienced debaters to watch you
- Identify specific areas to improve

**6. Resources:**
- Download our training materials (Resource Library)
- Join study groups with other debaters
- Read debate theory articles

Consistent practice and targeted improvement yield the best results.`
        },
        {
          id: 'coach-matching',
          question: 'How does the Coach Matching Service work?',
          answer: `Getting paired with an experienced coach:

**How to Apply:**
1. Submit request through our Coach Matching form
2. Describe your experience level and goals
3. Specify preferred coaching style (intensive/casual)
4. Indicate availability for sessions

**Matching Process:**
- DC maintains a network of qualified coaches (former national team members, senior adjudicators)
- We match based on your needs and coach availability
- Typical response time: 2 weeks

**Coaching Sessions:**
- Frequency determined between you and coach
- Can be one-on-one or small group
- Virtual or in-person (location dependent)
- Focus areas: case construction, delivery, strategy, or comprehensive training

**Cost:**
- Some coaches volunteer their time
- Others may charge for formal training programs
- DC coordinates but doesn't set fees

**For Schools:**
- Schools can request coaches for their entire team
- Workshop-style training available
- Contact us for bulk coaching arrangements

Submit your request in the Resources section under "Coach Matching Service."`
        },
        {
          id: 'workshop-schedule',
          question: 'What workshops does DC offer?',
          answer: `Regular DC training programs:

**Monthly Workshops** (Free for member schools)
- Case Construction
- Rebuttal Strategies  
- POI Techniques
- Reply Speech Mastery

**Quarterly Intensives**
- Format-specific training (WSDC, Asian Schools)
- Advanced argumentation
- Judge training and accreditation

**National Pool Training**
- Exclusive sessions for Pool members
- Led by former national team members
- Preparation for WSDC

**Custom School Workshops**
- Request training for your school
- Tailored to your team's needs
- Can include mock tournaments

**Check Our Events Calendar:**
Visit the Events page for upcoming workshop dates and registration links.

**Workshop Formats:**
- In-person (Colombo and regional venues)
- Virtual sessions (Zoom)
- Hybrid options available

Register early as spots fill quickly!`
        },
      ]
    },
    'corporate-partnerships': {
      title: 'Corporate & Institutional',
      icon: '💼',
      description: 'Workshops and partnerships',
      faqs: [
        {
          id: 'corporate-workshops',
          question: 'Does DC offer corporate communication workshops?',
          answer: `Professional development programs:

**What We Offer:**
- Public Speaking & Presentation Skills
- Critical Thinking & Argumentation
- Team Communication & Collaboration
- Leadership Communication
- Media Training & Interview Skills

**Format Options:**
- Half-day workshops (3-4 hours)
- Full-day intensives
- Multi-session programs
- Customized to your organization's needs

**Led By:**
- Former WSDC representatives
- Senior adjudicators and coaches
- Professionals with corporate training experience

**Past Clients:**
- Corporate teams
- University student organizations
- Government departments
- NGOs and international organizations

**Benefits:**
- Transferable skills from competitive debate
- Practical, interactive training
- Proven methodology from championship-level debating

**Get in Touch:**
Email partnerships@debaterscouncil.lk with:
- Organization name and size
- Training objectives
- Preferred dates and duration
- Budget range

We'll create a tailored proposal for your needs.`
        },
        {
          id: 'school-partnerships',
          question: 'How can my school establish a deeper partnership with DC?',
          answer: `Partnership opportunities:

**Standard Membership** (LKR 4,000/year)
- Tournament invitations
- WhatsApp group access
- Resource library access
- Workshop participation

**Enhanced Partnership:**
- Host DC-organized workshops at your school
- Priority slots for National Pool trials
- Custom training programs for your team
- Judge training for your teachers

**Strategic Partnerships:**
- Co-host major tournaments
- Serve on DC committees
- Contribute to resource development
- Mentorship programs with other schools

**For International Schools:**
- Exchange programs with local schools
- Specialized format training (BP, other formats)
- Integration with international debate circuits

**Benefits:**
- Strengthen your school's debating program
- Increase student exposure to high-level competition
- Build relationships across the circuit
- Support the growth of debate in Sri Lanka

Contact partnerships@debaterscouncil.lk to discuss partnership options.`
        },
        {
          id: 'tournament-sponsorship',
          question: 'Can my organization sponsor a tournament or event?',
          answer: `Sponsorship opportunities:

**Tournament Sponsorship:**
- Title sponsorship of major tournaments
- Category sponsorship (prizes, meals, venue)
- Speaker awards sponsorship
- Judge fees sponsorship

**Event Sponsorship:**
- National Pool training programs
- Workshop series
- WSDC team preparation
- Regional debate development initiatives

**Benefits for Sponsors:**
- Brand visibility to 200+ schools
- Recognition in tournament materials
- Social media promotion
- Speaking opportunities at events
- CSR impact supporting youth education

**Sponsorship Packages:**
- Platinum: Title sponsor, premium visibility
- Gold: Major event sponsor
- Silver: Category sponsor
- Bronze: Supporting sponsor

**Past Sponsors:**
- Educational institutions
- Corporate organizations
- Professional services firms
- Media companies

**Custom Packages:**
We can design sponsorship arrangements aligned with your organization's objectives and CSR goals.

Contact sponsorships@debaterscouncil.lk for our sponsorship prospectus.`
        },
      ]
    },
    'resources-documents': {
      title: 'Official Documents',
      icon: '📄',
      description: 'Downloads and references',
      faqs: [] // No FAQs here, just document links
    }
  };

  const documents = {
    'Tournament Organization': [
      { title: 'Tournament Endorsement Conditions', type: 'PDF', size: '245 KB', description: 'Complete requirements for DC tournament endorsement' },
      { title: 'Tabulation Rules & Procedures', type: 'PDF', size: '180 KB', description: 'Official DC tabulation methodology and tiebreaker rules' },
      { title: 'Tabbycat Platform Guide', type: 'Video Tutorial', size: '—', description: 'Step-by-step guide to using Tabbycat for tournament management' },
      { title: 'Sample Tournament Timeline', type: 'PDF', size: '120 KB', description: 'Recommended schedule for a 1-day tournament' },
    ],
    'Adjudication Standards': [
      { title: 'Local Adjudication Scale', type: 'PDF', size: '165 KB', description: 'Sri Lankan 60-80 speaker scoring rubric with examples' },
      { title: 'WSDC Adjudication Guide 2023', type: 'PDF', size: '890 KB', description: 'Official WSDC briefing on international standards' },
      { title: 'Common Adjudication Pitfalls', type: 'Article', size: '—', description: 'Analysis of frequent judging mistakes and how to avoid them' },
    ],
    'Historical Records': [
      { title: 'National Team History', type: 'PDF', size: '340 KB', description: 'Records of all Sri Lankan WSDC teams and results' },
      { title: 'Top Speaker Rankings', type: 'PDF', size: '210 KB', description: 'Historical speaker performance data' },
    ],
    'Training Materials': [
      { title: 'WSDC Format Guide', type: 'PDF', size: '280 KB', description: 'Complete rules and procedures for World Schools format' },
      { title: 'Case Construction Framework', type: 'PDF', size: '195 KB', description: 'Structured approach to building debate cases' },
      { title: 'Rebuttal Strategies Guide', type: 'PDF', size: '220 KB', description: 'Techniques for effective rebuttal and clash' },
      { title: 'POI Best Practices', type: 'PDF', size: '150 KB', description: 'When and how to offer Points of Information' },
    ],
    'Administrative Forms': [
      { title: 'School Membership Application', type: 'Word Doc', size: '85 KB', description: 'Template for school registration' },
      { title: 'National Pool Application Form', type: 'Word Doc', size: '95 KB', description: 'Application template with CV guidelines' },
      { title: 'Tournament Results Submission Template', type: 'Excel', size: '125 KB', description: 'Standard format for submitting tournament tabs' },
    ],
  };

  const currentSection = sections[activeSection || 'getting-started'];

  // Helper function to render bold markdown (**text**)
  const renderTextWithBold = (text) => {
    const parts = text.split(/(\*\*.*?\*\*|\*.*?\*)/g);
    return parts.map((part, index) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <Box component="span" key={index} sx={{ fontWeight: 'bold', color: '#ff4d4d' }}>{part.slice(2, -2)}</Box>;
      } else if (part.startsWith('*') && part.endsWith('*')) {
        return <Box component="span" key={index} sx={{ fontStyle: 'italic', color: '#ff4d4d' }}>{part.slice(1, -1)}</Box>;
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
                  <Box key={idx} sx={styles.documentItem}>
                    <Box sx={styles.documentIcon}>📄</Box>
                    <Box sx={styles.documentInfo}>
                      <Typography component="h4" sx={styles.documentTitle}>{doc.title}</Typography>
                      <Typography sx={styles.documentDescription}>{doc.description}</Typography>
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
                    <Box component="button" sx={styles.downloadButton}>
                      Download ↓
                    </Box>
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
                <Box component="span" sx={styles.sidebarIcon}>{section.icon}</Box>
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
              <Box sx={styles.sectionIcon}>{currentSection.icon}</Box>
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
                  <Box component="span" sx={styles.sidebarIcon}>{section.icon}</Box>
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
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  documentItem: {
    display: 'flex',
    gap: '1.5rem',
    padding: '1.5rem',
    background: '#222',
    borderRadius: '8px',
    alignItems: 'center',
    border: '1px solid #333',
    flexDirection: { xs: 'column', sm: 'row' },
    textAlign: { xs: 'center', sm: 'left' }
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