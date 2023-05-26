// @mui
import { Divider, Container, Typography, Unstable_Grid2 as Grid } from '@mui/material';
// routes
// @ts-expect-error TS(2307): Cannot find module 'src/routes/paths' or its corre... Remove this comment to see the full error message
import { paths } from 'src/routes/paths';
// _mock
// @ts-expect-error TS(2307): Cannot find module 'src/_mock' or its correspondin... Remove this comment to see the full error message
import _mock, { _blogTravelPosts, _tags, _categories } from 'src/_mock';
// components
// @ts-expect-error TS(2307): Cannot find module 'src/components/markdown' or it... Remove this comment to see the full error message
import Markdown from 'src/components/markdown';
// @ts-expect-error TS(2307): Cannot find module 'src/components/custom-breadcru... Remove this comment to see the full error message
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';
//
import BlogSidebar from '../../blog/sidebar';
import NewsletterTravel from '../../newsletter/travel';
import { PostTags, PostAuthor, PostSocialsShare } from '../../blog/components';
import { BlogTravelPostHero, BlogTravelLatestPosts } from '../../blog/travel';

// ----------------------------------------------------------------------

export default function TravelPostView() {
  const { title, description, author, tags, content } = _blogTravelPosts[0];

  return (
    <>
      // @ts-expect-error TS(2709): Cannot use namespace 'BlogTravelPostHero' as a typ... Remove this comment to see the full error message
      <BlogTravelPostHero post={_blogTravelPosts[0]} />

      // @ts-expect-error TS(2749): 'Container' refers to a value, but is being used a... Remove this comment to see the full error message
      <Container>
        <CustomBreadcrumbs
          // @ts-expect-error TS(2304): Cannot find name 'sx'.
          sx={{ my: 3 }}
          // @ts-expect-error TS(2304): Cannot find name 'links'.
          links={[
            // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
            { name: 'Home', href: '/' },
            { name: 'Blog', href: paths.travel.posts },
            { name: title },
          ]}
        />
      </Container>

      // @ts-expect-error TS(2304): Cannot find name 'sx'.
      <Divider sx={{ mb: { xs: 6, md: 10 } }} />

      <Container>
        // @ts-expect-error TS(2749): 'Grid' refers to a value, but is being used as a t... Remove this comment to see the full error message
        <Grid container spacing={{ md: 8 }}>
          // @ts-expect-error TS(2749): 'Grid' refers to a value, but is being used as a t... Remove this comment to see the full error message
          <Grid xs={12} md={8}>
            // @ts-expect-error TS(2749): 'Typography' refers to a value, but is being used ... Remove this comment to see the full error message
            <Typography variant="h5" sx={{ mb: 5 }}>
              // @ts-expect-error TS(18004): No value exists in scope for the shorthand propert... Remove this comment to see the full error message
              {description}
            </Typography>

            // @ts-expect-error TS(2304): Cannot find name 'content'.
            <Markdown content={content} firstLetter />

            // @ts-expect-error TS(2709): Cannot use namespace 'PostTags' as a type.
            <PostTags tags={tags} />

            // @ts-expect-error TS(2362): The left-hand side of an arithmetic operation must... Remove this comment to see the full error message
            <PostSocialsShare />

            // @ts-expect-error TS(2749): 'Divider' refers to a value, but is being used as ... Remove this comment to see the full error message
            <Divider sx={{ mt: 8 }} />

            // @ts-expect-error TS(2304): Cannot find name 'author'.
            <PostAuthor author={author} />
          </Grid>

          // @ts-expect-error TS(2304): Cannot find name 'xs'.
          <Grid xs={12} md={4}>
            // @ts-expect-error TS(2749): 'BlogSidebar' refers to a value, but is being used... Remove this comment to see the full error message
            <BlogSidebar
              // @ts-expect-error TS(2304): Cannot find name 'popularTags'.
              popularTags={_tags}
              // @ts-expect-error TS(2304): Cannot find name 'author'.
              author={author}
              // @ts-expect-error TS(2304): Cannot find name 'categories'.
              categories={_categories}
              // @ts-expect-error TS(2304): Cannot find name 'recentPosts'.
              recentPosts={{ list: _blogTravelPosts.slice(-4) }}
              // @ts-expect-error TS(2304): Cannot find name 'advertisement'.
              advertisement={{
                // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
                title: 'Advertisement',
                // @ts-expect-error TS(2304): Cannot find name 'description'.
                description: 'Duis leo. Donec orci lectus, aliquam ut, faucibus non',
                // @ts-expect-error TS(2304): Cannot find name 'imageUrl'.
                imageUrl: _mock.image.travel(9),
                // @ts-expect-error TS(2304): Cannot find name 'path'.
                path: '',
              }}
            // @ts-expect-error TS(2365): Operator '<' cannot be applied to types 'boolean' ... Remove this comment to see the full error message
            />
          </Grid>
        </Grid>
      </Container>

      // @ts-expect-error TS(2304): Cannot find name 'posts'.
      <BlogTravelLatestPosts posts={_blogTravelPosts.slice(0, 4)} />

      // @ts-expect-error TS(2749): 'NewsletterTravel' refers to a value, but is being... Remove this comment to see the full error message
      <NewsletterTravel />
    </>
  );
}
