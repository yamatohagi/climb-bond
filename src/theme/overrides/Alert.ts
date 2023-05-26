import { ErrorIcon, InfoIcon, SuccessIcon, WarningIcon } from './CustomIcons';

// ----------------------------------------------------------------------

const COLORS = ['info', 'success', 'warning', 'error'];

export default function Alert(theme: any) {
  const isLight = theme.palette.mode === 'light';

  const rootStyle = (ownerState: any) => {
    const standardVariant = ownerState.variant === 'standard';

    const filledVariant = ownerState.variant === 'filled';

    const outlinedVariant = ownerState.variant === 'outlined';

    const colorStyle = COLORS.map((color) => ({
      ...(ownerState.severity === color && {
        // STANDARD
        ...(standardVariant && {
          color: theme.palette[color][isLight ? 'darker' : 'lighter'],
          backgroundColor: theme.palette[color][isLight ? 'lighter' : 'darker'],
          '& .MuiAlert-icon': {
            color: theme.palette[color][isLight ? 'main' : 'light'],
          },
        }),
        // FILLED
        ...(filledVariant && {
          color: theme.palette[color].contrastText,
          backgroundColor: theme.palette[color].main,
        }),
        // OUTLINED
        ...(outlinedVariant && {
          border: `solid 2px ${theme.palette[color].main}`,
          color: theme.palette[color][isLight ? 'dark' : 'light'],
          '& .MuiAlert-icon': {
            color: theme.palette[color].main,
          },
        }),
      }),
    }));

    return [...colorStyle];
  };

  return {
    MuiAlert: {
      defaultProps: {
        iconMapping: {
          error: ErrorIcon,
          info: InfoIcon,
          success: SuccessIcon,
          warning: WarningIcon,
        },
      },

      styleOverrides: {
        root: ({
          ownerState
        }: any) => rootStyle(ownerState),
        icon: {
          opacity: 1,
        },
      },
    },
    MuiAlertTitle: {
      styleOverrides: {
        root: {
          marginBottom: theme.spacing(0.5),
        },
      },
    },
  };
}
