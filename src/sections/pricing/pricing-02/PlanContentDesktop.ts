// @mui
import PropTypes from 'prop-types';
import { Box, Stack, Button } from '@mui/material';
// components
// @ts-expect-error TS(2307): Cannot find module 'src/components/iconify' or its... Remove this comment to see the full error message
import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

export default function PlanContentDesktop({
  plan
}: any) {
  const { options, license } = plan;

  const startLicense = license === 'Start';

  const proLicense = license === 'Pro';

  const businessLicense = license === 'Business';

  return (
    // @ts-expect-error TS(2749): 'Box' refers to a value, but is being used as a ty... Remove this comment to see the full error message
    <Box>
      {options.map((option: any) => {
        const { title, disabled } = option;

        return (
          // @ts-expect-error TS(2749): 'Stack' refers to a value, but is being used as a ... Remove this comment to see the full error message
          <Stack
            // @ts-expect-error TS(2304): Cannot find name 'key'.
            key={title}
            // @ts-expect-error TS(2304): Cannot find name 'alignItems'.
            alignItems="center"
            // @ts-expect-error TS(2304): Cannot find name 'justifyContent'.
            justifyContent="center"
            // @ts-expect-error TS(2304): Cannot find name 'sx'.
            sx={{
              // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
              height: 72,
              // @ts-expect-error TS(2304): Cannot find name 'color'.
              color: 'text.secondary',
              // @ts-expect-error TS(2304): Cannot find name 'borderBottom'.
              borderBottom: (theme: any) => `solid 1px ${theme.palette.divider}`,
              // @ts-expect-error TS(2488): Type 'false | { bgcolor: string; }' must have a '[... Remove this comment to see the full error message
              ...(proLicense && {
                bgcolor: 'background.neutral',
              }),
            }}
          >
            // @ts-expect-error TS(2362): The left-hand side of an arithmetic operation must... Remove this comment to see the full error message
            {disabled ? (
              '-'
            ) : (
              <Iconify
                icon="carbon:checkmark"
                sx={{ width: 24, height: 24, color: 'primary.main' }}
              />
            )}
          </Stack>
        );
      })}

      // @ts-expect-error TS(2749): 'Stack' refers to a value, but is being used as a ... Remove this comment to see the full error message
      <Stack
        // @ts-expect-error TS(2304): Cannot find name 'sx'.
        sx={{
          // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
          py: 5,
          // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
          ...(proLicense && {
            bgcolor: 'background.neutral',
            borderRadius: '0 0 16px 16px',
          }),
        }}
      >
        // @ts-expect-error TS(2749): 'Button' refers to a value, but is being used as a... Remove this comment to see the full error message
        <Button
          // @ts-expect-error TS(2304): Cannot find name 'size'.
          size="large"
          // @ts-expect-error TS(2304): Cannot find name 'variant'.
          variant={proLicense ? 'contained' : 'outlined'}
          // @ts-expect-error TS(2304): Cannot find name 'color'.
          color="inherit"
          // @ts-expect-error TS(2304): Cannot find name 'sx'.
          sx={{ mx: 'auto' }}
        >
          // @ts-expect-error TS(18004): No value exists in scope for the shorthand propert... Remove this comment to see the full error message
          {startLicense && 'Start Free Trial'}
          // @ts-expect-error TS(2304): Cannot find name 'proLicense'.
          {proLicense && 'Choose Pro'}
          // @ts-expect-error TS(2304): Cannot find name 'businessLicense'.
          {businessLicense && 'Contact Sale'}
        // @ts-expect-error TS(2365): Operator '<' cannot be applied to types 'boolean' ... Remove this comment to see the full error message
        </Button>
      </Stack>
    </Box>
  );
}

PlanContentDesktop.propTypes = {
  plan: PropTypes.shape({
    license: PropTypes.string,
    options: PropTypes.array,
  }),
};
