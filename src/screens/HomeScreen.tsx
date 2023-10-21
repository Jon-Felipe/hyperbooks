// components
import SideFilters from '../components/SideFilters';
import BookGridView from '../components/BookGridView';

// mui
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import ToggleButton from '@mui/material/ToggleButton';
import GridViewRoundedIcon from '@mui/icons-material/GridViewRounded';
import MenuIcon from '@mui/icons-material/Menu';

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
            <ToggleButtonGroup>
              <ToggleButton value={''}>
                <GridViewRoundedIcon />
              </ToggleButton>
              <ToggleButton value={''}>
                <MenuIcon />
              </ToggleButton>
            </ToggleButtonGroup>
          </Box>
          <BookGridView />
        </Grid>
      </Grid>
    </>
  );
}

export default HomeScreen;
