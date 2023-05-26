// next
import NextLink from 'next/link';
// @mui
import { Link, Stack, Divider, Typography } from '@mui/material';
import { alpha, styled } from '@mui/material/styles';
// routes
// @ts-expect-error TS(2307): Cannot find module 'src/routes/paths' or its corre... Remove this comment to see the full error message
import { paths } from 'src/routes/paths';
// utils
// @ts-expect-error TS(2307): Cannot find module 'src/utils/cssStyles' or its co... Remove this comment to see the full error message
import { bgGradient } from 'src/utils/cssStyles';
//
import { AuthWithSocial, AuthRegisterForm } from '../components';

// ----------------------------------------------------------------------

const StyledRoot = styled('div')(({ theme }) => ({
  ...bgGradient({
    color: alpha(theme.palette.background.default, 0.9),
    imgUrl: '/assets/background/overlay_1.jpg',
  }),
  display: 'flex',
  minHeight: '100vh',
  alignItems: 'center',
  justifyContent: 'center',
  padding: theme.spacing(12, 2),
}));

// ----------------------------------------------------------------------

export default function RegisterBackgroundView() {
  return (
    // @ts-expect-error TS(2749): 'StyledRoot' refers to a value, but is being used ... Remove this comment to see the full error message
    <StyledRoot>
      // @ts-expect-error TS(2749): 'Stack' refers to a value, but is being used as a ... Remove this comment to see the full error message
      <Stack
        // @ts-expect-error TS(2304): Cannot find name 'spacing'.
        spacing={4}
        // @ts-expect-error TS(2304): Cannot find name 'sx'.
        sx={{
          // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
          p: 4,
          // @ts-expect-error TS(2304): Cannot find name 'width'.
          width: 1,
          // @ts-expect-error TS(2304): Cannot find name 'mx'.
          mx: 'auto',
          // @ts-expect-error TS(2304): Cannot find name 'flexShrink'.
          flexShrink: 0,
          // @ts-expect-error TS(2304): Cannot find name 'maxWidth'.
          maxWidth: 400,
          // @ts-expect-error TS(2304): Cannot find name 'borderRadius'.
          borderRadius: 2,
          // @ts-expect-error TS(2304): Cannot find name 'bgcolor'.
          bgcolor: 'background.default',
          // @ts-expect-error TS(2304): Cannot find name 'textAlign'.
          textAlign: { xs: 'center', md: 'left' },
          // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
          boxShadow: (theme: any) => theme.customShadows.z24,
        }}
      >
        // @ts-expect-error TS(2304): Cannot find name 'div'.
        <div>
          // @ts-expect-error TS(2749): 'Typography' refers to a value, but is being used ... Remove this comment to see the full error message
          <Typography variant="h3" paragraph>
            // @ts-expect-error TS(2304): Cannot find name 'Get'.
            Get Started
          </Typography>

          // @ts-expect-error TS(2304): Cannot find name 'variant'.
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            // @ts-expect-error TS(2349): This expression is not callable.
            {`Already have an account? `}
            // @ts-expect-error TS(2749): 'Link' refers to a value, but is being used as a t... Remove this comment to see the full error message
            <Link
              // @ts-expect-error TS(2304): Cannot find name 'component'.
              component={NextLink}
              // @ts-expect-error TS(2304): Cannot find name 'href'.
              href={paths.loginBackground}
              // @ts-expect-error TS(2304): Cannot find name 'variant'.
              variant="subtitle2"
              // @ts-expect-error TS(2304): Cannot find name 'color'.
              color="primary"
            >
              // @ts-expect-error TS(2304): Cannot find name 'Login'.
              Login
            </Link>
          </Typography>
        </div>

        // @ts-expect-error TS(2362): The left-hand side of an arithmetic operation must... Remove this comment to see the full error message
        <AuthRegisterForm />

        // @ts-expect-error TS(2749): 'Divider' refers to a value, but is being used as ... Remove this comment to see the full error message
        <Divider>
          // @ts-expect-error TS(2749): 'Typography' refers to a value, but is being used ... Remove this comment to see the full error message
          <Typography variant="body2" sx={{ color: 'text.disabled' }}>
            // @ts-expect-error TS(1101): 'with' statements are not allowed in strict mode.
            or continue with
          // @ts-expect-error TS(2365): Operator '<' cannot be applied to types 'boolean' ... Remove this comment to see the full error message
          </Typography>
        </Divider>

        // @ts-expect-error TS(2362): The left-hand side of an arithmetic operation must... Remove this comment to see the full error message
        <AuthWithSocial />
      </Stack>
    </StyledRoot>
  );
}
