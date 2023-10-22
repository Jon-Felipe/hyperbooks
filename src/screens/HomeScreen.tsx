import { useState } from 'react';

// components
import SideFilters from '../components/SideFilters';
import BookGridView from '../components/BookGridView';
import BookListView from '../components/BookListView';
import ToggleListButtons from '../components/ToggleListButtons';
import DiscoverLinks from '../components/DiscoverLinks';

// mui
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

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
            <DiscoverLinks />
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
