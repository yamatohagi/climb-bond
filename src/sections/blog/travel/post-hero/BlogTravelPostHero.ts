import PropTypes from 'prop-types';
// @mui
import { alpha, useTheme } from '@mui/material/styles';
import {
  Box,
  Stack,
  Container,
  Typography,
  IconButton,
  Unstable_Grid2 as Grid,
} from '@mui/material';
// utils
// @ts-expect-error TS(2307): Cannot find module 'src/utils/formatTime' or its c... Remove this comment to see the full error message
import { fDate } from 'src/utils/formatTime';
// @ts-expect-error TS(2307): Cannot find module 'src/utils/cssStyles' or its co... Remove this comment to see the full error message
import { bgGradient } from 'src/utils/cssStyles';
// _mock
// @ts-expect-error TS(2307): Cannot find module 'src/_mock' or its correspondin... Remove this comment to see the full error message
import { _socials } from 'src/_mock';
// components
// @ts-expect-error TS(2307): Cannot find module 'src/components/iconify' or its... Remove this comment to see the full error message
import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

export default function BlogTravelPostHero({
  post
}: any) {
  const theme = useTheme();

  const { title, duration, createdAt, heroImg } = post;

  return (
    // @ts-expect-error TS(2749): 'Box' refers to a value, but is being used as a ty... Remove this comment to see the full error message
    <Box
      // @ts-expect-error TS(2304): Cannot find name 'sx'.
      sx={{
        // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
        py: 20,
        // @ts-expect-error TS(2304): Cannot find name 'position'.
        position: 'relative',
        ...bgGradient({
          startColor: `${alpha(theme.palette.common.black, 0)} 0%`,
          endColor: `${theme.palette.common.black} 75%`,
          imgUrl: heroImg,
        }),
      }}
    >
      // @ts-expect-error TS(2749): 'Container' refers to a value, but is being used a... Remove this comment to see the full error message
      <Container>
        // @ts-expect-error TS(2749): 'Grid' refers to a value, but is being used as a t... Remove this comment to see the full error message
        <Grid container spacing={3}>
          // @ts-expect-error TS(2749): 'Grid' refers to a value, but is being used as a t... Remove this comment to see the full error message
          <Grid xs={12} md={6}>
            // @ts-expect-error TS(2749): 'Stack' refers to a value, but is being used as a ... Remove this comment to see the full error message
            <Stack
              // @ts-expect-error TS(2304): Cannot find name 'spacing'.
              spacing={3}
              // @ts-expect-error TS(2304): Cannot find name 'alignItems'.
              alignItems={{
                // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
                xs: 'center',
                // @ts-expect-error TS(2304): Cannot find name 'md'.
                md: 'flex-start',
              }}
              // @ts-expect-error TS(2304): Cannot find name 'sx'.
              sx={{
                // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
                color: 'common.white',
                // @ts-expect-error TS(2304): Cannot find name 'textAlign'.
                textAlign: {
                  // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
                  xs: 'center',
                  // @ts-expect-error TS(2304): Cannot find name 'md'.
                  md: 'left',
                },
              }}
            >
              // @ts-expect-error TS(2749): 'Typography' refers to a value, but is being used ... Remove this comment to see the full error message
              <Typography variant="body2" sx={{ opacity: 0.72 }}>
                // @ts-expect-error TS(18004): No value exists in scope for the shorthand propert... Remove this comment to see the full error message
                {duration}
              </Typography>

              // @ts-expect-error TS(2304): Cannot find name 'variant'.
              <Typography variant="h2" component="h1">
                // @ts-expect-error TS(18004): No value exists in scope for the shorthand propert... Remove this comment to see the full error message
                {title}
              </Typography>

              // @ts-expect-error TS(2304): Cannot find name 'variant'.
              <Typography variant="caption" sx={{ opacity: 0.72 }}>
                // @ts-expect-error TS(7006): Parameter '(Missing)' implicitly has an 'any' type... Remove this comment to see the full error message
                {fDate(createdAt: any, 'dd/MM/yyyy p')}
              </Typography>

              // @ts-expect-error TS(2304): Cannot find name 'direction'.
              <Stack direction="row">
                // @ts-expect-error TS(2362): The left-hand side of an arithmetic operation must... Remove this comment to see the full error message
                {_socials.map((social: any) => <IconButton key={social.value}>
                  // @ts-expect-error TS(2304): Cannot find name 'icon'.
                  <Iconify icon={social.icon} sx={{ color: social.color }} />
                </IconButton>)}
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

BlogTravelPostHero.propTypes = {
  post: PropTypes.shape({
    createdAt: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.instanceOf(Date),
    ]),
    duration: PropTypes.string,
    heroImg: PropTypes.string,
    title: PropTypes.string,
  }),
};
