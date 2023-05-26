// @mui
import { styled } from '@mui/material/styles';
import { Paper, ListSubheader, ListItemButton } from '@mui/material';

// ----------------------------------------------------------------------

export const StyledNavItem = styled(ListItemButton, {
  shouldForwardProp: (prop) => prop !== 'active' && prop !== 'open' && prop !== 'subItem',
// @ts-expect-error TS(2339): Property 'active' does not exist on type 'ListItem... Remove this comment to see the full error message
})(({ active, open, subItem, theme }) => {
  const dotActiveStyle = {
    content: '""',
    borderRadius: '50%',
    position: 'absolute',
    width: 6,
    height: 6,
    left: -12,
    backgroundColor: theme.palette.primary.main,
  };

  return {
    ...theme.typography.body2,
    padding: 0,
    height: '100%',
    transition: theme.transitions.create('opacity', {
      duration: theme.transitions.duration.shorter,
    }),
    '&:hover': {
      opacity: 0.8,
      backgroundColor: 'transparent',
      '&::before': dotActiveStyle,
    },
    // Sub item
    ...(subItem && {
      ...theme.typography.body2,
      color: theme.palette.text.secondary,
    }),
    // Active
    ...(active && {
      color: theme.palette.text.primary,
      // @ts-expect-error TS(2339): Property 'fontWeightSemiBold' does not exist on ty... Remove this comment to see the full error message
      fontWeight: theme.typography.fontWeightSemiBold,
      '&::before': dotActiveStyle,
    }),
    // Active sub item
    ...(active &&
      subItem && {
        color: theme.palette.text.primary,
        // @ts-expect-error TS(2339): Property 'fontWeightSemiBold' does not exist on ty... Remove this comment to see the full error message
        fontWeight: theme.typography.fontWeightSemiBold,
        '&::before': {
          ...dotActiveStyle,
          color: theme.palette.primary.main,
        },
      }),
    // Open
    ...(open && {
      opacity: 0.48,
      '&::before': dotActiveStyle,
    }),
  };
});

// ----------------------------------------------------------------------

export const StyledMenu = styled(Paper)(({ theme }) => ({
  top: 72,
  width: '100%',
  borderRadius: 0,
  position: 'fixed',
  zIndex: theme.zIndex.modal,
  // @ts-expect-error TS(2339): Property 'customShadows' does not exist on type 'T... Remove this comment to see the full error message
  boxShadow: theme.customShadows.dialog,
  backgroundColor: theme.palette.background.default,
}));

// ----------------------------------------------------------------------

export const StyledSubheader = styled(ListSubheader)(({ theme }) => ({
  ...theme.typography.h6,
  padding: 0,
  color: theme.palette.text.primary,
  backgroundColor: 'transparent',
}));
