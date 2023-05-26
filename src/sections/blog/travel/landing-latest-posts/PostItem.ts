import PropTypes from 'prop-types';
// next
import NextLink from 'next/link';
// @mui
import { Typography, Link, Divider } from '@mui/material';
// utils
// @ts-expect-error TS(2307): Cannot find module 'src/utils/formatTime' or its c... Remove this comment to see the full error message
import { fDate } from 'src/utils/formatTime';
// routes
// @ts-expect-error TS(2307): Cannot find module 'src/routes/paths' or its corre... Remove this comment to see the full error message
import { paths } from 'src/routes/paths';
// components
// @ts-expect-error TS(2307): Cannot find module 'src/components/text-max-line' ... Remove this comment to see the full error message
import TextMaxLine from 'src/components/text-max-line';

// ----------------------------------------------------------------------

export default function PostItem({
  post
}: any) {
  const { title, description, createdAt } = post;

  return (
    // @ts-expect-error TS(2304): Cannot find name 'div'.
    <div>
      // @ts-expect-error TS(2749): 'Typography' refers to a value, but is being used ... Remove this comment to see the full error message
      <Typography variant="caption" sx={{ color: 'primary.main' }}>
        {fDate(createdAt: any)}
      </Typography>

      // @ts-expect-error TS(2304): Cannot find name 'component'.
      <Link component={NextLink} href={paths.travel.post} sx={{ color: 'common.white' }}>
        // @ts-expect-error TS(2304): Cannot find name 'variant'.
        <TextMaxLine variant="h5" sx={{ mt: 1, mb: 2 }}>
          // @ts-expect-error TS(18004): No value exists in scope for the shorthand propert... Remove this comment to see the full error message
          {title}
        </TextMaxLine>
      </Link>

      // @ts-expect-error TS(2304): Cannot find name 'variant'.
      <TextMaxLine variant="body2" sx={{ color: 'text.secondary' }}>
        // @ts-expect-error TS(18004): No value exists in scope for the shorthand propert... Remove this comment to see the full error message
        {description}
      </TextMaxLine>

      // @ts-expect-error TS(2304): Cannot find name 'sx'.
      <Divider sx={{ borderStyle: 'dashed', mt: 3 }} />
    </div>
  );
}

PostItem.propTypes = {
  post: PropTypes.shape({
    createdAt: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.instanceOf(Date),
    ]),
    description: PropTypes.string,
    title: PropTypes.string,
  }),
};
