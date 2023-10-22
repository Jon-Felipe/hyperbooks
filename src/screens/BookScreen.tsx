import { useParams } from 'react-router-dom';

// mui
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

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
        <Typography
          component='p'
          variant='body2'
          sx={{ letterSpacing: '1px', margin: '10px 0' }}
        >
          About the Author: {foundBook?.authorDetails}
        </Typography>
        <Typography component='p' variant='h5'>
          ${foundBook?.price.toFixed(2)}
        </Typography>
        <Grid container spacing={2} sx={{ marginTop: '10px' }}>
          {/* vendor */}
          <Grid item md={3}>
            <Typography
              component='h3'
              variant='body1'
              sx={{ fontWeight: 'bold' }}
            >
              Vendor:{' '}
            </Typography>
          </Grid>
          <Grid item md={9}>
            <Typography>{foundBook?.vendor}</Typography>
          </Grid>
          {/* category */}
          <Grid item md={3}>
            <Typography
              component='h3'
              variant='body1'
              sx={{ fontWeight: 'bold' }}
            >
              Category:{' '}
            </Typography>
          </Grid>
          <Grid item md={9}>
            <Typography>{foundBook?.category}</Typography>
          </Grid>
          {/* language */}
          <Grid item md={3}>
            <Typography
              component='h3'
              variant='body1'
              sx={{ fontWeight: 'bold' }}
            >
              Language:{' '}
            </Typography>
          </Grid>
          <Grid item md={9}>
            <Typography>
              {foundBook?.language.map((lang, index) => (
                <Button
                  key={index}
                  variant='outlined'
                  size='small'
                  sx={{ margin: '0 5px 5px 0' }}
                >
                  {lang}
                </Button>
              ))}
            </Typography>
          </Grid>
          {/* quantity */}
          <Grid item md={3}>
            <Typography
              component='h3'
              variant='body1'
              sx={{ fontWeight: 'bold' }}
            >
              Quantity:{' '}
            </Typography>
          </Grid>
          <Grid item md={9}>
            <Select value={1} fullWidth size='small'>
              {Array.from(Array(foundBook?.countInStock).keys()).map(
                (item, index) => (
                  <MenuItem key={index + 1} value={item + 1}>
                    {item + 1}
                  </MenuItem>
                )
              )}
            </Select>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default BookScreen;
