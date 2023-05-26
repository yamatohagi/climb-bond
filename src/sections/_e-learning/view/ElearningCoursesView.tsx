import { useState, useEffect } from 'react';
// @mui
import { Container, Stack, Typography, Button, Box } from '@mui/material';
// config
// @ts-expect-error TS(2307): Cannot find module 'src/config-global' or its corr... Remove this comment to see the full error message
import { NAV } from 'src/config-global';
// _mock
// @ts-expect-error TS(2307): Cannot find module 'src/_mock' or its correspondin... Remove this comment to see the full error message
import { _courses } from 'src/_mock';
// components
// @ts-expect-error TS(2307): Cannot find module 'src/components/iconify' or its... Remove this comment to see the full error message
import Iconify from 'src/components/iconify';
//
import NewsletterElearning from '../../newsletter/e-learning';
import { ElearningCourseList } from '../course/list';
import ElearningFilters from '../course/filters';

// ----------------------------------------------------------------------

export default function ElearningCoursesView() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fakeLoading = async () => {
      await new Promise((resolve) => setTimeout(resolve, 500));
      setLoading(false);
    };
    fakeLoading();
  }, []);

  const handleMobileOpen = () => {
    setMobileOpen(true);
  };

  const handleMobileClose = () => {
    setMobileOpen(false);
  };

  return (
    <>
      <Container>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          sx={{
            py: 5,
          }}
        >
          <Typography variant="h2">Courses</Typography>

          <Button
            color="inherit"
            variant="contained"
            startIcon={<Iconify icon="carbon:filter" width={18} />}
            onClick={handleMobileOpen}
            sx={{
              display: { md: 'none' },
            }}
          >
            Filters
          </Button>
        </Stack>

        <Stack direction={{ xs: 'column', md: 'row' }}>
          <ElearningFilters mobileOpen={mobileOpen} onMobileClose={handleMobileClose} />

          <Box
            sx={{
              flexGrow: 1,
              pl: { md: 8 },
              width: { md: `calc(100% - ${NAV.W_DRAWER}px)` },
            }}
          >
            <ElearningCourseList courses={_courses} loading={loading} />
          </Box>
        </Stack>
      </Container>

      <NewsletterElearning />
    </>
  );
}
