// mui
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

type Props = {};

function DiscoverLinks({}: Props) {
  return (
    <Stack direction='row' spacing={{ xs: 1, sm: 2, md: 8, lg: 10 }}>
      <Typography
        variant='body1'
        component='a'
        sx={{
          fontSize: { xs: '14px', sx: '18px', md: '24px' },
          fontWeight: 'bold',
          cursor: 'pointer',
        }}
      >
        For You
      </Typography>
      <Typography
        variant='body1'
        component='a'
        sx={{
          fontSize: { xs: '14px', sx: '18px', md: '24px' },
          fontWeight: 'bold',
          cursor: 'pointer',
        }}
      >
        New Releases
      </Typography>
      <Typography
        variant='body1'
        component='a'
        sx={{
          fontSize: { xs: '14px', sx: '18px', md: '24px' },
          fontWeight: 'bold',
          cursor: 'pointer',
        }}
      >
        Amazon Best Seller
      </Typography>
    </Stack>
  );
}

export default DiscoverLinks;
