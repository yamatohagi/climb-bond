import PropTypes from 'prop-types';
// @mui
import { alpha } from '@mui/material/styles';
import {
  Box,
  Stack,
  Button,
  Divider,
  TextField,
  Typography,
  IconButton,
  InputAdornment,
} from '@mui/material';
import { LoadingButton } from '@mui/lab';
// utils
// @ts-expect-error TS(2307): Cannot find module 'src/utils/formatNumber' or its... Remove this comment to see the full error message
import { fCurrency, fPercent } from 'src/utils/formatNumber';
// components
// @ts-expect-error TS(2307): Cannot find module 'src/components/image' or its c... Remove this comment to see the full error message
import Image from 'src/components/image';
// @ts-expect-error TS(2307): Cannot find module 'src/components/iconify' or its... Remove this comment to see the full error message
import Iconify from 'src/components/iconify';
// @ts-expect-error TS(2307): Cannot find module 'src/components/text-max-line' ... Remove this comment to see the full error message
import TextMaxLine from 'src/components/text-max-line';

// ----------------------------------------------------------------------

export default function EcommerceCheckoutOrderSummary({
  tax,
  total,
  subtotal,
  shipping,
  discount,
  products,
  loading
}: any) {
  return (
    // @ts-expect-error TS(2749): 'Stack' refers to a value, but is being used as a ... Remove this comment to see the full error message
    <Stack
      // @ts-expect-error TS(2304): Cannot find name 'spacing'.
      spacing={3}
      // @ts-expect-error TS(2304): Cannot find name 'sx'.
      sx={{
        // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
        p: 5,
        // @ts-expect-error TS(2304): Cannot find name 'borderRadius'.
        borderRadius: 2,
        // @ts-expect-error TS(2304): Cannot find name 'border'.
        border: (theme: any) => `solid 1px ${alpha(theme.palette.grey[500], 0.24)}`,
      }}
    >
      // @ts-expect-error TS(2749): 'Typography' refers to a value, but is being used ... Remove this comment to see the full error message
      <Typography variant="h6"> Order Summary </Typography>

      // @ts-expect-error TS(2304): Cannot find name 'products'.
      {!!products?.length && (
        <>
          // @ts-expect-error TS(18004): No value exists in scope for the shorthand propert... Remove this comment to see the full error message
          {products.map((product: any) => <ProductItem key={product.id} product={product} />)}

          // @ts-expect-error TS(2304): Cannot find name 'sx'.
          <Divider sx={{ borderStyle: 'dashed' }} />
        </>
      )}

      // @ts-expect-error TS(2749): 'Stack' refers to a value, but is being used as a ... Remove this comment to see the full error message
      <Stack spacing={2}>
        // @ts-expect-error TS(2709): Cannot use namespace 'Row' as a type.
        <Row label="Subtotal" value={fCurrency(subtotal: any)} />

        // @ts-expect-error TS(2709): Cannot use namespace 'Row' as a type.
        <Row label="Shipping" value={fCurrency(shipping: any)} />

        // @ts-expect-error TS(2709): Cannot use namespace 'Row' as a type.
        <Row label="Discount (15%)" value={`-${fCurrency(discount)}`} />

        // @ts-expect-error TS(2304): Cannot find name 'label'.
        <Row label="Tax" value={fPercent(tax: any)} />
      </Stack>

      <TextField
        // @ts-expect-error TS(2304): Cannot find name 'hiddenLabel'.
        hiddenLabel
        // @ts-expect-error TS(2304): Cannot find name 'placeholder'.
        placeholder="Discount Code"
        // @ts-expect-error TS(2304): Cannot find name 'InputProps'.
        InputProps={{
          endAdornment: (
            // @ts-expect-error TS(2749): 'InputAdornment' refers to a value, but is being u... Remove this comment to see the full error message
            <InputAdornment position="end">
              // @ts-expect-error TS(2749): 'Button' refers to a value, but is being used as a... Remove this comment to see the full error message
              <Button>Apply</Button>
            </InputAdornment>
          ),
        }}
      // @ts-expect-error TS(2365): Operator '<' cannot be applied to types 'RegExp' a... Remove this comment to see the full error message
      />

      // @ts-expect-error TS(2304): Cannot find name 'sx'.
      <Divider sx={{ borderStyle: 'dashed' }} />

      <Row
        // @ts-expect-error TS(2304): Cannot find name 'label'.
        label="Total"
        // @ts-expect-error TS(2304): Cannot find name 'value'.
        value={fCurrency(total: any)}
        // @ts-expect-error TS(2304): Cannot find name 'sx'.
        sx={{
          // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
          typography: 'h6',
          '& span': { typography: 'h6' },
        }}
      // @ts-expect-error TS(2365): Operator '<' cannot be applied to types 'RegExp' a... Remove this comment to see the full error message
      />

      <LoadingButton
        // @ts-expect-error TS(2304): Cannot find name 'size'.
        size="large"
        // @ts-expect-error TS(2304): Cannot find name 'variant'.
        variant="contained"
        // @ts-expect-error TS(2304): Cannot find name 'color'.
        color="inherit"
        // @ts-expect-error TS(2304): Cannot find name 'type'.
        type="submit"
        // @ts-expect-error TS(2304): Cannot find name 'loading'.
        loading={loading}
      >
        // @ts-expect-error TS(2304): Cannot find name 'Order'.
        Order Now
      </LoadingButton>
    </Stack>
  );
}

