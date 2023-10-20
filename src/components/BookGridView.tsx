// mui
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

// extra
import { dummy_books } from '../utils/constants';

function BookGridView() {
  return (
    <Grid container spacing={2}>
      {dummy_books.map((book) => (
        <Grid key={book.id} item xs={12} md={6}>
          <Card variant='outlined'>
            <CardContent>
              <Typography variant='body1' component='h3' noWrap>
                {book.name}
              </Typography>
              <Typography variant='body2' component='p'>
                {book.category}
              </Typography>
              <Rating
                value={book.rating}
                size='small'
                precision={0.5}
                readOnly
              />
              <Typography variant='caption' component='p'>
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
