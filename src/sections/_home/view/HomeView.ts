// _mock
// @ts-expect-error TS(2307): Cannot find module 'src/_mock' or its correspondin... Remove this comment to see the full error message
import { _pricingHome } from 'src/_mock';
// components
// @ts-expect-error TS(2307): Cannot find module 'src/components/scroll-progress... Remove this comment to see the full error message
import ScrollProgress from 'src/components/scroll-progress';
//
import PricingHome from '../../pricing/home';
import {
  HomeHero,
  HomeFAQs,
  HomeNewStart,
  HomeForDesigner,
  HomeCombination,
  HomeAdvertisement,
  HomeFeatureHighlights,
  HomeFlexibleComponents,
} from '../components';

// ----------------------------------------------------------------------

export default function HomeView() {
  // @ts-expect-error TS(2364): The left-hand side of an assignment expression mus... Remove this comment to see the full error message
  return (
    // @ts-expect-error TS(2365): Operator '<' cannot be applied to types 'boolean' ... Remove this comment to see the full error message
    <>
      <ScrollProgress />

      // @ts-expect-error TS(2362): The left-hand side of an arithmetic operation must... Remove this comment to see the full error message
      <HomeHero />

      // @ts-expect-error TS(2749): 'HomeNewStart' refers to a value, but is being use... Remove this comment to see the full error message
      <HomeNewStart />

      // @ts-expect-error TS(2362): The left-hand side of an arithmetic operation must... Remove this comment to see the full error message
      <HomeFlexibleComponents />

      // @ts-expect-error TS(2749): 'HomeFeatureHighlights' refers to a value, but is ... Remove this comment to see the full error message
      <HomeFeatureHighlights />

      // @ts-expect-error TS(2362): The left-hand side of an arithmetic operation must... Remove this comment to see the full error message
      <HomeForDesigner />

      // @ts-expect-error TS(2709): Cannot use namespace 'PricingHome' as a type.
      <PricingHome plans={_pricingHome} />

      // @ts-expect-error TS(2749): 'HomeFAQs' refers to a value, but is being used as... Remove this comment to see the full error message
      <HomeFAQs />

      // @ts-expect-error TS(2362): The left-hand side of an arithmetic operation must... Remove this comment to see the full error message
      <HomeCombination />

      // @ts-expect-error TS(2749): 'HomeAdvertisement' refers to a value, but is bein... Remove this comment to see the full error message
      <HomeAdvertisement />
    </>
  );
}
