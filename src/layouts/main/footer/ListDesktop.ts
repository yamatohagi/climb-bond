import PropTypes from 'prop-types';
// @mui
import { Stack, Typography } from '@mui/material';
//
import { StyledLink } from './styles';

// ----------------------------------------------------------------------

export default function ListDesktop({
  list
}: any) {
  const { subheader, items } = list;

  return (
    // @ts-expect-error TS(2749): 'Stack' refers to a value, but is being used as a ... Remove this comment to see the full error message
    <Stack spacing={1.5} alignItems="flex-start">
      // @ts-expect-error TS(2749): 'Typography' refers to a value, but is being used ... Remove this comment to see the full error message
      <Typography variant="subtitle2">{subheader}</Typography>

      // @ts-expect-error TS(2749): 'StyledLink' refers to a value, but is being used ... Remove this comment to see the full error message
      {items?.map((link: any) => <StyledLink key={link.title} href={link.path}>
        // @ts-expect-error TS(18004): No value exists in scope for the shorthand propert... Remove this comment to see the full error message
        {link.title}
      </StyledLink>)}
    </Stack>
  );
}

// @ts-expect-error TS(2339): Property 'propTypes' does not exist on type '({ li... Remove this comment to see the full error message
ListDesktop.propTypes = {
  list: PropTypes.shape({
    items: PropTypes.array,
    subheader: PropTypes.string,
  }),
};
