import { useState } from 'react';

// mui
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

const steps = ['Shopping Summary', 'Checkout & Pay', 'Order Summary'];

type Props = {};

function CartScreen({}: Props) {
  const [activeStep, setActiveStep] = useState<number>(0);

  return (
    <>
      <Box sx={{ width: '100%' }}>
        {/* stepper */}
        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map((step, index) => (
            <Step key={index}>
              <StepLabel>{step}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <Grid container spacing={4} sx={{ marginTop: '20px' }}>
          {/* cart items */}
          <Grid item md={8}>
            <TableContainer>
              <Table sx={{ minWidth: 650 }}>
                <TableHead>
                  <TableRow>
                    <TableCell>Product</TableCell>
                    <TableCell>Price</TableCell>
                    <TableCell>Quantity</TableCell>
                    <TableCell>Subtotal</TableCell>
                    <TableCell></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell component='th' scope='row'>
                      The Overdue Life of Amy Byler
                    </TableCell>
                    <TableCell>$37.00</TableCell>
                    <TableCell>2</TableCell>
                    <TableCell>$74.00</TableCell>
                    <TableCell>x </TableCell>
                  </TableRow>
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
              <Typography
                component='h6'
                variant='body1'
                sx={{ marginTop: '10px' }}
              >
                Subtotal
              </Typography>
              <Typography component='p' variant='body2'>
                $74.00
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Typography
                component='h6'
                variant='body1'
                sx={{ marginTop: '10px' }}
              >
                Shipping
              </Typography>
              <Typography component='p' variant='body2'>
                Free Shipping
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Typography
                component='h6'
                variant='body1'
                sx={{ marginTop: '10px' }}
              >
                Total
              </Typography>
              <Typography component='p' variant='body2'>
                $74.00
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default CartScreen;
