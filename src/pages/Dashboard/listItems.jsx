import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import AssignmentIcon from '@mui/icons-material/Assignment';
import PersonIcon from '@mui/icons-material/Person';
import LayersIcon from '@mui/icons-material/Layers';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import { Link } from 'react-router-dom';


export const mainListItems = (
  <React.Fragment>
      <ListItemButton>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItemButton>
      <ListItemButton href='/dashboard/profile'>
        <ListItemIcon>
          <PersonIcon />
        </ListItemIcon>
        <ListItemText primary="My profile" />
      </ListItemButton>
    <ListItemButton onClick={() => navigate('/dashboard/orders')}>
      <ListItemIcon>
        <ShoppingCartIcon />
      </ListItemIcon>
      <ListItemText primary="Orders" />
    </ListItemButton>
    <ListItemButton onClick={() => navigate('/dashboard/categories')}>
      <ListItemIcon>
        <LayersIcon />
      </ListItemIcon>
      <ListItemText primary="Categories" />
    </ListItemButton>
    <ListItemButton onClick={() => navigate('/dashboard/products')}>
      <ListItemIcon>
        <LocalMallIcon />
      </ListItemIcon>
      <ListItemText primary="Products" />
    </ListItemButton>
    <ListItemButton onClick={() => navigate('/dashboard/customers')}>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Customers" />
    </ListItemButton>
    <ListItemButton onClick={() => navigate('/dashboard/reports')}>
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="Reports" />
    </ListItemButton>
    <ListItemButton onClick={() => navigate('/dashboard/admins')}>
      <ListItemIcon>
        <AccessibilityNewIcon />
      </ListItemIcon>
      <ListItemText primary="Admins" />
    </ListItemButton>
  </React.Fragment>
);

export const secondaryListItems = (
  <React.Fragment>
    <ListSubheader component="div" inset>
      Saved reports
    </ListSubheader>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Current month" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Last quarter" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Year-end sale" />
    </ListItemButton>
  </React.Fragment>
);