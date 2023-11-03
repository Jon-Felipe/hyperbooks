import { useState } from 'react';

// components
import SideFilters from '../components/SideFilters';
import BookGridView from '../components/BookGridView';
import BookListView from '../components/BookListView';
import ToggleListButtons from '../components/ToggleListButtons';

// mui
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

// extra
import { dummy_books } from '../utils/constants';

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
            <Typography component='h6' variant='body2'>
              Showing all {dummy_books.length} results
            </Typography>
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
