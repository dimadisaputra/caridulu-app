import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import IconButton from "@mui/material/IconButton";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import MenuIcon from "@mui/icons-material/Menu";

export default function TemporaryDrawer({ setListOpen }) {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {["Utama", "Pengguna", "Riwayat Pencarian"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton onClick={() => setListOpen(text)}>
              <ListItemIcon>
                {index === 0 && <HomeIcon />}
                {index === 1 && <AccountBoxIcon />}
                {index === 2 && <SearchIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <IconButton onClick={toggleDrawer(true)} size="large">
        <MenuIcon className="text-green-500" fontSize="inherit"></MenuIcon>
      </IconButton>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
