import PropTypes from 'prop-types';
// @mui
import { Stack, Typography, Avatar, IconButton } from '@mui/material';
// _mock
// @ts-expect-error TS(2307): Cannot find module 'src/_mock' or its correspondin... Remove this comment to see the full error message
import { _socials } from 'src/_mock';
// components
// @ts-expect-error TS(2307): Cannot find module 'src/components/iconify' or its... Remove this comment to see the full error message
import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

export default function PostAuthor({
  author
}: any) {
  const { name, role, about, quotes, picture } = author;

  return (
    // @ts-expect-error TS(2749): 'Stack' refers to a value, but is being used as a ... Remove this comment to see the full error message
    <Stack
      // @ts-expect-error TS(2304): Cannot find name 'direction'.
      direction="row"
      // @ts-expect-error TS(2304): Cannot find name 'spacing'.
      spacing={{ xs: 3, md: 4 }}
      // @ts-expect-error TS(2304): Cannot find name 'sx'.
      sx={{
        // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
        py: { xs: 5, md: 10 },
      }}
    >
      // @ts-expect-error TS(2749): 'Avatar' refers to a value, but is being used as a... Remove this comment to see the full error message
      <Avatar src={picture} sx={{ width: 96, height: 96 }} />

      // @ts-expect-error TS(2304): Cannot find name 'spacing'.
      <Stack spacing={2}>
        // @ts-expect-error TS(2749): 'Stack' refers to a value, but is being used as a ... Remove this comment to see the full error message
        <Stack
          // @ts-expect-error TS(2304): Cannot find name 'spacing'.
          spacing={2}
          // @ts-expect-error TS(2304): Cannot find name 'alignItems'.
          alignItems={{ md: 'center' }}
          // @ts-expect-error TS(2304): Cannot find name 'direction'.
          direction={{ xs: 'column', md: 'row' }}
          // @ts-expect-error TS(2304): Cannot find name 'justifyContent'.
          justifyContent={{ md: 'space-between' }}
        >
          // @ts-expect-error TS(2749): 'Stack' refers to a value, but is being used as a ... Remove this comment to see the full error message
          <Stack spacing={0.5}>
            // @ts-expect-error TS(2749): 'Typography' refers to a value, but is being used ... Remove this comment to see the full error message
            <Typography variant="h5">{name}</Typography>

            // @ts-expect-error TS(2304): Cannot find name 'variant'.
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              // @ts-expect-error TS(18004): No value exists in scope for the shorthand propert... Remove this comment to see the full error message
              {role}
            </Typography>
          </Stack>

          // @ts-expect-error TS(2304): Cannot find name 'direction'.
          <Stack direction="row">
            // @ts-expect-error TS(2362): The left-hand side of an arithmetic operation must... Remove this comment to see the full error message
            {_socials.map((social: any) => <IconButton key={social.value}>
              // @ts-expect-error TS(2304): Cannot find name 'icon'.
              <Iconify icon={social.icon} sx={{ color: social.color }} />
            </IconButton>)}
          </Stack>
        </Stack>

        // @ts-expect-error TS(2304): Cannot find name 'variant'.
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          // @ts-expect-error TS(18004): No value exists in scope for the shorthand propert... Remove this comment to see the full error message
          {about}
        </Typography>

        // @ts-expect-error TS(2304): Cannot find name 'variant'.
        <Typography variant="caption" sx={{ color: 'text.disabled' }}>
          // @ts-expect-error TS(18004): No value exists in scope for the shorthand propert... Remove this comment to see the full error message
          {quotes}
        </Typography>
      </Stack>
    </Stack>
  );
}

PostAuthor.propTypes = {
  author: PropTypes.shape({
    about: PropTypes.string,
    name: PropTypes.string,
    picture: PropTypes.string,
    quotes: PropTypes.string,
    role: PropTypes.string,
  }),
};
