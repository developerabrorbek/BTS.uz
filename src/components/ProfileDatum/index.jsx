import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import CreditCardOutlinedIcon from "@mui/icons-material/CreditCardOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";

import { deepOrange } from "@mui/material/colors";
import { Avatar, Button } from "@mui/material";
import MapWrapper from "../Map";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const ProfileDatum = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div>
      <Box sx={{ flexGrow: 1, padding: "16px", width: "75vw" }}>
        <Grid container spacing={2} sx={{ justifyContent: "space-between" }}>
          <Grid item xs={5}>
            <Item>
              <div className="personal-datum">
                <div className="head flex items-center justify-between border-b pb-4 mb-4">
                  <div className="body flex items-center gap-x-4">
                    <Avatar
                      alt="Abrorbek Abdulxamidov"
                      src="/static/images/avatar/1.jpg"
                      sx={{ bgcolor: deepOrange[500] }}
                    />
                    <h3 className="font-bold text-[16px]">
                      Shaxsiy ma&apos;lumotlarim
                    </h3>
                  </div>
                  <Button variant="contained">O&apos;zgartirish</Button>
                </div>
                <div className="body p-3 ">
                  <h3 className="name text-left mb-6 font-semibold text-[15px] text-[#4b4a4a]">
                    {user.firstname} {user.lastname}
                  </h3>
                  <div className="number flex items-center gap-x-3 mb-2">
                    <span className="tel">Telefon:</span>
                    <p className="text-black">{user.phoneNumber}</p>
                  </div>
                  <div className="role flex items-center gap-x-3">
                    <span>Role: </span>
                    <p className="text-black">Admin</p>
                  </div>
                </div>
              </div>
            </Item>
          </Grid>
          <Grid item xs={5}>
            <Item>
              <div className="personal-cards">
                <div className="head flex items-center justify-between border-b pb-4 mb-4">
                  <div className="body flex items-center gap-x-4">
                    <div className="card flex items-center justify-center p-2 border border-[#475569] rounded-full">
                      <CreditCardOutlinedIcon />
                    </div>
                    <h3 className="font-bold text-[16px]">Mening kartalarim</h3>
                  </div>
                  <Button variant="contained" color="success">
                    Karta qo'shish
                  </Button>
                </div>
                <div className="body p-3 ">
                  <h3 className="name text-left mb-6 font-semibold text-[15px] text-[#4b4a4a]">
                    Kartalar:
                  </h3>
                  <div className="number flex items-center gap-x-3 mb-2">
                    <span className="tel text-[#1f2937] font-semibold">
                      Uzcard:{" "}
                    </span>
                    <p className="text-black">4444 4444 4444 4444</p>
                  </div>
                  <div className="number flex items-center gap-x-3 mb-2">
                    <span className="tel text-[#1f2937] font-semibold">
                      Visa:{" "}
                    </span>
                    <p className="text-black">1111 1111 1111 1111</p>
                  </div>
                </div>
              </div>
            </Item>
          </Grid>
          <Grid item xs={12}>
            <Item>
              <div className="personal-location">
                <div className="head flex items-center justify-between border-b pb-4 mb-4">
                  <div className="body flex items-center gap-x-4">
                    <div className="card flex items-center justify-center p-2 border border-[#475569] rounded-full">
                      <LocationOnOutlinedIcon />
                    </div>
                    <h3 className="font-bold text-[16px]">
                      Mening joylashuvim
                    </h3>
                  </div>
                  <Button variant="contained" color="primary">
                    Joyni o'zgartirish
                  </Button>
                </div>
                <div className="body p-3 ">
                  <MapWrapper />
                </div>
              </div>
            </Item>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default ProfileDatum;
