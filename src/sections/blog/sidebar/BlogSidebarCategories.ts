// @mui
import PropTypes from 'prop-types';
import { Stack, Link, Typography, Box } from '@mui/material';

// ----------------------------------------------------------------------

export default function BlogSidebarCategories({
  categories
}: any) {
  return (
    // @ts-expect-error TS(2749): 'Stack' refers to a value, but is being used as a ... Remove this comment to see the full error message
    <Stack spacing={1}>
      // @ts-expect-error TS(2749): 'Typography' refers to a value, but is being used ... Remove this comment to see the full error message
      <Typography variant="h5" gutterBottom>
        // @ts-expect-error TS(2552): Cannot find name 'Categories'. Did you mean 'categ... Remove this comment to see the full error message
        Categories
      </Typography>

      // @ts-expect-error TS(2749): 'Stack' refers to a value, but is being used as a ... Remove this comment to see the full error message
      {categories.map((category: any) => <Stack key={category.label} direction="row" alignItems="center">
        // @ts-expect-error TS(2749): 'Box' refers to a value, but is being used as a ty... Remove this comment to see the full error message
        <Box sx={{ width: 6, height: 6, mr: 2, bgcolor: 'primary.main', borderRadius: '50%' }} />

        // @ts-expect-error TS(2304): Cannot find name 'variant'.
        <Link variant="body2" href={category.path} color="inherit">
          // @ts-expect-error TS(18004): No value exists in scope for the shorthand propert... Remove this comment to see the full error message
          {category.label}
        </Link>
      </Stack>)}
    </Stack>
  );
}

BlogSidebarCategories.propTypes = {
  categories: PropTypes.array,
};
