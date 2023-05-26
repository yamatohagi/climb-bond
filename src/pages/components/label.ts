import PropTypes from 'prop-types';
// next
import Head from 'next/head';
// @mui
import { alpha } from '@mui/material/styles';
import { Box, Container, Stack, Paper, CardHeader, Tooltip } from '@mui/material';
// routes
// @ts-expect-error TS(2307): Cannot find module 'src/routes/paths' or its corre... Remove this comment to see the full error message
import { paths } from 'src/routes/paths';
// layouts
// @ts-expect-error TS(2307): Cannot find module 'src/layouts/main' or its corre... Remove this comment to see the full error message
import MainLayout from 'src/layouts/main';
// components
// @ts-expect-error TS(2307): Cannot find module 'src/components/label' or its c... Remove this comment to see the full error message
import Label from 'src/components/label';
// @ts-expect-error TS(2307): Cannot find module 'src/components/iconify' or its... Remove this comment to see the full error message
import Iconify from 'src/components/iconify';
// @ts-expect-error TS(2307): Cannot find module 'src/components/custom-breadcru... Remove this comment to see the full error message
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';

// ----------------------------------------------------------------------

const COLORS = ['default', 'primary', 'secondary', 'info', 'success', 'warning', 'error'];

// ----------------------------------------------------------------------

DemoLabelPage.getLayout = (page: any) => <MainLayout>{page}</MainLayout>;

// ----------------------------------------------------------------------

export default function DemoLabelPage() {
  return <>
    // @ts-expect-error TS(2749): 'Head' refers to a value, but is being used as a t... Remove this comment to see the full error message
    <Head>
      // @ts-expect-error TS(2304): Cannot find name 'title'.
      <title>Components: Label | ZONE UI</title>
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
          heading="Label"
          // @ts-expect-error TS(2304): Cannot find name 'links'.
          links={[
            // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
            {
              name: 'Components',
              href: paths.components.root,
            },
            { name: 'Label' },
          ]}
        />
      </Container>
    </Box>

    // @ts-expect-error TS(2304): Cannot find name 'sx'.
    <Container sx={{ my: 10 }}>
      // @ts-expect-error TS(2749): 'Stack' refers to a value, but is being used as a ... Remove this comment to see the full error message
      <Stack spacing={3}>
        // @ts-expect-error TS(2709): Cannot use namespace 'Block' as a type.
        <Block title="Filled">
          // @ts-expect-error TS(2749): 'Tooltip' refers to a value, but is being used as ... Remove this comment to see the full error message
          {COLORS.map((color: any) => <Tooltip key={color} title={color}>
            // @ts-expect-error TS(2304): Cannot find name 'color'.
            <Label color={color} variant="filled">
              // @ts-expect-error TS(18004): No value exists in scope for the shorthand propert... Remove this comment to see the full error message
              {color}
            </Label>
          </Tooltip>)}
        </Block>

        // @ts-expect-error TS(2304): Cannot find name 'title'.
        <Block title="Outlined">
          // @ts-expect-error TS(2304): Cannot find name 'key'.
          {COLORS.map((color: any) => <Label key={color} color={color} variant="outlined">
            // @ts-expect-error TS(18004): No value exists in scope for the shorthand propert... Remove this comment to see the full error message
            {color}
          </Label>)}
        </Block>

        // @ts-expect-error TS(2304): Cannot find name 'title'.
        <Block title="Soft">
          // @ts-expect-error TS(2304): Cannot find name 'key'.
          {COLORS.map((color: any) => <Label key={color} color={color} variant="soft">
            // @ts-expect-error TS(18004): No value exists in scope for the shorthand propert... Remove this comment to see the full error message
            {color}
          </Label>)}
        </Block>

        // @ts-expect-error TS(2304): Cannot find name 'title'.
        <Block title="With Icon">
          // @ts-expect-error TS(2304): Cannot find name 'variant'.
          <Label variant="filled" color="primary" startIcon={<Iconify icon="eva:email-fill" />}>
            // @ts-expect-error TS(2304): Cannot find name 'Start'.
            Start Icon
          </Label>

          // @ts-expect-error TS(2304): Cannot find name 'variant'.
          <Label variant="filled" color="primary" endIcon={<Iconify icon="eva:email-fill" />}>
            // @ts-expect-error TS(2304): Cannot find name 'End'.
            End Icon
          </Label>

          // @ts-expect-error TS(2304): Cannot find name 'variant'.
          <Label variant="outlined" color="primary" startIcon={<Iconify icon="eva:email-fill" />}>
            // @ts-expect-error TS(2304): Cannot find name 'Start'.
            Start Icon
          </Label>

          // @ts-expect-error TS(2304): Cannot find name 'variant'.
          <Label variant="outlined" color="primary" endIcon={<Iconify icon="eva:email-fill" />}>
            // @ts-expect-error TS(2304): Cannot find name 'End'.
            End Icon
          </Label>

          // @ts-expect-error TS(2304): Cannot find name 'color'.
          <Label color="primary" startIcon={<Iconify icon="eva:email-fill" />}>
            // @ts-expect-error TS(2304): Cannot find name 'Start'.
            Start Icon
          </Label>

          // @ts-expect-error TS(2304): Cannot find name 'color'.
          <Label color="primary" endIcon={<Iconify icon="eva:email-fill" />}>
            // @ts-expect-error TS(2304): Cannot find name 'End'.
            End Icon
          </Label>
        </Block>
      </Stack>
    </Container>
  </>;
}

// ----------------------------------------------------------------------

export function Block({
  title,
  children
}: any) {
  return (
    // @ts-expect-error TS(2749): 'Paper' refers to a value, but is being used as a ... Remove this comment to see the full error message
    <Paper
      // @ts-expect-error TS(2304): Cannot find name 'variant'.
      variant="outlined"
      // @ts-expect-error TS(2304): Cannot find name 'sx'.
      sx={{
        // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
        borderRadius: 1.5,
        // @ts-expect-error TS(2304): Cannot find name 'bgcolor'.
        bgcolor: (theme: any) => alpha(theme.palette.grey[500], 0.04),
      }}
    >
      // @ts-expect-error TS(18004): No value exists in scope for the shorthand propert... Remove this comment to see the full error message
      {title && <CardHeader title={title} />}
      <Box
        // @ts-expect-error TS(2304): Cannot find name 'sx'.
        sx={{
          // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
          p: 5,
          // @ts-expect-error TS(2304): Cannot find name 'minHeight'.
          minHeight: 180,
          // @ts-expect-error TS(2304): Cannot find name 'display'.
          display: 'flex',
          // @ts-expect-error TS(2304): Cannot find name 'flexWrap'.
          flexWrap: 'wrap',
          // @ts-expect-error TS(2304): Cannot find name 'alignItems'.
          alignItems: 'center',
          // @ts-expect-error TS(2304): Cannot find name 'justifyContent'.
          justifyContent: 'center',
          '& > *': { mx: 1 },
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
  title: PropTypes.string,
};
