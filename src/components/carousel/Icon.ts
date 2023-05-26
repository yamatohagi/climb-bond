import PropTypes from 'prop-types';
import Iconify from '../iconify';

// ----------------------------------------------------------------------

export function LeftIcon({
  icon = 'carbon:chevron-right',
  isRTL
}: any) {
  return (
    // @ts-expect-error TS(2749): 'Iconify' refers to a value, but is being used as ... Remove this comment to see the full error message
    <Iconify
      icon={icon}
      // @ts-expect-error TS(2304): Cannot find name 'width'.
      width={24}
      // @ts-expect-error TS(2304): Cannot find name 'sx'.
      sx={{
        // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
        transform: ' scaleX(-1)',
        // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
        ...(isRTL && {
          transform: ' scaleX(1)',
        }),
      }}
    />
  );
}

LeftIcon.propTypes = {
  icon: PropTypes.string,
  isRTL: PropTypes.bool,
};

export function RightIcon({
  icon = 'carbon:chevron-right',
  isRTL
}: any) {
  return (
    // @ts-expect-error TS(2749): 'Iconify' refers to a value, but is being used as ... Remove this comment to see the full error message
    <Iconify
      icon={icon}
      // @ts-expect-error TS(2304): Cannot find name 'width'.
      width={24}
      // @ts-expect-error TS(2304): Cannot find name 'sx'.
      sx={{
        // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
        ...(isRTL && {
          transform: ' scaleX(-1)',
        }),
      }}
    />
  );
}

RightIcon.propTypes = {
  icon: PropTypes.string,
  isRTL: PropTypes.bool,
};
