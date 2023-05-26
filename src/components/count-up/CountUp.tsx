import PropTypes from 'prop-types';
import { useRef } from 'react';
import { useInView } from 'framer-motion';
const ReactCountUp = dynamic(() => import('react-countup'), { ssr: false });
// @mui
import { Box } from '@mui/material';
import dynamic from 'next/dynamic';

// ----------------------------------------------------------------------

export default function CountUp({ sx, ...other }: any) {
  const ref = useRef(null);

  const isInView = useInView(ref, { once: true });

  return (
    <Box component="span" ref={ref} sx={sx}>
      {isInView && <ReactCountUp duration={1} {...other} />}
    </Box>
  );
}

// CountUp.propTypes = {
//   sx: PropTypes.object,
// };
