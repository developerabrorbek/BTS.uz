import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import RoofingOutlinedIcon from "@mui/icons-material/RoofingOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import { Divider, Grid, Typography } from "@mui/material";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import PersonOutlineRoundedIcon from "@mui/icons-material/PersonOutlineRounded";
import PaidOutlinedIcon from "@mui/icons-material/PaidOutlined";
import { NavLink } from "react-router-dom";

const ProfileAside = () => {
  return (
    <>
      <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
        <nav aria-label="main mailbox folders" className="hidden md:block">
          <List className="grid justify-between gap-3">
            <ListItem className="w-full ">
              <NavLink to="/profile" className="w-full">
                <ListItemButton>
                  <ListItemIcon className="flex md:items-center md:justify-center md:bg-[#e5e7eb] md:rounded-full w-4 md:w-12 py-1 mr-2 md:py-4 md:mr-3">
                    <PersonOutlineRoundedIcon />
                  </ListItemIcon>
                  <ListItemText primary="Mening ma'lumotlarim" />
                </ListItemButton>
              </NavLink>
            </ListItem>
            <Divider />
            <ListItem>
              <NavLink to="/profile/payments" className="w-full">
                <ListItemButton>
                  <ListItemIcon className="flex items-center justify-center bg-[#e5e7eb] rounded-full w-12 py-4 mr-3">
                    <PaidOutlinedIcon />
                  </ListItemIcon>
                  <ListItemText primary="Mening to'lovlarim" />
                </ListItemButton>
              </NavLink>
            </ListItem>
            <ListItem>
              <NavLink to="/profile/orders" className="w-full">
                <ListItemButton>
                  <ListItemIcon className="flex items-center justify-center bg-[#e5e7eb] rounded-full w-12 py-4 mr-3">
                    <LocalShippingOutlinedIcon />
                  </ListItemIcon>
                  <ListItemText primary="Buyurtmalar" />
                </ListItemButton>
              </NavLink>
            </ListItem>
            <ListItem>
              <NavLink to="/profile/used-services" className="w-full">
                <ListItemButton>
                  <ListItemIcon className="flex items-center justify-center bg-[#e5e7eb] rounded-full w-12 py-4 mr-3">
                    <RoofingOutlinedIcon />
                  </ListItemIcon>
                  <ListItemText primary="Foydalanilgan xizmatlar" />
                </ListItemButton>
              </NavLink>
            </ListItem>
            <ListItem>
              <NavLink to="/" className="w-full">
                <ListItemButton>
                  <ListItemIcon className="flex items-center justify-center bg-[#e5e7eb] rounded-full w-12 py-4 mr-3">
                    <LogoutOutlinedIcon />
                  </ListItemIcon>
                  <ListItemText primary="Chiqish" />
                </ListItemButton>
              </NavLink>
            </ListItem>
          </List>
          {/* <Grid
            container
            rowSpacing={2}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            sx={{alignItems : "center"}}
          >
            <Grid item xs={6}>
              <NavLink to="/profile" className="flex items-center gap-x-1">
                <PersonOutlineRoundedIcon />
                <Typography>Mening ma&apos;lumotlarim</Typography>
              </NavLink>
            </Grid>
            <Grid item xs={6}>
              <NavLink
                to="/profile/payments"
                className="flex items-center gap-x-1"
              >
                <PaidOutlinedIcon />
                <Typography>Mening to&apos;lovlarim</Typography>
              </NavLink>
            </Grid>
            <Grid item xs={6}>
              <NavLink
                to="/profile/orders"
                className="flex items-center gap-x-1"
              >
                <LocalShippingOutlinedIcon />
                <Typography>Buyurtmalar</Typography>
              </NavLink>
            </Grid>
            <Grid item xs={6}>
              <NavLink
                to="/profile/used-services"
                className="flex items-center gap-x-1"
              >
                <RoofingOutlinedIcon />
                <Typography>Foydalanilgan xizmatlar</Typography>
              </NavLink>
            </Grid>
            <Grid item xs={12}>
              <NavLink
                to="/"
                className="flex items-center justify-center gap-x-1"
              >
                <LogoutOutlinedIcon />
                <Typography>Chiqish</Typography>
              </NavLink>
            </Grid>
          </Grid> */}
        </nav>
      </Box>
    </>
  );
};

export default ProfileAside;
