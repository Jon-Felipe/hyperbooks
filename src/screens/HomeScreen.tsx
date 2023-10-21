import { useState } from 'react';

// components
import SideFilters from '../components/SideFilters';
import BookGridView from '../components/BookGridView';
import BookListView from '../components/BookListView';
import ToggleListButtons from '../components/ToggleListButtons';

// mui
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

function HomeScreen() {
  const [bookView, setBookView] = useState<string>('grid');

  const handleOnToggleBookViewChange = (
    e: React.MouseEvent<HTMLElement>,
    newBookView: string
  ) => {
    if (newBookView !== null) {
      setBookView(newBookView);
    }
  };

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} md={3}>
          <SideFilters />
        </Grid>
        <Grid item xs={12} md={9}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '20px',
            }}
          >
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
            <ToggleListButtons
              value={bookView}
              onChange={handleOnToggleBookViewChange}
            />
          </Box>
          {bookView == 'grid' ? (
            <BookGridView />
          ) : (
            bookView == 'list' && <BookListView />
          )}
        </Grid>
      </Grid>
    </>
  );
}

export default HomeScreen;
