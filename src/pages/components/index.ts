// next
import Head from 'next/head';
import NextLink from 'next/link';
// @mui
import { Box, Container, Link, Paper, Typography, Divider } from '@mui/material';
// routes
// @ts-expect-error TS(2307): Cannot find module 'src/routes/paths' or its corre... Remove this comment to see the full error message
import { paths } from 'src/routes/paths';
// layouts
// @ts-expect-error TS(2307): Cannot find module 'src/layouts/main' or its corre... Remove this comment to see the full error message
import MainLayout from 'src/layouts/main';

// ----------------------------------------------------------------------

const ITEMS = [
  { title: 'Animate', path: paths.components.animate },
  { title: 'Carousel', path: paths.components.carousel },
  { title: 'CountUp', path: paths.components.countUp },
  { title: 'Form Validation', path: paths.components.form },
  { title: 'Icons', path: paths.components.icons },
  { title: 'Image', path: paths.components.image },
  { title: 'Label', path: paths.components.label },
  { title: 'Lightbox', path: paths.components.lightbox },
  { title: 'Markdown', path: paths.components.markdown },
  { title: 'Mega Menu', path: paths.components.megaMenu },
  { title: 'Navigation Bar', path: paths.components.navigation },
  { title: 'Scroll', path: paths.components.scroll },
  { title: 'Player', path: paths.components.player },
  { title: 'Text Max Line', path: paths.components.textMaxLine },
];

// ----------------------------------------------------------------------

ComponentsPage.getLayout = (page: any) => <MainLayout>{page}</MainLayout>;

// ----------------------------------------------------------------------

export default function ComponentsPage() {
  return <>
    // @ts-expect-error TS(2749): 'Head' refers to a value, but is being used as a t... Remove this comment to see the full error message
    <Head>
      // @ts-expect-error TS(2304): Cannot find name 'title'.
      <title>Components | ZONE UI</title>
    </Head>

    // @ts-expect-error TS(2304): Cannot find name 'sx'.
    <Container sx={{ mt: 5, mb: 10 }}>
      // @ts-expect-error TS(2749): 'Typography' refers to a value, but is being used ... Remove this comment to see the full error message
      <Typography variant="h4" paragraph>
        // @ts-expect-error TS(2304): Cannot find name 'MUI'.
        MUI Components
      </Typography>

      // @ts-expect-error TS(2304): Cannot find name 'href'.
      <Link href="https://mui.com/components/" target="_blank" rel="noopener">
        // @ts-expect-error TS(2304): Cannot find name 'https'.
        https://mui.com/components/
      </Link>

      // @ts-expect-error TS(2304): Cannot find name 'sx'.
      <Divider sx={{ borderStyle: 'dashed', my: 5 }} />

      // @ts-expect-error TS(2304): Cannot find name 'variant'.
      <Typography variant="h4" paragraph>
        // @ts-expect-error TS(2304): Cannot find name 'Extra'.
        Extra Components
      </Typography>

      // @ts-expect-error TS(2304): Cannot find name 'variant'.
      <Typography variant="body2" sx={{ color: 'text.secondary', mb: 5 }}>
        // @ts-expect-error TS(2304): Cannot find name 'Extension'.
        Extension components and 3rd party dependencies.
      </Typography>

      <Box
        // @ts-expect-error TS(2304): Cannot find name 'gap'.
        gap={3}
        // @ts-expect-error TS(2304): Cannot find name 'display'.
        display="grid"
        // @ts-expect-error TS(2304): Cannot find name 'gridTemplateColumns'.
        gridTemplateColumns={{
          // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
          xs: 'repeat(1, 1fr)',
          // @ts-expect-error TS(2304): Cannot find name 'sm'.
          sm: 'repeat(2, 1fr)',
          // @ts-expect-error TS(2304): Cannot find name 'md'.
          md: 'repeat(4, 1fr)',
        }}
      // @ts-expect-error TS(2365): Operator '>' cannot be applied to types 'boolean' ... Remove this comment to see the full error message
      >
        // @ts-expect-error TS(2749): 'Link' refers to a value, but is being used as a t... Remove this comment to see the full error message
        {ITEMS.map((item: any) => <Link
          // @ts-expect-error TS(2304): Cannot find name 'component'.
          component={NextLink}
          // @ts-expect-error TS(2304): Cannot find name 'href'.
          href={item.path}
          // @ts-expect-error TS(2304): Cannot find name 'key'.
          key={item.title}
          // @ts-expect-error TS(2304): Cannot find name 'color'.
          color="inherit"
          // @ts-expect-error TS(2304): Cannot find name 'underline'.
          underline="none"
        >
          // @ts-expect-error TS(2749): 'Paper' refers to a value, but is being used as a ... Remove this comment to see the full error message
          <Paper
            // @ts-expect-error TS(2304): Cannot find name 'variant'.
            variant="outlined"
            // @ts-expect-error TS(2304): Cannot find name 'sx'.
            sx={{
              px: 3,
              py: 5,
              typography: 'h6',
              borderRadius: 1.5,
              textAlign: 'center',
              '&:hover': {
                boxShadow: (theme: any) => `0 0 0 2px ${theme.palette.text.primary}`,
              },
            }}
          >
            // @ts-expect-error TS(18004): No value exists in scope for the shorthand propert... Remove this comment to see the full error message
            {item.title}
          </Paper>
        </Link>)}
      </Box>
    </Container>
  </>;
}
