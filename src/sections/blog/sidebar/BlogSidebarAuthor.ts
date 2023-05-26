import PropTypes from 'prop-types';
import { Stack, Avatar, Typography, IconButton } from '@mui/material';
// _mock
// @ts-expect-error TS(2307): Cannot find module 'src/_mock' or its correspondin... Remove this comment to see the full error message
import { _socials } from 'src/_mock';
// components
// @ts-expect-error TS(2307): Cannot find module 'src/components/iconify' or its... Remove this comment to see the full error message
import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

export default function BlogSidebarAuthor({
  author
}: any) {
  const { name, role, picture } = author;

  return (
    // @ts-expect-error TS(2749): 'Stack' refers to a value, but is being used as a ... Remove this comment to see the full error message
    <Stack spacing={2} direction="row" sx={{ mb: { md: 5 } }}>
      // @ts-expect-error TS(2749): 'Avatar' refers to a value, but is being used as a... Remove this comment to see the full error message
      <Avatar src={picture} sx={{ width: 64, height: 64 }} />

      <Stack>
        // @ts-expect-error TS(2749): 'Typography' refers to a value, but is being used ... Remove this comment to see the full error message
        <Typography variant="h5">{name}</Typography>

        // @ts-expect-error TS(2304): Cannot find name 'variant'.
        <Typography variant="body2" sx={{ mt: 0.5, mb: 2, color: 'text.secondary' }}>
          // @ts-expect-error TS(18004): No value exists in scope for the shorthand propert... Remove this comment to see the full error message
          {role}
        </Typography>

        // @ts-expect-error TS(2304): Cannot find name 'direction'.
        <Stack direction="row">
          // @ts-expect-error TS(2362): The left-hand side of an arithmetic operation must... Remove this comment to see the full error message
          {_socials.map((social: any) => <IconButton key={social.value}>
            // @ts-expect-error TS(2304): Cannot find name 'icon'.
            <Iconify icon={social.icon} sx={{ color: social.color }} />
          </IconButton>)}
        </Stack>
      </Stack>
    </Stack>
  );
}

BlogSidebarAuthor.propTypes = {
  author: PropTypes.shape({
    name: PropTypes.string,
    picture: PropTypes.string,
    role: PropTypes.string,
  }),
};
