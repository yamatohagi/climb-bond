import { useState } from 'react';
// @mui
import {
  Stack,
  Container,
  Accordion,
  Typography,
  AccordionSummary,
  AccordionDetails,
  Unstable_Grid2 as Grid,
} from '@mui/material';
// _mock
// @ts-expect-error TS(2307): Cannot find module 'src/_mock' or its correspondin... Remove this comment to see the full error message
import { _faqs } from 'src/_mock';
// hooks
// @ts-expect-error TS(2307): Cannot find module 'src/hooks/useResponsive' or it... Remove this comment to see the full error message
import useResponsive from 'src/hooks/useResponsive';
// components
// @ts-expect-error TS(2307): Cannot find module 'src/components/image' or its c... Remove this comment to see the full error message
import Image from 'src/components/image';
// @ts-expect-error TS(2307): Cannot find module 'src/components/iconify' or its... Remove this comment to see the full error message
import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

export default function MarketingLandingFaqs() {
  const isMdUp = useResponsive('up', 'md');

  const [expanded, setExpanded] = useState(false);

  const handleChangeExpanded = (panel: any) => (event: any, isExpanded: any) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Container
      sx={{
        pt: { xs: 5, md: 10 },
        pb: { xs: 10, md: 15 },
      }}
    >
      <Grid container spacing={3} justifyContent="space-between" alignItems="center">
        <Grid xs={12} md={6} lg={6}>
          <Stack spacing={2} sx={{ mb: 5, textAlign: { xs: 'center', md: 'left' } }}>
            <Typography variant="overline" color="text.disabled">
              FAQS
            </Typography>

            <Typography variant="h2">Frequently Asked Questions</Typography>
          </Stack>

          {_faqs.map((faq: any) => (
            <Accordion
              key={faq.id}
              expanded={expanded === faq.question}
              onChange={handleChangeExpanded(faq.question)}
            >
              <AccordionSummary>
                <Typography variant="h5" sx={{ flexGrow: 1 }}>
                  {faq.question}
                </Typography>
                <Iconify
                  width={24}
                  icon={expanded === faq.question ? 'carbon:subtract' : 'carbon:add'}
                />
              </AccordionSummary>

              <AccordionDetails>{faq.answer}</AccordionDetails>
            </Accordion>
          ))}
        </Grid>

        {isMdUp && (
          <Grid xs={12} md={6} lg={5}>
            <Image alt="faqs" src="/assets/illustrations/illustration_faqs.svg" />
          </Grid>
        )}
      </Grid>
    </Container>
  );
}
