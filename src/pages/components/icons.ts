import PropTypes from 'prop-types';
// next
import Head from 'next/head';
// @mui
import { Box, Stack, Container, Link, Tooltip, Paper, CardHeader } from '@mui/material';
// routes
// @ts-expect-error TS(2307): Cannot find module 'src/routes/paths' or its corre... Remove this comment to see the full error message
import { paths } from 'src/routes/paths';
// layouts
// @ts-expect-error TS(2307): Cannot find module 'src/layouts/main' or its corre... Remove this comment to see the full error message
import MainLayout from 'src/layouts/main';
// components
// @ts-expect-error TS(2307): Cannot find module 'src/components/iconify' or its... Remove this comment to see the full error message
import Iconify from 'src/components/iconify';
// @ts-expect-error TS(2307): Cannot find module 'src/components/svg-color' or i... Remove this comment to see the full error message
import SvgColor from 'src/components/svg-color';
// @ts-expect-error TS(2307): Cannot find module 'src/components/custom-breadcru... Remove this comment to see the full error message
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';

// ----------------------------------------------------------------------

const style = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexWrap: 'wrap',
  '& > *': { m: '8px !important' },
};

// ----------------------------------------------------------------------

DemoIconsPage.getLayout = (page: any) => <MainLayout>{page}</MainLayout>;

// ----------------------------------------------------------------------

