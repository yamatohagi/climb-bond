import PropTypes from 'prop-types';
// @mui
import { Stack } from '@mui/material';
//
// @ts-expect-error TS(6142): Module './NavList' was resolved to '/Users/yamatoh... Remove this comment to see the full error message
import NavList from './NavList';

// ----------------------------------------------------------------------

export default function NavDesktop({
  data,
  sx
}: any) {
  return (
    // @ts-expect-error TS(2749): 'Stack' refers to a value, but is being used as a ... Remove this comment to see the full error message
    <Stack
      // @ts-expect-error TS(2304): Cannot find name 'component'.
      component="nav"
      // @ts-expect-error TS(2304): Cannot find name 'direction'.
      direction="row"
      // @ts-expect-error TS(2304): Cannot find name 'spacing'.
      spacing={6}
      sx={{
        // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
        ml: 6,
        // @ts-expect-error TS(2304): Cannot find name 'height'.
        height: 1,
        // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
        ...sx,
      }}
    // @ts-expect-error TS(2365): Operator '<' cannot be applied to types 'boolean' ... Remove this comment to see the full error message
    >
      // @ts-expect-error TS(18004): No value exists in scope for the shorthand propert... Remove this comment to see the full error message
      {data.map((link: any) => <NavList key={link.title} item={link} />)}
    </Stack>
  );
}

NavDesktop.propTypes = {
  data: PropTypes.array,
  sx: PropTypes.object,
};
