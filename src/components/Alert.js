import * as React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

export default function BasicAlerts() {
  return (
    <Stack sx={{ width: '80%',ml:4 }} spacing={4}>
      <Alert variant="outlined" severity="info">
      <div>Welcome</div>
      
      </Alert>
    </Stack>
  );
}