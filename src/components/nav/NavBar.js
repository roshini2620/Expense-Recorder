import AppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

const NavBar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton size="large" edge="start" color="inherit" aria-label="logo">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div">
          Expense Recorder
        </Typography>
        
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
