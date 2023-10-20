// components
import SideFilters from '../components/SideFilters';
import BookGridView from '../components/BookGridView';

// mui
import Grid from '@mui/material/Grid';

type Props = {};

function HomeScreen({}: Props) {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <SideFilters />
        </Grid>
        <Grid item xs={12} md={8}>
          <BookGridView />
        </Grid>
      </Grid>
    </>
  );
}

export default HomeScreen;
