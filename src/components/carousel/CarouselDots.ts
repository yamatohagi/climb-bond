/* eslint-disable react/jsx-no-useless-fragment */
import PropTypes from 'prop-types';
// @mui
import { styled } from '@mui/material/styles';
import { Box, Stack } from '@mui/material';

// ----------------------------------------------------------------------

const StyledRoot = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'rounded',
// @ts-expect-error TS(2339): Property 'rounded' does not exist on type 'SystemP... Remove this comment to see the full error message
})(({ rounded, theme }) => ({
  zIndex: 9,
  padding: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.primary.main,
  '& li': {
    width: 18,
    height: 18,
    opacity: 0.32,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    '&.slick-active': {
      opacity: 1,
      ...(rounded && {
        '& span': {
          width: 16,
          borderRadius: 6,
        },
      }),
    },
  },
}));

const StyledDot = styled('span')(({ theme }) => ({
  width: 8,
  height: 8,
  borderRadius: '50%',
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.short,
  }),
}));

// ----------------------------------------------------------------------

export default function CarouselDots(props: any) {
  const rounded = props?.rounded || false;

  const sx = props?.sx;

  return {
    appendDots: (dots: any) => <>
      // @ts-expect-error TS(2749): 'StyledRoot' refers to a value, but is being used ... Remove this comment to see the full error message
      <StyledRoot component="ul" rounded={rounded} sx={{ m: 0, ...sx }} {...props}>
        // @ts-expect-error TS(18004): No value exists in scope for the shorthand propert... Remove this comment to see the full error message
        {dots}
      </StyledRoot>
    </>,
    customPaging: () => (
      // @ts-expect-error TS(2749): 'Stack' refers to a value, but is being used as a ... Remove this comment to see the full error message
      <Stack
        // @ts-expect-error TS(2304): Cannot find name 'component'.
        component="div"
        // @ts-expect-error TS(2304): Cannot find name 'alignItems'.
        alignItems="center"
        // @ts-expect-error TS(2304): Cannot find name 'justifyContent'.
        justifyContent="center"
        // @ts-expect-error TS(2304): Cannot find name 'sx'.
        sx={{ width: 1, height: 1 }}
      >
        // @ts-expect-error TS(2749): 'StyledDot' refers to a value, but is being used a... Remove this comment to see the full error message
        <StyledDot
          // @ts-expect-error TS(2304): Cannot find name 'sx'.
          sx={{
            // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
            bgcolor: 'currentColor',
          }}
        />
      </Stack>
    ),
  };
}

CarouselDots.propTypes = {
  rounded: PropTypes.bool,
  sx: PropTypes.object,
};
