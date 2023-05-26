import PropTypes from 'prop-types';
import { useState } from 'react';
// @mui
import { Stack, Drawer, Button, Collapse, Typography } from '@mui/material';
// hooks
// @ts-expect-error TS(2307): Cannot find module 'src/hooks/useResponsive' or it... Remove this comment to see the full error message
import useResponsive from 'src/hooks/useResponsive';
// config
// @ts-expect-error TS(2307): Cannot find module 'src/config-global' or its corr... Remove this comment to see the full error message
import { NAV } from 'src/config-global';
// components
// @ts-expect-error TS(2307): Cannot find module 'src/components/iconify' or its... Remove this comment to see the full error message
import Iconify from 'src/components/iconify';
//
import {
  EcommerceFilterTag,
  EcommerceFilterBrand,
  EcommerceFilterPrice,
  EcommerceFilterStock,
  EcommerceFilterRating,
  EcommerceFilterCategory,
  EcommerceFilterShipping,
} from './components';

// ----------------------------------------------------------------------

const BRAND_OPTIONS = ['Apple', 'Samsung', 'Xiaomi', 'Honor'];

const CATEGORY_OPTIONS = [
  'Apple iPhone',
  'Samsung Galaxy',
  'Nike Air Max',
  'Adidas Ultraboost',
  'Sony PlayStation',
];

const SHIPPING_OPTIONS = ['Fast', 'Saving', 'Free'];

const TAG_OPTIONS = ['Books and Media', 'Pet', 'Electronics', 'Food', 'Automotive and Industrial'];

// ----------------------------------------------------------------------

const defaultValues = {
  filterBrand: [BRAND_OPTIONS[1]],
  filterCategories: '',
  filterRating: null,
  filterStock: false,
  filterShipping: [],
  filterTag: [],
  filterPrice: {
    start: 0,
    end: 0,
  },
};

