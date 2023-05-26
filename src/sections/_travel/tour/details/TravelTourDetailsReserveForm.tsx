import PropTypes from 'prop-types';
import { useState } from 'react';
// next
import { useRouter } from 'next/router';
// @mui
import { alpha } from '@mui/material/styles';
import { Typography, Stack, Box, Button, Divider, Card } from '@mui/material';
// routes
// @ts-expect-error TS(2307): Cannot find module 'src/routes/paths' or its corre... Remove this comment to see the full error message
import { paths } from 'src/routes/paths';
// utils
// @ts-expect-error TS(2307): Cannot find module 'src/utils/formatNumber' or its... Remove this comment to see the full error message
import { fCurrency } from 'src/utils/formatNumber';
//
import { TravelFilterTime, TravelFilterGuests } from '../filters/components';

// ----------------------------------------------------------------------

export default function TravelTourDetailsReserveForm({ tour }: any) {
  const { push } = useRouter();

  const [departureDay, setDepartureDay] = useState(null);

  const [guests, setGuests] = useState({
    adults: 0,
    children: 0,
  });

  const { price, priceSale } = tour;

  const handleChangeDepartureDay = (newValue: any) => {
    setDepartureDay(newValue);
  };

  const handleIncrementGuests = (guest: any) => {
    if (guest === 'children') {
      setGuests({ ...guests, children: guests.children + 1 });
    } else {
      setGuests({ ...guests, adults: guests.adults + 1 });
    }
  };

  const handleDecreaseGuests = (guest: any) => {
    if (guest === 'children') {
      setGuests({ ...guests, children: guests.children - 1 });
    } else {
      setGuests({ ...guests, adults: guests.adults - 1 });
    }
  };

  const handleClickReserve = () => {
    push(paths.travel.checkout);
  };

  return (
    <Card>
      <Stack spacing={3} sx={{ p: 3 }}>
        <Stack spacing={1} direction="row" alignItems="center" sx={{ typography: 'h4' }}>
          {priceSale > 0 && (
            <Box sx={{ color: 'grey.500', textDecoration: 'line-through', mr: 1 }}>
              {fCurrency(priceSale)}
            </Box>
          )}

          {fCurrency(price)}
          <Typography variant="body2" component="span" sx={{ color: 'text.disabled', ml: 1 }}>
            /Tour
          </Typography>
        </Stack>

        <Stack spacing={1.5}>
          <Box
            sx={{
              py: 0.5,
              px: 1.5,
              borderRadius: 1,
              bgcolor: (theme) => alpha(theme.palette.grey[500], 0.08),
            }}
          >
            <TravelFilterTime
              departureDay={departureDay}
              onChangeDepartureDay={handleChangeDepartureDay}
            />
          </Box>

          <Box
            sx={{
              py: 0.5,
              px: 1.5,
              borderRadius: 1,
              bgcolor: (theme) => alpha(theme.palette.grey[500], 0.08),
            }}
          >
            <TravelFilterGuests
              guests={guests}
              onDecreaseGuests={handleDecreaseGuests}
              onIncrementGuests={handleIncrementGuests}
            />
          </Box>
        </Stack>

        <Stack spacing={1} direction="row" alignItems="center" justifyContent="space-between">
          <Typography variant="body2" sx={{ color: 'text.disabled' }}>
            Service charge
          </Typography>
          <Typography variant="body2">{fCurrency(priceSale) || '-'}</Typography>
        </Stack>

        <Stack spacing={1} direction="row" alignItems="center" justifyContent="space-between">
          <Typography variant="body2" sx={{ color: 'text.disabled' }}>
            Discount
          </Typography>
          <Typography variant="body2"> - </Typography>
        </Stack>
      </Stack>

      <Divider sx={{ borderStyle: 'dashed' }} />

      <Stack spacing={3} sx={{ p: 3 }}>
        <Stack spacing={1} direction="row" alignItems="center" justifyContent="space-between">
          <Typography variant="h5">Total</Typography>
          <Typography variant="h5">{fCurrency(priceSale)}</Typography>
        </Stack>

        <Button size="large" variant="contained" color="inherit" onClick={handleClickReserve}>
          Reserve
        </Button>
      </Stack>
    </Card>
  );
}

TravelTourDetailsReserveForm.propTypes = {
  tour: PropTypes.shape({
    price: PropTypes.number,
    priceSale: PropTypes.number,
  }),
};
