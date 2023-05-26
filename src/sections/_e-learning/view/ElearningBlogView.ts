// @mui
import { Container, Unstable_Grid2 as Grid } from '@mui/material';
// _mock
// @ts-expect-error TS(2307): Cannot find module 'src/_mock' or its correspondin... Remove this comment to see the full error message
import _mock, { _blogCoursePosts, _tags, _categories } from 'src/_mock';
//
import NewsletterElearning from '../../newsletter/e-learning';
import BlogSidebar from '../../blog/sidebar';
import { PostSearchMobile } from '../../blog/components';
import { BlogElearningPosts, BlogElearningFeaturedPost } from '../../blog/e-learning';

// ----------------------------------------------------------------------

export default function ElearningBlogView() {
  return (
    <>
      // @ts-expect-error TS(2749): 'PostSearchMobile' refers to a value, but is being... Remove this comment to see the full error message
      <PostSearchMobile />

      // @ts-expect-error TS(2304): Cannot find name 'post'.
      <BlogElearningFeaturedPost post={_blogCoursePosts[4]} />

      // @ts-expect-error TS(2749): 'Container' refers to a value, but is being used a... Remove this comment to see the full error message
      <Container
        // @ts-expect-error TS(2304): Cannot find name 'sx'.
        sx={{
          // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
          pt: 10,
        }}
      >
        // @ts-expect-error TS(2749): 'Grid' refers to a value, but is being used as a t... Remove this comment to see the full error message
        <Grid container spacing={{ md: 8 }}>
          // @ts-expect-error TS(2749): 'Grid' refers to a value, but is being used as a t... Remove this comment to see the full error message
          <Grid xs={12} md={8}>
            // @ts-expect-error TS(2709): Cannot use namespace 'BlogElearningPosts' as a typ... Remove this comment to see the full error message
            <BlogElearningPosts posts={_blogCoursePosts} />
          </Grid>

          // @ts-expect-error TS(2304): Cannot find name 'xs'.
          <Grid xs={12} md={4}>
            // @ts-expect-error TS(2749): 'BlogSidebar' refers to a value, but is being used... Remove this comment to see the full error message
            <BlogSidebar
              // @ts-expect-error TS(2304): Cannot find name 'popularTags'.
              popularTags={_tags}
              // @ts-expect-error TS(2304): Cannot find name 'categories'.
              categories={_categories}
              // @ts-expect-error TS(2304): Cannot find name 'recentPosts'.
              recentPosts={{ list: _blogCoursePosts.slice(-4) }}
              // @ts-expect-error TS(2304): Cannot find name 'advertisement'.
              advertisement={{
                // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
                title: 'Advertisement',
                // @ts-expect-error TS(2304): Cannot find name 'description'.
                description: 'Duis leo. Donec orci lectus, aliquam ut, faucibus non',
                // @ts-expect-error TS(2304): Cannot find name 'imageUrl'.
                imageUrl: _mock.image.course(10),
                // @ts-expect-error TS(2304): Cannot find name 'path'.
                path: '',
              }}
            // @ts-expect-error TS(2365): Operator '<' cannot be applied to types 'boolean' ... Remove this comment to see the full error message
            />
          </Grid>
        </Grid>
      </Container>
      // @ts-expect-error TS(2362): The left-hand side of an arithmetic operation must... Remove this comment to see the full error message
      <NewsletterElearning />
    </>
  );
}
