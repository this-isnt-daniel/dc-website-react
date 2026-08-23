import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Link as RouterLink } from 'react-router-dom';
import styles from '../styles/infoStyles';

// Renders the lightweight markup used throughout the FAQ/guide content:
//   **bold**            -> bold, brand red
//   *italic*            -> italic, brand red
//   [text](url)         -> link
// Internal links (starting with "/") stay in the SPA; external ones open a new tab.
export const renderInline = (text) => {
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
        const url = urlMatch[1];
        const isInternal = url.startsWith('/');
        const linkSx = { color: '#ff4d4d', textDecoration: 'underline', '&:hover': { color: '#ff7b7b' } };
        return isInternal ? (
          <Box component={RouterLink} to={url} key={index} sx={linkSx}>
            {titleMatch[1]}
          </Box>
        ) : (
          <Box
            component="a"
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            key={index}
            sx={linkSx}
          >
            {titleMatch[1]}
          </Box>
        );
      }
    }
    return <React.Fragment key={index}>{part}</React.Fragment>;
  });
};

// One <Typography> per line, so blank lines in the source act as paragraph breaks.
const RichText = ({ text }) => (
  <>
    {text.split('\n').map((paragraph, idx) => (
      <Typography key={idx} sx={{ ...styles.answerParagraph, mt: paragraph.trim() === '' ? 0 : 1 }}>
        {renderInline(paragraph)}
      </Typography>
    ))}
  </>
);

export default RichText;
