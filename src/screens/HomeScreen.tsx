import { useState } from 'react';

// components
import SideFilters from '../components/SideFilters';
import BookGridView from '../components/BookGridView';
import BookListView from '../components/BookListView';
import ToggleListButtons from '../components/ToggleListButtons';
import Sort from '../components/Sort';
import Limit from '../components/Limit';

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
            <Typography
              component='h6'
              sx={{
                fontSize: '14px',
                fontWeight: 'bold',
                letterSpacing: '1px',
              }}
            >
              Showing all {dummy_books.length} results
            </Typography>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                columnGap: '20px',
                width: '400px',
              }}
            >
              {/* sort selector */}
              <Sort />
              {/* limit selector */}
              <Limit />
              {/* toogle books buttons */}
              <ToggleListButtons
                value={bookView}
                onChange={handleOnToggleBookViewChange}
              />
            </Box>
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
