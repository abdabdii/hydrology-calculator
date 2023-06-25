"use client";
import { Inter } from "next/font/google";
import { usePathname } from "next/navigation";
const inter = Inter({ subsets: ["latin"] });

// import {
//   AppBar,
//   Toolbar,
//   Typography,
//   Drawer,
//   List,
//   ListItem,
//   ListItemIcon,
//   ListItemText,
// } from "@mui/material";
import AppRegistrationOutlinedIcon from "@mui/icons-material/AppRegistrationOutlined";
const drawerWidth = 240;
const styles = {
  root: {
    display: "flex",
  },
  appBar: {
    height: 64,
    zIndex: 2,
    backgroundColor: "gray",
    paddingLeft: "150px",
    textTransform: "uppercase",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: "#2196f3",
    padding: "20px",
  },
  drawerContainer: {
    overflow: "auto",
    backgroundColor: "#2196f3",
  },
  content: {
    flexGrow: 1,
    padding: "20px",
    marginLeft: "-95px",
  },
};

import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';


const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    backgroundColor: "#2196f3",
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

export default function RootLayout({ children }) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  const pathname = usePathname();
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar position="fixed" open={open}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{
                marginRight: 5,
                ...(open && { display: 'none' }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap component="div">
              {pathname.slice(1).toUpperCase()}
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open}  >
          <DrawerHeader  >
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
            </IconButton>
          </DrawerHeader>
          <Divider />

          <List >
              <ListItem disablePadding sx={{ display: 'block' }}                   
               >
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? 'initial' : 'center',
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : 'auto',
                      justifyContent: 'center',
                    }}
                  >
                    <AppRegistrationOutlinedIcon />
                  </ListItemIcon>
                  <ListItemText primary="planning" sx={{ opacity: open ? 1 : 0 }} />
                </ListItemButton>
              </ListItem>
          </List>

          </Drawer>
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <DrawerHeader />
          <main >
              <div>{children}</div>
          </main>
        </Box>
    </Box>

         {/* <div style={styles.root}>
          <AppBar position="fixed" style={styles.appBar}>
            <Toolbar>
              <Typography variant="h6" noWrap>
                {pathname.slice(1)}
              </Typography>
            </Toolbar>
          </AppBar>
           <Drawer
            style={styles.drawer}
            variant="permanent"
            classes={{
              paper: styles.drawerPaper,
            }}
            sx={{
              "& .MuiPaper-elevation": {
                backgroundColor: "#2196f3",
                paddingTop: "32px",
                width: "150px",
              },
            }}
          >
            <Toolbar />
            <div style={styles.drawerContainer}>
              <List style={{ color: "white", textTransform: "uppercase" }}>
                <ListItem
                  button
                  style={{
                    color: "white",
                    backgroundColor:
                      pathname == "/planning" ? "rgba(0, 0, 0, 0.30)" : "",
                  }}
                >
                  <ListItemIcon style={{ minWidth: "34px" }}>
                    <AppRegistrationOutlinedIcon style={{ color: "white" }} />
                  </ListItemIcon>
                  <ListItemText primary="planning" />
                </ListItem>
              </List>
            </div>
          </Drawer>
          <main style={styles.content}>
            <Toolbar />
            <div>{children}</div>
          </main>
        </div> */}
      </body>
    </html>
  );
}
