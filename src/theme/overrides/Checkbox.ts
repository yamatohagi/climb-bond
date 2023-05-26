import { CheckboxIcon, CheckboxCheckedIcon, CheckboxIndeterminateIcon } from './CustomIcons';

// ----------------------------------------------------------------------

export default function Checkbox(theme: any) {
  return {
    MuiCheckbox: {
      defaultProps: {
        // @ts-expect-error TS(2749): 'CheckboxIcon' refers to a value, but is being use... Remove this comment to see the full error message
        icon: <CheckboxIcon />,
        // @ts-expect-error TS(2749): 'CheckboxCheckedIcon' refers to a value, but is be... Remove this comment to see the full error message
        checkedIcon: <CheckboxCheckedIcon />,
        // @ts-expect-error TS(2749): 'CheckboxIndeterminateIcon' refers to a value, but... Remove this comment to see the full error message
        indeterminateIcon: <CheckboxIndeterminateIcon />,
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
