import { useAppSelector } from '../utils/hooks';

// mui
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

type Props = {};

function CartSummary({}: Props) {
  const { cartItems } = useAppSelector((state) => state.cart);

  return (
    <Grid container spacing={4} sx={{ marginTop: '20px' }}>
      {/* cart items */}
      <Grid item md={8}>
        <TableContainer>
          <Table sx={{ minWidth: 650 }}>
            <TableHead>
              <TableRow>
                <TableCell
                  sx={{
                    fontWeight: 'bold',
                    fontSize: '16px',
                    letterSpacing: '1px',
                  }}
                >
                  Product
                </TableCell>
                <TableCell
                  sx={{
                    fontWeight: 'bold',
                    fontSize: '16px',
                    letterSpacing: '1px',
                  }}
                >
                  Price
                </TableCell>
                <TableCell
                  sx={{
                    fontWeight: 'bold',
                    fontSize: '16px',
                    letterSpacing: '1px',
                  }}
                >
                  Quantity
                </TableCell>
                <TableCell
                  sx={{
                    fontWeight: 'bold',
                    fontSize: '16px',
                    letterSpacing: '1px',
                  }}
                >
                  Subtotal
                </TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {cartItems.map((cartItem) => (
                <TableRow key={cartItem.book.id}>
                  <TableCell component='th' scope='row'>
                    {cartItem.book.title}
                  </TableCell>
                  <TableCell>${cartItem.book.price}</TableCell>
                  <TableCell>{cartItem.quantity}</TableCell>
                  <TableCell>$74.00</TableCell>
                  <TableCell>
                    <IconButton aria-label='delete'>
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
      {/* cart total summary */}
      <Grid item md={4}>
        <Typography component='h3' variant='h5'>
          Cart Totals
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography component='h6' variant='body1' sx={{ marginTop: '10px' }}>
            Subtotal
          </Typography>
          <Typography component='p' variant='body2'>
            $74.00
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography component='h6' variant='body1' sx={{ marginTop: '10px' }}>
            Shipping
          </Typography>
          <Typography component='p' variant='body2'>
            Free Shipping
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography component='h6' variant='body1' sx={{ marginTop: '10px' }}>
            Total
          </Typography>
          <Typography component='p' variant='body2'>
            $74.00
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
}

export default CartSummary;
