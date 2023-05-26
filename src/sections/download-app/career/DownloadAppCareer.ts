// @mui
import { alpha, styled } from '@mui/material/styles';
import { Container, Typography, Stack, Button } from '@mui/material';
// components
// @ts-expect-error TS(2307): Cannot find module 'src/components/image' or its c... Remove this comment to see the full error message
import Image from 'src/components/image';
// @ts-expect-error TS(2307): Cannot find module 'src/components/iconify' or its... Remove this comment to see the full error message
import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

const StyledRoot = styled('div')(({ theme }) => ({
  overflow: 'hidden',
  // @ts-expect-error TS(2551): Property 'lighter' does not exist on type 'Palette... Remove this comment to see the full error message
  backgroundColor: theme.palette.primary.lighter,
  padding: theme.spacing(10, 0),
}));

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

export default function DownloadAppCareer() {
  return (
    // @ts-expect-error TS(2749): 'StyledRoot' refers to a value, but is being used ... Remove this comment to see the full error message
    <StyledRoot>
      // @ts-expect-error TS(2749): 'Container' refers to a value, but is being used a... Remove this comment to see the full error message
      <Container>
        // @ts-expect-error TS(2749): 'Stack' refers to a value, but is being used as a ... Remove this comment to see the full error message
        <Stack
          // @ts-expect-error TS(2304): Cannot find name 'direction'.
          direction={{ xs: 'column', md: 'row' }}
          // @ts-expect-error TS(2304): Cannot find name 'alignItems'.
          alignItems={{ xs: 'center', md: 'unset' }}
          // @ts-expect-error TS(2304): Cannot find name 'justifyContent'.
          justifyContent={{ md: 'space-between' }}
        >
          // @ts-expect-error TS(2749): 'Stack' refers to a value, but is being used as a ... Remove this comment to see the full error message
          <Stack
            // @ts-expect-error TS(2304): Cannot find name 'alignItems'.
            alignItems={{ xs: 'center', md: 'unset' }}
            // @ts-expect-error TS(2304): Cannot find name 'sx'.
            sx={{
              // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
              maxWidth: 360,
              // @ts-expect-error TS(2304): Cannot find name 'pt'.
              pt: { xs: 0, md: 8 },
              // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
              pb: { xs: 8, md: 0 },
              // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
              textAlign: { xs: 'center', md: 'unset' },
            }}
          >
            // @ts-expect-error TS(2749): 'Typography' refers to a value, but is being used ... Remove this comment to see the full error message
            <Typography variant="h2"> Download App </Typography>

            // @ts-expect-error TS(2304): Cannot find name 'sx'.
            <Typography sx={{ mt: 3, mb: 5 }}>
              // @ts-expect-error TS(1101): 'with' statements are not allowed in strict mode.
              Now finding the new job just got even easier with our new app!
            </Typography>

            <AppStoreButton />
          </Stack>

          <Image
            // @ts-expect-error TS(2304): Cannot find name 'disabledEffect'.
            disabledEffect
            // @ts-expect-error TS(2304): Cannot find name 'alt'.
            alt="mobile app"
            // @ts-expect-error TS(2304): Cannot find name 'src'.
            src="/assets/images/career/career_download_app.png"
            // @ts-expect-error TS(2304): Cannot find name 'sx'.
            sx={{
              // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
              maxWidth: 480,
            }}
          // @ts-expect-error TS(2365): Operator '<' cannot be applied to types 'boolean' ... Remove this comment to see the full error message
          />
        </Stack>
      </Container>
    </StyledRoot>
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
