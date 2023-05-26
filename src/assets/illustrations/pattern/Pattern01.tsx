import PropTypes from 'prop-types';
import { memo } from 'react';
import { m } from 'framer-motion';
// @mui
import { useTheme } from '@mui/material/styles';
import { Box } from '@mui/material';

// ----------------------------------------------------------------------

const varUp = {
  animate: { y: [-12, 12, -12] },
  transition: { duration: 8, repeat: Infinity },
};

const varDown = {
  animate: { y: [12, -12, 12] },
  transition: { duration: 8, repeat: Infinity },
};

const varLeft = {
  animate: { x: [10, -10, 10] },
  transition: { duration: 7, repeat: Infinity },
};

const varRight = {
  animate: { x: [10, -10, 10] },
  transition: { duration: 7, repeat: Infinity },
};

// ----------------------------------------------------------------------

function Pattern01({
  sx,
  ...other
}: any) {
  const theme = useTheme();

  const PURPLE = '#DC8CFF';
  const BLUE = theme.palette.info.light;
  const RED = theme.palette.error.light;
  // @ts-expect-error TS(2551): Property 'lighter' does not exist on type 'Palette... Remove this comment to see the full error message
  const CYAN = theme.palette.info.lighter;
  const GREEN = theme.palette.success.light;
  const ORANGE = theme.palette.warning.light;

  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <Box sx={{ width: 1, height: 1, position: 'absolute', opacity: 0.32, ...sx }} {...other}>
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        fill="none"
        viewBox="0 0 640 640"
      >
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <m.polygon
          {...varLeft}
          fill={GREEN}
          points="79.6660954 466.5012 83.4706954 470.3062 87.2873954 466.4912 88.9182954 468.1212 85.1008954 471.9362 88.9077954 475.7412 87.2723954 477.3762 83.4651954 473.5712 79.6510954 477.3862 78.0202954 475.7562 81.8348954 471.9422 78.0306954 468.1362"
        />
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <m.polygon
          {...varUp}
          fill={GREEN}
          points="469.906195 75.0105 473.711195 78.8154 477.527195 75 479.158195 76.6304 475.341195 80.4452 479.148195 84.2498 477.512195 85.8847 473.705195 82.0805 469.891195 85.8952 468.260195 84.2648 472.075195 80.4507 468.271195 76.6454"
        />
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <m.polygon
          {...varRight}
          fill={PURPLE}
          points="400.526195 241.7992 404.331195 245.6042 408.148195 241.7882 409.778195 243.4192 405.961195 247.2342 409.768195 251.0382 408.133195 252.6732 404.325195 248.8692 400.511195 252.6842 398.880195 251.0532 402.695195 247.2392 398.891195 243.4342"
        />
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <m.path
          {...varLeft}
          d="M204.688195,460.0412 L215.909195,471.2692 C216.698195,472.0482 217.486195,471.7982 217.686195,470.7102 L220.172195,457.3862 C220.242195,457.1642 220.250195,456.9272 220.195195,456.7002 C220.140195,456.4742 220.023195,456.2672 219.858195,456.1022 C219.694195,455.9382 219.487195,455.8212 219.260195,455.7662 C219.034195,455.7112 218.797195,455.7192 218.575195,455.7892 L205.237195,458.2642 C204.149195,458.4642 203.909195,459.2622 204.688195,460.0412 Z"
          stroke={PURPLE}
          strokeWidth="2"
          strokeLinecap="round"
        />
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <m.path
          {...varUp}
          d="M316.964195,555.3242 L320.830195,551.4592 C321.416195,550.8752 322.209195,550.5472 323.036195,550.5472 C323.863195,550.5472 324.657195,550.8752 325.243195,551.4592 L329.108195,555.3242 C329.400195,555.6142 329.631195,555.9582 329.789195,556.3372 C329.947195,556.7172 330.028195,557.1232 330.028195,557.5342 C330.028195,557.9452 329.947195,558.3512 329.789195,558.7302 C329.631195,559.1102 329.400195,559.4542 329.108195,559.7442 L325.243195,563.6082 C324.657195,564.1922 323.863195,564.5202 323.036195,564.5202 C322.209195,564.5202 321.416195,564.1922 320.830195,563.6082 L316.964195,559.7442 C316.673195,559.4542 316.442195,559.1102 316.284195,558.7302 C316.126195,558.3512 316.045195,557.9452 316.045195,557.5342 C316.045195,557.1232 316.126195,556.7172 316.284195,556.3372 C316.442195,555.9582 316.673195,555.6142 316.964195,555.3242 L316.964195,555.3242 Z"
          stroke={CYAN}
          strokeWidth="2"
        />
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <m.path
          {...varDown}
          d="M488.678195,226.9562 L492.544195,223.0912 C493.130195,222.5072 493.923195,222.1792 494.750195,222.1792 C495.577195,222.1792 496.371195,222.5072 496.956195,223.0912 L500.822195,226.9562 C501.114195,227.2452 501.345195,227.5902 501.503195,227.9692 C501.660195,228.3482 501.742195,228.7552 501.742195,229.1652 C501.742195,229.5762 501.660195,229.9832 501.503195,230.3622 C501.345195,230.7412 501.114195,231.0862 500.822195,231.3752 L496.956195,235.2402 C496.371195,235.8242 495.577195,236.1522 494.750195,236.1522 C493.923195,236.1522 493.130195,235.8242 492.544195,235.2402 L488.678195,231.3752 C488.387195,231.0862 488.155195,230.7412 487.998195,230.3622 C487.840195,229.9832 487.759195,229.5762 487.759195,229.1652 C487.759195,228.7552 487.840195,228.3482 487.998195,227.9692 C488.155195,227.5902 488.387195,227.2452 488.678195,226.9562 L488.678195,226.9562 Z"
          stroke={CYAN}
          strokeWidth="2"
        />
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <m.path
          {...varLeft}
          d="M605.025195,349.0122 L615.168195,359.1522 C615.947195,359.9312 616.736195,359.6912 616.945195,358.6032 L619.182195,346.5962 C619.250195,346.3742 619.257195,346.1382 619.201195,345.9132 C619.145195,345.6872 619.028195,345.4812 618.864195,345.3172 C618.700195,345.1532 618.494195,345.0362 618.268195,344.9802 C618.043195,344.9242 617.806195,344.9312 617.584195,344.9992 L605.574195,347.2352 C604.486195,347.4352 604.237195,348.2332 605.025195,349.0122 Z"
          stroke={RED}
          strokeWidth="2"
        />
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <m.path
          {...varDown}
          d="M559.564195,533.7552 L569.707195,543.8952 C570.486195,544.6742 571.275195,544.4352 571.484195,543.3472 L573.721195,531.3402 C573.789195,531.1182 573.796195,530.8812 573.740195,530.6562 C573.684195,530.4312 573.567195,530.2252 573.403195,530.0602 C573.239195,529.8962 573.033195,529.7802 572.807195,529.7242 C572.582195,529.6682 572.345195,529.6742 572.123195,529.7432 L560.113195,531.9782 C559.025195,532.1782 558.776195,532.9772 559.564195,533.7552 Z"
          stroke={ORANGE}
          strokeWidth="2"
          strokeLinecap="round"
        />
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <m.path
          {...varUp}
          d="M30.9833954,422.9532 C30.9833954,423.9402 30.6905954,424.9052 30.1420954,425.7252 C29.5935954,426.5462 28.8139954,427.1862 27.9018954,427.5642 C26.9897954,427.9412 25.9861454,428.0402 25.0178554,427.8472 C24.0495654,427.6552 23.1601254,427.1802 22.4620254,426.4822 C21.7639254,425.7842 21.2885254,424.8952 21.0959154,423.9272 C20.9033154,422.9592 21.0021554,421.9552 21.3799654,421.0432 C21.7577754,420.1312 22.3975754,419.3522 23.2184454,418.8042 C24.0393254,418.2552 25.0044154,417.9622 25.9916854,417.9622 C27.3155954,417.9622 28.5851954,418.4882 29.5212954,419.4242 C30.4574954,420.3602 30.9833954,421.6292 30.9833954,422.9532 Z"
          stroke={BLUE}
          strokeWidth="2"
          strokeLinecap="round"
        />
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <m.path
          {...varDown}
          d="M321.193195,87.598 C321.193195,88.585 320.900195,89.5498 320.352195,90.3705 C319.803195,91.1911 319.024195,91.831 318.112195,92.2087 C317.200195,92.5864 316.196195,92.6849 315.228195,92.4924 C314.259195,92.2998 313.370195,91.8247 312.672195,91.1268 C311.974195,90.4289 311.498195,89.5397 311.306195,88.5717 C311.113195,87.6036 311.212195,86.5999 311.590195,85.6881 C311.968195,84.7762 312.607195,83.9971 313.428195,83.4487 C314.249195,82.9004 315.214195,82.6076 316.201195,82.6076 C317.525195,82.6076 318.795195,83.1332 319.731195,84.0691 C320.667195,85.005 321.193195,86.2744 321.193195,87.598 Z"
          stroke={BLUE}
          strokeWidth="2"
          strokeLinecap="round"
        />
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <m.path
          {...varUp}
          d="M296.550195,430.7782 C299.583195,430.7782 302.041195,428.3202 302.041195,425.2882 C302.041195,422.2562 299.583195,419.7992 296.550195,419.7992 C293.518195,419.7992 291.059195,422.2562 291.059195,425.2882 C291.059195,428.3202 293.518195,430.7782 296.550195,430.7782 Z"
          stroke={RED}
          strokeWidth="2"
        />
      </svg>
    </Box>
  );
}

Pattern01.propTypes = {
  sx: PropTypes.object,
};

export default memo(Pattern01);
