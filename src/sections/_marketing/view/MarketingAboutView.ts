// _mock
// @ts-expect-error TS(2307): Cannot find module 'src/_mock' or its correspondin... Remove this comment to see the full error message
import { _testimonials, _members, _brandsColor } from 'src/_mock';
//
import { TeamMarketingAbout } from '../../team/marketing';
import NewsletterMarketing from '../../newsletter/marketing';
import TestimonialMarketing from '../../testimonial/marketing';
import { OurClientsMarketingAbout } from '../../our-clients/marketing';
import { MarketingLandingFaqs, MarketingLandingFreeSEO } from '../landing';
import {
  MarketingAbout,
  MarketingAboutStory,
  MarketingAboutOurVision,
  MarketingAboutCoreValues,
} from '../about';

// ----------------------------------------------------------------------

export default function MarketingAboutView() {
  // @ts-expect-error TS(2364): The left-hand side of an assignment expression mus... Remove this comment to see the full error message
  return (
    // @ts-expect-error TS(2365): Operator '<' cannot be applied to types 'boolean' ... Remove this comment to see the full error message
    <>
      // @ts-expect-error TS(2749): 'MarketingAbout' refers to a value, but is being u... Remove this comment to see the full error message
      <MarketingAbout />

      // @ts-expect-error TS(2362): The left-hand side of an arithmetic operation must... Remove this comment to see the full error message
      <MarketingAboutOurVision />

      // @ts-expect-error TS(2749): 'MarketingAboutCoreValues' refers to a value, but ... Remove this comment to see the full error message
      <MarketingAboutCoreValues />

      // @ts-expect-error TS(2362): The left-hand side of an arithmetic operation must... Remove this comment to see the full error message
      <MarketingAboutStory />

      // @ts-expect-error TS(2709): Cannot use namespace 'TeamMarketingAbout' as a typ... Remove this comment to see the full error message
      <TeamMarketingAbout members={_members} />

      // @ts-expect-error TS(2709): Cannot use namespace 'OurClientsMarketingAbout' as... Remove this comment to see the full error message
      <OurClientsMarketingAbout brands={_brandsColor} />

      // @ts-expect-error TS(2552): Cannot find name 'testimonials'. Did you mean '_te... Remove this comment to see the full error message
      <TestimonialMarketing testimonials={_testimonials} />

      // @ts-expect-error TS(2749): 'MarketingLandingFaqs' refers to a value, but is b... Remove this comment to see the full error message
      <MarketingLandingFaqs />

      // @ts-expect-error TS(2362): The left-hand side of an arithmetic operation must... Remove this comment to see the full error message
      <MarketingLandingFreeSEO />

      // @ts-expect-error TS(2709): Cannot use namespace 'NewsletterMarketing' as a ty... Remove this comment to see the full error message
      <NewsletterMarketing />
    </>
  );
}
