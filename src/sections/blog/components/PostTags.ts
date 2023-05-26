// @mui
import PropTypes from 'prop-types';
import { Chip, Stack, Typography } from '@mui/material';

// ----------------------------------------------------------------------

export default function PostTags({
  tags
}: any) {
  return (
    // @ts-expect-error TS(2749): 'Stack' refers to a value, but is being used as a ... Remove this comment to see the full error message
    <Stack direction="row" alignItems="center" flexWrap="wrap" sx={{ mt: 5 }}>
      // @ts-expect-error TS(2749): 'Typography' refers to a value, but is being used ... Remove this comment to see the full error message
      <Typography variant="subtitle2" sx={{ mr: 1 }}>
        // @ts-expect-error TS(2304): Cannot find name 'Tags'.
        Tags:
      </Typography>

      // @ts-expect-error TS(2304): Cannot find name 'tags'.
      {tags.map((tag: any) => <Chip key={tag.label} size="small" label={tag.label} sx={{ m: 0.5 }} onClick={() => {}} />)}
    </Stack>
  );
}

PostTags.propTypes = {
  tags: PropTypes.array,
};
