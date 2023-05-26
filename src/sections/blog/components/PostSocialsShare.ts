// @mui
import { alpha } from '@mui/material/styles';
import { Stack, Button, Typography } from '@mui/material';
// _mock
// @ts-expect-error TS(2307): Cannot find module 'src/_mock' or its correspondin... Remove this comment to see the full error message
import { _socials } from 'src/_mock';
// components
// @ts-expect-error TS(2307): Cannot find module 'src/components/iconify' or its... Remove this comment to see the full error message
import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

export default function PostSocialsShare() {
  return (
    // @ts-expect-error TS(2749): 'Stack' refers to a value, but is being used as a ... Remove this comment to see the full error message
    <Stack direction="row" sx={{ mt: 5 }}>
      // @ts-expect-error TS(2749): 'Typography' refers to a value, but is being used ... Remove this comment to see the full error message
      <Typography variant="subtitle2" sx={{ mt: 0.75, mr: 1.5 }}>
        // @ts-expect-error TS(2304): Cannot find name 'Share'.
        Share:
      </Typography>

      // @ts-expect-error TS(2304): Cannot find name 'direction'.
      <Stack direction="row" alignItems="center" flexWrap="wrap">
        // @ts-expect-error TS(2749): 'Button' refers to a value, but is being used as a... Remove this comment to see the full error message
        {_socials.map((social: any) => <Button
          // @ts-expect-error TS(2304): Cannot find name 'key'.
          key={social.value}
          // @ts-expect-error TS(2304): Cannot find name 'size'.
          size="small"
          // @ts-expect-error TS(2304): Cannot find name 'variant'.
          variant="outlined"
          // @ts-expect-error TS(2304): Cannot find name 'startIcon'.
          startIcon={<Iconify icon={social.icon} />}
          // @ts-expect-error TS(2304): Cannot find name 'sx'.
          sx={{
            // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
            m: 0.5,
            // @ts-expect-error TS(2304): Cannot find name 'flexShrink'.
            flexShrink: 0,
            // @ts-expect-error TS(2304): Cannot find name 'color'.
            color: social.color,
            // @ts-expect-error TS(2304): Cannot find name 'borderColor'.
            borderColor: social.color,
            '&:hover': {
              // @ts-expect-error TS(2304): Cannot find name 'social'.
              borderColor: social.color,
              // @ts-expect-error TS(2304): Cannot find name 'bgcolor'.
              bgcolor: alpha(social.color, 0.08),
            },
          }}
        // @ts-expect-error TS(2365): Operator '<' cannot be applied to types 'boolean' ... Remove this comment to see the full error message
        >
          // @ts-expect-error TS(18004): No value exists in scope for the shorthand propert... Remove this comment to see the full error message
          {social.label}
        </Button>)}
      </Stack>
    </Stack>
  );
}
