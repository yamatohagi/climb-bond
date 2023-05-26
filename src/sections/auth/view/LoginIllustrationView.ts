// next
import NextLink from 'next/link';
// @mui
import { Link, Stack, Divider, Container, Typography, Unstable_Grid2 as Grid } from '@mui/material';
// routes
// @ts-expect-error TS(2307): Cannot find module 'src/routes/paths' or its corre... Remove this comment to see the full error message
import { paths } from 'src/routes/paths';
// hooks
// @ts-expect-error TS(2307): Cannot find module 'src/hooks/useResponsive' or it... Remove this comment to see the full error message
import useResponsive from 'src/hooks/useResponsive';
// components
// @ts-expect-error TS(2307): Cannot find module 'src/components/image' or its c... Remove this comment to see the full error message
import Image from 'src/components/image';
//
import { AuthWithSocial, AuthLoginForm } from '../components';

// ----------------------------------------------------------------------

export default function LoginIllustrationView() {
  const isMdUp = useResponsive('up', 'md');

  return (
    // @ts-expect-error TS(2749): 'Container' refers to a value, but is being used a... Remove this comment to see the full error message
    <Container
      // @ts-expect-error TS(2304): Cannot find name 'sx'.
      sx={{
        // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
        pb: 10,
        // @ts-expect-error TS(2304): Cannot find name 'minHeight'.
        minHeight: 1,
        // @ts-expect-error TS(2304): Cannot find name 'pt'.
        pt: { xs: 12, md: 21 },
      }}
    >
      // @ts-expect-error TS(2749): 'Grid' refers to a value, but is being used as a t... Remove this comment to see the full error message
      <Grid container columnSpacing={{ md: 5 }} justifyContent="space-between">
        // @ts-expect-error TS(18004): No value exists in scope for the shorthand propert... Remove this comment to see the full error message
        {isMdUp && (
          // @ts-expect-error TS(2749): 'Grid' refers to a value, but is being used as a t... Remove this comment to see the full error message
          <Grid xs={12} md={7}>
            <Image
              // @ts-expect-error TS(2304): Cannot find name 'visibleByDefault'.
              visibleByDefault
              // @ts-expect-error TS(2304): Cannot find name 'disabledEffect'.
              disabledEffect
              // @ts-expect-error TS(2304): Cannot find name 'alt'.
              alt="login"
              // @ts-expect-error TS(2304): Cannot find name 'src'.
              src="/assets/illustrations/illustration_login.svg"
            />
          </Grid>
        )}

        // @ts-expect-error TS(2749): 'Grid' refers to a value, but is being used as a t... Remove this comment to see the full error message
        <Grid xs={12} md={5} lg={4}>
          // @ts-expect-error TS(2749): 'Stack' refers to a value, but is being used as a ... Remove this comment to see the full error message
          <Stack
            // @ts-expect-error TS(2304): Cannot find name 'spacing'.
            spacing={4}
            // @ts-expect-error TS(2304): Cannot find name 'sx'.
            sx={{
              // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
              p: 4,
              // @ts-expect-error TS(2304): Cannot find name 'borderRadius'.
              borderRadius: 2,
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
                // @ts-expect-error TS(2304): Cannot find name 'Login'.
                Login
              </Typography>

              // @ts-expect-error TS(2304): Cannot find name 'variant'.
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                // @ts-expect-error TS(2349): This expression is not callable.
                {`Don’t have an account? `}
                // @ts-expect-error TS(2749): 'Link' refers to a value, but is being used as a t... Remove this comment to see the full error message
                <Link
                  // @ts-expect-error TS(2304): Cannot find name 'component'.
                  component={NextLink}
                  // @ts-expect-error TS(2304): Cannot find name 'href'.
                  href={paths.registerIllustration}
                  // @ts-expect-error TS(2304): Cannot find name 'variant'.
                  variant="subtitle2"
                  // @ts-expect-error TS(2304): Cannot find name 'color'.
                  color="primary"
                >
                  // @ts-expect-error TS(2304): Cannot find name 'Get'.
                  Get started
                </Link>
              </Typography>
            </div>

            // @ts-expect-error TS(2362): The left-hand side of an arithmetic operation must... Remove this comment to see the full error message
            <AuthLoginForm />

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
        </Grid>
      </Grid>
    </Container>
  );
}
