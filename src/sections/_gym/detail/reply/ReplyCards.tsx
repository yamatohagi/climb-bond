import { Card, Typography, Divider } from '@mui/material';
import { FindFirstGymQuery } from 'src/generated/graphql';

export default function ReplyCards({
  impressionPosts,
}: {
  impressionPosts: NonNullable<FindFirstGymQuery['findFirstGym']>['impressionPosts'];
}) {
  return (
    <div>
      {impressionPosts.map((impressionPost) => (
        <Card key={impressionPost.id} sx={{ mt: 2, p: 2 }}>
          <Typography variant="h6">{impressionPost.userName}</Typography>
          <Divider sx={{ my: 1 }} />
          <Typography variant="body1">{impressionPost.content}</Typography>
        </Card>
      ))}
    </div>
  );
}
