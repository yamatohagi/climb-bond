// _mock
// @ts-expect-error TS(2307): Cannot find module 'src/_mock' or its correspondin... Remove this comment to see the full error message
import { _blogCoursePosts, _testimonials, _members, _brandsColor } from 'src/_mock';
//
import { TeamElearningAbout } from '../../team/e-learning';
import NewsletterElearning from '../../newsletter/e-learning';
import OurClientsElearning from '../../our-clients/e-learning';
import { BlogElearningLatestPosts } from '../../blog/e-learning';
import TestimonialElearning from '../../testimonial/e-learning';
import { ElearningAbout, ElearningAboutHero, ElearningAboutCoreValues } from '../about';

// ----------------------------------------------------------------------

export default function ElearningAboutView() {
  return (
    // @ts-expect-error TS(2365): Operator '<' cannot be applied to types 'boolean' ... Remove this comment to see the full error message
    <>
      // @ts-expect-error TS(2749): 'ElearningAboutHero' refers to a value, but is bei... Remove this comment to see the full error message
      <ElearningAboutHero />

      // @ts-expect-error TS(2362): The left-hand side of an arithmetic operation must... Remove this comment to see the full error message
      <ElearningAbout />

      // @ts-expect-error TS(2749): 'ElearningAboutCoreValues' refers to a value, but ... Remove this comment to see the full error message
      <ElearningAboutCoreValues />

      // @ts-expect-error TS(2552): Cannot find name 'members'. Did you mean '_members... Remove this comment to see the full error message
      <TeamElearningAbout members={_members} />

      // @ts-expect-error TS(2709): Cannot use namespace 'OurClientsElearning' as a ty... Remove this comment to see the full error message
      <OurClientsElearning brands={_brandsColor} />

      // @ts-expect-error TS(2552): Cannot find name 'testimonials'. Did you mean '_te... Remove this comment to see the full error message
      <TestimonialElearning testimonials={_testimonials} />

      // @ts-expect-error TS(2709): Cannot use namespace 'BlogElearningLatestPosts' as... Remove this comment to see the full error message
      <BlogElearningLatestPosts posts={_blogCoursePosts.slice(0, 4)} />

      // @ts-expect-error TS(2362): The left-hand side of an arithmetic operation must... Remove this comment to see the full error message
      <NewsletterElearning />
    </>
  );
}
