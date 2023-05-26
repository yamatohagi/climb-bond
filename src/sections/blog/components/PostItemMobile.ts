import PropTypes from 'prop-types';
// @mui
import { Stack, Link } from '@mui/material';
// utils
// @ts-expect-error TS(2307): Cannot find module 'src/utils/formatTime' or its c... Remove this comment to see the full error message
import { fDate } from 'src/utils/formatTime';
// components
// @ts-expect-error TS(2307): Cannot find module 'src/components/image' or its c... Remove this comment to see the full error message
import Image from 'src/components/image';
// @ts-expect-error TS(2307): Cannot find module 'src/components/text-max-line' ... Remove this comment to see the full error message
import TextMaxLine from 'src/components/text-max-line';
//
import PostTimeBlock from './PostTimeBlock';

// ----------------------------------------------------------------------

export default function PostItemMobile({
  post,
  onSiderbar
}: any) {
  const { title, duration, coverImg, createdAt } = post;

  return (
    // @ts-expect-error TS(2749): 'Stack' refers to a value, but is being used as a ... Remove this comment to see the full error message
    <Stack
      // @ts-expect-error TS(2304): Cannot find name 'spacing'.
      spacing={2}
      // @ts-expect-error TS(2304): Cannot find name 'direction'.
      direction="row"
      // @ts-expect-error TS(2304): Cannot find name 'alignItems'.
      alignItems={{ xs: 'flex-start', md: 'unset' }}
      // @ts-expect-error TS(2304): Cannot find name 'sx'.
      sx={{ width: 1 }}
    >
      <Image
        // @ts-expect-error TS(2304): Cannot find name 'alt'.
        alt={title}
        // @ts-expect-error TS(2304): Cannot find name 'src'.
        src={coverImg}
        // @ts-expect-error TS(2304): Cannot find name 'sx'.
        sx={{
          // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
          width: 80,
          // @ts-expect-error TS(2304): Cannot find name 'height'.
          height: 80,
          // @ts-expect-error TS(2304): Cannot find name 'flexShrink'.
          flexShrink: 0,
          // @ts-expect-error TS(2304): Cannot find name 'borderRadius'.
          borderRadius: 1.5,
        }}
      // @ts-expect-error TS(2365): Operator '<' cannot be applied to types 'RegExp' a... Remove this comment to see the full error message
      />

      // @ts-expect-error TS(2304): Cannot find name 'spacing'.
      <Stack spacing={onSiderbar ? 0.5 : 1}>
        // @ts-expect-error TS(2749): 'Link' refers to a value, but is being used as a t... Remove this comment to see the full error message
        <Link color="inherit">
          // @ts-expect-error TS(2304): Cannot find name 'variant'.
          <TextMaxLine variant={onSiderbar ? 'subtitle2' : 'h6'}>{title}</TextMaxLine>
        </Link>

        // @ts-expect-error TS(2304): Cannot find name 'createdAt'.
        <PostTimeBlock createdAt={fDate(createdAt: any)} duration={duration} />
      </Stack>
    </Stack>
  );
}

PostItemMobile.propTypes = {
  onSiderbar: PropTypes.bool,
  post: PropTypes.shape({
    coverImg: PropTypes.string,
    createdAt: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.instanceOf(Date),
    ]),
    duration: PropTypes.string,
    title: PropTypes.string,
  }),
};
