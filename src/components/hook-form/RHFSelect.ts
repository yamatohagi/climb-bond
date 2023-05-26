import PropTypes from 'prop-types';
// form
import { useFormContext, Controller } from 'react-hook-form';
// @mui
import {
  Box,
  Chip,
  Select,
  Checkbox,
  MenuItem,
  TextField,
  InputLabel,
  FormControl,
  OutlinedInput,
  FormHelperText,
} from '@mui/material';

// ----------------------------------------------------------------------

export function RHFSelect({
  name,
  native,
  maxHeight = 220,
  helperText,
  children,
  ...other
}: any) {
  const { control } = useFormContext();

  return (
    // @ts-expect-error TS(2749): 'Controller' refers to a value, but is being used ... Remove this comment to see the full error message
    <Controller
      name={name}
      // @ts-expect-error TS(2588): Cannot assign to 'control' because it is a constan... Remove this comment to see the full error message
      control={control}
      // @ts-expect-error TS(2304): Cannot find name 'render'.
      render={({ field, fieldState: { error } }) => (
        // @ts-expect-error TS(2749): 'TextField' refers to a value, but is being used a... Remove this comment to see the full error message
        <TextField
          // @ts-expect-error TS(2304): Cannot find name 'field'.
          {...field}
          // @ts-expect-error TS(2552): Cannot find name 'select'. Did you mean 'Select'?
          select
          // @ts-expect-error TS(2304): Cannot find name 'fullWidth'.
          fullWidth
          // @ts-expect-error TS(2304): Cannot find name 'SelectProps'.
          SelectProps={{
            // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
            native,
            // @ts-expect-error TS(2304): Cannot find name 'MenuProps'.
            MenuProps: {
              PaperProps: {
                sx: {
                  // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
                  ...(!native && {
                    px: 1,
                    maxHeight: typeof maxHeight === 'number' ? maxHeight : 'unset',
                    '& .MuiMenuItem-root': {
                      px: 1,
                      borderRadius: 0.75,
                      typography: 'body2',
                      textTransform: 'capitalize',
                    },
                  }),
                },
              },
            },
            sx: { textTransform: 'capitalize' },
          }}
          // @ts-expect-error TS(2552): Cannot find name 'error'. Did you mean 'Error'?
          error={!!error}
          // @ts-expect-error TS(2304): Cannot find name 'helperText'.
          helperText={error ? error?.message : helperText}
          // @ts-expect-error TS(2304): Cannot find name 'other'.
          {...other}
        // @ts-expect-error TS(2365): Operator '<' cannot be applied to types 'boolean' ... Remove this comment to see the full error message
        >
          // @ts-expect-error TS(18004): No value exists in scope for the shorthand propert... Remove this comment to see the full error message
          {children}
        </TextField>
      )}
    />
  );
}

RHFSelect.propTypes = {
  name: PropTypes.string,
  native: PropTypes.bool,
  children: PropTypes.node,
  helperText: PropTypes.node,
  maxHeight: PropTypes.number,
};

// ----------------------------------------------------------------------

