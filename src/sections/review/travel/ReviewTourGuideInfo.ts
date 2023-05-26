import PropTypes from 'prop-types';
// @mui
import { Box, Stack, Paper, Badge, Avatar, Button, Typography, IconButton } from '@mui/material';
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

export default function ReviewTourGuideInfo({
  tourGuide
}: any) {
  const { name, about, quotes, reviews, ratings, verified, picture } = tourGuide;

  return (
    // @ts-expect-error TS(2749): 'Paper' refers to a value, but is being used as a ... Remove this comment to see the full error message
    <Paper variant="outlined" sx={{ borderRadius: 2 }}>
      // @ts-expect-error TS(2749): 'Stack' refers to a value, but is being used as a ... Remove this comment to see the full error message
      <Stack alignItems="center" sx={{ textAlign: 'center', p: 5 }}>
        // @ts-expect-error TS(2749): 'Badge' refers to a value, but is being used as a ... Remove this comment to see the full error message
        <Badge
          // @ts-expect-error TS(2304): Cannot find name 'overlap'.
          overlap="circular"
          // @ts-expect-error TS(2304): Cannot find name 'anchorOrigin'.
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
          // @ts-expect-error TS(2304): Cannot find name 'badgeContent'.
          badgeContent={
            // @ts-expect-error TS(2300): Duplicate identifier '(Missing)'.
            verified ? (
              <Box
                sx={{
                  // @ts-expect-error TS(2300): Duplicate identifier '(Missing)'.
                  width: 20,
                  // @ts-expect-error TS(2300): Duplicate identifier '(Missing)'.
                  height: 20,
                  // @ts-expect-error TS(2300): Duplicate identifier '(Missing)'.
                  borderRadius: '50%',
                  // @ts-expect-error TS(2300): Duplicate identifier '(Missing)'.
                  bgcolor: 'background.default',
                }}
              >
                // @ts-expect-error TS(2304): Cannot find name 'icon'.
                <Iconify icon="carbon:checkmark-filled" sx={{ color: 'success.main' }} />
              </Box>
            ) : null
          }
        >
          // @ts-expect-error TS(2749): 'Avatar' refers to a value, but is being used as a... Remove this comment to see the full error message
          <Avatar src={picture} sx={{ width: 96, height: 96 }} />
        </Badge>

        // @ts-expect-error TS(2304): Cannot find name 'spacing'.
        <Stack spacing={1} sx={{ my: 2 }}>
          // @ts-expect-error TS(2749): 'Typography' refers to a value, but is being used ... Remove this comment to see the full error message
          <Typography variant="h4">{name}</Typography>

          // @ts-expect-error TS(2304): Cannot find name 'spacing'.
          <Stack spacing={0.5} direction="row" alignItems="center">
            // @ts-expect-error TS(2304): Cannot find name 'icon'.
            <Iconify icon="carbon:star-filled" sx={{ color: 'warning.main' }} />

            // @ts-expect-error TS(2304): Cannot find name 'sx'.
            <Box sx={{ typography: 'h6' }}>
              // @ts-expect-error TS(2304): Cannot find name 'ratings'.
              {Number.isInteger(ratings) ? `${ratings}.0` : ratings}
            </Box>

            // @ts-expect-error TS(2304): Cannot find name 'sx'.
            <Box sx={{ typography: 'body2', color: 'text.secondary' }}>
              // @ts-expect-error TS(18004): No value exists in scope for the shorthand propert... Remove this comment to see the full error message
              ({reviews ? fShortenNumber(reviews: any) : 0} reviews)
            // @ts-expect-error TS(2365): Operator '<' cannot be applied to types 'boolean' ... Remove this comment to see the full error message
            </Box>
          </Stack>
        </Stack>

        // @ts-expect-error TS(2304): Cannot find name 'variant'.
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          // @ts-expect-error TS(18004): No value exists in scope for the shorthand propert... Remove this comment to see the full error message
          {about}
        </Typography>

        // @ts-expect-error TS(2304): Cannot find name 'direction'.
        <Stack direction="row" sx={{ my: 2.5 }}>
          // @ts-expect-error TS(2362): The left-hand side of an arithmetic operation must... Remove this comment to see the full error message
          {_socials.map((social: any) => <IconButton key={social.value}>
            // @ts-expect-error TS(2304): Cannot find name 'icon'.
            <Iconify icon={social.icon} sx={{ color: social.color }} />
          </IconButton>)}
        </Stack>

        // @ts-expect-error TS(2304): Cannot find name 'variant'.
        <Typography variant="caption" paragraph sx={{ color: 'text.disabled' }}>
          // @ts-expect-error TS(18004): No value exists in scope for the shorthand propert... Remove this comment to see the full error message
          {quotes}
        </Typography>

        // @ts-expect-error TS(2304): Cannot find name 'color'.
        <Button color="inherit" variant="outlined" size="large">
          // @ts-expect-error TS(2304): Cannot find name 'Contact'.
          Contact Tour Guide
        </Button>
      </Stack>
    </Paper>
  );
}

ReviewTourGuideInfo.propTypes = {
  tourGuide: PropTypes.object,
};
