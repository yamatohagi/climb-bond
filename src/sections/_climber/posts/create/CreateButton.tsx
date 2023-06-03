import { useState } from 'react';
import Button from '@mui/material/Button';
import ClimberPostCreateModal from './ClimberPostCreateModal';

export default function CreateButton() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)} variant="contained" size="large">
        新規投稿
      </Button>
      <ClimberPostCreateModal open={open} onClose={() => setOpen(false)} />
    </>
  );
}
