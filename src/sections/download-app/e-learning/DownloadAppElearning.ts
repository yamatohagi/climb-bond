// @mui
import { alpha, styled } from '@mui/material/styles';
import {
  Stack,
  Button,
  Divider,
  Container,
  Typography,
  Unstable_Grid2 as Grid,
} from '@mui/material';
// components
// @ts-expect-error TS(2307): Cannot find module 'src/components/image' or its c... Remove this comment to see the full error message
import Image from 'src/components/image';
// @ts-expect-error TS(2307): Cannot find module 'src/components/iconify' or its... Remove this comment to see the full error message
import Iconify from 'src/components/iconify';
// @ts-expect-error TS(2307): Cannot find module 'src/components/svg-color' or i... Remove this comment to see the full error message
import SvgColor from 'src/components/svg-color';

// ----------------------------------------------------------------------

const StyledAppStoreButton = styled(Button)(({ theme }) => ({
  flexShrink: 0,
  padding: '5px 12px',
  margin: theme.spacing(1),
  color: theme.palette.common.white,
  border: `solid 1px ${alpha(theme.palette.common.black, 0.24)}`,
  background: `linear-gradient(180deg, ${theme.palette.grey[900]} 0%, ${theme.palette.common.black} 100%)`,
  '& .MuiButton-startIcon': {
    marginLeft: 0,
  },
}));

// ----------------------------------------------------------------------

export default function DownloadAppElearning() {
  return (
    // @ts-expect-error TS(2749): 'Container' refers to a value, but is being used a... Remove this comment to see the full error message
    <Container sx={{ py: { xs: 8, md: 15 } }}>
      // @ts-expect-error TS(2749): 'Grid' refers to a value, but is being used as a t... Remove this comment to see the full error message
      <Grid container spacing={3} justifyContent={{ lg: 'space-between' }}>
        // @ts-expect-error TS(2749): 'Grid' refers to a value, but is being used as a t... Remove this comment to see the full error message
        <Grid xs={12} md={6} lg={5}>
          // @ts-expect-error TS(2749): 'Stack' refers to a value, but is being used as a ... Remove this comment to see the full error message
          <Stack
            // @ts-expect-error TS(2304): Cannot find name 'sx'.
            sx={{
              // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
              textAlign: { xs: 'center', md: 'unset' },
            }}
          >
            // @ts-expect-error TS(2749): 'Typography' refers to a value, but is being used ... Remove this comment to see the full error message
            <Typography variant="h2"> Download App </Typography>

            // @ts-expect-error TS(2304): Cannot find name 'sx'.
            <Typography sx={{ color: 'text.secondary', mt: 3, mb: 8 }}>
              // @ts-expect-error TS(2304): Cannot find name 'Cum'.
              Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              // @ts-expect-error TS(2304): Cannot find name 'Phasellus'.
              Phasellus leo dolor, tempus non, auctor et, hendrerit quis, nisi.
            </Typography>
          </Stack>

          <Stack
            // @ts-expect-error TS(2304): Cannot find name 'alignItems'.
            alignItems="center"
            // @ts-expect-error TS(2304): Cannot find name 'sx'.
            sx={{
              // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
              py: 5,
              // @ts-expect-error TS(2304): Cannot find name 'borderRadius'.
              borderRadius: 2,
              // @ts-expect-error TS(2304): Cannot find name 'mb'.
              mb: { xs: 8, md: 0 },
              // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
              px: { xs: 3, md: 5 },
              // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
              border: (theme: any) => `solid 1px ${theme.palette.divider}`,
            }}
          >
            // @ts-expect-error TS(2749): 'Stack' refers to a value, but is being used as a ... Remove this comment to see the full error message
            <Stack spacing={3} direction="row" alignItems="center">
              <SvgColor
                // @ts-expect-error TS(2304): Cannot find name 'src'.
                src="/assets/icons/ic_qrcode.svg"
                // @ts-expect-error TS(2304): Cannot find name 'sx'.
                sx={{ width: 120, height: 120, color: 'grey.900' }}
              // @ts-expect-error TS(2365): Operator '<' cannot be applied to types 'RegExp' a... Remove this comment to see the full error message
              />
              // @ts-expect-error TS(2304): Cannot find name 'variant'.
              <Typography variant="h6">
                // @ts-expect-error TS(2304): Cannot find name 'Scan'.
                Scan QR code to
                // @ts-expect-error TS(2304): Cannot find name 'br'.
                <br /> install on your device
              </Typography>
            </Stack>

            // @ts-expect-error TS(2304): Cannot find name 'sx'.
            <Divider sx={{ my: 5, width: 1, borderStyle: 'dashed' }} />

            // @ts-expect-error TS(2304): Cannot find name 'direction'.
            <AppStoreButton direction={{ xs: 'column', sm: 'row' }} />
          </Stack>
        </Grid>

        // @ts-expect-error TS(2304): Cannot find name 'xs'.
        <Grid xs={12} md={6} lg={6}>
          <Image
            // @ts-expect-error TS(2304): Cannot find name 'alt'.
            alt="mobile app"
            // @ts-expect-error TS(2304): Cannot find name 'src'.
            src="/assets/images/course/course_download_app.png"
            // @ts-expect-error TS(2304): Cannot find name 'sx'.
            sx={{
              // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
              maxWidth: 564,
              // @ts-expect-error TS(2304): Cannot find name 'filter'.
              filter: (theme: any) => `drop-shadow(0 48px 80px ${alpha(theme.palette.common.black, 0.24)})`,
            }}
          // @ts-expect-error TS(2365): Operator '<' cannot be applied to types 'boolean' ... Remove this comment to see the full error message
          />
        </Grid>
      </Grid>
    </Container>
  );
}

