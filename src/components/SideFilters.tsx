// mui
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

type Props = {};

function SideFilters({}: Props) {
  return (
    <Paper sx={{ padding: '20px' }}>
      {/* Search Filter */}
      <TextField
        placeholder='Title, Author...'
        variant='standard'
        fullWidth
        InputProps={{
          endAdornment: (
            <InputAdornment position='end'>
              <SearchOutlinedIcon />
            </InputAdornment>
          ),
        }}
      />
    </Paper>
  );
}

export default SideFilters;
