import { Skeleton, Box } from '@mui/material';

export const ListItemSkeleton = () => {
  return (
    <Box sx={{ width: 276 }}>
      <Box sx={{ mb: 2 }}>
        <Skeleton variant="rectangular" width={276} height={268} sx={{ borderRadius: '12px' }} />
      </Box>

      <Box sx={{ mb: 1, borderRadius: '12px' }}>
        <Skeleton variant="rectangular" width="100%" height={20} sx={{ borderRadius: '12px' }} />
      </Box>

      <Box sx={{ mb: 3.5, borderRadius: '12px' }}>
        <Skeleton variant="rectangular" width="100%" height={40} sx={{ borderRadius: '12px' }} />
      </Box>

      <Skeleton variant="rectangular" width="100%" height={44} sx={{ borderRadius: '12px' }} />
    </Box>
  );
};
