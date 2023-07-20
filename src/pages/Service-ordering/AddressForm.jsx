import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Box, Button } from "@mui/material";
import MapWrapper from "../../components/Map";
import axios from "../../configs/axios.config";
import Toaster from "../../components/Toaster";

export default function AddressForm({ setOrder, serviceId }) {
  const [data, setData] = React.useState(null);
  const [submit, setSubmit] = React.useState(false);
  const user = JSON.parse(localStorage.getItem("user"));
  const location = JSON.parse(localStorage.getItem("location"));
  const basketArr = JSON.parse(localStorage.getItem("basketArr"));
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    setData({
      customerFullName:
        formData.get("fullname") || user.firstname + user.lastname,
      phoneNumber: formData.get("phoneNumber") || user.phoneNumber,
      address: `${formData.get("address")} ${formData.get(
        "region"
      )} ${formData.get("city")}`,
      latitude: location.lat,
      longitude: location.lng,
      technicalServiceId: serviceId,
    });
  };

  React.useEffect(() => {
    if (submit) {
      axios
        .post("order-for-service/add", data)
        .then((data) => {
          Toaster.notify(300, "Successfully added");
          setOrder(data.data);
          console.log(data.data);
        })
        .catch((err) => Toaster.notify(404, err.response.data.message));
    }
  }, [data, submit]);

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Servecing address
      </Typography>
      <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="fullname"
              name="fullname"
              label="Full name"
              fullWidth
              variant="standard"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="phoneNumber"
              name="phoneNumber"
              label="Phone number"
              fullWidth
              variant="standard"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="address"
              name="address"
              label="Full address"
              fullWidth
              variant="standard"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="city"
              name="city"
              label="City"
              fullWidth
              variant="standard"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="region"
              name="region"
              label="Region"
              fullWidth
              variant="standard"
            />
          </Grid>
        </Grid>
        <Grid container spacing={3} sx={{ marginTop: "14px" }}>
          <Grid item xs={12}>
            <Typography variant="h5" sx={{ marginBottom: "14px " }}>
              Choose your location
            </Typography>
            <MapWrapper />
          </Grid>
        </Grid>

        <Grid item xs={12} sx={{ margin: "8px 0" }}>
          <FormControlLabel
            control={
              <Checkbox color="secondary" name="saveAddress" value="yes" />
            }
            label="Use this address for payment details"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Button
            type="submit"
            variant="contained"
            onClick={() => setSubmit(true)}
          >
            Submit location
          </Button>
        </Grid>
      </Box>
    </React.Fragment>
  );
}
