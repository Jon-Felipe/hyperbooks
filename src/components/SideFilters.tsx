// mui
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

// extras
import {
  popularBooks,
  fictionBooks,
  nonFictionBooks,
} from '../utils/constants';

type Props = {};

function SideFilters({}: Props) {
  return (
    <Paper sx={{ padding: '20px' }}>
      {/* Search Filter */}
      <TextField
        placeholder='ISBN, Title, Author...'
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
      {/* Popular filter */}
      <Box sx={{ marginTop: '40px' }}>
        <Typography variant='h6' component='p'>
          Popular Books
        </Typography>
        {popularBooks.map((book) => (
          <Box key={book.id} sx={{ margin: '15px 0' }}>
            <Typography
              variant='body2'
              component='button'
              sx={{ bgcolor: 'transparent', border: 'none', cursor: 'pointer' }}
              onClick={() => console.log('popular books')}
            >
              {book.name}
            </Typography>
          </Box>
        ))}
      </Box>
      {/* Fiction filter */}
      <Box sx={{ marginTop: '40px' }}>
        <Typography variant='h6' component='p'>
          Fiction
        </Typography>
        {fictionBooks.map((book) => (
          <Box key={book.id} sx={{ margin: '15px 0' }}>
            <Typography
              variant='body2'
              component='button'
              sx={{ bgcolor: 'transparent', border: 'none', cursor: 'pointer' }}
              onClick={() => console.log('popular books')}
            >
              {book.name}
            </Typography>
          </Box>
        ))}
      </Box>
      {/* Non-Fiction filter */}
      <Box sx={{ marginTop: '40px' }}>
        <Typography variant='h6' component='p'>
          Non-Fiction
        </Typography>
        {nonFictionBooks.map((book) => (
          <Box key={book.id} sx={{ margin: '15px 0' }}>
            <Typography
              variant='body2'
              component='button'
              sx={{ bgcolor: 'transparent', border: 'none', cursor: 'pointer' }}
              onClick={() => console.log('popular books')}
            >
              {book.name}
            </Typography>
          </Box>
        ))}
      </Box>
    </Paper>
  );
}

export default SideFilters;
