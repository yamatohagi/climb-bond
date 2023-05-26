// _mock
import {
  _jobs,
  _blogCareerPosts,
  _brandsColor,
  _testimonials,
  _jobsByCompanies,
  _jobsByCategories,
  _jobsByCountries,
// @ts-expect-error TS(2307): Cannot find module 'src/_mock' or its correspondin... Remove this comment to see the full error message
} from 'src/_mock';
//
import NewsletterCareer from '../../newsletter/career';
import OurClientsCareer from '../../our-clients/career';
import { BlogCareerLatestPosts } from '../../blog/career';
import DownloadAppCareer from '../../download-app/career';
import TestimonialCareer from '../../testimonial/career';
import {
  CareerLandingHero,
  CareerLandingStep,
  CareerLandingFeaturedJobs,
  CareerLandingTopCompanies,
  CareerLandingConnections,
  CareerLandingHotCategories,
  CareerLandingForRecruiters,
} from '../landing';

// ----------------------------------------------------------------------

export default function CareerLandingView() {
  // @ts-expect-error TS(2364): The left-hand side of an assignment expression mus... Remove this comment to see the full error message
  return (
    <>
      // @ts-expect-error TS(2749): 'CareerLandingHero' refers to a value, but is bein... Remove this comment to see the full error message
      <CareerLandingHero />

      // @ts-expect-error TS(2362): The left-hand side of an arithmetic operation must... Remove this comment to see the full error message
      <CareerLandingStep />

      // @ts-expect-error TS(2709): Cannot use namespace 'CareerLandingFeaturedJobs' a... Remove this comment to see the full error message
      <CareerLandingFeaturedJobs jobs={_jobs.slice(-6)} />

      // @ts-expect-error TS(2709): Cannot use namespace 'CareerLandingTopCompanies' a... Remove this comment to see the full error message
      <CareerLandingTopCompanies companies={_jobsByCompanies} />

      // @ts-expect-error TS(2304): Cannot find name 'categories'.
      <CareerLandingHotCategories categories={_jobsByCategories} />

      // @ts-expect-error TS(2709): Cannot use namespace 'CareerLandingConnections' as... Remove this comment to see the full error message
      <CareerLandingConnections countries={_jobsByCountries} />

      // @ts-expect-error TS(2362): The left-hand side of an arithmetic operation must... Remove this comment to see the full error message
      <CareerLandingForRecruiters />

      // @ts-expect-error TS(2709): Cannot use namespace 'TestimonialCareer' as a type... Remove this comment to see the full error message
      <TestimonialCareer testimonials={_testimonials} />

      // @ts-expect-error TS(2304): Cannot find name 'brands'.
      <OurClientsCareer brands={_brandsColor} />

      // @ts-expect-error TS(2709): Cannot use namespace 'BlogCareerLatestPosts' as a ... Remove this comment to see the full error message
      <BlogCareerLatestPosts posts={_blogCareerPosts.slice(0, 5)} />

      // @ts-expect-error TS(2362): The left-hand side of an arithmetic operation must... Remove this comment to see the full error message
      <DownloadAppCareer />

      // @ts-expect-error TS(2749): 'NewsletterCareer' refers to a value, but is being... Remove this comment to see the full error message
      <NewsletterCareer />
    </>
  );
}
