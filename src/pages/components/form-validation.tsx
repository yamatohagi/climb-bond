import { useState } from 'react';
// next
import Head from 'next/head';
// @mui
import {
  Box,
  Stack,
  Switch,
  Divider,
  Container,
  Typography,
  FormControlLabel,
} from '@mui/material';
// routes
// @ts-expect-error TS(2307): Cannot find module 'src/routes/paths' or its corre... Remove this comment to see the full error message
import { paths } from 'src/routes/paths';
// layouts
// @ts-expect-error TS(2307): Cannot find module 'src/layouts/main' or its corre... Remove this comment to see the full error message
import MainLayout from 'src/layouts/main';
// components
// @ts-expect-error TS(2307): Cannot find module 'src/components/custom-breadcru... Remove this comment to see the full error message
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';
// sections
// @ts-expect-error TS(2307): Cannot find module 'src/sections/examples/form' or... Remove this comment to see the full error message
import { ReactHookForm } from 'src/sections/examples/form';

// ----------------------------------------------------------------------

DemoFormValidationPage.getLayout = (page: any) => <MainLayout>{page}</MainLayout>;

// ----------------------------------------------------------------------

export default function DemoFormValidationPage() {
  const [debug, setDebug] = useState(true);

  const handleChangeDebug = (event: any) => {
    setDebug(event.target.checked);
  };

  return (
    <>
      <Head>
        <title>Components: Form Validation | ZONE UI</title>
      </Head>

      <Box
        sx={{
          pt: 6,
          pb: 1,
          bgcolor: (theme) => (theme.palette.mode === 'light' ? 'grey.200' : 'grey.800'),
        }}
      >
        <Container>
          <CustomBreadcrumbs
            heading="Form Validation"
            links={[
              {
                name: 'Components',
                href: paths.components.root,
              },
              { name: 'Form Validation' },
            ]}
            moreLink={['https://react-hook-form.com/', 'https://github.com/jquense/yup']}
          />
        </Container>
      </Box>

      <Container sx={{ my: 10 }}>
        <Stack direction="row" alignItems="center" justifyContent="space-between">
          <Typography variant="h4"> React Hook Form + Yup </Typography>
          <FormControlLabel
            control={<Switch checked={debug} onChange={handleChangeDebug} />}
            label="Show Debug"
            labelPlacement="start"
          />
        </Stack>

        <Divider sx={{ my: 5 }} />

        <ReactHookForm debug={debug} />
      </Container>
    </>
  );
}
