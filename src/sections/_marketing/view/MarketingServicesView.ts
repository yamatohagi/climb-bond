// _mock
// @ts-expect-error TS(2307): Cannot find module 'src/_mock' or its correspondin... Remove this comment to see the full error message
import { _blogMarketingPosts, _testimonials } from 'src/_mock';
//
import NewsletterMarketing from '../../newsletter/marketing';
import TestimonialMarketing from '../../testimonial/marketing';
import { BlogMarketingLatestPosts } from '../../blog/marketing';
import { MarketingLandingFreeSEO } from '../landing';
import {
  MarketingServices,
  MarketingServicesHero,
  MarketingServicesInclude,
  MarketingServicesBenefits,
  MarketingServicesHowItWork,
} from '../services';

// ----------------------------------------------------------------------

export default function MarketingServicesView() {
  return (
    // @ts-expect-error TS(2365): Operator '<' cannot be applied to types 'boolean' ... Remove this comment to see the full error message
    <>
      // @ts-expect-error TS(2749): 'MarketingServicesHero' refers to a value, but is ... Remove this comment to see the full error message
      <MarketingServicesHero />

      // @ts-expect-error TS(2362): The left-hand side of an arithmetic operation must... Remove this comment to see the full error message
      <MarketingServices />

      // @ts-expect-error TS(2749): 'MarketingServicesInclude' refers to a value, but ... Remove this comment to see the full error message
      <MarketingServicesInclude />

      // @ts-expect-error TS(2362): The left-hand side of an arithmetic operation must... Remove this comment to see the full error message
      <MarketingServicesBenefits />

      // @ts-expect-error TS(2749): 'MarketingServicesHowItWork' refers to a value, bu... Remove this comment to see the full error message
      <MarketingServicesHowItWork />

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
