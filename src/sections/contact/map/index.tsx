import PropTypes from 'prop-types';
import { useState } from 'react';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'goog... Remove this comment to see the full error message
import GoogleMapReact from 'google-map-react';
// @mui
import { Box } from '@mui/material';
// config
// @ts-expect-error TS(2307): Cannot find module 'src/config-global' or its corr... Remove this comment to see the full error message
import { GOOGLE_MAP_API } from 'src/config-global';
//
import MapPopup from './MapPopup';
import MapMarker from './MapMarker';
import { mapStyle } from './styles';

// ----------------------------------------------------------------------

export default function ContactMap({ offices, sx, ...other }: any) {
  const [tooltip, setTooltip] = useState(null);

  const [centerMap, setCenterMap] = useState({
    lat: offices[0].latlng[0],
    lng: offices[0].latlng[1],
  });

  const handleOpen = (lat: any, lng: any, office: any) => {
    setCenterMap({
      ...centerMap,
      lat: lat - 32,
      lng,
    });
    setTooltip(office);
  };

  return (
    <Box sx={{ height: 480, overflow: 'hidden', ...sx }} {...other}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: GOOGLE_MAP_API }}
        center={centerMap}
        zoom={2}
        options={{
          styles: mapStyle,
          disableDefaultUI: true,
        }}
      >
        {offices.map((office: any, index: any) => (
          <MapMarker
            key={index}
            lat={office.latlng[0]}
            lng={office.latlng[1]}
            onOpen={() => handleOpen(office.latlng[0], office.latlng[1], office)}
          />
        ))}

        {tooltip && (
          <MapPopup
            // @ts-expect-error TS(2339): Property 'latlng' does not exist on type 'never'.
            lat={tooltip.latlng[0]}
            // @ts-expect-error TS(2339): Property 'latlng' does not exist on type 'never'.
            lng={tooltip.latlng[1]}
            office={tooltip}
            onClose={() => setTooltip(null)}
          />
        )}
      </GoogleMapReact>
    </Box>
  );
}

ContactMap.propTypes = {
  offices: PropTypes.array,
  sx: PropTypes.object,
};
