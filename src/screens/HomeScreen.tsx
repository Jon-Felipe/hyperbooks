// components
import SideFilters from '../components/SideFilters';
import BookGridView from '../components/BookGridView';
import ToggleListButtons from '../components/ToggleListButtons';

// mui
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

type Props = {};

function HomeScreen({}: Props) {
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
              justifyContent: 'flex-end',
              marginBottom: '20px',
            }}
          >
            <ToggleListButtons />
          </Box>
          <BookGridView />
        </Grid>
      </Grid>
    </>
  );
}

export default HomeScreen;