EcommerceCheckoutOrderSummary.propTypes = {
  discount: PropTypes.number,
  loading: PropTypes.bool,
  products: PropTypes.array,
  shipping: PropTypes.number,
  subtotal: PropTypes.number,
  tax: PropTypes.number,
  total: PropTypes.number,
};

// ----------------------------------------------------------------------

function ProductItem({
  product,
  ...other
}: any) {
  return (
    // @ts-expect-error TS(2749): 'Stack' refers to a value, but is being used as a ... Remove this comment to see the full error message
    <Stack direction="row" alignItems="flex-start" {...other}>
      <Image
        // @ts-expect-error TS(2304): Cannot find name 'src'.
        src={product.coverImg}
        // @ts-expect-error TS(2304): Cannot find name 'sx'.
        sx={{
          // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
          mr: 2,
          // @ts-expect-error TS(2304): Cannot find name 'width'.
          width: 64,
          // @ts-expect-error TS(2304): Cannot find name 'height'.
          height: 64,
          // @ts-expect-error TS(2304): Cannot find name 'flexShrink'.
          flexShrink: 0,
          // @ts-expect-error TS(2304): Cannot find name 'borderRadius'.
          borderRadius: 1.5,
          // @ts-expect-error TS(2304): Cannot find name 'bgcolor'.
          bgcolor: 'background.neutral',
        }}
      // @ts-expect-error TS(2365): Operator '<' cannot be applied to types 'RegExp' a... Remove this comment to see the full error message
      />

      // @ts-expect-error TS(2304): Cannot find name 'flexGrow'.
      <Stack flexGrow={1}>
        // @ts-expect-error TS(2304): Cannot find name 'variant'.
        <TextMaxLine variant="body2" line={1} sx={{ fontWeight: 'fontWeightMedium' }}>
          // @ts-expect-error TS(18004): No value exists in scope for the shorthand propert... Remove this comment to see the full error message
          {product.name}
        </TextMaxLine>

        // @ts-expect-error TS(2304): Cannot find name 'variant'.
        <Typography variant="subtitle2" sx={{ mt: 0.5, mb: 1.5 }}>
          // @ts-expect-error TS(2693): 'any' only refers to a type, but is being used as ... Remove this comment to see the full error message
          {fCurrency(product: any.price)}
        </Typography>

        <TextField
          // @ts-expect-error TS(2304): Cannot find name 'select'.
          select
          // @ts-expect-error TS(2304): Cannot find name 'size'.
          size="small"
          // @ts-expect-error TS(2304): Cannot find name 'variant'.
          variant="outlined"
          // @ts-expect-error TS(2304): Cannot find name 'SelectProps'.
          SelectProps={{
            // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
            native: true,
          }}
          // @ts-expect-error TS(2304): Cannot find name 'sx'.
          sx={{ width: 80 }}
        >
          // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((option: any) => <option key={option} value={option}>
            // @ts-expect-error TS(18004): No value exists in scope for the shorthand propert... Remove this comment to see the full error message
            {option}
          </option>)}
        </TextField>
      </Stack>

      <IconButton>
        // @ts-expect-error TS(2304): Cannot find name 'icon'.
        <Iconify icon="carbon:trash-can" />
      </IconButton>
    </Stack>
  );
}

ProductItem.propTypes = {
  product: PropTypes.shape({
    coverImg: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.number,
  }),
};

// ----------------------------------------------------------------------

function Row({
  label,
  value,
  sx,
  ...other
}: any) {
  return (
    // @ts-expect-error TS(2749): 'Stack' refers to a value, but is being used as a ... Remove this comment to see the full error message
    <Stack
      // @ts-expect-error TS(2304): Cannot find name 'direction'.
      direction="row"
      // @ts-expect-error TS(2304): Cannot find name 'alignItems'.
      alignItems="center"
      // @ts-expect-error TS(2304): Cannot find name 'justifyContent'.
      justifyContent="space-between"
      // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
      sx={{ typography: 'subtitle2', ...sx }}
      // @ts-expect-error TS(2304): Cannot find name 'other'.
      {...other}
    >
      // @ts-expect-error TS(2749): 'Box' refers to a value, but is being used as a ty... Remove this comment to see the full error message
      <Box component="span" sx={{ typography: 'body2' }}>
        // @ts-expect-error TS(18004): No value exists in scope for the shorthand propert... Remove this comment to see the full error message
        {label}
      </Box>
      // @ts-expect-error TS(2304): Cannot find name 'value'.
      {value}
    </Stack>
  );
}

Row.propTypes = {
  label: PropTypes.string,
  sx: PropTypes.object,
  value: PropTypes.string,
};
