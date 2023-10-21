// mui
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

// extra
import { dummy_books } from '../utils/constants';
import bookImg from '../assets/book2.jpg';

function BookGridView() {
  return (
    <Grid container spacing={2}>
      {dummy_books.map((book) => (
        <Grid key={book.id} item xs={12} md={6}>
          <Card variant='outlined' sx={{ display: 'flex', height: 200 }}>
            <CardMedia
              component='img'
              image={bookImg}
              sx={{ width: 151 }}
              alt={book.title}
            />
            <CardContent>
              <Typography variant='body1' component='h3' gutterBottom>
                {book.title}
              </Typography>
              <Typography variant='body2' component='p' gutterBottom>
                {book.category}
              </Typography>
              <Rating
                value={book.rating}
                size='small'
                precision={0.5}
                readOnly
              />
              <Typography variant='caption' component='p' gutterBottom>
                ${book.price.toFixed(2)}
              </Typography>
              <Button variant='outlined' size='small'>
                Add To Cart
              </Button>
              <IconButton size='small' sx={{ ml: 1 }}>
                <FavoriteBorderOutlinedIcon fontSize='small' />
              </IconButton>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

export default BookGridView;
