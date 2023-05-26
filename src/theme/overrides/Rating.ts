import { alpha } from '@mui/material/styles';
//
import { StarIcon } from './CustomIcons';

// ----------------------------------------------------------------------

export default function Rating(theme: any) {
  return {
    MuiRating: {
      defaultProps: {
        // @ts-expect-error TS(2749): 'StarIcon' refers to a value, but is being used as... Remove this comment to see the full error message
        emptyIcon: <StarIcon />,
        // @ts-expect-error TS(2749): 'StarIcon' refers to a value, but is being used as... Remove this comment to see the full error message
        icon: <StarIcon />,
      },
      styleOverrides: {
        root: {
          '&.Mui-disabled': {
            opacity: 0.48,
          },
        },
        iconEmpty: {
          color: alpha(theme.palette.grey[500], 0.48),
        },
        sizeSmall: {
          '& svg': {
            width: 20,
            height: 20,
          },
        },
        sizeLarge: {
          '& svg': {
            width: 28,
            height: 28,
          },
        },
      },
    },
  };
}
