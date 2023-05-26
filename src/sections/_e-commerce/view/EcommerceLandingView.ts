// _mock
// @ts-expect-error TS(2307): Cannot find module 'src/_mock' or its correspondin... Remove this comment to see the full error message
import { _testimonials } from 'src/_mock';
//
import TestimonialEcommerce from '../../testimonial/e-commerce';
import { EcommerceHeader } from '../layout';
import {
  EcommerceLandingHero,
  EcommerceLandingCategories,
  EcommerceLandingTopProducts,
  EcommerceLandingHotDealToday,
  EcommerceLandingSpecialOffer,
  EcommerceLandingFeaturedBrands,
  EcommerceLandingPopularProducts,
  EcommerceLandingFeaturedProducts,
} from '../landing';

// ----------------------------------------------------------------------

export default function EcommerceLandingView() {
  return (
    // @ts-expect-error TS(2365): Operator '<' cannot be applied to types 'boolean' ... Remove this comment to see the full error message
    <>
      // @ts-expect-error TS(2749): 'EcommerceHeader' refers to a value, but is being ... Remove this comment to see the full error message
      <EcommerceHeader />

      // @ts-expect-error TS(2362): The left-hand side of an arithmetic operation must... Remove this comment to see the full error message
      <EcommerceLandingHero />

      // @ts-expect-error TS(2749): 'EcommerceLandingCategories' refers to a value, bu... Remove this comment to see the full error message
      <EcommerceLandingCategories />

      // @ts-expect-error TS(2362): The left-hand side of an arithmetic operation must... Remove this comment to see the full error message
      <EcommerceLandingHotDealToday />

      // @ts-expect-error TS(2749): 'EcommerceLandingFeaturedProducts' refers to a val... Remove this comment to see the full error message
      <EcommerceLandingFeaturedProducts />

      // @ts-expect-error TS(2362): The left-hand side of an arithmetic operation must... Remove this comment to see the full error message
      <EcommerceLandingSpecialOffer />

      // @ts-expect-error TS(2749): 'EcommerceLandingFeaturedBrands' refers to a value... Remove this comment to see the full error message
      <EcommerceLandingFeaturedBrands />

      // @ts-expect-error TS(2362): The left-hand side of an arithmetic operation must... Remove this comment to see the full error message
      <EcommerceLandingPopularProducts />

      // @ts-expect-error TS(2749): 'EcommerceLandingTopProducts' refers to a value, b... Remove this comment to see the full error message
      <EcommerceLandingTopProducts />

      // @ts-expect-error TS(2552): Cannot find name 'testimonials'. Did you mean '_te... Remove this comment to see the full error message
      <TestimonialEcommerce testimonials={_testimonials} />
    </>
  );
}
