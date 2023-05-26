// @mui
import { Container, Unstable_Grid2 as Grid } from '@mui/material';
// routes
// @ts-expect-error TS(2307): Cannot find module 'src/routes/paths' or its corre... Remove this comment to see the full error message
import { paths } from 'src/routes/paths';
// _mock
// @ts-expect-error TS(2307): Cannot find module 'src/_mock' or its correspondin... Remove this comment to see the full error message
import { _caseStudies, _testimonials } from 'src/_mock';
// components
// @ts-expect-error TS(2307): Cannot find module 'src/components/image' or its c... Remove this comment to see the full error message
import Image from 'src/components/image';
// @ts-expect-error TS(2307): Cannot find module 'src/components/markdown' or it... Remove this comment to see the full error message
import Markdown from 'src/components/markdown';
// @ts-expect-error TS(2307): Cannot find module 'src/components/custom-breadcru... Remove this comment to see the full error message
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';
//
import NewsletterMarketing from '../../newsletter/marketing';
import TestimonialMarketing from '../../testimonial/marketing';
import { MarketingLandingFreeSEO } from '../landing';
import { MarketingCaseStudyListSimilar } from '../case-study/list';
import {
  MarketingCaseStudyDetailsSummary,
  MarketingCaseStudyDetailsGallery,
} from '../case-study/details';

// ----------------------------------------------------------------------

const _mockCaseStudy = _caseStudies[0];

export default function MarketingCaseStudyView() {
  return (
    <>
      // @ts-expect-error TS(2749): 'Container' refers to a value, but is being used a... Remove this comment to see the full error message
      <Container
        // @ts-expect-error TS(2304): Cannot find name 'sx'.
        sx={{
          // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
          overflow: 'hidden',
          // @ts-expect-error TS(2304): Cannot find name 'pt'.
          pt: 5,
          // @ts-expect-error TS(2304): Cannot find name 'pb'.
          pb: { xs: 10, md: 15 },
        }}
      >
        // @ts-expect-error TS(2304): Cannot find name 'alt'.
        <Image alt="hero" src={_mockCaseStudy.heroImg} ratio="16/9" sx={{ borderRadius: 2 }} />

        <CustomBreadcrumbs
          // @ts-expect-error TS(2304): Cannot find name 'sx'.
          sx={{ my: 5 }}
          // @ts-expect-error TS(2304): Cannot find name 'links'.
          links={[
            // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
            { name: 'Home', href: '/' },
            { name: 'Case Studies', href: paths.marketing.caseStudies },
            { name: _mockCaseStudy.title },
          ]}
        />

        // @ts-expect-error TS(2749): 'Grid' refers to a value, but is being used as a t... Remove this comment to see the full error message
        <Grid container spacing={{ xs: 5, md: 8 }} direction={{ md: 'row-reverse' }}>
          // @ts-expect-error TS(2749): 'Grid' refers to a value, but is being used as a t... Remove this comment to see the full error message
          <Grid xs={12} md={4}>
            // @ts-expect-error TS(2709): Cannot use namespace 'MarketingCaseStudyDetailsSum... Remove this comment to see the full error message
            <MarketingCaseStudyDetailsSummary caseStudy={_caseStudies[0]} />
          </Grid>

          // @ts-expect-error TS(2304): Cannot find name 'xs'.
          <Grid xs={12} md={8}>
            // @ts-expect-error TS(2304): Cannot find name 'content'.
            <Markdown content={_mockCaseStudy.content} />
            // @ts-expect-error TS(2304): Cannot find name 'images'.
            <MarketingCaseStudyDetailsGallery images={_mockCaseStudy.galleryImgs} />
          </Grid>
        </Grid>
      </Container>

      // @ts-expect-error TS(2304): Cannot find name 'testimonials'.
      <TestimonialMarketing testimonials={_testimonials} />

      // @ts-expect-error TS(2709): Cannot use namespace 'MarketingCaseStudyListSimila... Remove this comment to see the full error message
      <MarketingCaseStudyListSimilar caseStudies={_caseStudies.slice(0, 3)} />

      // @ts-expect-error TS(2362): The left-hand side of an arithmetic operation must... Remove this comment to see the full error message
      <MarketingLandingFreeSEO />

      // @ts-expect-error TS(2709): Cannot use namespace 'NewsletterMarketing' as a ty... Remove this comment to see the full error message
      <NewsletterMarketing />
    </>
  );
}
