import PropTypes from 'prop-types';
// @mui
import { useTheme, styled } from '@mui/material/styles';
import { Typography, Box, IconButton } from '@mui/material';
// utils
// @ts-expect-error TS(2307): Cannot find module 'src/utils/cssStyles' or its co... Remove this comment to see the full error message
import { bgBlur } from 'src/utils/cssStyles';
//
import { LeftIcon, RightIcon } from './Icon';

// ----------------------------------------------------------------------

const StyledRoot = styled(Box)(({ theme }) => ({
  ...bgBlur({
    opacity: 0.48,
    color: theme.palette.grey[900],
  }),
  zIndex: 9,
  display: 'inline-flex',
  alignItems: 'center',
  position: 'absolute',
  bottom: theme.spacing(2),
  right: theme.spacing(2),
  padding: theme.spacing(0.25),
  color: theme.palette.common.white,
  borderRadius: theme.shape.borderRadius,
}));

const StyledIconButton = styled(IconButton)({
  width: 28,
  height: 28,
  padding: 0,
  opacity: 0.48,
  '&:hover': { opacity: 1 },
});

// ----------------------------------------------------------------------

export default function CarouselArrowIndex({
  index,
  total,
  onNext,
  onPrev,
  icon,
  sx,
  ...other
}: any) {
  const theme = useTheme();

  const isRTL = theme.direction === 'rtl';

  return (
    // @ts-expect-error TS(2749): 'StyledRoot' refers to a value, but is being used ... Remove this comment to see the full error message
    <StyledRoot sx={sx} {...other}>
      // @ts-expect-error TS(2749): 'StyledIconButton' refers to a value, but is being... Remove this comment to see the full error message
      <StyledIconButton color="inherit" onClick={onPrev}>
        // @ts-expect-error TS(2709): Cannot use namespace 'LeftIcon' as a type.
        <LeftIcon icon={icon} isRTL={isRTL} />
      </StyledIconButton>

      // @ts-expect-error TS(2304): Cannot find name 'variant'.
      <Typography variant="subtitle2" component="span" sx={{ mx: 0.25 }}>
        // @ts-expect-error TS(2365): Operator '+' cannot be applied to types '{ index: ... Remove this comment to see the full error message
        {index + 1}/{total}
      </Typography>

      // @ts-expect-error TS(2304): Cannot find name 'color'.
      <StyledIconButton color="inherit" onClick={onNext}>
        // @ts-expect-error TS(2709): Cannot use namespace 'RightIcon' as a type.
        <RightIcon icon={icon} isRTL={isRTL} />
      </StyledIconButton>
    </StyledRoot>
  );
}

CarouselArrowIndex.propTypes = {
  icon: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  index: PropTypes.number,
  onNext: PropTypes.func,
  onPrev: PropTypes.func,
  sx: PropTypes.object,
  total: PropTypes.number,
};
