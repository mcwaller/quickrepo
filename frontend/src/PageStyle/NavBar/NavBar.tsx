import {
  AppBar,
  Box,
  Button,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import NavBarListDrawer from "./NavBarListDrawer";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";

interface NavLink {
  title: string;
  path: string;
  icon: React.ReactElement;
}

interface NavBarListDrawerProps {
  navArrayLinks: NavLink[];
}

export default function NavBar({ navArrayLinks }: NavBarListDrawerProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <AppBar position="static" color="primary">
        <Toolbar>
          <IconButton
            color="inherit"
            size="large"
            onClick={() => setOpen(true)}
            sx={{ display: { xs: "flex", sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navArrayLinks.map((item) => (
              <Button
                color="inherit"
                key={item.title}
                component="a"
                href={item.path}
              >
                {item.title}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      {/*<Button variant="contained">Open Drawer</Button>*/}
      <Drawer
        open={open}
        anchor="left"
        onClose={() => setOpen(false)}
        sx={{ display: { xs: "flex", sm: "none" } }}
      >
        <NavBarListDrawer navArrayLinks={navArrayLinks} />
      </Drawer>
    </>
  );
}
