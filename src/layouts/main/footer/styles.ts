// next
import NextLink from 'next/link';
// @mui
import { styled } from '@mui/material/styles';
import { Link } from '@mui/material';

// ----------------------------------------------------------------------

// @ts-expect-error TS(2749): 'Link' refers to a value, but is being used as a t... Remove this comment to see the full error message
export const StyledLink = styled((props: any) => <Link component={NextLink} {...props} />)(
  ({ theme }) => ({
    ...theme.typography.caption,
    color: theme.palette.text.secondary,
    '&:hover': {
      color: theme.palette.text.primary,
    },
  })
);
