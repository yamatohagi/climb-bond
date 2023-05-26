import PropTypes from 'prop-types';
// @mui
import { MobileDatePicker } from '@mui/x-date-pickers';
import { InputAdornment, InputBase } from '@mui/material';
// components
// @ts-expect-error TS(2307): Cannot find module 'src/components/iconify' or its... Remove this comment to see the full error message
import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

export default function TravelFilterTime({
  departureDay,
  onChangeDepartureDay,
  sx
}: any) {
  return (
    // @ts-expect-error TS(2749): 'MobileDatePicker' refers to a value, but is being... Remove this comment to see the full error message
    <MobileDatePicker
      // @ts-expect-error TS(2304): Cannot find name 'value'.
      value={departureDay}
      // @ts-expect-error TS(2552): Cannot find name 'onChange'. Did you mean 'onchang... Remove this comment to see the full error message
      onChange={onChangeDepartureDay}
      // @ts-expect-error TS(2304): Cannot find name 'slots'.
      slots={{
        textField: ({
          inputProps,
          InputProps,
          ownerState,
          inputRef,
          error,
          ...inputOther
        }: any) => (
          // @ts-expect-error TS(2749): 'InputBase' refers to a value, but is being used a... Remove this comment to see the full error message
          <InputBase
            // @ts-expect-error TS(2304): Cannot find name 'fullWidth'.
            fullWidth
            // @ts-expect-error TS(2304): Cannot find name 'InputProps'.
            {...InputProps}
            // @ts-expect-error TS(2304): Cannot find name 'ref'.
            ref={InputProps?.ref}
            // @ts-expect-error TS(2304): Cannot find name 'inputRef'.
            inputRef={inputRef}
            // @ts-expect-error TS(2304): Cannot find name 'inputProps'.
            inputProps={{
              // @ts-expect-error TS(2304): Cannot find name 'inputProps'.
              ...inputProps,
              // @ts-expect-error TS(2304): Cannot find name 'inputOther'.
              ...inputOther,
              // @ts-expect-error TS(2304): Cannot find name 'placeholder'.
              placeholder: 'Departure day',
            }}
            // @ts-expect-error TS(2304): Cannot find name 'startAdornment'.
            startAdornment={
              // @ts-expect-error TS(2304): Cannot find name 'position'.
              <InputAdornment position="start">
                // @ts-expect-error TS(2304): Cannot find name 'width'.
                <Iconify width={24} icon="carbon:calendar" sx={{ color: 'text.disabled', mr: 1 }} />
              </InputAdornment>
            }
            // @ts-expect-error TS(2304): Cannot find name 'sx'.
            sx={{ height: 44, typography: 'subtitle1', color: 'inherit', ...sx }}
          />
        ),
      }}
      // @ts-expect-error TS(2304): Cannot find name 'sx'.
      {...sx}
    />
  );
}

TravelFilterTime.propTypes = {
  departureDay: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.instanceOf(Date),
  ]),
  onChangeDepartureDay: PropTypes.func,
  sx: PropTypes.object,
};
