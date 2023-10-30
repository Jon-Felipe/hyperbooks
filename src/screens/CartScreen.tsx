import { useState } from 'react';

// mui
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const steps = ['Shopping Summary', 'Checkout', 'Order Summary'];

type Props = {};

function CartScreen({}: Props) {
  const [activeStep, setActiveStep] = useState<number>(0);

  return (
    <>
      <Box sx={{ width: '100%' }}>
        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map((step, index) => (
            <Step key={index}>
              <StepLabel>{step}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </Box>
    </>
  );
}

export default CartScreen;
