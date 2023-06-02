import { Card, Typography, Divider } from '@mui/material';

export default function PostReplies({ replies }: { replies: any[] }) {
  return (
    <div>
      {replies.map((reply) => (
        <Card key={reply.id} sx={{ mt: 2, p: 2 }}>
          <Typography variant="h6">{reply.username}</Typography>
          <Divider sx={{ my: 1 }} />
          <Typography variant="body1">{reply.replyText}</Typography>
        </Card>
      ))}
    </div>
  );
}
