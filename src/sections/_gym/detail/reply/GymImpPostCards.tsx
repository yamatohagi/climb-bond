import { Card, Typography, Divider, Stack, Box } from '@mui/material';
import Iconify from 'src/components/iconify/Iconify';
import { FindFirstGymQuery, GymImpPostsQuery } from 'src/generated/graphql';
import { LikeButton } from './components/like-button';

export default function GymImpPostCards({
  impPosts,
}: {
  impPosts: GymImpPostsQuery['gymImpPosts'];
}) {
  return (
    <div>
      {impPosts.map((impPost) => (
        <Card key={impPost.id} sx={{ mt: 2, p: 2 }}>
          <Typography variant="h6">{impPost.userName}</Typography>
          <Divider sx={{ my: 1 }} />
          <Typography variant="body1">{impPost.content}</Typography>

          <Stack
            spacing={0.5}
            sx={{ px: 3, pb: 2, pt: 2.3, mx: 4, color: 'text.secondary' }}
            direction="row"
            justifyContent="space-between"
          >
            {/* <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Iconify icon="ps:chat-alt" width={17} sx={{ mr: 1 }} />{' '}
              {impPost.likes ? impPost.likes.length : 0}{' '}
            </Box> */}

            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <LikeButton likes={impPost.likes} postId={impPost.id} gymId={impPost.gymId} />
            </Box>
          </Stack>
        </Card>
      ))}
    </div>
  );
}
