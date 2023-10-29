import { useState } from 'react';
import { useParams } from 'react-router-dom';

// mui
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';
import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

// extras
import { dummy_books } from '../utils/constants';
import bookImg from '../assets/book2.jpg';

type Props = {};

function BookScreen({}: Props) {
  const [language, setLanguage] = useState<string>('');
  const [quantity, setQuantity] = useState<number>(1);

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
            {foundBook?.language.map((lang, index) => (
              <Button
                key={index}
                variant={lang == language ? 'contained' : 'outlined'}
                size='small'
                sx={{ margin: '0 5px 5px 0' }}
                onClick={() => setLanguage(lang)}
              >
                {lang}
              </Button>
            ))}
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
            <Select
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              fullWidth
              size='small'
            >
              {Array.from(Array(foundBook?.countInStock).keys()).map(
                (item, index) => (
                  <MenuItem key={index + 1} value={index + 1}>
                    {item + 1}
                  </MenuItem>
                )
              )}
            </Select>
          </Grid>
        </Grid>

        <Grid container spacing={2} sx={{ marginTop: '10px' }}>
          <Grid item md={6}>
            <Button
              variant='contained'
              startIcon={<ShoppingBasketOutlinedIcon />}
              size='large'
              fullWidth
            >
              Add To Cart
            </Button>
          </Grid>
          <Grid item md={6}>
            <Button
              variant='outlined'
              startIcon={<FavoriteBorderOutlinedIcon />}
              size='large'
              fullWidth
            >
              Add To Wishlist
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default BookScreen;
