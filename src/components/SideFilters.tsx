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
import { popularBooks } from '../utils/constants';

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
      {/* Category filter */}
      <Accordion sx={{ margin: '20px 0' }}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography
            component='h3'
            sx={{ fontSize: '16px', fontWeight: 'bold', letterSpacing: '1px' }}
          >
            Categories
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          {popularBooks.map((book) => (
            <Typography
              key={book.id}
              component='p'
              sx={{
                fontSize: '12px',
                fontWeight: 'bold',
                letterSpacing: '1px',
                marginBottom: '10px',
                color: '#a9a9a9',
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