export default function DemoIconsPage() {
  return <>
    // @ts-expect-error TS(2749): 'Head' refers to a value, but is being used as a t... Remove this comment to see the full error message
    <Head>
      // @ts-expect-error TS(2304): Cannot find name 'title'.
      <title>Components: Icons | ZONE UI</title>
    </Head>

    <Box
      // @ts-expect-error TS(2304): Cannot find name 'sx'.
      sx={{
        // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
        pt: 6,
        // @ts-expect-error TS(2304): Cannot find name 'pb'.
        pb: 1,
        // @ts-expect-error TS(2304): Cannot find name 'bgcolor'.
        bgcolor: (theme: any) => theme.palette.mode === 'light' ? 'grey.200' : 'grey.800',
      }}
    >
      // @ts-expect-error TS(2749): 'Container' refers to a value, but is being used a... Remove this comment to see the full error message
      <Container>
        <CustomBreadcrumbs
          // @ts-expect-error TS(2304): Cannot find name 'heading'.
          heading="Icons"
          // @ts-expect-error TS(2552): Cannot find name 'links'. Did you mean 'Link'?
          links={[
            // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
            {
              name: 'Components',
              href: paths.components.root,
            },
            { name: 'Icons' },
          ]}
          // @ts-expect-error TS(2304): Cannot find name 'moreLink'.
          moreLink={[
            // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
            'https://mui.com/components/material-icons',
            'https://iconify.design/icon-sets',
          ]}
        />
      </Container>
    </Box>

    // @ts-expect-error TS(2304): Cannot find name 'sx'.
    <Container sx={{ my: 10 }}>
      // @ts-expect-error TS(2749): 'Stack' refers to a value, but is being used as a ... Remove this comment to see the full error message
      <Stack spacing={3}>
        // @ts-expect-error TS(2709): Cannot use namespace 'Block' as a type.
        <Block title="Material Icons" sx={style}>
          // @ts-expect-error TS(2749): 'Link' refers to a value, but is being used as a t... Remove this comment to see the full error message
          <Link
            // @ts-expect-error TS(2304): Cannot find name 'href'.
            href="https://mui.com/components/icons/#main-content"
            // @ts-expect-error TS(2304): Cannot find name 'target'.
            target="_blank"
            // @ts-expect-error TS(2304): Cannot find name 'rel'.
            rel="noopener"
          >
            // @ts-expect-error TS(2304): Cannot find name 'https'.
            https://mui.com/components/icons/#main-content
          // @ts-expect-error TS(2365): Operator '<' cannot be applied to types 'boolean' ... Remove this comment to see the full error message
          </Link>
        </Block>

        // @ts-expect-error TS(2304): Cannot find name 'title'.
        <Block title="Iconify Icons" sx={style}>
          // @ts-expect-error TS(2749): 'Tooltip' refers to a value, but is being used as ... Remove this comment to see the full error message
          <Tooltip title="Iconify">
            // @ts-expect-error TS(2304): Cannot find name 'icon'.
            <Iconify icon="eva:color-palette-fill" width={24} />
          </Tooltip>

          // @ts-expect-error TS(2304): Cannot find name 'icon'.
          <Iconify icon="eva:color-palette-fill" width={24} sx={{ color: 'action.active' }} />
          // @ts-expect-error TS(2304): Cannot find name 'icon'.
          <Iconify icon="eva:color-palette-fill" width={24} sx={{ color: 'action.disabled' }} />
          // @ts-expect-error TS(2304): Cannot find name 'icon'.
          <Iconify icon="eva:color-palette-fill" width={24} sx={{ color: 'primary.main' }} />
          // @ts-expect-error TS(2304): Cannot find name 'icon'.
          <Iconify icon="eva:color-palette-fill" width={24} sx={{ color: 'secondary.main' }} />
          // @ts-expect-error TS(2304): Cannot find name 'icon'.
          <Iconify icon="eva:color-palette-fill" width={24} sx={{ color: 'info.main' }} />
          // @ts-expect-error TS(2304): Cannot find name 'icon'.
          <Iconify icon="eva:color-palette-fill" width={24} sx={{ color: 'success.main' }} />
          // @ts-expect-error TS(2304): Cannot find name 'icon'.
          <Iconify icon="eva:color-palette-fill" width={24} sx={{ color: 'warning.main' }} />
          // @ts-expect-error TS(2304): Cannot find name 'icon'.
          <Iconify icon="eva:color-palette-fill" width={24} sx={{ color: 'error.main' }} />
        </Block>

        // @ts-expect-error TS(2304): Cannot find name 'title'.
        <Block title="Local Icons" sx={style}>
          // @ts-expect-error TS(2749): 'Tooltip' refers to a value, but is being used as ... Remove this comment to see the full error message
          <Tooltip title="SvgColor">
            // @ts-expect-error TS(2304): Cannot find name 'src'.
            <SvgColor src="/assets/icons/platforms/ic_cra.svg" />
          </Tooltip>

          // @ts-expect-error TS(2304): Cannot find name 'src'.
          <SvgColor src="/assets/icons/platforms/ic_cra.svg" sx={{ color: 'action.active' }} />
          // @ts-expect-error TS(2304): Cannot find name 'src'.
          <SvgColor src="/assets/icons/platforms/ic_cra.svg" sx={{ color: 'action.disabled' }} />
          // @ts-expect-error TS(2304): Cannot find name 'src'.
          <SvgColor src="/assets/icons/platforms/ic_cra.svg" sx={{ color: 'primary.main' }} />
          // @ts-expect-error TS(2304): Cannot find name 'src'.
          <SvgColor src="/assets/icons/platforms/ic_cra.svg" sx={{ color: 'secondary.main' }} />
          // @ts-expect-error TS(2304): Cannot find name 'src'.
          <SvgColor src="/assets/icons/platforms/ic_cra.svg" sx={{ color: 'info.main' }} />
          // @ts-expect-error TS(2304): Cannot find name 'src'.
          <SvgColor src="/assets/icons/platforms/ic_cra.svg" sx={{ color: 'success.main' }} />
          // @ts-expect-error TS(2304): Cannot find name 'src'.
          <SvgColor src="/assets/icons/platforms/ic_cra.svg" sx={{ color: 'warning.main' }} />
          // @ts-expect-error TS(2304): Cannot find name 'src'.
          <SvgColor src="/assets/icons/platforms/ic_cra.svg" sx={{ color: 'error.main' }} />
        </Block>
      </Stack>
    </Container>
  </>;
}

// ----------------------------------------------------------------------

export function Block({
  title,
  sx,
  children
}: any) {
  return (
    // @ts-expect-error TS(2749): 'Paper' refers to a value, but is being used as a ... Remove this comment to see the full error message
    <Paper variant="outlined" sx={{ borderRadius: 1.5 }}>
      // @ts-expect-error TS(18004): No value exists in scope for the shorthand propert... Remove this comment to see the full error message
      {title && <CardHeader title={title} />}

      <Box
        // @ts-expect-error TS(2304): Cannot find name 'sx'.
        sx={{
          // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
          p: 5,
          // @ts-expect-error TS(2304): Cannot find name 'minHeight'.
          minHeight: 180,
          // @ts-expect-error TS(2304): Cannot find name 'sx'.
          ...sx,
        }}
      // @ts-expect-error TS(2365): Operator '<' cannot be applied to types 'boolean' ... Remove this comment to see the full error message
      >
        // @ts-expect-error TS(18004): No value exists in scope for the shorthand propert... Remove this comment to see the full error message
        {children}
      </Box>
    </Paper>
  );
}

Block.propTypes = {
  children: PropTypes.node,
  sx: PropTypes.object,
  title: PropTypes.string,
};
