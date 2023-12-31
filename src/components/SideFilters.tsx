// mui
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

// extras
import { bookLanguages, popularBooks } from '../utils/constants';

type Props = {};

function SideFilters({}: Props) {
  return (
    <Box component='aside'>
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
      <Accordion
        square
        disableGutters
        variant='outlined'
        defaultExpanded
        sx={{ marginTop: '20px' }}
      >
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
            <Box
              key={book.id}
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '10px',
              }}
            >
              <Typography
                component='p'
                sx={{
                  fontSize: '12px',
                  fontWeight: 'bold',
                  letterSpacing: '1px',
                  color: '#333',
                }}
                onClick={() => console.log('popular books')}
              >
                {book.name}
              </Typography>
              <Typography
                component='p'
                sx={{
                  fontSize: '12px',
                  fontWeight: 'bold',
                  color: '#a9a9a9',
                }}
              >
                {book.amount}
              </Typography>
            </Box>
          ))}
        </AccordionDetails>
      </Accordion>
      {/* Language filter */}
      <Accordion square disableGutters variant='outlined' defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography
            component='h3'
            sx={{ fontSize: '16px', fontWeight: 'bold', letterSpacing: '1px' }}
          >
            Language
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <FormGroup>
            {bookLanguages.map((bookLang) => (
              <FormControlLabel
                key={bookLang.id}
                control={<Checkbox size='small' />}
                label={bookLang.language}
              />
            ))}
          </FormGroup>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}

export default SideFilters;
