import PropTypes from 'prop-types';
// form
import { useFormContext, Controller } from 'react-hook-form';
// @mui
import { alpha } from '@mui/material/styles';
import { Box, Stack, Radio, RadioGroup, FormControlLabel } from '@mui/material';
// components
import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

export default function EcommerceCheckoutShippingMethod({ options }: any) {
  const { control } = useFormContext();

  return (
    <Controller
      name="shipping"
      control={control}
      render={({ field }) => (
        <RadioGroup {...field}>
          <Box
            rowGap={2.5}
            columnGap={2}
            display="grid"
            gridTemplateColumns={{ xs: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }}
          >
            {options.map((option: any) => (
              <OptionItem
                key={option.value}
                option={option}
                selected={field.value === option.value}
              />
            ))}
          </Box>
        </RadioGroup>
      )}
    />
  );
}

EcommerceCheckoutShippingMethod.propTypes = {
  options: PropTypes.array,
};

// ----------------------------------------------------------------------

function OptionItem({ option, selected }: any) {
  const { value, label, price, description } = option;

  const renderLabel = (
    <Stack flexGrow={1} spacing={0.5} sx={{ width: 1 }}>
      <Stack direction="row" alignItems="center">
        <Iconify
          icon={
            (value === 'standard' && 'carbon:delivery') ||
            (value === 'express' && 'carbon:rocket') ||
            'carbon:bicycle'
          }
          width={24}
        />

        <Box component="span" sx={{ typography: 'subtitle1', flexGrow: 1, ml: 1 }}>
          {label}
        </Box>

        <Box component="span" sx={{ typography: 'h6' }}>
          {`$${price}`}
        </Box>
      </Stack>

      <Box component="span" sx={{ typography: 'body2', color: 'text.secondary' }}>
        {description}
      </Box>
    </Stack>
  );

  return (
    <FormControlLabel
      value={value}
      control={
        <Radio
          disableRipple
          checkedIcon={<Iconify width={24} icon="carbon:checkmark-outline" />}
          sx={{ mx: 1 }}
        />
      }
      label={renderLabel}
      sx={{
        m: 0,
        py: 3,
        pr: 2,
        borderRadius: 1,
        border: (theme: any) => `solid 1px ${alpha(theme.palette.grey[500], 0.24)}`,
        ...(selected && {
          boxShadow: (theme: any) => `0 0 0 2px ${theme.palette.text.primary}`,
        }),
        '& .MuiFormControlLabel-label': {
          width: 1,
        },
      }}
    />
  );
}

OptionItem.propTypes = {
  option: PropTypes.shape({
    description: PropTypes.string,
    label: PropTypes.string,
    price: PropTypes.number,
    value: PropTypes.string,
  }),
  selected: PropTypes.bool,
};
