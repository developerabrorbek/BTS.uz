import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import AddressForm from "./AddressForm";
import Review from "./Review";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useParams } from "react-router-dom";

const steps = ["Service address", "Review your order"];

const defaultTheme = createTheme();

export default function OrderService() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [order, setOrder] = React.useState({});

  const { id } = useParams();

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <>
      <Header />
      <ThemeProvider theme={defaultTheme}>
        <CssBaseline />
        <Container component="main" maxWidth="md" sx={{ mb: 4 }}>
          <Paper
            variant="outlined"
            sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
          >
            <Typography component="h1" variant="h4" align="center">
              Checkout Service order
            </Typography>
            <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
            {activeStep === steps.length ? (
              <React.Fragment>
                <Typography variant="h5" gutterBottom>
                  Thank you for your service-order.
                </Typography>
                <Typography variant="subtitle1">
                  Your phone number saved on our call center. As soon as
                  posssible they will contact with you...
                </Typography>
                <Button href="/" variant="contained">
                  Home
                </Button>
              </React.Fragment>
            ) : (
              <React.Fragment>
                {activeStep == 0 ? (
                  <AddressForm setOrder={setOrder} serviceId={id} />
                ) : (
                  <Review order={order} />
                )}
                <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                  {activeStep !== 0 && (
                    <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                      Back
                    </Button>
                  )}

                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 3, ml: 1 }}
                  >
                    {activeStep === steps.length - 1
                      ? "Place service order"
                      : "Next"}
                  </Button>
                </Box>
              </React.Fragment>
            )}
          </Paper>
        </Container>
      </ThemeProvider>
      <Footer />
    </>
  );
}
