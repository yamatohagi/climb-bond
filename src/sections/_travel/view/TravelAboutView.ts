// _mock
// @ts-expect-error TS(2307): Cannot find module 'src/_mock' or its correspondin... Remove this comment to see the full error message
import { _blogTravelPosts, _testimonials, _members, _brands } from 'src/_mock';
//
import TeamTravel from '../../team/travel';
import NewsletterTravel from '../../newsletter/travel';
import OurClientsTravel from '../../our-clients/travel';
import { BlogTravelLatestPosts } from '../../blog/travel';
import TestimonialTravel from '../../testimonial/travel';
import { TravelAbout, TravelAboutOurMission } from '../about';

// ----------------------------------------------------------------------

export default function TravelAboutView() {
  // @ts-expect-error TS(2364): The left-hand side of an assignment expression mus... Remove this comment to see the full error message
  return (
    <>
      // @ts-expect-error TS(2749): 'TravelAbout' refers to a value, but is being used... Remove this comment to see the full error message
      <TravelAbout />

      // @ts-expect-error TS(2362): The left-hand side of an arithmetic operation must... Remove this comment to see the full error message
      <TravelAboutOurMission />

      // @ts-expect-error TS(2709): Cannot use namespace 'TeamTravel' as a type.
      <TeamTravel members={_members} />

      // @ts-expect-error TS(2709): Cannot use namespace 'TestimonialTravel' as a type... Remove this comment to see the full error message
      <TestimonialTravel testimonials={_testimonials} />

      // @ts-expect-error TS(2552): Cannot find name 'brands'. Did you mean '_brands'?
      <OurClientsTravel brands={_brands} />

      // @ts-expect-error TS(2709): Cannot use namespace 'BlogTravelLatestPosts' as a ... Remove this comment to see the full error message
      <BlogTravelLatestPosts posts={_blogTravelPosts.slice(0, 4)} />

      // @ts-expect-error TS(2362): The left-hand side of an arithmetic operation must... Remove this comment to see the full error message
      <NewsletterTravel />
    </>
  );
}
