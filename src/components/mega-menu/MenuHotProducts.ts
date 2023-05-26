import PropTypes from 'prop-types';
// next
import NextLink from 'next/link';
// @mui
import { Link, Typography, Box } from '@mui/material';

// ----------------------------------------------------------------------

export default function MenuHotProducts({
  tags,
  ...other
}: any) {
  // @ts-expect-error TS(2364): The left-hand side of an assignment expression mus... Remove this comment to see the full error message
  return (
    // @ts-expect-error TS(2749): 'Box' refers to a value, but is being used as a ty... Remove this comment to see the full error message
    <Box {...other}>
      // @ts-expect-error TS(2749): 'Typography' refers to a value, but is being used ... Remove this comment to see the full error message
      <Typography
        // @ts-expect-error TS(2304): Cannot find name 'variant'.
        variant="caption"
        // @ts-expect-error TS(2304): Cannot find name 'sx'.
        sx={{
          // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
          mr: 0.5,
          // @ts-expect-error TS(2304): Cannot find name 'fontWeight'.
          fontWeight: 'fontWeightBold',
        }}
      >
        // @ts-expect-error TS(2304): Cannot find name 'Hot'.
        Hot Products:
      </Typography>

      // @ts-expect-error TS(2304): Cannot find name 'tags'.
      {tags.map((tag: any, index: any) => (
        // @ts-expect-error TS(2749): 'Link' refers to a value, but is being used as a t... Remove this comment to see the full error message
        <Link
          // @ts-expect-error TS(2304): Cannot find name 'key'.
          key={tag.name}
          // @ts-expect-error TS(2304): Cannot find name 'component'.
          component={NextLink}
          // @ts-expect-error TS(2304): Cannot find name 'href'.
          href={tag.path}
          // @ts-expect-error TS(2304): Cannot find name 'underline'.
          underline="none"
          // @ts-expect-error TS(2304): Cannot find name 'variant'.
          variant="caption"
          // @ts-expect-error TS(2304): Cannot find name 'sx'.
          sx={{
            color: 'text.secondary',
            transition: (theme: any) => theme.transitions.create('all'),
            '&:hover': { color: 'primary.main' },
          }}
        // @ts-expect-error TS(2367): This condition will always return 'false' since th... Remove this comment to see the full error message
        >
          // @ts-expect-error TS(18004): No value exists in scope for the shorthand propert... Remove this comment to see the full error message
          {index === 0 ? tag.name : `, ${tag.name} `}
        </Link>
      ))}
    </Box>
  );
}

MenuHotProducts.propTypes = {
  tags: PropTypes.array,
};
