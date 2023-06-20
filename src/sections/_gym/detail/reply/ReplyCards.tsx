import { Card, Typography, Divider } from '@mui/material';
import { FindFirstGymQuery } from 'src/generated/graphql';

export default function ReplyCards({
  impPosts,
}: {
  impPosts: NonNullable<FindFirstGymQuery['findFirstGym']>['impPosts'];
}) {
  return (
    <div>
      {impPosts.map((impPost) => (
        <Card key={impPost.id} sx={{ mt: 2, p: 2 }}>
          <Typography variant="h6">{impPost.userName}</Typography>
          <Divider sx={{ my: 1 }} />
          <Typography variant="body1">{impPost.content}</Typography>
        </Card>
      ))}
    </div>
  );
}
