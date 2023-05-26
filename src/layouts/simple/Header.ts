import PropTypes from 'prop-types';
// next
import NextLink from 'next/link';
// @mui
import { useTheme } from '@mui/material/styles';
import { AppBar, Toolbar, Link, Stack } from '@mui/material';
// config
// @ts-expect-error TS(2307): Cannot find module 'src/config-global' or its corr... Remove this comment to see the full error message
import { HEADER } from 'src/config-global';
// utils
// @ts-expect-error TS(2307): Cannot find module 'src/utils/cssStyles' or its co... Remove this comment to see the full error message
import { bgBlur } from 'src/utils/cssStyles';
// routes
// @ts-expect-error TS(2307): Cannot find module 'src/routes/paths' or its corre... Remove this comment to see the full error message
import { paths } from 'src/routes/paths';
// components
// @ts-expect-error TS(2307): Cannot find module 'src/components/logo' or its co... Remove this comment to see the full error message
import Logo from 'src/components/logo';
// @ts-expect-error TS(2307): Cannot find module 'src/components/settings/drawer... Remove this comment to see the full error message
import SettingsDrawer from 'src/components/settings/drawer';
//
import HeaderShadow from '../components/HeaderShadow';

// ----------------------------------------------------------------------

export default function Header({
  isOffset
}: any) {
  const theme = useTheme();

  return (
    // @ts-expect-error TS(2749): 'AppBar' refers to a value, but is being used as a... Remove this comment to see the full error message
    <AppBar color="transparent" sx={{ boxShadow: 'none' }}>
      // @ts-expect-error TS(2749): 'Toolbar' refers to a value, but is being used as ... Remove this comment to see the full error message
      <Toolbar
        // @ts-expect-error TS(2304): Cannot find name 'sx'.
        sx={{
          // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
          justifyContent: 'space-between',
          // @ts-expect-error TS(2304): Cannot find name 'height'.
          height: {
            xs: HEADER.H_MOBILE,
            // @ts-expect-error TS(2304): Cannot find name 'md'.
            md: HEADER.H_MAIN_DESKTOP,
          },
          // @ts-expect-error TS(2304): Cannot find name 'theme'.
          transition: theme.transitions.create(['height', 'background-color'], {
            // @ts-expect-error TS(2304): Cannot find name 'theme'.
            easing: theme.transitions.easing.easeInOut,
            // @ts-expect-error TS(2304): Cannot find name 'theme'.
            duration: theme.transitions.duration.shorter,
          }),
          // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
          ...(isOffset && {
            // @ts-expect-error TS(2304): Cannot find name 'theme'.
            ...bgBlur({ color: theme.palette.background.default }),
            height: {
              md: HEADER.H_MAIN_DESKTOP - 16,
            },
          }),
        }}
      // @ts-expect-error TS(2365): Operator '<' cannot be applied to types 'boolean' ... Remove this comment to see the full error message
      >
        <Logo />

        // @ts-expect-error TS(2304): Cannot find name 'spacing'.
        <Stack spacing={1} direction="row" alignItems="center">
          <SettingsDrawer />

          // @ts-expect-error TS(2304): Cannot find name 'href'.
          <Link href={paths.support} component={NextLink} variant="subtitle2" color="inherit">
            // @ts-expect-error TS(2304): Cannot find name 'Need'.
            Need Help?
          // @ts-expect-error TS(2365): Operator '<' cannot be applied to types 'boolean' ... Remove this comment to see the full error message
          </Link>
        </Stack>
      </Toolbar>

      // @ts-expect-error TS(2304): Cannot find name 'isOffset'.
      {isOffset && <HeaderShadow />}
    </AppBar>
  );
}

Header.propTypes = {
  isOffset: PropTypes.bool,
};