export default function EcommerceFilters({ mobileOpen, onMobileClose }: any) {
  const isMdUp = useResponsive('up', 'md');

  const [filters, setFilters] = useState(defaultValues);

  const getSelected = (selectedItems: any, item: any) =>
    selectedItems.includes(item)
      ? selectedItems.filter((value: any) => value !== item)
      : [...selectedItems, item];

  const handleChangeCategories = (name: any) => {
    setFilters({
      ...filters,
      filterCategories: name,
    });
  };

  const handleChangeBrand = (name: any) => {
    setFilters({
      ...filters,
      filterBrand: getSelected(filters.filterBrand, name),
    });
  };

  const handleChangeShipping = (name: any) => {
    setFilters({
      ...filters,
      filterShipping: getSelected(filters.filterShipping, name),
    });
  };

  const handleChangeTag = (name: any) => {
    setFilters({
      ...filters,
      filterTag: getSelected(filters.filterTag, name),
    });
  };

  const handleChangeRating = (event: any) => {
    setFilters({
      ...filters,
      filterRating: event.target.value,
    });
  };

  const handleChangeStartPrice = (event: any) => {
    setFilters({
      ...filters,
      filterPrice: {
        ...filters.filterPrice,
        start: Number(event.target.value),
      },
    });
  };

  const handleChangeEndPrice = (event: any) => {
    setFilters({
      ...filters,
      filterPrice: {
        ...filters.filterPrice,
        end: Number(event.target.value),
      },
    });
  };

  const handleChangeStock = (event: any) => {
    setFilters({
      ...filters,
      filterStock: event.target.checked,
    });
  };

  const handleClearAll = () => {
    setFilters(defaultValues);
  };

  const renderContent = (
    <Stack
      spacing={3}
      alignItems="flex-start"
      sx={{
        flexShrink: 0,
        width: { xs: 1, md: NAV.W_DRAWER },
      }}
    >
      <Block title="Category">
        <EcommerceFilterCategory
          filterCategories={filters.filterCategories}
          onChangeCategories={handleChangeCategories}
          options={CATEGORY_OPTIONS}
          // @ts-expect-error TS(2322): Type '{ filterCategories: string; onChangeCategori... Remove this comment to see the full error message
          sx={{ mt: 2 }}
        />
      </Block>

      <Block title="Brand">
        <EcommerceFilterBrand
          filterBrand={filters.filterBrand}
          onChangeBrand={handleChangeBrand}
          options={BRAND_OPTIONS}
          // @ts-expect-error TS(2322): Type '{ filterBrand: string[]; onChangeBrand: (nam... Remove this comment to see the full error message
          sx={{ mt: 1 }}
        />
      </Block>

      <Block title="Price">
        <EcommerceFilterPrice
          filterPrice={filters.filterPrice}
          onChangeStartPrice={handleChangeStartPrice}
          onChangeEndPrice={handleChangeEndPrice}
          // @ts-expect-error TS(2322): Type '{ filterPrice: { start: number; end: number;... Remove this comment to see the full error message
          sx={{ mt: 2 }}
        />
      </Block>

      <Block title="Shipping">
        <EcommerceFilterShipping
          filterShipping={filters.filterShipping}
          onChangeShipping={handleChangeShipping}
          options={SHIPPING_OPTIONS}
          // @ts-expect-error TS(2322): Type '{ filterShipping: never[]; onChangeShipping:... Remove this comment to see the full error message
          sx={{ mt: 1 }}
        />
      </Block>

      <Block title="Ratings">
        <EcommerceFilterRating
          filterRating={filters.filterRating}
          onChangeRating={handleChangeRating}
          // @ts-expect-error TS(2322): Type '{ filterRating: null; onChangeRating: (event... Remove this comment to see the full error message
          sx={{ mt: 2 }}
        />
      </Block>

      <EcommerceFilterStock filterStock={filters.filterStock} onChangeStock={handleChangeStock} />

      <Block title="Tags">
        <EcommerceFilterTag
          filterTag={filters.filterTag}
          onChangeTag={handleChangeTag}
          options={TAG_OPTIONS}
          // @ts-expect-error TS(2322): Type '{ filterTag: never[]; onChangeTag: (name: an... Remove this comment to see the full error message
          sx={{ mt: 2 }}
        />
      </Block>

      <Button
        fullWidth
        color="inherit"
        size="large"
        variant="contained"
        startIcon={<Iconify icon="carbon:trash-can" />}
        onClick={handleClearAll}
      >
        Clear All
      </Button>
    </Stack>
  );

  return (
    <>
      {isMdUp ? (
        renderContent
      ) : (
        <Drawer
          anchor="right"
          open={mobileOpen}
          onClose={onMobileClose}
          ModalProps={{ keepMounted: true }}
          PaperProps={{
            sx: {
              pt: 3,
              px: 3,
              width: NAV.W_DRAWER,
            },
          }}
        >
          {renderContent}
        </Drawer>
      )}
    </>
  );
}

EcommerceFilters.propTypes = {
  mobileOpen: PropTypes.bool,
  onMobileClose: PropTypes.func,
};

// ----------------------------------------------------------------------

function Block({ title, children, ...other }: any) {
  const [checked, setChecked] = useState(true);

  const handleOpen = () => {
    setChecked((prev) => !prev);
  };

  return (
    <Stack alignItems="flex-start" sx={{ width: 1 }} {...other}>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        onClick={handleOpen}
        sx={{ width: 1, cursor: 'pointer' }}
      >
        <Typography variant="h6">{title}</Typography>

        <Iconify
          icon={checked ? 'carbon:subtract' : 'carbon:add'}
          sx={{ color: 'text.secondary' }}
        />
      </Stack>

      <Collapse unmountOnExit in={checked} sx={{ px: 0.5 }}>
        {children}
      </Collapse>
    </Stack>
  );
}

Block.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
};
