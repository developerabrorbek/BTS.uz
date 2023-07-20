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
        <nav aria-label="main mailbox folders" className="md:w-[300px]">
          <List className="grid justify-between gap-3">
            <ListItem className="w-full ">
              <NavLink to="/profile" className="w-full">
                <ListItemButton>
                  <ListItemIcon className="flex items-center justify-center bg-[#e5e7eb] rounded-full w-12   py-4 mr-3">
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
        </nav>
      </Box>
    </>
  );
};

export default ProfileAside;
