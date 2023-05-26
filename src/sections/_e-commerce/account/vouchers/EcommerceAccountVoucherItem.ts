import PropTypes from 'prop-types';
import { differenceInCalendarDays } from 'date-fns';
// @mui
import { Stack, Typography } from '@mui/material';
// utils
// @ts-expect-error TS(2307): Cannot find module 'src/utils/formatTime' or its c... Remove this comment to see the full error message
import { fDate } from 'src/utils/formatTime';
// components
// @ts-expect-error TS(2307): Cannot find module 'src/components/iconify' or its... Remove this comment to see the full error message
import Iconify from 'src/components/iconify';
// @ts-expect-error TS(2307): Cannot find module 'src/components/text-max-line' ... Remove this comment to see the full error message
import TextMaxLine from 'src/components/text-max-line';

// ----------------------------------------------------------------------

export default function EcommerceAccountVoucherItem({
  voucher
}: any) {
  const dayLeft = differenceInCalendarDays(voucher.dueOn, new Date());

  return (
    // @ts-expect-error TS(2749): 'Stack' refers to a value, but is being used as a ... Remove this comment to see the full error message
    <Stack
      // @ts-expect-error TS(2304): Cannot find name 'direction'.
      direction="row"
      // @ts-expect-error TS(2304): Cannot find name 'sx'.
      sx={{
        // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
        borderRadius: 1,
        // @ts-expect-error TS(2304): Cannot find name 'overflow'.
        overflow: 'hidden',
        // @ts-expect-error TS(2304): Cannot find name 'border'.
        border: (theme: any) => `dashed 1px ${theme.palette.divider}`,
      }}
    >
      // @ts-expect-error TS(2749): 'Stack' refers to a value, but is being used as a ... Remove this comment to see the full error message
      <Stack
        // @ts-expect-error TS(2304): Cannot find name 'spacing'.
        spacing={1}
        // @ts-expect-error TS(2304): Cannot find name 'alignItems'.
        alignItems="center"
        // @ts-expect-error TS(2304): Cannot find name 'justifyContent'.
        justifyContent="center"
        // @ts-expect-error TS(2304): Cannot find name 'sx'.
        sx={{
          // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
          width: 120,
          // @ts-expect-error TS(2304): Cannot find name 'height'.
          height: 120,
          // @ts-expect-error TS(2304): Cannot find name 'flexShrink'.
          flexShrink: 0,
          // @ts-expect-error TS(2304): Cannot find name 'borderRight'.
          borderRight: (theme: any) => `dashed 1px ${theme.palette.divider}`,
        }}
      >
        // @ts-expect-error TS(2693): 'any' only refers to a type, but is being used as ... Remove this comment to see the full error message
        {getIcon(voucher: any.type)}

        // @ts-expect-error TS(2304): Cannot find name 'variant'.
        <TextMaxLine variant="overline" line={1}>
          // @ts-expect-error TS(18004): No value exists in scope for the shorthand propert... Remove this comment to see the full error message
          {voucher.label}
        </TextMaxLine>
      </Stack>

      // @ts-expect-error TS(2304): Cannot find name 'sx'.
      <Stack sx={{ p: 2.5, pb: 0 }}>
        // @ts-expect-error TS(2749): 'Typography' refers to a value, but is being used ... Remove this comment to see the full error message
        <Typography variant="h6">{voucher.title}</Typography>
        // @ts-expect-error TS(2304): Cannot find name 'variant'.
        <Typography variant="body2" sx={{ mt: 0.5, mb: 1 }}>
          // @ts-expect-error TS(18004): No value exists in scope for the shorthand propert... Remove this comment to see the full error message
          {voucher.description}
        </Typography>

        <Stack
          // @ts-expect-error TS(2304): Cannot find name 'direction'.
          direction="row"
          // @ts-expect-error TS(2304): Cannot find name 'alignItems'.
          alignItems="center"
          // @ts-expect-error TS(2304): Cannot find name 'sx'.
          sx={{
            // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
            typography: 'caption',
            // @ts-expect-error TS(2304): Cannot find name 'color'.
            color: 'text.disabled',
            // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
            ...(dayLeft <= 1 && {
              color: 'error.main',
            }),
          }}
        >
          // @ts-expect-error TS(2304): Cannot find name 'icon'.
          <Iconify icon="carbon:time" width={16} sx={{ mr: 1 }} />

          // @ts-expect-error TS(2304): Cannot find name 'dayLeft'.
          {dayLeft <= 1 ? `${dayLeft} day left` : `Valid Till: ${fDate(voucher.dueOn)}`}
        // @ts-expect-error TS(2365): Operator '<' cannot be applied to types 'boolean' ... Remove this comment to see the full error message
        </Stack>
      </Stack>
    </Stack>
  );
}

EcommerceAccountVoucherItem.propTypes = {
  voucher: PropTypes.shape({
    description: PropTypes.string,
    dueOn: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.instanceOf(Date)]),
    label: PropTypes.string,
    title: PropTypes.string,
    type: PropTypes.string,
  }),
};

// ----------------------------------------------------------------------

function getIcon(type: any) {
  let icon;

  switch (type) {
    case 'shipping':
      // @ts-expect-error TS(2304): Cannot find name 'width'.
      icon = <Iconify icon="carbon:delivery" width={32} />;
      break;
    case 'category':
      // @ts-expect-error TS(2304): Cannot find name 'width'.
      icon = <Iconify icon="carbon:cut-out" width={32} />;
      break;
    default:
      // @ts-expect-error TS(2304): Cannot find name 'width'.
      icon = <Iconify icon="carbon:star" width={32} />;
  }
  return icon;
}
