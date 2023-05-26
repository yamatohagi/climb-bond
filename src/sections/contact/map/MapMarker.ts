import PropTypes from 'prop-types';
// @mui
import { Box, SvgIcon } from '@mui/material';

// ----------------------------------------------------------------------

export default function MapMarker({
  onOpen,
  lat,
  lng
}: any) {
  const handleOpen = (event: any) => {
    event.stopPropagation();
    onOpen();
  };

  return (
    // @ts-expect-error TS(2749): 'Box' refers to a value, but is being used as a ty... Remove this comment to see the full error message
    <Box onClick={handleOpen}>
      // @ts-expect-error TS(2749): 'SvgIcon' refers to a value, but is being used as ... Remove this comment to see the full error message
      <SvgIcon sx={{ color: 'error.main', cursor: 'pointer' }}>
        // @ts-expect-error TS(2304): Cannot find name 'path'.
        <path
          // @ts-expect-error TS(2304): Cannot find name 'd'.
          d="M20.2,15.7L20.2,15.7c1.1-1.6,1.8-3.6,1.8-5.7c0-5.6-4.5-10-10-10S2,4.5,2,10c0,2,0.6,3.9,1.6,5.4c0,0.1,0.1,0.2,0.2,0.3
// @ts-expect-error TS(2304): Cannot find name 'c0'.
c0,0,0.1,0.1,0.1,0.2c0.2,0.3,0.4,0.6,0.7,0.9c2.6,3.1,7.4,7.6,7.4,7.6s4.8-4.5,7.4-7.5c0.2-0.3,0.5-0.6,0.7-0.9
// @ts-expect-error TS(2304): Cannot find name 'C20'.
C20.1,15.8,20.2,15.8,20.2,15.7z"
        />
      </SvgIcon>
    </Box>
  );
}

MapMarker.propTypes = {
  lat: PropTypes.number,
  lng: PropTypes.number,
  onOpen: PropTypes.func,
};
