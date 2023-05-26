import PropTypes from 'prop-types';
// @mui
import { LoadingButton } from '@mui/lab';
import { Card, Stack, Divider, Typography, Avatar, Box, Link } from '@mui/material';
// utils
// @ts-expect-error TS(2307): Cannot find module 'src/utils/formatNumber' or its... Remove this comment to see the full error message
import { fCurrency, fShortenNumber } from 'src/utils/formatNumber';
// hooks
// @ts-expect-error TS(2307): Cannot find module 'src/hooks/useResponsive' or it... Remove this comment to see the full error message
import useResponsive from 'src/hooks/useResponsive';
// components
// @ts-expect-error TS(2307): Cannot find module 'src/components/image' or its c... Remove this comment to see the full error message
import Image from 'src/components/image';
// @ts-expect-error TS(2307): Cannot find module 'src/components/iconify' or its... Remove this comment to see the full error message
import Iconify from 'src/components/iconify';
// @ts-expect-error TS(2307): Cannot find module 'src/components/text-max-line' ... Remove this comment to see the full error message
import TextMaxLine from 'src/components/text-max-line';
//
import { TravelFilterGuests, TravelFilterTime } from '../tour/filters/components';

// ----------------------------------------------------------------------

export default function TravelCheckOutSummary({
  tour,
  guests,
  departureDay,
  isSubmitting,
  onDecreaseGuests,
  onIncrementGuests,
  onChangeDepartureDay
}: any) {
  const isSmUp = useResponsive('up', 'sm');

  const { coverImg, slug, ratings, reviews, price, tourGuide } = tour;

  return (
    // @ts-expect-error TS(2749): 'Card' refers to a value, but is being used as a t... Remove this comment to see the full error message
    <Card>
      // @ts-expect-error TS(2749): 'Box' refers to a value, but is being used as a ty... Remove this comment to see the full error message
      <Box
        // @ts-expect-error TS(2304): Cannot find name 'sx'.
        sx={{
          // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
          p: 4,
          // @ts-expect-error TS(2304): Cannot find name 'pb'.
          pb: 0,
          // @ts-expect-error TS(2304): Cannot find name 'gap'.
          gap: 3,
          // @ts-expect-error TS(2304): Cannot find name 'display'.
          display: 'grid',
          // @ts-expect-error TS(2304): Cannot find name 'gridTemplateColumns'.
          gridTemplateColumns: {
            // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
            xs: 'repeat(1, 1fr)',
            // @ts-expect-error TS(2304): Cannot find name 'sm'.
            sm: 'repeat(2, 1fr)',
            // @ts-expect-error TS(2304): Cannot find name 'md'.
            md: 'repeat(1, 1fr)',
            // @ts-expect-error TS(2304): Cannot find name 'lg'.
            lg: 'repeat(2, 1fr)',
          },
        }}
      >
        // @ts-expect-error TS(2304): Cannot find name 'alt'.
        <Image alt={slug} src={coverImg} ratio="1/1" sx={{ borderRadius: 2 }} />

        <Stack>
          // @ts-expect-error TS(2304): Cannot find name 'variant'.
          <TextMaxLine variant="h5" sx={{ mb: 2 }}>
            // @ts-expect-error TS(18004): No value exists in scope for the shorthand propert... Remove this comment to see the full error message
            {slug}
          </TextMaxLine>

          // @ts-expect-error TS(2304): Cannot find name 'spacing'.
          <Stack spacing={0.5} direction="row" alignItems="center">
            // @ts-expect-error TS(2304): Cannot find name 'icon'.
            <Iconify icon="carbon:star-filled" sx={{ color: 'warning.main' }} />

            // @ts-expect-error TS(2304): Cannot find name 'sx'.
            <Box sx={{ typography: 'h6' }}>
              // @ts-expect-error TS(2304): Cannot find name 'ratings'.
              {Number.isInteger(ratings) ? `${ratings}.0` : ratings}
            </Box>

            // @ts-expect-error TS(2304): Cannot find name 'reviews'.
            {reviews && (
              // @ts-expect-error TS(2749): 'Link' refers to a value, but is being used as a t... Remove this comment to see the full error message
              <Link variant="body2" sx={{ color: 'text.secondary' }}>
                // @ts-expect-error TS(2304): Cannot find name 'reviews'.
                ({fShortenNumber(reviews: any)} reviews)
              </Link>
            )}
          </Stack>

          // @ts-expect-error TS(2304): Cannot find name 'sx'.
          <Divider sx={{ borderStyle: 'dashed', my: 2.5 }} />

          // @ts-expect-error TS(2304): Cannot find name 'direction'.
          <Stack direction="row" alignItems="center" spacing={1.5}>
            // @ts-expect-error TS(2749): 'Avatar' refers to a value, but is being used as a... Remove this comment to see the full error message
            <Avatar src={tourGuide.picture} />

            // @ts-expect-error TS(2304): Cannot find name 'div'.
            <div>
              // @ts-expect-error TS(2749): 'Typography' refers to a value, but is being used ... Remove this comment to see the full error message
              <Typography variant="body2" sx={{ color: 'text.disabled' }}>
                // @ts-expect-error TS(2304): Cannot find name 'Tour'.
                Tour guide by
              </Typography>

              // @ts-expect-error TS(2304): Cannot find name 'variant'.
              <Typography variant="subtitle2">{tourGuide.name}</Typography>
            </div>
          </Stack>
        </Stack>
      </Box>

      // @ts-expect-error TS(2304): Cannot find name 'sx'.
      <Stack sx={{ p: 4, pb: 3 }}>
        // @ts-expect-error TS(2749): 'Stack' refers to a value, but is being used as a ... Remove this comment to see the full error message
        <Stack
          // @ts-expect-error TS(2304): Cannot find name 'spacing'.
          spacing={2.5}
          // @ts-expect-error TS(2304): Cannot find name 'direction'.
          direction={{ xs: 'column', sm: 'row' }}
          // @ts-expect-error TS(2304): Cannot find name 'sx'.
          sx={{
            // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
            p: 2.5,
            // @ts-expect-error TS(2304): Cannot find name 'borderRadius'.
            borderRadius: 2,
            // @ts-expect-error TS(2304): Cannot find name 'color'.
            color: 'text.disabled',
            // @ts-expect-error TS(2304): Cannot find name 'bgcolor'.
            bgcolor: 'background.neutral',
          }}
        >
          // @ts-expect-error TS(2749): 'Stack' refers to a value, but is being used as a ... Remove this comment to see the full error message
          <Stack direction="row" spacing={1.5} sx={{ width: 1 }}>
            // @ts-expect-error TS(2304): Cannot find name 'icon'.
            <Iconify icon="carbon:events" width={24} />

            // @ts-expect-error TS(2749): 'Stack' refers to a value, but is being used as a ... Remove this comment to see the full error message
            <Stack spacing={0.5}>
              // @ts-expect-error TS(2749): 'Typography' refers to a value, but is being used ... Remove this comment to see the full error message
              <Typography variant="caption">Departure day</Typography>
              <TravelFilterGuests
                // @ts-expect-error TS(2304): Cannot find name 'startAdornment'.
                startAdornment={null}
                // @ts-expect-error TS(2304): Cannot find name 'guests'.
                guests={guests}
                // @ts-expect-error TS(2304): Cannot find name 'onDecreaseGuests'.
                onDecreaseGuests={onDecreaseGuests}
                // @ts-expect-error TS(2304): Cannot find name 'onIncrementGuests'.
                onIncrementGuests={onIncrementGuests}
                // @ts-expect-error TS(2304): Cannot find name 'sx'.
                sx={{ height: 'unset', color: 'text.primary' }}
              // @ts-expect-error TS(2365): Operator '<' cannot be applied to types 'boolean' ... Remove this comment to see the full error message
              />
            </Stack>
          </Stack>

          // @ts-expect-error TS(2304): Cannot find name 'isSmUp'.
          {isSmUp && <Divider flexItem orientation="vertical" sx={{ borderStyle: 'dashed' }} />}

          // @ts-expect-error TS(2304): Cannot find name 'direction'.
          <Stack direction="row" spacing={1.5} sx={{ width: 1 }}>
            // @ts-expect-error TS(2304): Cannot find name 'icon'.
            <Iconify icon="carbon:calendar" width={24} />
            // @ts-expect-error TS(2749): 'Stack' refers to a value, but is being used as a ... Remove this comment to see the full error message
            <Stack spacing={0.5}>
              // @ts-expect-error TS(2749): 'Typography' refers to a value, but is being used ... Remove this comment to see the full error message
              <Typography variant="caption">Guests</Typography>
              <TravelFilterTime
                // @ts-expect-error TS(2304): Cannot find name 'departureDay'.
                departureDay={departureDay}
                // @ts-expect-error TS(2304): Cannot find name 'onChangeDepartureDay'.
                onChangeDepartureDay={onChangeDepartureDay}
                // @ts-expect-error TS(2304): Cannot find name 'sx'.
                sx={{
                  // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
                  height: 'unset',
                  // @ts-expect-error TS(2304): Cannot find name 'color'.
                  color: 'text.primary',
                  '& .MuiInputAdornment-root': { display: 'none' },
                }}
              // @ts-expect-error TS(2365): Operator '<' cannot be applied to types 'boolean' ... Remove this comment to see the full error message
              />
            </Stack>
          </Stack>
        </Stack>

        <Stack
          // @ts-expect-error TS(2304): Cannot find name 'spacing'.
          spacing={1}
          // @ts-expect-error TS(2304): Cannot find name 'direction'.
          direction="row"
          // @ts-expect-error TS(2304): Cannot find name 'alignItems'.
          alignItems="center"
          // @ts-expect-error TS(2304): Cannot find name 'justifyContent'.
          justifyContent="space-between"
          // @ts-expect-error TS(2304): Cannot find name 'sx'.
          sx={{ mt: 3, mb: 2 }}
        >
          // @ts-expect-error TS(2749): 'Typography' refers to a value, but is being used ... Remove this comment to see the full error message
          <Typography variant="body2" sx={{ color: 'text.disabled' }}>
            // @ts-expect-error TS(2304): Cannot find name 'Service'.
            Service charge
          </Typography>
          // @ts-expect-error TS(2304): Cannot find name 'variant'.
          <Typography variant="body2">{fCurrency(price: any)}</Typography>
        </Stack>

        // @ts-expect-error TS(2304): Cannot find name 'spacing'.
        <Stack spacing={1} direction="row" alignItems="center" justifyContent="space-between">
          // @ts-expect-error TS(2749): 'Typography' refers to a value, but is being used ... Remove this comment to see the full error message
          <Typography variant="body2" sx={{ color: 'text.disabled' }}>
            // @ts-expect-error TS(2304): Cannot find name 'Discount'.
            Discount
          </Typography>
          // @ts-expect-error TS(2304): Cannot find name 'variant'.
          <Typography variant="body2">-</Typography>
        </Stack>
      </Stack>

      // @ts-expect-error TS(2304): Cannot find name 'sx'.
      <Divider sx={{ borderStyle: 'dashed' }} />

      // @ts-expect-error TS(2304): Cannot find name 'spacing'.
      <Stack spacing={3} sx={{ p: 3 }}>
        // @ts-expect-error TS(2749): 'Stack' refers to a value, but is being used as a ... Remove this comment to see the full error message
        <Stack spacing={1} direction="row" alignItems="center" justifyContent="space-between">
          // @ts-expect-error TS(2749): 'Typography' refers to a value, but is being used ... Remove this comment to see the full error message
          <Typography variant="h5">Total</Typography>
          // @ts-expect-error TS(2304): Cannot find name 'variant'.
          <Typography variant="h5">{fCurrency(price: any)}</Typography>
        </Stack>

        <LoadingButton
          // @ts-expect-error TS(2304): Cannot find name 'type'.
          type="submit"
          // @ts-expect-error TS(2304): Cannot find name 'size'.
          size="large"
          // @ts-expect-error TS(2304): Cannot find name 'variant'.
          variant="contained"
          // @ts-expect-error TS(2304): Cannot find name 'color'.
          color="inherit"
          // @ts-expect-error TS(2304): Cannot find name 'loading'.
          loading={isSubmitting}
        >
          // @ts-expect-error TS(2304): Cannot find name 'Complete'.
          Complete Booking
        </LoadingButton>
      </Stack>
    </Card>
  );
}

TravelCheckOutSummary.propTypes = {
  departureDay: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.instanceOf(Date),
  ]),
  guests: PropTypes.object,
  isSubmitting: PropTypes.bool,
  onChangeDepartureDay: PropTypes.func,
  onDecreaseGuests: PropTypes.func,
  onIncrementGuests: PropTypes.func,
  tour: PropTypes.shape({
    coverImg: PropTypes.string,
    price: PropTypes.number,
    ratings: PropTypes.number,
    reviews: PropTypes.number,
    slug: PropTypes.string,
    tourGuide: PropTypes.shape({
      name: PropTypes.string,
      picture: PropTypes.string,
    }),
  }),
};
