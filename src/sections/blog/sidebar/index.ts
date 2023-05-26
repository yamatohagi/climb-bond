import PropTypes from 'prop-types';
// @mui
import { Stack, TextField, InputAdornment } from '@mui/material';
// hooks
// @ts-expect-error TS(2307): Cannot find module 'src/hooks/useResponsive' or it... Remove this comment to see the full error message
import useResponsive from 'src/hooks/useResponsive';
// components
// @ts-expect-error TS(2307): Cannot find module 'src/components/iconify' or its... Remove this comment to see the full error message
import Iconify from 'src/components/iconify';
//
import Advertisement from '../../advertisement';
import BlogSidebarAuthor from './BlogSidebarAuthor';
import BlogSidebarCategories from './BlogSidebarCategories';
import BlogSidebarPopularTags from './BlogSidebarPopularTags';
import BlogSidebarRecentPosts from './BlogSidebarRecentPosts';

// ----------------------------------------------------------------------

export default function BlogSidebar({
  author,
  categories,
  popularTags,
  recentPosts,
  advertisement,
  sx,
  ...other
}: any) {
  const isMdUp = useResponsive('up', 'md');

  // @ts-expect-error TS(2364): The left-hand side of an assignment expression mus... Remove this comment to see the full error message
  return (
    <>
      // @ts-expect-error TS(2709): Cannot use namespace 'BlogSidebarAuthor' as a type... Remove this comment to see the full error message
      {author && isMdUp && <BlogSidebarAuthor author={author} />}

      // @ts-expect-error TS(2304): Cannot find name 'isMdUp'.
      {isMdUp && (
        // @ts-expect-error TS(2749): 'TextField' refers to a value, but is being used a... Remove this comment to see the full error message
        <TextField
          // @ts-expect-error TS(2304): Cannot find name 'fullWidth'.
          fullWidth
          // @ts-expect-error TS(2304): Cannot find name 'hiddenLabel'.
          hiddenLabel
          // @ts-expect-error TS(2304): Cannot find name 'placeholder'.
          placeholder="Search..."
          // @ts-expect-error TS(2304): Cannot find name 'InputProps'.
          InputProps={{
            startAdornment: (
              // @ts-expect-error TS(2749): 'InputAdornment' refers to a value, but is being u... Remove this comment to see the full error message
              <InputAdornment position="start">
                // @ts-expect-error TS(2304): Cannot find name 'icon'.
                <Iconify icon="carbon:search" width={24} sx={{ color: 'text.disabled' }} />
              </InputAdornment>
            ),
          }}
        />
      )}

      // @ts-expect-error TS(2749): 'Stack' refers to a value, but is being used as a ... Remove this comment to see the full error message
      <Stack
        // @ts-expect-error TS(2304): Cannot find name 'spacing'.
        spacing={5}
        // @ts-expect-error TS(2304): Cannot find name 'sx'.
        sx={{
          pt: { md: 5 },
          // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
          pb: { xs: 8, md: 0 },
          // @ts-expect-error TS(2304): Cannot find name 'sx'.
          ...sx,
        }}
        // @ts-expect-error TS(2304): Cannot find name 'other'.
        {...other}
      >
        // @ts-expect-error TS(18004): No value exists in scope for the shorthand propert... Remove this comment to see the full error message
        {categories && <BlogSidebarCategories categories={categories} />}

        // @ts-expect-error TS(2304): Cannot find name 'recentPosts'.
        {recentPosts && <BlogSidebarRecentPosts recentPosts={recentPosts} />}

        // @ts-expect-error TS(2304): Cannot find name 'popularTags'.
        {popularTags && <BlogSidebarPopularTags popularTags={popularTags} />}

        // @ts-expect-error TS(2304): Cannot find name 'advertisement'.
        {advertisement && <Advertisement advertisement={advertisement} />}
      </Stack>
    </>
  );
}

BlogSidebar.propTypes = {
  advertisement: PropTypes.shape({
    description: PropTypes.string,
    imageUrl: PropTypes.string,
    path: PropTypes.string,
    title: PropTypes.string,
  }),
  author: PropTypes.shape({
    name: PropTypes.string,
    role: PropTypes.string,
    picture: PropTypes.string,
  }),
  categories: PropTypes.array,
  popularTags: PropTypes.array,
  recentPosts: PropTypes.object,
  sx: PropTypes.object,
};
