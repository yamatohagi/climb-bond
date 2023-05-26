// @mui
import { Container, Typography, Stack } from '@mui/material';
// _mock
// @ts-expect-error TS(2307): Cannot find module 'src/_mock' or its correspondin... Remove this comment to see the full error message
import { _caseStudies, _blogMarketingPosts, _testimonials } from 'src/_mock';
//
import NewsletterMarketing from '../../newsletter/marketing';
import { BlogMarketingLatestPosts } from '../../blog/marketing';
import TestimonialMarketing from '../../testimonial/marketing';
import { MarketingLandingFreeSEO } from '../landing';
import { MarketingCaseStudyList } from '../case-study/list';

// ----------------------------------------------------------------------

export default function MarketingCaseStudiesView() {
  return (
    <>
      // @ts-expect-error TS(2749): 'Container' refers to a value, but is being used a... Remove this comment to see the full error message
      <Container>
        // @ts-expect-error TS(2749): 'Stack' refers to a value, but is being used as a ... Remove this comment to see the full error message
        <Stack
          // @ts-expect-error TS(2304): Cannot find name 'spacing'.
          spacing={3}
          // @ts-expect-error TS(2304): Cannot find name 'sx'.
          sx={{
            // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
            py: 5,
            // @ts-expect-error TS(2304): Cannot find name 'textAlign'.
            textAlign: { xs: 'center', md: 'left' },
          }}
        >
          // @ts-expect-error TS(2749): 'Typography' refers to a value, but is being used ... Remove this comment to see the full error message
          <Typography variant="h2">Our Case Studies</Typography>

          // @ts-expect-error TS(2304): Cannot find name 'sx'.
          <Typography sx={{ color: 'text.secondary' }}>
            // @ts-expect-error TS(2304): Cannot find name 'Nullam'.
            Nullam tincidunt adipiscing enim.
            // @ts-expect-error TS(2304): Cannot find name 'br'.
            <br /> Mauris sollicitudin fermentum libero.
          </Typography>
        </Stack>

        // @ts-expect-error TS(2304): Cannot find name 'caseStudies'.
        <MarketingCaseStudyList caseStudies={_caseStudies} />
      </Container>

      // @ts-expect-error TS(2304): Cannot find name 'testimonials'.
      <TestimonialMarketing testimonials={_testimonials} />

      // @ts-expect-error TS(2709): Cannot use namespace 'BlogMarketingLatestPosts' as... Remove this comment to see the full error message
      <BlogMarketingLatestPosts posts={_blogMarketingPosts.slice(0, 4)} />

      // @ts-expect-error TS(2362): The left-hand side of an arithmetic operation must... Remove this comment to see the full error message
      <MarketingLandingFreeSEO />

      // @ts-expect-error TS(2709): Cannot use namespace 'NewsletterMarketing' as a ty... Remove this comment to see the full error message
      <NewsletterMarketing />
    </>
  );
}
