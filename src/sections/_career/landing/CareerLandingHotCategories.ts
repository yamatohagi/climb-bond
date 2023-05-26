import PropTypes from 'prop-types';
// @mui
import { Typography, Stack, Container, Box, Paper, Button } from '@mui/material';
// components
// @ts-expect-error TS(2307): Cannot find module 'src/components/iconify' or its... Remove this comment to see the full error message
import Iconify from 'src/components/iconify';
// @ts-expect-error TS(2307): Cannot find module 'src/components/svg-color' or i... Remove this comment to see the full error message
import SvgColor from 'src/components/svg-color';
// @ts-expect-error TS(2307): Cannot find module 'src/components/text-max-line' ... Remove this comment to see the full error message
import TextMaxLine from 'src/components/text-max-line';

// ----------------------------------------------------------------------

export default function CareerLandingHotCategories({
  categories
}: any) {
  return (
    // @ts-expect-error TS(2749): 'Container' refers to a value, but is being used a... Remove this comment to see the full error message
    <Container
      // @ts-expect-error TS(2304): Cannot find name 'sx'.
      sx={{
        // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
        pt: { xs: 10, md: 15 },
        // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
        pb: { xs: 5, md: 10 },
      }}
    >
      // @ts-expect-error TS(2749): 'Typography' refers to a value, but is being used ... Remove this comment to see the full error message
      <Typography variant="h2" sx={{ textAlign: 'center' }}>
        // @ts-expect-error TS(2304): Cannot find name 'Hot'.
        Hot Categories
      </Typography>

      <Box
        // @ts-expect-error TS(2304): Cannot find name 'sx'.
        sx={{
          // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
          gap: 4,
          // @ts-expect-error TS(2304): Cannot find name 'display'.
          display: 'grid',
          // @ts-expect-error TS(2304): Cannot find name 'my'.
          my: { xs: 8, md: 10 },
          gridTemplateColumns: {
            // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
            xs: 'repeat(1, 1fr)',
            // @ts-expect-error TS(2304): Cannot find name 'sm'.
            sm: 'repeat(2, 1fr)',
            // @ts-expect-error TS(2304): Cannot find name 'md'.
            md: 'repeat(4, 1fr)',
          },
        }}
      // @ts-expect-error TS(2365): Operator '<' cannot be applied to types 'boolean' ... Remove this comment to see the full error message
      >
        // @ts-expect-error TS(18004): No value exists in scope for the shorthand propert... Remove this comment to see the full error message
        {categories.map((category: any) => <CategoryItem key={category.id} category={category} />)}
      </Box>

      // @ts-expect-error TS(2304): Cannot find name 'alignItems'.
      <Stack alignItems="center">
        // @ts-expect-error TS(2749): 'Button' refers to a value, but is being used as a... Remove this comment to see the full error message
        <Button
          // @ts-expect-error TS(2304): Cannot find name 'color'.
          color="inherit"
          // @ts-expect-error TS(2304): Cannot find name 'size'.
          size="large"
          // @ts-expect-error TS(2304): Cannot find name 'variant'.
          variant="outlined"
          // @ts-expect-error TS(2304): Cannot find name 'endIcon'.
          endIcon={<Iconify icon="carbon:chevron-right" />}
        >
          // @ts-expect-error TS(2304): Cannot find name 'View'.
          View All Categories
        </Button>
      </Stack>
    </Container>
  );
}

CareerLandingHotCategories.propTypes = {
  categories: PropTypes.array,
};

// ----------------------------------------------------------------------

