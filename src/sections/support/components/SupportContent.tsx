import PropTypes from 'prop-types';
import { useState } from 'react';
// @mui
import { Box, Accordion, Typography, AccordionSummary, AccordionDetails } from '@mui/material';
// components
// @ts-expect-error TS(2307): Cannot find module 'src/components/iconify' or its... Remove this comment to see the full error message
import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

export default function SupportContent({
  contents
}: any) {
  const [expanded, setExpanded] = useState(false);

  const handleChangeExpanded = (panel: any) => (event: any, isExpanded: any) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <Box sx={{ pl: { md: 10 } }}>
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      {contents.map((faq: any) => <Accordion
        key={faq.id}
        expanded={expanded === faq.question}
        onChange={handleChangeExpanded(faq.question)}
      >
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <AccordionSummary
          sx={{
            '& .MuiAccordionSummary-content': {
              my: 4,
              ...(expanded === faq.question && {
                mb: 2.5,
              }),
            },
          }}
        >
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Typography variant="subtitle1" sx={{ flexGrow: 1 }}>
            {faq.question}
          </Typography>

          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Iconify
            icon={expanded === faq.question ? 'carbon:chevron-down' : 'carbon:chevron-right'}
          />
        </AccordionSummary>

        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <AccordionDetails>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Typography sx={{ color: 'text.secondary' }}>{faq.answer}</Typography>
        </AccordionDetails>
      </Accordion>)}
    </Box>
  );
}

SupportContent.propTypes = {
  contents: PropTypes.array,
};
