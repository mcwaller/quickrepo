import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  colors,
} from "@mui/material";

interface NavLink {
  title: string;
  path: string;
  icon: React.ReactElement;
}

interface NavBarListDrawerProps {
  navArrayLinks: NavLink[];
}

export default function NavBarListDrawer({
  navArrayLinks,
}: NavBarListDrawerProps) {
  return (
    <>
      <Box sx={{ width: 250 }}>
        {/*<nav>
          <List>
            <ListItem>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary="Inbox" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <Drafts />
              </ListItemIcon>
              <ListItemText primary="Drafts" />
            </ListItem>
          </List>
        </nav> 
        <Divider />*/}
        <nav>
          <List>
            {navArrayLinks.map((item) => (
              <ListItem disablePadding key={item.title}>
                <ListItemButton component="a" href={item.path}>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  {item.title}
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </nav>
      </Box>
    </>
  );
}
