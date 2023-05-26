// _mock
import {
  _brands,
  _members,
  _blogMarketingPosts,
  _caseStudies,
  _testimonials,
  _pricingMarketing,
// @ts-expect-error TS(2307): Cannot find module 'src/_mock' or its correspondin... Remove this comment to see the full error message
} from 'src/_mock';
//
import PricingMarketing from '../../pricing/marketing';
import TeamMarketing from '../../team/marketing';
import NewsletterMarketing from '../../newsletter/marketing';
import { BlogMarketingLatestPosts } from '../../blog/marketing';
import TestimonialMarketing from '../../testimonial/marketing';
import OurClientsMarketing from '../../our-clients/marketing';
import {
  MarketingLandingFaqs,
  MarketingLandingHero,
  MarketingLandingAbout,
  MarketingLandingFreeSEO,
  MarketingLandingProcess,
  MarketingLandingServices,
  MarketingLandingCaseStudies,
} from '../landing';

// ----------------------------------------------------------------------

export default function MarketingLandingPage() {
  return (
    <>
      // @ts-expect-error TS(2749): 'MarketingLandingHero' refers to a value, but is b... Remove this comment to see the full error message
      <MarketingLandingHero />

      // @ts-expect-error TS(2552): Cannot find name 'brands'. Did you mean '_brands'?
      <OurClientsMarketing brands={_brands} />

      // @ts-expect-error TS(2749): 'MarketingLandingAbout' refers to a value, but is ... Remove this comment to see the full error message
      <MarketingLandingAbout />

      // @ts-expect-error TS(2362): The left-hand side of an arithmetic operation must... Remove this comment to see the full error message
      <MarketingLandingServices />

      // @ts-expect-error TS(2749): 'MarketingLandingProcess' refers to a value, but i... Remove this comment to see the full error message
      <MarketingLandingProcess />

      // @ts-expect-error TS(2552): Cannot find name 'caseStudies'. Did you mean '_cas... Remove this comment to see the full error message
      <MarketingLandingCaseStudies caseStudies={_caseStudies.slice(-6)} />

      // @ts-expect-error TS(2709): Cannot use namespace 'TeamMarketing' as a type.
      <TeamMarketing members={_members} />

      // @ts-expect-error TS(2304): Cannot find name 'plans'.
      <PricingMarketing plans={_pricingMarketing} />

      // @ts-expect-error TS(2749): 'MarketingLandingFaqs' refers to a value, but is b... Remove this comment to see the full error message
      <MarketingLandingFaqs />

      // @ts-expect-error TS(2552): Cannot find name 'testimonials'. Did you mean '_te... Remove this comment to see the full error message
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
