// @mui
import { Divider } from '@mui/material';
// _mock
// @ts-expect-error TS(2307): Cannot find module 'src/_mock' or its correspondin... Remove this comment to see the full error message
import { _blogCareerPosts, _testimonials, _members, _brandsColor } from 'src/_mock';
//
import TeamCareer from '../../team/career';
import NewsletterCareer from '../../newsletter/career';
import OurClientsCareer from '../../our-clients/career';
import { BlogCareerLatestPosts } from '../../blog/career';
import TestimonialCareer from '../../testimonial/career';
import { CareerAbout, CareerAboutOurVision } from '../about';

// ----------------------------------------------------------------------

export default function CareerAboutView() {
  // @ts-expect-error TS(2364): The left-hand side of an assignment expression mus... Remove this comment to see the full error message
  return (
    <>
      // @ts-expect-error TS(2749): 'CareerAbout' refers to a value, but is being used... Remove this comment to see the full error message
      <CareerAbout />

      // @ts-expect-error TS(2362): The left-hand side of an arithmetic operation must... Remove this comment to see the full error message
      <CareerAboutOurVision />

      // @ts-expect-error TS(2749): 'Divider' refers to a value, but is being used as ... Remove this comment to see the full error message
      <Divider orientation="vertical" sx={{ height: 80, width: 2, mx: 'auto' }} />

      // @ts-expect-error TS(2552): Cannot find name 'members'. Did you mean '_members... Remove this comment to see the full error message
      <TeamCareer members={_members} />

      // @ts-expect-error TS(2709): Cannot use namespace 'TestimonialCareer' as a type... Remove this comment to see the full error message
      <TestimonialCareer testimonials={_testimonials} />

      // @ts-expect-error TS(2304): Cannot find name 'brands'.
      <OurClientsCareer brands={_brandsColor} />

      // @ts-expect-error TS(2709): Cannot use namespace 'BlogCareerLatestPosts' as a ... Remove this comment to see the full error message
      <BlogCareerLatestPosts posts={_blogCareerPosts.slice(0, 5)} />

      // @ts-expect-error TS(2362): The left-hand side of an arithmetic operation must... Remove this comment to see the full error message
      <NewsletterCareer />
    </>
  );
}
