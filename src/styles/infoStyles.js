// Shared styles for the information hub and guide pages.
// Moved verbatim from src/pages/information.jsx (the InformationHub component)
// so /information, /tournament-essentials, /guide-to-wsdc and /guide-to-wudc
// all render from one source of truth.

const styles = {
  container: {
    minHeight: '100vh',
    background: '#121212',
    fontFamily: 'Montserrat, sans-serif',
  },
  header: {
    position: 'relative',
    overflow: 'hidden',
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

export default styles;
