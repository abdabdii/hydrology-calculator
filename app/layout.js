"use client";
import { Inter } from "next/font/google";
import { usePathname } from "next/navigation";
const inter = Inter({ subsets: ["latin"] });

import {
  AppBar,
  Toolbar,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import AppRegistrationOutlinedIcon from "@mui/icons-material/AppRegistrationOutlined";
  
const drawerWidth = 240;

const styles = {
  root: {
    display: "flex",
  },
  appBar: {
    height: 64,
    zIndex: 2,
    backgroundColor: "#2196f3",
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

export default function RootLayout({ children }) {
  const pathname = usePathname();
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>
        <div style={styles.root}>
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
        </div>
      </body>
    </html>
  );
}
