import { m } from 'framer-motion';
// @mui
import { useTheme } from '@mui/material/styles';
import { Box } from '@mui/material';
// components
// @ts-expect-error TS(2307): Cannot find module 'src/components/animate' or its... Remove this comment to see the full error message
import { varPath } from 'src/components/animate';

// ----------------------------------------------------------------------

export default function Logo() {
  const theme = useTheme();

  const PRIMARY_MAIN = theme.palette.primary.main;

  return (
    // @ts-expect-error TS(2749): 'Box' refers to a value, but is being used as a ty... Remove this comment to see the full error message
    <Box
      // @ts-expect-error TS(2304): Cannot find name 'component'.
      component={m.svg}
      // @ts-expect-error TS(2304): Cannot find name 'viewBox'.
      viewBox="0 0 512 512"
      // @ts-expect-error TS(2304): Cannot find name 'sx'.
      sx={{
        // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
        width: 240,
        // @ts-expect-error TS(2304): Cannot find name 'height'.
        height: 240,
        // @ts-expect-error TS(2304): Cannot find name 'strokeWidth'.
        strokeWidth: 4,
        // @ts-expect-error TS(2304): Cannot find name 'stroke'.
        stroke: PRIMARY_MAIN,
      }}
    >
      // @ts-expect-error TS(2503): Cannot find namespace 'm'.
      <m.ellipse
        {...varPath}
        // @ts-expect-error TS(2304): Cannot find name 'cx'.
        cx="405.143"
        // @ts-expect-error TS(2304): Cannot find name 'cy'.
        cy="338.571"
        // @ts-expect-error TS(2304): Cannot find name 'fill'.
        fill={PRIMARY_MAIN}
        // @ts-expect-error TS(2304): Cannot find name 'rx'.
        rx="82.857"
        // @ts-expect-error TS(2304): Cannot find name 'ry'.
        ry="82.857"
      />
      // @ts-expect-error TS(2503): Cannot find namespace 'm'.
      <m.path
        {...varPath}
        // @ts-expect-error TS(2304): Cannot find name 'fill'.
        fill="currentColor"
        // @ts-expect-error TS(2304): Cannot find name 'd'.
        d="M114.742 355.332H256v66.097H24v-61.376l140.323-203.956H24V90h232v61.376L114.742 355.332z"
      />
    </Box>
  );
}
