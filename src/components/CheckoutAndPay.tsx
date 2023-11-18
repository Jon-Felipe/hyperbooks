// mui
import Grid from '@mui/material/Grid';

function CheckoutAndPay() {
  return (
    <Grid container spacing={2} sx={{ marginTop: '20px' }}>
      <Grid item xs={12} md={6}>
        Buyer Info
      </Grid>
      <Grid item xs={12} md={6}>
        Payment
      </Grid>
    </Grid>
  );
}

export default CheckoutAndPay;
