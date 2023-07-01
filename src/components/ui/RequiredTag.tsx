import { Box } from '@mui/material';

const RequiredTag = () => (
  <Box
    component="span"
    sx={{
      backgroundColor: 'error.main',
      color: 'white',
      borderRadius: '4px',
      padding: '2px 4px',
      fontWeight: 'bold',
      fontSize: 11,
      mr: 0.3,
    }}
  >
    必須
  </Box>
);

export default RequiredTag;