function CategoryItem({
  category
}: any) {
  return (
    // @ts-expect-error TS(2749): 'Paper' refers to a value, but is being used as a ... Remove this comment to see the full error message
    <Paper
      // @ts-expect-error TS(2304): Cannot find name 'variant'.
      variant="outlined"
      // @ts-expect-error TS(2304): Cannot find name 'sx'.
      sx={{
        // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
        pt: '100%',
        // @ts-expect-error TS(2304): Cannot find name 'borderRadius'.
        borderRadius: 2,
        // @ts-expect-error TS(2304): Cannot find name 'cursor'.
        cursor: 'pointer',
        // @ts-expect-error TS(2304): Cannot find name 'textAlign'.
        textAlign: 'center',
        // @ts-expect-error TS(2304): Cannot find name 'position'.
        position: 'relative',
        // @ts-expect-error TS(2304): Cannot find name 'bgcolor'.
        bgcolor: 'transparent',
        // @ts-expect-error TS(2304): Cannot find name 'transition'.
        transition: (theme: any) => theme.transitions.create('all'),
        '&:hover': {
          // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
          bgcolor: 'background.paper',
          // @ts-expect-error TS(2304): Cannot find name 'boxShadow'.
          boxShadow: (theme: any) => theme.customShadows.z24,
          '& .icon': {
            // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
            bgcolor: 'primary.main',
            // @ts-expect-error TS(2304): Cannot find name 'transition'.
            transition: (theme: any) => theme.transitions.create('all'),
            '& > span': {
              // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
              color: 'common.white',
            },
          },
        },
      }}
    >
      // @ts-expect-error TS(2749): 'Stack' refers to a value, but is being used as a ... Remove this comment to see the full error message
      <Stack
        // @ts-expect-error TS(2304): Cannot find name 'alignItems'.
        alignItems="center"
        // @ts-expect-error TS(2304): Cannot find name 'justifyContent'.
        justifyContent="center"
        // @ts-expect-error TS(2304): Cannot find name 'sx'.
        sx={{
          // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
          width: 1,
          // @ts-expect-error TS(2304): Cannot find name 'height'.
          height: 1,
          // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
          top: 0,
          // @ts-expect-error TS(2304): Cannot find name 'position'.
          position: 'absolute',
        }}
      >
        // @ts-expect-error TS(2749): 'Box' refers to a value, but is being used as a ty... Remove this comment to see the full error message
        <Box
          // @ts-expect-error TS(2304): Cannot find name 'className'.
          className="icon"
          // @ts-expect-error TS(2304): Cannot find name 'sx'.
          sx={{
            // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
            mb: 2.5,
            // @ts-expect-error TS(2304): Cannot find name 'width'.
            width: 72,
            // @ts-expect-error TS(2304): Cannot find name 'height'.
            height: 72,
            // @ts-expect-error TS(2304): Cannot find name 'mx'.
            mx: 'auto',
            // @ts-expect-error TS(2304): Cannot find name 'display'.
            display: 'flex',
            // @ts-expect-error TS(2304): Cannot find name 'borderRadius'.
            borderRadius: '50%',
            // @ts-expect-error TS(2304): Cannot find name 'alignItems'.
            alignItems: 'center',
            // @ts-expect-error TS(2304): Cannot find name 'justifyContent'.
            justifyContent: 'center',
          }}
        >
          // @ts-expect-error TS(2304): Cannot find name 'src'.
          <SvgColor src={category.icon} sx={{ width: 48, height: 48 }} />
        </Box>

        // @ts-expect-error TS(2304): Cannot find name 'variant'.
        <TextMaxLine variant="h6" line={1}>
          // @ts-expect-error TS(18004): No value exists in scope for the shorthand propert... Remove this comment to see the full error message
          {category.name}
        </TextMaxLine>

        // @ts-expect-error TS(2304): Cannot find name 'variant'.
        <Typography variant="body2" sx={{ color: 'text.disabled', mt: 0.5 }}>
          // @ts-expect-error TS(18004): No value exists in scope for the shorthand propert... Remove this comment to see the full error message
          {category.totalJobs} jobs
        </Typography>
      </Stack>
    </Paper>
  );
}

CategoryItem.propTypes = {
  category: PropTypes.shape({
    icon: PropTypes.node,
    name: PropTypes.string,
    totalJobs: PropTypes.number,
  }),
};
