import { useParams } from 'react-router-dom';

// mui
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';

// extras
import { dummy_books } from '../utils/constants';
import bookImg from '../assets/book2.jpg';

type Props = {};

function BookScreen({}: Props) {
  const { id } = useParams();

  const foundBook = dummy_books.find((book) => book.id == Number(id));

  return (
    <Grid container spacing={4}>
      <Grid item xs={12} md={8}>
        <Box
          component='img'
          src={bookImg}
          alt={foundBook?.title}
          sx={{ width: '100%' }}
        />
      </Grid>
      <Grid item xs={12} md={4}>
        <Typography component='h2' variant='h4'>
          {foundBook?.title}
        </Typography>
        <Rating
          value={foundBook?.rating}
          precision={0.5}
          readOnly
          size='large'
        />
      </Grid>
    </Grid>
  );
}

export default BookScreen;
