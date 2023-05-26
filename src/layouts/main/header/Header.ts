import PropTypes from 'prop-types';
// @mui
import { useTheme } from '@mui/material/styles';
import { Box, Link, Stack, Button, AppBar, Toolbar, Container } from '@mui/material';
// hooks
// @ts-expect-error TS(2307): Cannot find module 'src/hooks/useOffSetTop' or its... Remove this comment to see the full error message
import useOffSetTop from 'src/hooks/useOffSetTop';
// @ts-expect-error TS(2307): Cannot find module 'src/hooks/useResponsive' or it... Remove this comment to see the full error message
import useResponsive from 'src/hooks/useResponsive';
// utils
// @ts-expect-error TS(2307): Cannot find module 'src/utils/cssStyles' or its co... Remove this comment to see the full error message
import { bgBlur } from 'src/utils/cssStyles';
// routes
// @ts-expect-error TS(2307): Cannot find module 'src/routes/paths' or its corre... Remove this comment to see the full error message
import { paths } from 'src/routes/paths';
// config
// @ts-expect-error TS(2307): Cannot find module 'src/config-global' or its corr... Remove this comment to see the full error message
import { HEADER } from 'src/config-global';
// components
// @ts-expect-error TS(2307): Cannot find module 'src/components/logo' or its co... Remove this comment to see the full error message
import Logo from 'src/components/logo';
// @ts-expect-error TS(2307): Cannot find module 'src/components/label' or its c... Remove this comment to see the full error message
import Label from 'src/components/label';
// @ts-expect-error TS(2307): Cannot find module 'src/components/settings/drawer... Remove this comment to see the full error message
import SettingsDrawer from 'src/components/settings/drawer';
//
import { NavMobile, NavDesktop, navConfig } from '../nav';
// @ts-expect-error TS(6142): Module '../../components/Searchbar' was resolved t... Remove this comment to see the full error message
import Searchbar from '../../components/Searchbar';
import HeaderShadow from '../../components/HeaderShadow';

// ----------------------------------------------------------------------

export default function Header({
  headerOnDark
}: any) {
  const theme = useTheme();

  const isMdUp = useResponsive('up', 'md');

  const isOffset = useOffSetTop();

  return (
    // @ts-expect-error TS(2749): 'AppBar' refers to a value, but is being used as a... Remove this comment to see the full error message
    <AppBar color="transparent" sx={{ boxShadow: 'none' }}>
      // @ts-expect-error TS(2749): 'Toolbar' refers to a value, but is being used as ... Remove this comment to see the full error message
      <Toolbar
        // @ts-expect-error TS(2304): Cannot find name 'disableGutters'.
        disableGutters
        // @ts-expect-error TS(2304): Cannot find name 'sx'.
        sx={{
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
          ...(headerOnDark && {
            color: 'common.white',
          }),
          // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
          ...(isOffset && {
            // @ts-expect-error TS(2304): Cannot find name 'theme'.
            ...bgBlur({ color: theme.palette.background.default }),
            color: 'text.primary',
            height: {
              md: HEADER.H_MAIN_DESKTOP - 16,
            },
          }),
        }}
      >
        // @ts-expect-error TS(2749): 'Container' refers to a value, but is being used a... Remove this comment to see the full error message
        <Container sx={{ height: 1, display: 'flex', alignItems: 'center' }}>
          // @ts-expect-error TS(2749): 'Box' refers to a value, but is being used as a ty... Remove this comment to see the full error message
          <Box sx={{ lineHeight: 0, position: 'relative' }}>
            <Logo />

            // @ts-expect-error TS(2304): Cannot find name 'href'.
            <Link href="https://zone-docs.vercel.app/changelog" target="_blank" rel="noopener">
              <Label
                // @ts-expect-error TS(2304): Cannot find name 'color'.
                color="info"
                // @ts-expect-error TS(2304): Cannot find name 'sx'.
                sx={{
                  // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
                  ml: 0.5,
                  // @ts-expect-error TS(2304): Cannot find name 'px'.
                  px: 0.5,
                  // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
                  top: -14,
                  // @ts-expect-error TS(2304): Cannot find name 'left'.
                  left: 60,
                  // @ts-expect-error TS(2304): Cannot find name 'height'.
                  height: 20,
                  // @ts-expect-error TS(2304): Cannot find name 'fontSize'.
                  fontSize: 11,
                  // @ts-expect-error TS(2304): Cannot find name 'cursor'.
                  cursor: 'pointer',
                  // @ts-expect-error TS(2304): Cannot find name 'position'.
                  position: 'absolute',
                }}
              >
                // @ts-expect-error TS(2304): Cannot find name 'v2'.
                v2.0
              </Label>
            </Link>
          </Box>

          // @ts-expect-error TS(2304): Cannot find name 'isMdUp'.
          {isMdUp && <NavDesktop data={navConfig} />}

          <Stack
            // @ts-expect-error TS(2304): Cannot find name 'spacing'.
            spacing={2}
            // @ts-expect-error TS(2304): Cannot find name 'flexGrow'.
            flexGrow={1}
            // @ts-expect-error TS(2304): Cannot find name 'direction'.
            direction="row"
            // @ts-expect-error TS(2304): Cannot find name 'alignItems'.
            alignItems="center"
            // @ts-expect-error TS(2304): Cannot find name 'justifyContent'.
            justifyContent="flex-end"
          >
            // @ts-expect-error TS(2749): 'Stack' refers to a value, but is being used as a ... Remove this comment to see the full error message
            <Stack spacing={1} direction="row" alignItems="center">
              // @ts-expect-error TS(2709): Cannot use namespace 'Searchbar' as a type.
              <Searchbar />

              <SettingsDrawer />
            </Stack>

            // @ts-expect-error TS(2304): Cannot find name 'isMdUp'.
            {isMdUp && (
              // @ts-expect-error TS(2749): 'Button' refers to a value, but is being used as a... Remove this comment to see the full error message
              <Button
                // @ts-expect-error TS(2304): Cannot find name 'variant'.
                variant="contained"
                // @ts-expect-error TS(2304): Cannot find name 'color'.
                color="inherit"
                // @ts-expect-error TS(2304): Cannot find name 'href'.
                href={paths.zoneStore}
                // @ts-expect-error TS(2304): Cannot find name 'target'.
                target="_blank"
                // @ts-expect-error TS(2304): Cannot find name 'rel'.
                rel="noopener"
              >
                // @ts-expect-error TS(2304): Cannot find name 'Buy'.
                Buy Now
              </Button>
            )}
          </Stack>

          // @ts-expect-error TS(2304): Cannot find name 'isMdUp'.
          {!isMdUp && <NavMobile data={navConfig} />}
        </Container>
      </Toolbar>

      // @ts-expect-error TS(2304): Cannot find name 'isOffset'.
      {isOffset && <HeaderShadow />}
    </AppBar>
  );
}

Header.propTypes = {
  headerOnDark: PropTypes.bool,
};