// ----------------------------------------------------------------------

function AppStoreButton({ ...other }) {
  return (
    // @ts-expect-error TS(2749): 'Stack' refers to a value, but is being used as a ... Remove this comment to see the full error message
    <Stack direction="row" flexWrap="wrap" {...other}>
      // @ts-expect-error TS(2749): 'StyledAppStoreButton' refers to a value, but is b... Remove this comment to see the full error message
      <StyledAppStoreButton startIcon={<Iconify icon="ri:apple-fill" width={28} />}>
        // @ts-expect-error TS(2749): 'Stack' refers to a value, but is being used as a ... Remove this comment to see the full error message
        <Stack alignItems="flex-start">
          // @ts-expect-error TS(2749): 'Typography' refers to a value, but is being used ... Remove this comment to see the full error message
          <Typography variant="caption" sx={{ opacity: 0.72 }}>
            // @ts-expect-error TS(2304): Cannot find name 'Download'.
            Download on the
          </Typography>

          // @ts-expect-error TS(2304): Cannot find name 'variant'.
          <Typography variant="h6" sx={{ mt: -0.5 }}>
            // @ts-expect-error TS(2304): Cannot find name 'Apple'.
            Apple Store
          </Typography>
        </Stack>
      </StyledAppStoreButton>

      // @ts-expect-error TS(2304): Cannot find name 'startIcon'.
      <StyledAppStoreButton startIcon={<Iconify icon="logos:google-play-icon" width={28} />}>
        // @ts-expect-error TS(2749): 'Stack' refers to a value, but is being used as a ... Remove this comment to see the full error message
        <Stack alignItems="flex-start">
          // @ts-expect-error TS(2749): 'Typography' refers to a value, but is being used ... Remove this comment to see the full error message
          <Typography variant="caption" sx={{ opacity: 0.72 }}>
            // @ts-expect-error TS(2304): Cannot find name 'Download'.
            Download from
          </Typography>
          // @ts-expect-error TS(2304): Cannot find name 'variant'.
          <Typography variant="h6" sx={{ mt: -0.5 }}>
            // @ts-expect-error TS(2304): Cannot find name 'Google'.
            Google Play
          </Typography>
        </Stack>
      </StyledAppStoreButton>
    </Stack>
  );
}
