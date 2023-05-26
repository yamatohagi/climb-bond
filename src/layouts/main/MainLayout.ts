import PropTypes from 'prop-types';
// next
import { useRouter } from 'next/router';
// @mui
import { Box } from '@mui/material';
// config
// @ts-expect-error TS(2307): Cannot find module 'src/config-global' or its corr... Remove this comment to see the full error message
import { HEADER } from 'src/config-global';
//
import Header from './header/Header';
import Footer from './footer/Footer';

// ----------------------------------------------------------------------

const pathsOnDark = ['/career/landing', '/travel/landing'];

const spacingLayout = [...pathsOnDark, '/', '/e-learning/landing', '/marketing/landing'];

// ----------------------------------------------------------------------

export default function MainLayout({
  children
}: any) {
  const { pathname } = useRouter();

  const actionPage = (arr: any) => arr.some((path: any) => pathname === path);

  return (
    // @ts-expect-error TS(2749): 'Box' refers to a value, but is being used as a ty... Remove this comment to see the full error message
    <Box sx={{ display: 'flex', flexDirection: 'column', height: 1 }}>
      // @ts-expect-error TS(2749): 'Header' refers to a value, but is being used as a... Remove this comment to see the full error message
      <Header headerOnDark={actionPage(pathsOnDark)} />

      <Box
        // @ts-expect-error TS(2304): Cannot find name 'component'.
        component="main"
        // @ts-expect-error TS(2304): Cannot find name 'sx'.
        sx={{
          // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
          flexGrow: 1,
        }}
      >
        // @ts-expect-error TS(2304): Cannot find name 'actionPage'.
        {!actionPage(spacingLayout) && <Spacing />}
        // @ts-expect-error TS(2304): Cannot find name 'children'.
        {children}
      </Box>

      // @ts-expect-error TS(2362): The left-hand side of an arithmetic operation must... Remove this comment to see the full error message
      <Footer />
    </Box>
  );
}

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

// ----------------------------------------------------------------------

function Spacing() {
  return (
    // @ts-expect-error TS(2749): 'Box' refers to a value, but is being used as a ty... Remove this comment to see the full error message
    <Box
      // @ts-expect-error TS(2304): Cannot find name 'sx'.
      sx={{
        // @ts-expect-error TS(2304): Cannot find name 'md'.
        height: { xs: HEADER.H_MOBILE, md: HEADER.H_MAIN_DESKTOP },
      }}
    />
  );
}
