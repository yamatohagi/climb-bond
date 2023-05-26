import PropTypes from 'prop-types';
import { useState } from 'react';
// @mui
import { Link, Stack, Button, Collapse, Typography } from '@mui/material';
// components
// @ts-expect-error TS(2307): Cannot find module 'src/components/iconify' or its... Remove this comment to see the full error message
import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

export default function PlanContentMobile({
  plan
}: any) {
  const [open, setOpen] = useState(false);

  const { options } = plan;

  const startLicense = plan.license === 'Start';

  const proLicense = plan.license === 'Pro';

  const businessLicense = plan.license === 'Business';

  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <Stack spacing={5} sx={{ px: 3, pb: 5 }}>
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <div>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Link
          variant="subtitle2"
          color={open ? 'primary' : 'inherit'}
          onClick={() => setOpen(!open)}
          sx={{
            display: 'flex',
            alignItems: 'center',
            ...(open && {
              mb: 5,
            }),
          }}
        >
          {open ? 'Hide' : 'Show'} all feature
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Iconify icon={open ? 'carbon:chevron-up' : 'carbon:chevron-down'} sx={{ ml: 1 }} />
        </Link>

        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Collapse unmountOnExit in={open}>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Stack spacing={2}>
            {options.map((option: any) => {
              const { title, disabled } = option;
              return (
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <Stack
                  key={title}
                  direction="row"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                  <Typography
                    variant="body2"
                    sx={{
                      ...(disabled && {
                        color: 'text.disabled',
                      }),
                    }}
                  >
                    {title}
                  </Typography>

                  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                  <Iconify
                    icon={disabled ? 'carbon:close-outline' : 'carbon:checkmark'}
                    sx={{
                      color: 'primary.main',
                      ...(disabled && {
                        color: 'text.disabled',
                      }),
                    }}
                  />
                </Stack>
              );
            })}
          </Stack>
        </Collapse>
      </div>

      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Button
        fullWidth
        size="large"
        variant={proLicense ? 'contained' : 'outlined'}
        color="inherit"
      >
        {startLicense && 'Start Free Trial'}
        {proLicense && 'Choose Pro'}
        {businessLicense && 'Contact Sale'}
      </Button>
    </Stack>
  );
}

PlanContentMobile.propTypes = {
  plan: PropTypes.shape({
    license: PropTypes.string,
    options: PropTypes.array,
  }),
};
