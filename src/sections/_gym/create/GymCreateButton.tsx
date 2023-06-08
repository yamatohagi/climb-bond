import { useState } from 'react';
import Button from '@mui/material/Button';
import GymCreateModal from './GymCreateModal';

export default function GymCreateButton({ refetch }: { refetch: () => void }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)} variant="contained" size="medium" sx={{ mb: 2 }}>
        新規投稿
      </Button>
      <GymCreateModal open={open} onClose={() => setOpen(false)} refetch={refetch} />
    </>
  );
}
