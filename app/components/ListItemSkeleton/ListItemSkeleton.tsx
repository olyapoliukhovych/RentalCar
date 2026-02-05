import { Skeleton, Box } from '@mui/material';

export const ListItemSkeleton = () => {
  return (
    <Box>
      <Box sx={{ mb: 2 }}>
        <Skeleton variant="rectangular" width={276} height={268} sx={{ borderRadius: '12px' }} />
      </Box>

      <Box sx={{ mb: 1, borderRadius: '12px' }}>
        <Skeleton variant="text" width="100%" height={20} />
      </Box>

      <Box sx={{ mb: 3.5, borderRadius: '12px' }}>
        <Skeleton variant="text" width="100%" height={40} />
      </Box>

      <Skeleton variant="rectangular" width="100%" height={44} sx={{ borderRadius: '12px' }} />
    </Box>
  );
};
