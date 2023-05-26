import PropTypes from 'prop-types';
import { m } from 'framer-motion';
import { useRef } from 'react';
// @mui
import { Box, Paper, Typography } from '@mui/material';
// components
// @ts-expect-error TS(2307): Cannot find module 'src/components/scrollbar' or i... Remove this comment to see the full error message
import Scrollbar from 'src/components/scrollbar';
// @ts-expect-error TS(2307): Cannot find module 'src/components/animate' or its... Remove this comment to see the full error message
import { MotionViewport, varContainer } from 'src/components/animate';
//
import getVariant from '../getVariant';

// ----------------------------------------------------------------------

export default function ContainerView({ selectVariant, ...other }: any) {
  const scrollRef = useRef(null);

  return (
    <Paper
      ref={scrollRef}
      component={m.div}
      variants={varContainer()}
      sx={{
        height: 480,
        bgcolor: 'background.neutral',
      }}
      {...other}
    >
      <Scrollbar>
        {[...Array(40)].map((_, index) => (
          <Box
            key={index}
            component={MotionViewport}
            variants={getVariant(selectVariant)}
            viewport={{ root: scrollRef, once: true, amount: 0.1 }}
            sx={{
              my: 2,
              mx: 'auto',
              height: 72,
              maxWidth: 480,
              display: 'flex',
              borderRadius: 1,
              alignItems: 'center',
              justifyContent: 'center',
              bgcolor: 'background.paper',
              // @ts-expect-error TS(2339): Property 'customShadows' does not exist on type 'T... Remove this comment to see the full error message
              boxShadow: (theme) => theme.customShadows.z8,
            }}
          >
            <Typography variant="body2">Item {index + 1}</Typography>
          </Box>
        ))}
      </Scrollbar>
    </Paper>
  );
}

ContainerView.propTypes = {
  selectVariant: PropTypes.string,
};
