// @mui
import { useTheme } from '@mui/material/styles';
import GlobalStyles from '@mui/material/GlobalStyles';

// ----------------------------------------------------------------------

export default function StyledProgressBar() {
  // @ts-expect-error TS(2451): Cannot redeclare block-scoped variable 'theme'.
  const theme = useTheme();

  const inputGlobalStyles = (
    // @ts-expect-error TS(2749): 'GlobalStyles' refers to a value, but is being use... Remove this comment to see the full error message
    <GlobalStyles
      // @ts-expect-error TS(2304): Cannot find name 'styles'.
      styles={{
        '#nprogress': {
          // @ts-expect-error TS(2451): Cannot redeclare block-scoped variable '(Missing)'... Remove this comment to see the full error message
          pointerEvents: 'none',
          '.bar': {
            // @ts-expect-error TS(2451): Cannot redeclare block-scoped variable '(Missing)'... Remove this comment to see the full error message
            top: 0,
            // @ts-expect-error TS(2451): Cannot redeclare block-scoped variable '(Missing)'... Remove this comment to see the full error message
            left: 0,
            // @ts-expect-error TS(2451): Cannot redeclare block-scoped variable '(Missing)'... Remove this comment to see the full error message
            height: 2,
            // @ts-expect-error TS(2451): Cannot redeclare block-scoped variable '(Missing)'... Remove this comment to see the full error message
            zIndex: 9999,
            // @ts-expect-error TS(2451): Cannot redeclare block-scoped variable '(Missing)'... Remove this comment to see the full error message
            width: '100%',
            // @ts-expect-error TS(2451): Cannot redeclare block-scoped variable '(Missing)'... Remove this comment to see the full error message
            position: 'fixed',
            // @ts-expect-error TS(2451): Cannot redeclare block-scoped variable 'theme'.
            backgroundColor: theme.palette.primary.main,
            // @ts-expect-error TS(2451): Cannot redeclare block-scoped variable '(Missing)'... Remove this comment to see the full error message
            boxShadow: `0 0 2px ${theme.palette.primary.main}`,
          },
          '.peg': {
            // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
            right: 0,
            // @ts-expect-error TS(2304): Cannot find name 'opacity'.
            opacity: 1,
            // @ts-expect-error TS(2304): Cannot find name 'width'.
            width: 100,
            // @ts-expect-error TS(2304): Cannot find name 'height'.
            height: '100%',
            // @ts-expect-error TS(2304): Cannot find name 'display'.
            display: 'block',
            // @ts-expect-error TS(2304): Cannot find name 'position'.
            position: 'absolute',
            // @ts-expect-error TS(2304): Cannot find name 'transform'.
            transform: 'rotate(3deg) translate(0px, -4px)',
            // @ts-expect-error TS(2304): Cannot find name 'boxShadow'.
            boxShadow: `0 0 10px ${theme.palette.primary.main}, 0 0 5px ${theme.palette.primary.main}`,
          },
        },
      }}
    />
  );

  return inputGlobalStyles;
}
