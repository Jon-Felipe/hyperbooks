// mui
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

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
      <Accordion sx={{ margin: '20px 0' }}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant='h6' component='p'>
            Popular Books
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          {popularBooks.map((book) => (
            <Typography
              key={book.id}
              variant='body2'
              component='button'
              sx={{
                display: 'block',
                bgcolor: 'transparent',
                border: 'none',
                cursor: 'pointer',
              }}
              onClick={() => console.log('popular books')}
            >
              {book.name}
            </Typography>
          ))}
        </AccordionDetails>
      </Accordion>
      {/* Fiction filter */}
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant='h6' component='p'>
            Fiction
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          {fictionBooks.map((book) => (
            <Typography
              key={book.id}
              variant='body2'
              component='button'
              sx={{
                display: 'block',
                bgcolor: 'transparent',
                border: 'none',
                cursor: 'pointer',
              }}
              onClick={() => console.log('popular books')}
            >
              {book.name}
            </Typography>
          ))}
        </AccordionDetails>
      </Accordion>
      {/* Non-Fiction filter */}
      <Accordion sx={{ marginTop: '20px' }}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant='h6' component='p'>
            Non-Fiction
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          {nonFictionBooks.map((book) => (
            <Typography
              key={book.id}
              variant='body2'
              component='button'
              sx={{
                display: 'block',
                bgcolor: 'transparent',
                border: 'none',
                cursor: 'pointer',
              }}
              onClick={() => console.log('popular books')}
            >
              {book.name}
            </Typography>
          ))}
        </AccordionDetails>
      </Accordion>
    </Paper>
  );
}

export default SideFilters;
