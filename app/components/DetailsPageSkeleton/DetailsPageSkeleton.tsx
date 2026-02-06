import { Skeleton, Box } from '@mui/material';

export const DetailsPageSkeleton = () => {
  return (
    <Box
      sx={{
        width: '100%',
        maxWidth: 1200,
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'row',
        gap: '68px',
        justifyContent: 'center',
        alignItems: 'flex-start',
        padding: '84px 0 0 0',
      }}
    >
      <Box>
        <Skeleton variant="rectangular" width={640} height={512} sx={{ borderRadius: '19px' }} />
      </Box>

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '68px',
          flexGrow: 1,
        }}
      >
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <Skeleton variant="text" width="70%" sx={{ fontSize: '32px', mb: 1 }} />
          <Skeleton variant="text" width="60%" sx={{ fontSize: '20px', mb: 1.5 }} />
          <Skeleton variant="text" width="10%" sx={{ fontSize: '32px', mb: 3 }} />
          <Skeleton variant="rectangular" width="100%" height={40} sx={{ borderRadius: '12px' }} />
        </Box>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
          <Box>
            <Skeleton variant="text" width="40%" sx={{ fontSize: '20px', mb: 2.5 }} />
            <Skeleton variant="text" width="30%" sx={{ fontSize: '16px', mb: 2 }} />
            <Skeleton variant="text" width="40%" sx={{ fontSize: '16px', mb: 2 }} />
            <Skeleton variant="text" width="50%" sx={{ fontSize: '16px', mb: 2 }} />
          </Box>

          <Box>
            <Skeleton variant="text" width="40%" sx={{ fontSize: '20px', mb: 2.5 }} />
            <Skeleton variant="text" width="20%" sx={{ fontSize: '16px', mb: 2 }} />
            <Skeleton variant="text" width="20%" sx={{ fontSize: '16px', mb: 2 }} />
            <Skeleton variant="text" width="40%" sx={{ fontSize: '16px', mb: 2 }} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
