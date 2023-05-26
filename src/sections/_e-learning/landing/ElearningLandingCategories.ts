import PropTypes from 'prop-types';
// @mui
import { Typography, Container, Paper, Button, Box, Unstable_Grid2 as Grid } from '@mui/material';
// components
// @ts-expect-error TS(2307): Cannot find module 'src/components/iconify' or its... Remove this comment to see the full error message
import Iconify from 'src/components/iconify';
// @ts-expect-error TS(2307): Cannot find module 'src/components/text-max-line' ... Remove this comment to see the full error message
import TextMaxLine from 'src/components/text-max-line';

// ----------------------------------------------------------------------

export default function ElearningLandingCategories({
  categories
}: any) {
  return (
    // @ts-expect-error TS(2749): 'Box' refers to a value, but is being used as a ty... Remove this comment to see the full error message
    <Box
      // @ts-expect-error TS(2304): Cannot find name 'sx'.
      sx={{
        // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
        overflow: 'hidden',
        // @ts-expect-error TS(2304): Cannot find name 'bgcolor'.
        bgcolor: 'background.neutral',
        // @ts-expect-error TS(2304): Cannot find name 'py'.
        py: { xs: 10, md: 15 },
      }}
    >
      // @ts-expect-error TS(2749): 'Container' refers to a value, but is being used a... Remove this comment to see the full error message
      <Container>
        // @ts-expect-error TS(2749): 'Grid' refers to a value, but is being used as a t... Remove this comment to see the full error message
        <Grid container spacing={{ xs: 8, lg: 3 }} justifyContent={{ lg: 'space-between' }}>
          // @ts-expect-error TS(2749): 'Grid' refers to a value, but is being used as a t... Remove this comment to see the full error message
          <Grid
            // @ts-expect-error TS(2304): Cannot find name 'xs'.
            xs={12}
            // @ts-expect-error TS(2304): Cannot find name 'lg'.
            lg={4}
            // @ts-expect-error TS(2304): Cannot find name 'sx'.
            sx={{
              // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
              textAlign: { xs: 'center', lg: 'unset' },
            }}
          >
            // @ts-expect-error TS(2749): 'Typography' refers to a value, but is being used ... Remove this comment to see the full error message
            <Typography variant="h2">Featured Category</Typography>

            // @ts-expect-error TS(2304): Cannot find name 'sx'.
            <Typography sx={{ color: 'text.secondary', mt: 2, mb: 5 }}>
              // @ts-expect-error TS(2304): Cannot find name 'Since'.
              Since wire-frame renderings are relatively simple and fast to calculate, they are
              // @ts-expect-error TS(2304): Cannot find name 'often'.
              often used in cases
            </Typography>

            <Button
              // @ts-expect-error TS(2304): Cannot find name 'variant'.
              variant="contained"
              // @ts-expect-error TS(2304): Cannot find name 'size'.
              size="large"
              // @ts-expect-error TS(2304): Cannot find name 'color'.
              color="inherit"
              // @ts-expect-error TS(2304): Cannot find name 'endIcon'.
              endIcon={<Iconify icon="carbon:chevron-right" />}
            >
              // @ts-expect-error TS(2304): Cannot find name 'Explore'.
              Explore more
            </Button>
          </Grid>

          // @ts-expect-error TS(2304): Cannot find name 'xs'.
          <Grid xs={12} lg={7}>
            // @ts-expect-error TS(2749): 'Box' refers to a value, but is being used as a ty... Remove this comment to see the full error message
            <Box
              // @ts-expect-error TS(2304): Cannot find name 'sx'.
              sx={{
                // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
                gap: 3,
                // @ts-expect-error TS(2304): Cannot find name 'display'.
                display: 'grid',
                // @ts-expect-error TS(2304): Cannot find name 'gridTemplateColumns'.
                gridTemplateColumns: {
                  // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
                  xs: 'repeat(2, 1fr)',
                  // @ts-expect-error TS(2304): Cannot find name 'md'.
                  md: 'repeat(3, 1fr)',
                },
              }}
            // @ts-expect-error TS(2365): Operator '<' cannot be applied to types 'boolean' ... Remove this comment to see the full error message
            >
              // @ts-expect-error TS(18004): No value exists in scope for the shorthand propert... Remove this comment to see the full error message
              {categories.map((category: any) => <CategoryItem key={category.id} category={category} />)}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

ElearningLandingCategories.propTypes = {
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
        p: 3,
        // @ts-expect-error TS(2304): Cannot find name 'borderRadius'.
        borderRadius: 1.5,
        // @ts-expect-error TS(2304): Cannot find name 'cursor'.
        cursor: 'pointer',
        // @ts-expect-error TS(2304): Cannot find name 'bgcolor'.
        bgcolor: 'transparent',
        // @ts-expect-error TS(2304): Cannot find name 'transition'.
        transition: (theme: any) => theme.transitions.create('all', {
          duration: theme.transitions.duration.enteringScreen,
        }),
        '&:hover': {
          // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
          bgcolor: 'background.paper',
          // @ts-expect-error TS(2304): Cannot find name 'boxShadow'.
          boxShadow: (theme: any) => theme.customShadows.z24,
          '& h6': {
            // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
            color: 'primary.main',
          },
        },
      }}
    >
      // @ts-expect-error TS(2304): Cannot find name 'variant'.
      <TextMaxLine variant="h6" line={1} gutterBottom>
        // @ts-expect-error TS(18004): No value exists in scope for the shorthand propert... Remove this comment to see the full error message
        {category.name}
      </TextMaxLine>

      // @ts-expect-error TS(2304): Cannot find name 'variant'.
      <Typography variant="body2" sx={{ color: 'text.disabled' }}>
        // @ts-expect-error TS(18004): No value exists in scope for the shorthand propert... Remove this comment to see the full error message
        {category.students} students
      </Typography>
    </Paper>
  );
}

CategoryItem.propTypes = {
  category: PropTypes.shape({
    name: PropTypes.string,
    students: PropTypes.number,
  }),
};
