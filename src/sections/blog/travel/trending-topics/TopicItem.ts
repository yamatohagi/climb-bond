import PropTypes from 'prop-types';
import { m } from 'framer-motion';
// @mui
import { styled, alpha } from '@mui/material/styles';
import { Typography, Stack, Box } from '@mui/material';
// utils
// @ts-expect-error TS(2307): Cannot find module 'src/utils/cssStyles' or its co... Remove this comment to see the full error message
import { bgGradient } from 'src/utils/cssStyles';
// _mock
// @ts-expect-error TS(2307): Cannot find module 'src/_mock' or its correspondin... Remove this comment to see the full error message
import _mock from 'src/_mock';
// components
// @ts-expect-error TS(2307): Cannot find module 'src/components/image' or its c... Remove this comment to see the full error message
import Image from 'src/components/image';
// @ts-expect-error TS(2307): Cannot find module 'src/components/animate' or its... Remove this comment to see the full error message
import { varHover, varTranHover } from 'src/components/animate';

// ----------------------------------------------------------------------

const CATEGORIES = [
  'Marketing',
  'Community',
  'Tutorials',
  'Business',
  'Management',
  'Sports',
  'Travel',
  'Design',
];

export const TOPICS = [...Array(8)].map((_, index) => ({
  id: _mock.id(index),
  cover: _mock.image.travel(index + 4),
  totalPost: index + 10,
  category: CATEGORIES[index],
}));

// ----------------------------------------------------------------------

const StyledOverlay = styled('div')(({ theme }) => ({
  ...bgGradient({
    startColor: `${alpha(theme.palette.common.black, 0)} 0%`,
    endColor: `${theme.palette.common.black} 75%`,
  }),
  top: 0,
  left: 0,
  zIndex: 8,
  width: '100%',
  height: '100%',
  position: 'absolute',
}));

// ----------------------------------------------------------------------

export default function TopicItem({
  topic
}: any) {
  const { totalPost, cover, category } = topic;

  return (
    // @ts-expect-error TS(2749): 'Box' refers to a value, but is being used as a ty... Remove this comment to see the full error message
    <Box
      // @ts-expect-error TS(2304): Cannot find name 'component'.
      component={m.div}
      // @ts-expect-error TS(2304): Cannot find name 'whileHover'.
      whileHover="hover"
      // @ts-expect-error TS(2304): Cannot find name 'variants'.
      variants={varHover(1)}
      // @ts-expect-error TS(2304): Cannot find name 'transition'.
      transition={varTranHover()}
      // @ts-expect-error TS(2304): Cannot find name 'sx'.
      sx={{ px: 1.5, cursor: 'pointer' }}
    >
      // @ts-expect-error TS(2749): 'Box' refers to a value, but is being used as a ty... Remove this comment to see the full error message
      <Box sx={{ borderRadius: 2, overflow: 'hidden', position: 'relative' }}>
        // @ts-expect-error TS(2749): 'Stack' refers to a value, but is being used as a ... Remove this comment to see the full error message
        <Stack
          // @ts-expect-error TS(2304): Cannot find name 'spacing'.
          spacing={0.5}
          // @ts-expect-error TS(2304): Cannot find name 'sx'.
          sx={{
            // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
            py: 3,
            // @ts-expect-error TS(2304): Cannot find name 'width'.
            width: 1,
            // @ts-expect-error TS(2304): Cannot find name 'zIndex'.
            zIndex: 9,
            // @ts-expect-error TS(2304): Cannot find name 'bottom'.
            bottom: 0,
            // @ts-expect-error TS(2304): Cannot find name 'textAlign'.
            textAlign: 'center',
            // @ts-expect-error TS(2304): Cannot find name 'position'.
            position: 'absolute',
            // @ts-expect-error TS(2304): Cannot find name 'color'.
            color: 'common.white',
          }}
        >
          // @ts-expect-error TS(2503): Cannot find namespace 'm'.
          <m.div variants={varHover(1.05)} transition={varTranHover()}>
            // @ts-expect-error TS(2749): 'Typography' refers to a value, but is being used ... Remove this comment to see the full error message
            <Typography variant="h6">{category}</Typography>
          </m.div>

          // @ts-expect-error TS(2304): Cannot find name 'variant'.
          <Typography variant="body2" sx={{ opacity: 0.72 }}>
            // @ts-expect-error TS(18004): No value exists in scope for the shorthand propert... Remove this comment to see the full error message
            {totalPost} posts
          </Typography>
        </Stack>

        // @ts-expect-error TS(2362): The left-hand side of an arithmetic operation must... Remove this comment to see the full error message
        <StyledOverlay />

        // @ts-expect-error TS(2503): Cannot find namespace 'm'.
        <m.div variants={varHover(1.25)} transition={varTranHover()}>
          // @ts-expect-error TS(2304): Cannot find name 'alt'.
          <Image alt={category} src={cover} ratio="4/3" />
        </m.div>
      </Box>
    </Box>
  );
}

TopicItem.propTypes = {
  topic: PropTypes.shape({
    category: PropTypes.string,
    cover: PropTypes.string,
    totalPost: PropTypes.number,
  }),
};
