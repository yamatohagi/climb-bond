import { useState } from 'react';
import { Button, TextField, Box } from '@mui/material';

export default function PostReply() {
  const [replyText, setReplyText] = useState('');

  const handleInputChange = (event: any) => {
    setReplyText(event.target.value);
  };

  const handleReplySubmit = () => {
    // ここでリプライをAPIに送信します。
    console.log(replyText);
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
