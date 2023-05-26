import PropTypes from 'prop-types';
// @mui
import { useTheme, styled, alpha } from '@mui/material/styles';
import { Stack, IconButton } from '@mui/material';
//
import { LeftIcon, RightIcon } from './Icon';

// ----------------------------------------------------------------------

const StyledIconButton = styled(IconButton, {
  shouldForwardProp: (prop) => prop !== 'filled' && prop !== 'hasChild' && prop !== 'shape',
// @ts-expect-error TS(2339): Property 'filled' does not exist on type '{ childr... Remove this comment to see the full error message
})(({ filled, shape, hasChild, theme }) => ({
  color: 'inherit',
  transition: theme.transitions.create('all', {
    duration: theme.transitions.duration.shorter,
  }),
  ...(shape === 'rounded' && {
    borderRadius: Number(theme.shape.borderRadius) * 1.5,
  }),
  ...(!filled && {
    opacity: 0.48,
    '&:hover': {
      opacity: 1,
    },
  }),
  ...(filled && {
    color: alpha(theme.palette.common.white, 0.8),
    backgroundColor: alpha(theme.palette.grey[900], 0.48),
    '&:hover': {
      color: theme.palette.common.white,
      backgroundColor: theme.palette.grey[900],
    },
  }),
  ...(hasChild && {
    zIndex: 9,
    top: '50%',
    position: 'absolute',
    marginTop: theme.spacing(-2.5),
  }),
}));

// ----------------------------------------------------------------------

export default function CarouselArrows({
  shape = 'circular',
  filled = false,
  icon,
  onNext,
  onPrev,
  children,
  leftButtonProps,
  rightButtonProps,
  sx,
  ...other
}: any) {
  const theme = useTheme();

  const isRTL = theme.direction === 'rtl';

  const hasChild = !!children;

  if (hasChild) {
    return (
      // @ts-expect-error TS(2749): 'Stack' refers to a value, but is being used as a ... Remove this comment to see the full error message
      <Stack sx={sx} {...other}>
        {onNext && (
          // @ts-expect-error TS(2749): 'StyledIconButton' refers to a value, but is being... Remove this comment to see the full error message
          <StyledIconButton
            filled={filled}
            shape={shape}
            // @ts-expect-error TS(2588): Cannot assign to 'hasChild' because it is a consta... Remove this comment to see the full error message
            hasChild={!!children}
            // @ts-expect-error TS(2552): Cannot find name 'onClick'. Did you mean 'onclick'... Remove this comment to see the full error message
            onClick={onPrev}
            {...leftButtonProps}
            sx={{
              // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
              left: 16,
              ...leftButtonProps?.sx,
            }}
          >
            // @ts-expect-error TS(2709): Cannot use namespace 'LeftIcon' as a type.
            <LeftIcon icon={icon} isRTL={isRTL} />
          </StyledIconButton>
        )}

        // @ts-expect-error TS(2304): Cannot find name 'children'.
        {children}

        // @ts-expect-error TS(2304): Cannot find name 'onPrev'.
        {onPrev && (
          // @ts-expect-error TS(2749): 'StyledIconButton' refers to a value, but is being... Remove this comment to see the full error message
          <StyledIconButton
            // @ts-expect-error TS(2552): Cannot find name 'filled'. Did you mean 'File'?
            filled={filled}
            // @ts-expect-error TS(2304): Cannot find name 'shape'.
            shape={shape}
            // @ts-expect-error TS(2304): Cannot find name 'hasChild'.
            hasChild={!!children}
            // @ts-expect-error TS(2304): Cannot find name 'onClick'.
            onClick={onNext}
            // @ts-expect-error TS(2304): Cannot find name 'rightButtonProps'.
            {...rightButtonProps}
            // @ts-expect-error TS(2304): Cannot find name 'sx'.
            sx={{
              // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
              right: 16,
              // @ts-expect-error TS(2304): Cannot find name 'rightButtonProps'.
              ...rightButtonProps?.sx,
            }}
          >
            // @ts-expect-error TS(2709): Cannot use namespace 'RightIcon' as a type.
            <RightIcon icon={icon} isRTL={isRTL} />
          </StyledIconButton>
        )}
      </Stack>
    );
  }

  return (
    // @ts-expect-error TS(2304): Cannot find name 'alignItems'.
    <Stack direction="row" alignItems="center" display="inline-flex" sx={sx} {...other}>
      // @ts-expect-error TS(2749): 'StyledIconButton' refers to a value, but is being... Remove this comment to see the full error message
      <StyledIconButton filled={filled} shape={shape} onClick={onPrev} {...leftButtonProps}>
        // @ts-expect-error TS(2709): Cannot use namespace 'LeftIcon' as a type.
        <LeftIcon icon={icon} isRTL={isRTL} />
      </StyledIconButton>

      // @ts-expect-error TS(2304): Cannot find name 'filled'.
      <StyledIconButton filled={filled} shape={shape} onClick={onNext} {...rightButtonProps}>
        // @ts-expect-error TS(2709): Cannot use namespace 'RightIcon' as a type.
        <RightIcon icon={icon} isRTL={isRTL} />
      </StyledIconButton>
    </Stack>
  );
}

CarouselArrows.propTypes = {
  sx: PropTypes.object,
  filled: PropTypes.bool,
  onNext: PropTypes.func,
  onPrev: PropTypes.func,
  shape: PropTypes.string,
  children: PropTypes.node,
  leftButtonProps: PropTypes.object,
  rightButtonProps: PropTypes.object,
  icon: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
};
