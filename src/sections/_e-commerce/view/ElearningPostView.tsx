import { useState } from 'react';
// @mui
import { styled, alpha } from '@mui/material/styles';
import {
  Fab,
  Stack,
  Avatar,
  Divider,
  Popover,
  Checkbox,
  MenuItem,
  Container,
  Typography,
  IconButton,
  Unstable_Grid2 as Grid,
} from '@mui/material';
// routes
// @ts-expect-error TS(2307): Cannot find module 'src/routes/paths' or its corre... Remove this comment to see the full error message
import { paths } from 'src/routes/paths';
// utils
// @ts-expect-error TS(2307): Cannot find module 'src/utils/formatTime' or its c... Remove this comment to see the full error message
import { fDate } from 'src/utils/formatTime';
// @ts-expect-error TS(2307): Cannot find module 'src/utils/cssStyles' or its co... Remove this comment to see the full error message
import { bgGradient } from 'src/utils/cssStyles';
// hooks
// @ts-expect-error TS(2307): Cannot find module 'src/hooks/useResponsive' or it... Remove this comment to see the full error message
import useResponsive from 'src/hooks/useResponsive';
// _mock
// @ts-expect-error TS(2307): Cannot find module 'src/_mock' or its correspondin... Remove this comment to see the full error message
import { _socials, _blogCoursePosts } from 'src/_mock';
// components
// @ts-expect-error TS(2307): Cannot find module 'src/components/image' or its c... Remove this comment to see the full error message
import Image from 'src/components/image';
// @ts-expect-error TS(2307): Cannot find module 'src/components/iconify' or its... Remove this comment to see the full error message
import Iconify from 'src/components/iconify';
// @ts-expect-error TS(2307): Cannot find module 'src/components/markdown' or it... Remove this comment to see the full error message
import Markdown from 'src/components/markdown';
// @ts-expect-error TS(2307): Cannot find module 'src/components/custom-breadcru... Remove this comment to see the full error message
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';
//
import NewsletterElearning from '../../newsletter/e-learning';
import { BlogElearningLatestPosts } from '../../blog/e-learning';
import { PostTags, PostAuthor, PostSocialsShare, PostPrevAndNext } from '../../blog/components';

// ----------------------------------------------------------------------

const StyledOverlay = styled('div')(({ theme }) => ({
  ...bgGradient({
    startColor: `${alpha(theme.palette.common.black, 0)} 0%`,
    endColor: `${theme.palette.common.black} 75%`,
  }),
  top: 0,
  left: 0,
  zIndex: 8,
  width: '100%',
  height: '100%',
  position: 'absolute',
}));

// ----------------------------------------------------------------------

export default function ElearningPostView() {
  const isMdUp = useResponsive('up', 'md');

  const { title, description, duration, createdAt, author, favorited, heroImg, tags, content } =
    _blogCoursePosts[0];

  const [favorite, setFavorite] = useState(favorited);

  const [open, setOpen] = useState(null);

  const handleOpen = (event: any) => {
    setOpen(event.currentTarget);
  };

  const handleClose = () => {
    setOpen(null);
  };

  const handleChangeFavorite = (event: any) => {
    setFavorite(event.target.checked);
  };

  return (
    <>
      <Divider />

      <Container sx={{ overflow: 'hidden' }}>
        <CustomBreadcrumbs
          links={[
            { name: 'Home', href: '/' },
            { name: 'Blog', href: paths.eLearning.posts },
            { name: title },
          ]}
          sx={{ my: 5 }}
        />

        <Stack
          alignItems="center"
          justifyContent="center"
          sx={{ position: 'relative', borderRadius: 2, overflow: 'hidden' }}
        >
          <Fab
            color="primary"
            sx={{
              zIndex: 9,
              position: 'absolute',
            }}
          >
            <Iconify icon="carbon:play" width={24} />
          </Fab>

          <StyledOverlay />

          <Image alt="hero" src={heroImg} ratio={isMdUp ? '21/9' : '16/9'} />
        </Stack>

        <Grid container spacing={3} justifyContent={{ md: 'center' }}>
          <Grid xs={12} md={8}>
            <Stack
              spacing={3}
              sx={{
                pb: 6,
                textAlign: 'center',
                pt: { xs: 6, md: 10 },
              }}
            >
              <Typography variant="body2" sx={{ color: 'text.disabled' }}>
                {duration}
              </Typography>

              <Typography variant="h2" component="h1">
                {title}
              </Typography>

              <Typography variant="h5">{description}</Typography>
            </Stack>

            <Divider />

            <Stack direction="row" justifyContent="space-between" spacing={1.5} sx={{ py: 3 }}>
              <Avatar src={author.picture} sx={{ width: 48, height: 48 }} />

              <Stack spacing={0.5} flexGrow={1}>
                <Typography variant="subtitle2">{author.name}</Typography>
                <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                  {fDate(createdAt, 'dd/MM/yyyy p')}
                </Typography>
              </Stack>

              <Stack direction="row" alignItems="center">
                <IconButton onClick={handleOpen} color={open ? 'primary' : 'default'}>
                  <Iconify icon="carbon:share" />
                </IconButton>

                <Checkbox
                  color="error"
                  checked={favorite}
                  onChange={handleChangeFavorite}
                  icon={<Iconify icon="carbon:favorite" />}
                  checkedIcon={<Iconify icon="carbon:favorite-filled" />}
                />
              </Stack>
            </Stack>

            <Divider sx={{ mb: 6 }} />

            <Markdown content={content} firstLetter />

            <PostTags tags={tags} />

            <PostSocialsShare />

            <Divider sx={{ mt: 8 }} />

            <PostAuthor author={author} />

            <Divider />

            <PostPrevAndNext prevPost={_blogCoursePosts[1]} nextPost={_blogCoursePosts[2]} />
          </Grid>
        </Grid>
      </Container>

      <Divider />

      <BlogElearningLatestPosts posts={_blogCoursePosts.slice(0, 3)} />

      <NewsletterElearning />

      <Popover
        open={!!open}
        onClose={handleClose}
        anchorEl={open}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        transformOrigin={{ vertical: 'top', horizontal: 'center' }}
        PaperProps={{
          sx: { width: 220, p: 1 },
        }}
      >
        {_socials.map((social: any) => (
          <MenuItem key={social.value} onClick={handleClose} sx={{ typography: 'body2' }}>
            <Iconify icon={social.icon} width={24} sx={{ mr: 1, color: social.color }} />
            Share via {social.label}
          </MenuItem>
        ))}
      </Popover>
    </>
  );
}
