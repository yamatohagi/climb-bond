import { RadioIcon, RadioCheckedIcon } from './CustomIcons';

// ----------------------------------------------------------------------

export default function Radio(theme: any) {
  return {
    MuiRadio: {
      defaultProps: {
        // @ts-expect-error TS(2749): 'RadioIcon' refers to a value, but is being used a... Remove this comment to see the full error message
        icon: <RadioIcon />,
        // @ts-expect-error TS(2749): 'RadioCheckedIcon' refers to a value, but is being... Remove this comment to see the full error message
        checkedIcon: <RadioCheckedIcon />,
      },

      styleOverrides: {
        root: ({
          ownerState
        }: any) => ({
          padding: theme.spacing(1),
          ...(ownerState.size === 'small' && {
            '& svg': { width: 20, height: 20 },
          }),
          ...(ownerState.size === 'medium' && {
            '& svg': { width: 24, height: 24 },
          }),
        }),
      },
    },
  };
}
