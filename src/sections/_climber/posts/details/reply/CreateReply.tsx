import { useState } from 'react';
import { Button, TextField, Box } from '@mui/material';
import { useCreateOneReplyMutation } from 'src/generated/graphql';

export default function PostReply({ postId }: { postId: number }) {
  const [replyText, setReplyText] = useState('');
  const [createOneReplyMutation] = useCreateOneReplyMutation();

  const handleInputChange = (event: any) => {
    setReplyText(event.target.value);
  };

  const handleReplySubmit = async () => {
    const res = await createOneReplyMutation({
      variables: {
        data: {
          title: '',
          userName: '',
          content: replyText,
          post: {
            connect: { id: postId },
          },
        },
      },
    });
    setReplyText(''); // テキストフィールドをリセットします。
  };

  return (
    <Box sx={{ mt: 2 }}>
      <TextField
        value={replyText}
        onChange={handleInputChange}
        multiline
        rows={4}
        fullWidth
        variant="outlined"
        placeholder="ここに返信を入力してください..."
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleReplySubmit}
        sx={{ mt: 2 }}
        disabled={!replyText.trim()}
      >
        返信を送信
      </Button>
    </Box>
  );
}
