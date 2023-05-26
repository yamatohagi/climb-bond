import PropTypes from 'prop-types';
import { useState } from 'react';
// next
import NextLink from 'next/link';
// @mui
import { Stack, Button, Rating, Typography, TextField, Divider } from '@mui/material';
// hooks
// @ts-expect-error TS(2307): Cannot find module 'src/hooks/useResponsive' or it... Remove this comment to see the full error message
import useResponsive from 'src/hooks/useResponsive';
// routes
// @ts-expect-error TS(2307): Cannot find module 'src/routes/paths' or its corre... Remove this comment to see the full error message
import { paths } from 'src/routes/paths';
// components
// @ts-expect-error TS(2307): Cannot find module 'src/components/label' or its c... Remove this comment to see the full error message
import Label from 'src/components/label';
// @ts-expect-error TS(2307): Cannot find module 'src/components/iconify' or its... Remove this comment to see the full error message
import Iconify from 'src/components/iconify';
//
import { ProductColorPicker, ProductOptionPicker, ProductPrice } from '../../components';

// ----------------------------------------------------------------------

const COLOR_OPTIONS = [
  { label: '#FA541C', value: 'red' },
  { label: '#754FFE', value: 'violet' },
  { label: '#00B8D9', value: 'cyan' },
  { label: '#36B37E', value: 'green' },
];

const MEMORY_OPTIONS = [
  { label: '128GB', value: '128gb' },
  { label: '256GB', value: '256gb' },
  { label: '512GB', value: '512gb' },
  { label: '1TB', value: '1tb' },
];

// ----------------------------------------------------------------------

export default function EcommerceProductDetailsInfo({
  name,
  price,
  rating,
  review,
  priceSale,
  caption,
}: any) {
  const isMdUp = useResponsive('up', 'md');

  const [color, setColor] = useState('red');

  const [memory, setMemory] = useState('128gb');

  const handleChangeColor = (event: any) => {
    setColor(event.target.value);
  };

  const handleChangeMemory = (event: any) => {
    setMemory(event.target.value);
  };

  return (
    <>
      <Label color="success" sx={{ mb: 3 }}>
        In Stock
      </Label>

      <Stack spacing={1} sx={{ mb: 2 }}>
        <Typography variant="h4"> {name} </Typography>

        <Stack spacing={0.5} direction="row" alignItems="center">
          <Rating size="small" value={rating} readOnly precision={0.5} />

          <Typography variant="caption" sx={{ color: 'text.disabled' }}>
            ({review} reviews)
          </Typography>
        </Stack>
      </Stack>

      <Stack spacing={2}>
        <ProductPrice price={price} priceSale={priceSale} sx={{ typography: 'h5' }} />

        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {caption}
        </Typography>
      </Stack>

      <Stack spacing={3} sx={{ my: 5 }}>
        <Stack spacing={2}>
          <Typography variant="subtitle2">Color</Typography>
          <ProductColorPicker value={color} onChange={handleChangeColor} options={COLOR_OPTIONS} />
        </Stack>

        <Stack spacing={2}>
          <Typography variant="subtitle2">Memory</Typography>
          <ProductOptionPicker
            value={memory}
            onChange={handleChangeMemory}
            options={MEMORY_OPTIONS}
          />
        </Stack>
      </Stack>

      <Stack spacing={2} direction={{ xs: 'column', md: 'row' }} alignItems={{ md: 'center' }}>
        <TextField
          select
          hiddenLabel
          SelectProps={{
            native: true,
          }}
          sx={{
            minWidth: 100,
          }}
        >
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </TextField>

        <Stack direction="row" spacing={2}>
          <Button
            component={NextLink}
            href={paths.eCommerce.cart}
            fullWidth={!isMdUp}
            size="large"
            color="inherit"
            variant="contained"
            startIcon={<Iconify icon="carbon:shopping-cart-plus" />}
          >
            Add to Cart
          </Button>

          <Button
            component={NextLink}
            href={paths.eCommerce.cart}
            fullWidth={!isMdUp}
            size="large"
            color="primary"
            variant="contained"
          >
            Buy Now
          </Button>
        </Stack>
      </Stack>

      <Divider sx={{ borderStyle: 'dashed', my: 3 }} />

      <Stack spacing={3} direction="row" justifyContent={{ xs: 'center', md: 'unset' }}>
        <Stack direction="row" alignItems="center" sx={{ typography: 'subtitle2' }}>
          <Iconify icon="carbon:add-alt" sx={{ mr: 1 }} /> Compare
        </Stack>

        <Stack direction="row" alignItems="center" sx={{ typography: 'subtitle2' }}>
          <Iconify icon="carbon:favorite" sx={{ mr: 1 }} /> Compare
        </Stack>

        <Stack direction="row" alignItems="center" sx={{ typography: 'subtitle2' }}>
          <Iconify icon="carbon:share" sx={{ mr: 1 }} /> Compare
        </Stack>
      </Stack>
    </>
  );
}

EcommerceProductDetailsInfo.propTypes = {
  caption: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.number,
  priceSale: PropTypes.number,
  rating: PropTypes.number,
  review: PropTypes.number,
};
