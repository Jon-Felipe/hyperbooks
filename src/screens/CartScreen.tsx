import { useState } from 'react';

// components
import CartSummary from '../components/CartSummary';

// mui
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';

const steps = ['Cart Summary', 'Checkout & Pay', 'Order Summary'];

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
        <CartSummary />
      </Box>
    </>
  );
}

export default CartScreen;