export function RHFMultiSelect({
  name,
  chip,
  label,
  options,
  checkbox,
  placeholder,
  helperText,
  sx,
  ...other
}: any) {
  const { control } = useFormContext();

  const renderValues = (selectedIds: any) => {
    const selectedItems = options.filter((item: any) => selectedIds.includes(item.value));

    if (!selectedItems.length && placeholder) {
      return (
        // @ts-expect-error TS(2749): 'Box' refers to a value, but is being used as a ty... Remove this comment to see the full error message
        <Box component="em" sx={{ color: 'text.disabled' }}>
          {placeholder}
        </Box>
      );
    }

    // @ts-expect-error TS(2304): Cannot find name 'chip'.
    if (chip) {
      return (
        // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
          // @ts-expect-error TS(18004): No value exists in scope for the shorthand propert... Remove this comment to see the full error message
          {selectedItems.map((item: any) => <Chip key={item.value} size="small" label={item.label} />)}
        </Box>
      );
    }

    return selectedItems.map((item) => item.label).join(', ');
  };

  return (
    <Controller
      name={name}
      // @ts-expect-error TS(2304): Cannot find name 'control'.
      control={control}
      // @ts-expect-error TS(2304): Cannot find name 'render'.
      render={({ field, fieldState: { error } }) => (
        // @ts-expect-error TS(2749): 'FormControl' refers to a value, but is being used... Remove this comment to see the full error message
        <FormControl sx={sx}>
          // @ts-expect-error TS(18004): No value exists in scope for the shorthand propert... Remove this comment to see the full error message
          {label && <InputLabel id={name}> {label} </InputLabel>}

          <Select
            // @ts-expect-error TS(2304): Cannot find name 'field'.
            {...field}
            // @ts-expect-error TS(2304): Cannot find name 'multiple'.
            multiple
            // @ts-expect-error TS(2304): Cannot find name 'displayEmpty'.
            displayEmpty={!!placeholder}
            // @ts-expect-error TS(2304): Cannot find name 'labelId'.
            labelId={name}
            // @ts-expect-error TS(2304): Cannot find name 'input'.
            input={<OutlinedInput fullWidth label={label} error={!!error} />}
            // @ts-expect-error TS(2304): Cannot find name 'renderValue'.
            renderValue={renderValues}
            // @ts-expect-error TS(2304): Cannot find name 'MenuProps'.
            MenuProps={{
              PaperProps: {
                // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
                sx: { px: 1, maxHeight: 280 },
              },
            }}
            // @ts-expect-error TS(2304): Cannot find name 'other'.
            {...other}
          >
            // @ts-expect-error TS(18004): No value exists in scope for the shorthand propert... Remove this comment to see the full error message
            {placeholder && (
              // @ts-expect-error TS(2749): 'MenuItem' refers to a value, but is being used as... Remove this comment to see the full error message
              <MenuItem
                // @ts-expect-error TS(2304): Cannot find name 'disabled'.
                disabled
                // @ts-expect-error TS(2304): Cannot find name 'value'.
                value=""
                // @ts-expect-error TS(2304): Cannot find name 'sx'.
                sx={{
                  // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
                  py: 1,
                  // @ts-expect-error TS(2304): Cannot find name 'px'.
                  px: 2,
                  // @ts-expect-error TS(2304): Cannot find name 'borderRadius'.
                  borderRadius: 0.75,
                  // @ts-expect-error TS(2304): Cannot find name 'typography'.
                  typography: 'body2',
                }}
              // @ts-expect-error TS(2365): Operator '<' cannot be applied to types 'boolean' ... Remove this comment to see the full error message
              >
                // @ts-expect-error TS(2304): Cannot find name 'em'.
                <em> {placeholder} </em>
              </MenuItem>
            )}

            // @ts-expect-error TS(2304): Cannot find name 'options'.
            {options.map((option: any) => {
              // @ts-expect-error TS(2304): Cannot find name 'field'.
              const selected = field.value.includes(option.value);

              return (
                // @ts-expect-error TS(2749): 'MenuItem' refers to a value, but is being used as... Remove this comment to see the full error message
                <MenuItem
                  // @ts-expect-error TS(2304): Cannot find name 'key'.
                  key={option.value}
                  // @ts-expect-error TS(2304): Cannot find name 'value'.
                  value={option.value}
                  // @ts-expect-error TS(2304): Cannot find name 'sx'.
                  sx={{
                    // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
                    py: 1,
                    // @ts-expect-error TS(2304): Cannot find name 'px'.
                    px: 2,
                    // @ts-expect-error TS(2304): Cannot find name 'borderRadius'.
                    borderRadius: 0.75,
                    // @ts-expect-error TS(2304): Cannot find name 'typography'.
                    typography: 'body2',
                    // @ts-expect-error TS(2304): Cannot find name 'selected'.
                    ...(selected && {
                      fontWeight: 'fontWeightSemiBold',
                    }),
                    // @ts-expect-error TS(2304): Cannot find name 'checkbox'.
                    ...(checkbox && {
                      p: 0.25,
                    }),
                  }}
                >
                  // @ts-expect-error TS(18004): No value exists in scope for the shorthand propert... Remove this comment to see the full error message
                  {checkbox && <Checkbox disableRipple size="small" checked={selected} />}

                  // @ts-expect-error TS(2304): Cannot find name 'option'.
                  {option.label}
                </MenuItem>
              );
            })}
          </Select>

          // @ts-expect-error TS(2304): Cannot find name 'error'.
          {(!!error || helperText) && (
            // @ts-expect-error TS(2749): 'FormHelperText' refers to a value, but is being u... Remove this comment to see the full error message
            <FormHelperText error={!!error}>{error ? error?.message : helperText}</FormHelperText>
          )}
        </FormControl>
      )}
    />
  );
}

RHFMultiSelect.propTypes = {
  name: PropTypes.string,
  chip: PropTypes.bool,
  label: PropTypes.string,
  options: PropTypes.array,
  checkbox: PropTypes.bool,
  placeholder: PropTypes.string,
  helperText: PropTypes.node,
  sx: PropTypes.object,
};
