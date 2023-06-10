import { Card, Typography, Divider } from '@mui/material';
import { RepliesQuery } from 'src/generated/graphql';

export default function ReplyCards({ replies }: { replies: RepliesQuery['replies'] }) {
  return (
    <div>
      {replies.map((reply) => (
        <Card key={reply.id} sx={{ mt: 2, p: 2 }}>
          <Typography variant="h6">{reply.userName}</Typography>
          <Divider sx={{ my: 1 }} />
          <Typography variant="body1">{reply.content}</Typography>
        </Card>
      ))}
    </div>
  );
}
