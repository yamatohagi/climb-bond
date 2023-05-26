// _mock
import {
  _courses,
  _members,
  _blogCoursePosts,
  _brandsColor,
  _testimonials,
  _coursesByCategories,
// @ts-expect-error TS(2307): Cannot find module 'src/_mock' or its correspondin... Remove this comment to see the full error message
} from 'src/_mock';
//
import TeamElearning from '../../team/e-learning';
import NewsletterElearning from '../../newsletter/e-learning';
import OurClientsElearning from '../../our-clients/e-learning';
import { BlogElearningLatestPosts } from '../../blog/e-learning';
import DownloadAppElearning from '../../download-app/e-learning';
import TestimonialElearning from '../../testimonial/e-learning';
import {
  ElearningLandingHero,
  ElearningLandingIntroduce,
  ElearningLandingCategories,
  ElearningLandingFeaturedCourses,
} from '../landing';

// ----------------------------------------------------------------------

export default function ElearningLandingView() {
  return (
    <>
      // @ts-expect-error TS(2749): 'ElearningLandingHero' refers to a value, but is b... Remove this comment to see the full error message
      <ElearningLandingHero />

      // @ts-expect-error TS(2304): Cannot find name 'brands'.
      <OurClientsElearning brands={_brandsColor} />

      // @ts-expect-error TS(2749): 'ElearningLandingIntroduce' refers to a value, but... Remove this comment to see the full error message
      <ElearningLandingIntroduce />

      // @ts-expect-error TS(2552): Cannot find name 'courses'. Did you mean '_courses... Remove this comment to see the full error message
      <ElearningLandingFeaturedCourses courses={_courses} />

      // @ts-expect-error TS(2709): Cannot use namespace 'ElearningLandingCategories' ... Remove this comment to see the full error message
      <ElearningLandingCategories categories={_coursesByCategories} />

      // @ts-expect-error TS(2552): Cannot find name 'members'. Did you mean '_members... Remove this comment to see the full error message
      <TeamElearning members={_members.slice(0, 4)} />

      // @ts-expect-error TS(2709): Cannot use namespace 'TestimonialElearning' as a t... Remove this comment to see the full error message
      <TestimonialElearning testimonials={_testimonials} />

      // @ts-expect-error TS(2304): Cannot find name 'posts'.
      <BlogElearningLatestPosts posts={_blogCoursePosts.slice(0, 4)} />

      // @ts-expect-error TS(2749): 'DownloadAppElearning' refers to a value, but is b... Remove this comment to see the full error message
      <DownloadAppElearning />

      // @ts-expect-error TS(2362): The left-hand side of an arithmetic operation must... Remove this comment to see the full error message
      <NewsletterElearning />
    </>
  );
}
