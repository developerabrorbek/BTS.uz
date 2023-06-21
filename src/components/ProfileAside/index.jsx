import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import RoofingOutlinedIcon from "@mui/icons-material/RoofingOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import { Divider } from "@mui/material";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import PersonOutlineRoundedIcon from "@mui/icons-material/PersonOutlineRounded";
import PaidOutlinedIcon from "@mui/icons-material/PaidOutlined";
import { NavLink } from "react-router-dom";

const ProfileAside = () => {
  return (
    <>
      <Box sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        <nav aria-label="main mailbox folders">
          <List>
            <ListItem>
              <NavLink to="/profile">
                <ListItemButton>
                  <ListItemIcon className="flex items-center justify-center bg-[#e5e7eb] rounded-full w-12 py-4 mr-3">
                    <PersonOutlineRoundedIcon />
                  </ListItemIcon>
                  <ListItemText primary="Mening ma'lumotlarim" />
                </ListItemButton>
              </NavLink>
            </ListItem>
            <Divider />
            <ListItem>
              <NavLink to="/profile/payments">
                <ListItemButton>
                  <ListItemIcon className="flex items-center justify-center bg-[#e5e7eb] rounded-full w-12 py-4 mr-3">
                    <PaidOutlinedIcon />
                  </ListItemIcon>
                  <ListItemText primary="Mening to'lovlarim" />
                </ListItemButton>
              </NavLink>
            </ListItem>
            <ListItem>
              <NavLink to="/profile/orders">
                <ListItemButton>
                  <ListItemIcon className="flex items-center justify-center bg-[#e5e7eb] rounded-full w-12 py-4 mr-3">
                    <LocalShippingOutlinedIcon />
                  </ListItemIcon>
                  <ListItemText primary="Buyurtmalar" />
                </ListItemButton>
              </NavLink>
            </ListItem>
            <ListItem>
              <NavLink to="/profile/used-services">
                <ListItemButton>
                  <ListItemIcon className="flex items-center justify-center bg-[#e5e7eb] rounded-full w-12 py-4 mr-3">
                    <RoofingOutlinedIcon />
                  </ListItemIcon>
                  <ListItemText primary="Foydalanilgan xizmatlar" />
                </ListItemButton>
              </NavLink>
            </ListItem>
            <ListItem>
              <NavLink to="/login">
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
