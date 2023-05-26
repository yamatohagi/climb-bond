import { useState } from 'react';
// @mui
import { Stack, Button, Drawer, Box } from '@mui/material';
// config
// @ts-expect-error TS(2307): Cannot find module 'src/config-global' or its corr... Remove this comment to see the full error message
import { NAV } from 'src/config-global';
// hooks
// @ts-expect-error TS(2307): Cannot find module 'src/hooks/useResponsive' or it... Remove this comment to see the full error message
import useResponsive from 'src/hooks/useResponsive';
// components
// @ts-expect-error TS(2307): Cannot find module 'src/components/iconify' or its... Remove this comment to see the full error message
import Iconify from 'src/components/iconify';
//
import {
  CareerFilterType,
  CareerFilterLevel,
  CareerFilterSalary,
  CareerFilterKeyword,
  CareerFilterBenefits,
  CareerFilterLocations,
  CareerFilterCategories,
} from './components';

// ----------------------------------------------------------------------

const defaultValues = {
  filterKeyword: null,
  filterCategories: null,
  filterLocation: null,
  filterType: [],
  filterLevel: [],
  filterBenefits: [],
  filterSalary: [0, 20000],
};

export default function CareerFilters() {
  const isMdUp = useResponsive('up', 'md');

  const [mobileOpen, setMobileOpen] = useState(false);

  const [filters, setFilters] = useState(defaultValues);

  const handleMobileOpen = () => {
    setMobileOpen(true);
  };

  const handleMobileClose = () => {
    setMobileOpen(false);
  };

  const handleChangeKeyword = (keyword: any) => {
    setFilters({
      ...filters,
      filterKeyword: keyword,
    });
  };

  const handleChangeCategory = (keyword: any) => {
    setFilters({
      ...filters,
      filterCategories: keyword,
    });
  };

  const handleChangeLocation = (keyword: any) => {
    setFilters({
      ...filters,
      filterLocation: keyword,
    });
  };

  const handleChangeJobType = (event: any) => {
    const {
      target: { value },
    } = event;
    setFilters({
      ...filters,
      filterType: typeof value === 'string' ? value.split(',') : value,
    });
  };

  const handleChangeJobLevel = (event: any) => {
    const {
      target: { value },
    } = event;
    setFilters({
      ...filters,
      filterLevel: typeof value === 'string' ? value.split(',') : value,
    });
  };

  const handleChangeJobBenefits = (event: any) => {
    const {
      target: { value },
    } = event;
    setFilters({
      ...filters,
      filterBenefits: typeof value === 'string' ? value.split(',') : value,
    });
  };

  const handleChangeSalary = (event: any, newValue: any) => {
    setFilters({
      ...filters,
      filterSalary: newValue,
    });
  };

  const onReset = () => {
    setFilters(defaultValues);
  };

  const onSubmit = async () => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    alert(JSON.stringify(filters, null, 2));
    onReset();
  };

  const renderFilters = (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <>
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Stack spacing={2.5} direction={{ xs: 'column', md: 'row' }} alignItems="center">
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <CareerFilterKeyword
          filterKeyword={filters.filterKeyword}
          onChangeKeyword={handleChangeKeyword}
        />

        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <CareerFilterCategories
          filterCategories={filters.filterCategories}
          onChangeCategory={handleChangeCategory}
        />

        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <CareerFilterLocations
          filterLocation={filters.filterLocation}
          onChangeLocation={handleChangeLocation}
        />

        {isMdUp && (
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Button
            size="large"
            variant="contained"
            color="inherit"
            onClick={onSubmit}
            sx={{ px: 0, minWidth: { md: 48 } }}
          >
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Iconify icon="carbon:search" width={24} />
          </Button>
        )}
      </Stack>

      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Stack direction={{ xs: 'column', md: 'row' }} spacing={{ xs: 2.5, md: 1 }} sx={{ mt: 2.5 }}>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <CareerFilterType filterType={filters.filterType} onChangeJobType={handleChangeJobType} />

        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <CareerFilterLevel
          filterLevel={filters.filterLevel}
          onChangeJobType={handleChangeJobLevel}
        />

        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <CareerFilterSalary
          filterSalary={filters.filterSalary}
          onChangeSalary={handleChangeSalary}
        />

        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <CareerFilterBenefits
          filterBenefits={filters.filterBenefits}
          onChangeJobBenefits={handleChangeJobBenefits}
        />
      </Stack>

      {!isMdUp && (
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Button
          size="large"
          variant="contained"
          color="inherit"
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          startIcon={<Iconify icon="carbon:search" />}
          sx={{ mt: 2.5 }}
        >
          Search
        </Button>
      )}
    </>
  );

  if (isMdUp) {
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    return <Box sx={{ py: 5 }}>{renderFilters}</Box>;
  }

  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <>
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Stack alignItems="flex-end" sx={{ py: 3 }}>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Button
          color="inherit"
          variant="contained"
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          startIcon={<Iconify icon="carbon:filter" width={18} />}
          onClick={handleMobileOpen}
        >
          Filters
        </Button>
      </Stack>

      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleMobileClose}
        ModalProps={{ keepMounted: true }}
        PaperProps={{
          sx: { pt: 5, px: 3, width: NAV.W_DRAWER },
        }}
      >
        {renderFilters}
      </Drawer>
    </>
  );
}
