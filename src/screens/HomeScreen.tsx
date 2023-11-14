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
              display: { sm: 'flex' },
              justifyContent: 'flex-end',
              columnGap: '20px',
              marginBottom: { sm: '15px' },
            }}
          >
            {/* sort selector */}
            <Box sx={{ margin: { xs: '15px 0', sm: 0 }, minWidth: '150px' }}>
              <Sort />
            </Box>
            {/* limit selector */}
            <Box sx={{ margin: { xs: '15px 0', sm: 0 }, minWidth: '150px' }}>
              <Limit />
            </Box>
            {/* toogle books buttons */}
            <Box sx={{ margin: { xs: '15px 0', sm: 0 } }}>
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
