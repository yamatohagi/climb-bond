import PropTypes from 'prop-types';
// @mui
import {
  Link,
  Stack,
  Avatar,
  Typography,
  CardActionArea,
  Unstable_Grid2 as Grid,
} from '@mui/material';
// components
// @ts-expect-error TS(2307): Cannot find module 'src/components/iconify' or its... Remove this comment to see the full error message
import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

export default function PostPrevAndNext({
  prevPost,
  nextPost
}: any) {
  return (
    // @ts-expect-error TS(2749): 'Grid' refers to a value, but is being used as a t... Remove this comment to see the full error message
    <Grid container spacing={5} sx={{ py: 8 }}>
      // @ts-expect-error TS(2749): 'Grid' refers to a value, but is being used as a t... Remove this comment to see the full error message
      <Grid xs={12} md={6}>
        // @ts-expect-error TS(2709): Cannot use namespace 'PostItem' as a type.
        <PostItem
          // @ts-expect-error TS(2304): Cannot find name 'title'.
          title={prevPost?.title}
          // @ts-expect-error TS(2304): Cannot find name 'coverImg'.
          coverImg={prevPost?.coverImg}
          // @ts-expect-error TS(2304): Cannot find name 'icon'.
          icon={<Iconify icon="carbon:chevron-left" width={24} sx={{ color: 'text.disabled' }} />}
        />
      </Grid>

      // @ts-expect-error TS(2304): Cannot find name 'xs'.
      <Grid xs={12} md={6}>
        // @ts-expect-error TS(2709): Cannot use namespace 'PostItem' as a type.
        <PostItem
          // @ts-expect-error TS(2304): Cannot find name 'isNext'.
          isNext
          // @ts-expect-error TS(2304): Cannot find name 'title'.
          title={nextPost?.title}
          // @ts-expect-error TS(2304): Cannot find name 'coverImg'.
          coverImg={nextPost?.coverImg}
          // @ts-expect-error TS(2304): Cannot find name 'icon'.
          icon={<Iconify width={24} icon="carbon:chevron-right" sx={{ color: 'text.disabled' }} />}
        />
      </Grid>
    </Grid>
  );
}

PostPrevAndNext.propTypes = {
  nextPost: PropTypes.object,
  prevPost: PropTypes.object,
};

// ----------------------------------------------------------------------

function PostItem({
  coverImg,
  title,
  icon,
  isNext
}: any) {
  return (
    // @ts-expect-error TS(2749): 'CardActionArea' refers to a value, but is being u... Remove this comment to see the full error message
    <CardActionArea sx={{ borderRadius: 2 }}>
      // @ts-expect-error TS(2749): 'Link' refers to a value, but is being used as a t... Remove this comment to see the full error message
      <Link color="inherit" underline="none">
        // @ts-expect-error TS(2749): 'Stack' refers to a value, but is being used as a ... Remove this comment to see the full error message
        <Stack
          // @ts-expect-error TS(2304): Cannot find name 'alignItems'.
          alignItems="center"
          // @ts-expect-error TS(2304): Cannot find name 'direction'.
          direction={isNext ? 'row-reverse' : 'row'}
          // @ts-expect-error TS(2304): Cannot find name 'spacing'.
          spacing={2}
          // @ts-expect-error TS(2304): Cannot find name 'sx'.
          sx={{
            // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
            p: 2.5,
            // @ts-expect-error TS(2304): Cannot find name 'pl'.
            pl: 1,
            // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
            ...(isNext && {
              pr: 1,
            }),
          }}
        // @ts-expect-error TS(2365): Operator '<' cannot be applied to types 'boolean' ... Remove this comment to see the full error message
        >
          // @ts-expect-error TS(18004): No value exists in scope for the shorthand propert... Remove this comment to see the full error message
          {icon}

          // @ts-expect-error TS(2304): Cannot find name 'src'.
          <Avatar src={coverImg} sx={{ width: 64, height: 64 }} />

          <Stack
            // @ts-expect-error TS(2304): Cannot find name 'spacing'.
            spacing={0.5}
            // @ts-expect-error TS(2304): Cannot find name 'sx'.
            sx={{
              // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
              ...(isNext && {
                textAlign: 'right',
              }),
            }}
          >
            // @ts-expect-error TS(2749): 'Typography' refers to a value, but is being used ... Remove this comment to see the full error message
            <Typography variant="overline" sx={{ color: 'text.disabled' }}>
              // @ts-expect-error TS(18004): No value exists in scope for the shorthand propert... Remove this comment to see the full error message
              {isNext ? 'Next Post' : 'Previous Post'}
            </Typography>

            // @ts-expect-error TS(2304): Cannot find name 'variant'.
            <Typography variant="subtitle1">{title}</Typography>
          </Stack>
        </Stack>
      </Link>
    </CardActionArea>
  );
}

PostItem.propTypes = {
  coverImg: PropTypes.string,
  icon: PropTypes.node,
  isNext: PropTypes.bool,
  title: PropTypes.string,
};
