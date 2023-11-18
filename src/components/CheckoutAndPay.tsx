// mui
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormLabel from '@mui/material/FormLabel';

function CheckoutAndPay() {
  return (
    <Grid container spacing={2} sx={{ marginTop: '20px' }}>
      <Grid item xs={12} md={6}>
        <Typography component='h3' variant='h4' fontWeight='bold'>
          Buyer Info
        </Typography>
        <Grid container spacing={2} sx={{ marginTop: '10px' }}>
          {/* first name */}
          <Grid item xs={12} md={6}>
            <FormControl fullWidth>
              <FormLabel htmlFor='firstName'>First Name</FormLabel>
              <OutlinedInput
                id='firstName'
                type='text'
                name='firstName'
                placeholder='Your First Name'
              />
            </FormControl>
          </Grid>
          {/* last name */}
          <Grid item xs={12} md={6}>
            <FormControl fullWidth>
              <FormLabel htmlFor='lastName'>Last Name</FormLabel>
              <OutlinedInput
                id='lastName'
                type='text'
                name='lastName'
                placeholder='Your Last Name'
              />
            </FormControl>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} md={6}>
        Payment
      </Grid>
    </Grid>
  );
}

export default CheckoutAndPay;
