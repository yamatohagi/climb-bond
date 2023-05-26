// @mui
import { alpha } from '@mui/material/styles';
import { Box, Container } from '@mui/material';
// _mock
// @ts-expect-error TS(2307): Cannot find module 'src/_mock' or its correspondin... Remove this comment to see the full error message
import { _tours, _blogTravelPosts, _testimonials } from 'src/_mock';
//
import NewsletterTravel from '../../newsletter/travel';
import TravelFilters from '../tour/filters';
import TestimonialTravel from '../../testimonial/travel';
import { BlogTravelLandingLatestPosts } from '../../blog/travel';
import {
  TravelLandingHero,
  TravelLandingSummary,
  TravelLandingIntroduce,
  TravelLandingToursByCity,
  TravelLandingTourFeatured,
  TravelLandingFavoriteDestinations,
} from '../landing';

// ----------------------------------------------------------------------

export default function TravelLandingView() {
  return <>
    // @ts-expect-error TS(2749): 'Box' refers to a value, but is being used as a ty... Remove this comment to see the full error message
    <Box sx={{ position: 'relative' }}>
      // @ts-expect-error TS(2709): Cannot use namespace 'TravelLandingHero' as a type... Remove this comment to see the full error message
      <TravelLandingHero tours={_tours.slice(0, 5)} />

      <Container
        // @ts-expect-error TS(2304): Cannot find name 'sx'.
        sx={{
          mb: { md: 10 },
          left: { md: 0 },
          right: { md: 0 },
          bottom: { md: 0 },
          mx: { md: 'auto' },
          // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
          pt: { xs: 3, md: 0 },
          position: { md: 'absolute' },
        }}
      >
        // @ts-expect-error TS(2709): Cannot use namespace 'TravelFilters' as a type.
        <TravelFilters
          // @ts-expect-error TS(2304): Cannot find name 'sx'.
          sx={{
            color: { md: 'common.white' },
            // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
            bgcolor: (theme: any) => ({
              xs: 'background.neutral',
              md: alpha(theme.palette.common.white, 0.08)
            }),
          }}
        // @ts-expect-error TS(2365): Operator '<' cannot be applied to types 'boolean' ... Remove this comment to see the full error message
        />
      </Container>
    </Box>

    // @ts-expect-error TS(2362): The left-hand side of an arithmetic operation must... Remove this comment to see the full error message
    <TravelLandingIntroduce />

    // @ts-expect-error TS(2749): 'TravelLandingSummary' refers to a value, but is b... Remove this comment to see the full error message
    <TravelLandingSummary />

    // @ts-expect-error TS(2552): Cannot find name 'tours'. Did you mean '_tours'?
    <TravelLandingFavoriteDestinations tours={_tours.slice(0, 4)} />

    // @ts-expect-error TS(2709): Cannot use namespace 'TravelLandingTourFeatured' a... Remove this comment to see the full error message
    <TravelLandingTourFeatured tours={_tours.slice(0, 4)} />

    // @ts-expect-error TS(2552): Cannot find name 'tours'. Did you mean '_tours'?
    <TravelLandingToursByCity tours={_tours.slice(0, 8)} />

    // @ts-expect-error TS(2709): Cannot use namespace 'BlogTravelLandingLatestPosts... Remove this comment to see the full error message
    <BlogTravelLandingLatestPosts posts={_blogTravelPosts.slice(2, 6)} />

    // @ts-expect-error TS(2552): Cannot find name 'testimonials'. Did you mean '_te... Remove this comment to see the full error message
    <TestimonialTravel testimonials={_testimonials} />

    // @ts-expect-error TS(2749): 'NewsletterTravel' refers to a value, but is being... Remove this comment to see the full error message
    <NewsletterTravel />
  </>;
}
