// @mui
import PropTypes from 'prop-types';
import { Typography, Chip, Box } from '@mui/material';

// ----------------------------------------------------------------------

export default function BlogSidebarPopularTags({
  popularTags
}: any) {
  return (
    // @ts-expect-error TS(2749): 'Box' refers to a value, but is being used as a ty... Remove this comment to see the full error message
    <Box>
      // @ts-expect-error TS(2749): 'Typography' refers to a value, but is being used ... Remove this comment to see the full error message
      <Typography variant="h5" sx={{ mb: 3 }}>
        // @ts-expect-error TS(2304): Cannot find name 'Popular'.
        Popular Tags
      </Typography>

      // @ts-expect-error TS(2304): Cannot find name 'popularTags'.
      {popularTags.map((tag: any) => <Chip key={tag.label} label={tag.label} sx={{ m: 0.5 }} onClick={() => {}} />)}
    </Box>
  );
}

BlogSidebarPopularTags.propTypes = {
  popularTags: PropTypes.array,
};
