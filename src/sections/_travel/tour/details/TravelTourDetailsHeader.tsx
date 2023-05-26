import PropTypes from 'prop-types';
import { useState } from 'react';
// @mui
import {
  Box,
  Link,
  Stack,
  Avatar,
  Popover,
  Checkbox,
  MenuItem,
  Typography,
  IconButton,
} from '@mui/material';
// utils
// @ts-expect-error TS(2307): Cannot find module 'src/utils/formatNumber' or its... Remove this comment to see the full error message
import { fShortenNumber } from 'src/utils/formatNumber';
// _mock
// @ts-expect-error TS(2307): Cannot find module 'src/_mock' or its correspondin... Remove this comment to see the full error message
import { _socials } from 'src/_mock';
// components
// @ts-expect-error TS(2307): Cannot find module 'src/components/iconify' or its... Remove this comment to see the full error message
import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

export default function TravelTourDetailsHeader({
  tour
}: any) {
  const { slug, ratings, reviews, location, favorited, tourGuide } = tour;

  const [favorite, setFavorite] = useState(favorited);

  const [open, setOpen] = useState(null);

  const handleOpen = (event: any) => {
    setOpen(event.currentTarget);
  };

  const handleClose = () => {
    setOpen(null);
  };

  const handleChangeFavorite = (event: any) => {
    setFavorite(event.target.checked);
  };

  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  return <>
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <Stack
      spacing={3}
      direction={{ xs: 'column', md: 'row' }}
      sx={{
        mb: 3,
      }}
    >
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Typography variant="h3" component="h1" sx={{ flexGrow: 1, pr: { md: 10 } }}>
        {slug}
      </Typography>

      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Stack direction="row" alignItems="center" flexShrink={0}>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <IconButton onClick={handleOpen} color={open ? 'primary' : 'default'}>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Iconify icon="carbon:share" />
        </IconButton>

        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Checkbox
          color="error"
          checked={favorite}
          onChange={handleChangeFavorite}
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          icon={<Iconify icon="carbon:favorite" />}
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          checkedIcon={<Iconify icon="carbon:favorite-filled" />}
        />
      </Stack>
    </Stack>

    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <Stack spacing={3} direction={{ xs: 'column', md: 'row' }}>
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Stack spacing={0.5} direction="row" alignItems="center">
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Iconify icon="carbon:star-filled" sx={{ color: 'warning.main' }} />

        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Box sx={{ typography: 'h6' }}>
          {Number.isInteger(ratings) ? `${ratings}.0` : ratings}
        </Box>

        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Link variant="body2" sx={{ color: 'text.secondary' }}>
          ({fShortenNumber(reviews)} reviews)
        </Link>
      </Stack>

      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Stack direction="row" alignItems="center" sx={{ typography: 'body2' }}>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Iconify icon="carbon:location" sx={{ mr: 0.5 }} /> {location}
      </Stack>

      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Stack direction="row" alignItems="center">
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Avatar src={tourGuide?.picture} sx={{ width: 24, height: 24 }} />

        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Typography variant="body2" sx={{ color: 'text.secondary', mx: 0.5 }}>
          Tour guide by
        </Typography>

        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Link variant="subtitle2" color="inherit">
          {tourGuide?.name}
        </Link>
      </Stack>
    </Stack>

    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <Popover
      open={!!open}
      onClose={handleClose}
      anchorEl={open}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      transformOrigin={{ vertical: 'top', horizontal: 'center' }}
      PaperProps={{
        sx: { width: 220, p: 1 },
      }}
    >
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      {_socials.map((social: any) => <MenuItem key={social.value} onClick={handleClose} sx={{ typography: 'body2' }}>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Iconify icon={social.icon} width={24} sx={{ mr: 1, color: social.color }} />
        Share via {social.label}
      </MenuItem>)}
    </Popover>
  </>;
}

TravelTourDetailsHeader.propTypes = {
  tour: PropTypes.shape({
    favorited: PropTypes.bool,
    location: PropTypes.string,
    ratings: PropTypes.number,
    reviews: PropTypes.number,
    slug: PropTypes.string,
    tourGuide: PropTypes.shape({
      name: PropTypes.string,
      picture: PropTypes.string,
    }),
  }),
};
