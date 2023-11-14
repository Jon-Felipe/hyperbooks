import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useAppDispatch } from '../utils/hooks';
import { addToCart } from '../slices/cartSlice';

// mui
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
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
  const dispatch = useAppDispatch();

  const foundBook = dummy_books.find((book) => book.id == Number(id));

  const onAddToCartHandler = () => {
    const cartObj = {
      book: foundBook,
      language,
      quantity,
    };
    if (!language) {
      toast.error('Please choose a language');
      return;
    }
    dispatch(addToCart(cartObj));
    toast.success('Item added to cart');
  };

  return (
    <Grid container spacing={4}>
      <Grid item md={4}>
        <Box
          component='img'
          src={bookImg}
          alt={foundBook?.title}
          sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </Grid>
      <Grid item md={7}>
        <Typography component='h2' variant='h5' fontWeight='bold'>
          {foundBook?.title}
        </Typography>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            columnGap: '10px',
            margin: '5px 0',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              columnGap: '10px',
            }}
          >
            <Rating value={foundBook?.rating} precision={0.5} readOnly />
            <Typography component='p' variant='body2'>
              ({foundBook?.numOfReviews})
            </Typography>
          </Box>
          <Typography component='p' variant='body2'>
            By (author) {foundBook?.author}
          </Typography>
        </Box>
        <Typography component='p' variant='h6' marginBottom='5px'>
          ${foundBook?.price.toFixed(2)}
        </Typography>
        <Typography component='p' variant='body2'>
          {foundBook?.description}
        </Typography>
        <Grid container spacing={1} sx={{ marginTop: '5px' }}>
          {/* vendor */}
          <Grid item md={3} lg={2}>
            <Typography
              component='h3'
              variant='body1'
              sx={{ fontWeight: 'bold' }}
            >
              Vendor:{' '}
            </Typography>
          </Grid>
          <Grid item md={9} lg={10}>
            <Typography component='p' variant='body2'>
              {foundBook?.vendor}
            </Typography>
          </Grid>
          {/* category */}
          <Grid item md={3} lg={2}>
            <Typography
              component='h3'
              variant='body1'
              sx={{ fontWeight: 'bold' }}
            >
              Category:{' '}
            </Typography>
          </Grid>
          <Grid item md={9} lg={10}>
            <Typography component='p' variant='body2'>
              {foundBook?.category}
            </Typography>
          </Grid>
          {/* language */}
          <Grid item md={3} lg={2}>
            <Typography
              component='h3'
              variant='body1'
              sx={{ fontWeight: 'bold' }}
            >
              Language:{' '}
            </Typography>
          </Grid>
          <Grid item md={9} lg={10}>
            <Stack direction='row' spacing={1}>
              {foundBook?.language.map((lang, index) => (
                <Button
                  key={index}
                  variant={lang == language ? 'contained' : 'outlined'}
                  size='small'
                  onClick={() => setLanguage(lang)}
                >
                  {lang}
                </Button>
              ))}
            </Stack>
          </Grid>
          {/* quantity */}
          <Grid item md={3} lg={2}>
            <Typography
              component='h3'
              variant='body1'
              sx={{ fontWeight: 'bold' }}
            >
              Quantity:{' '}
            </Typography>
          </Grid>
          <Grid item md={9} lg={10}>
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
              onClick={onAddToCartHandler}
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
