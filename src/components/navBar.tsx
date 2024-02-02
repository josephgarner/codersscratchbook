import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { useNavigate } from "react-router-dom";
import { Grid } from "@mui/material";

const pages = [
  { label: "Notebook", to: "/" },
  // { label: "About", to: "/About" },
];

function NavBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const navigate = useNavigate();

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  type NavProps = {
    to: string;
  };

  const handleCloseNavMenu = ({ to }: NavProps) => {
    navigate(to);
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" sx={{ background: "none", boxShadow: "none", border: "none" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box
            onClick={() => handleCloseNavMenu({ to: "/" })}
            sx={{ cursor: "pointer", flexGrow: 1, display: { xs: "flex", md: "none" }, justifyContent: "flex-start" }}
          >
            <img src="/assets/CSB_Logo.svg" height={30} />
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" }, justifyContent: "flex-end" }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.label} onClick={() => handleCloseNavMenu({ to: page.to })}>
                  <Typography textAlign="center">{page.label}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Grid
            container
            spacing={2}
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "flex-start",
              alignItems: "center",
            }}
          >
            <Grid item display={"flex"} alignItems={"center"}>
              <img
                onClick={() => handleCloseNavMenu({ to: "/" })}
                src="/assets/CSB_Logo.svg"
                height={20}
                style={{ cursor: "pointer" }}
              />
            </Grid>
            <Grid item>
              <Typography
                variant="h6"
                noWrap
                onClick={() => handleCloseNavMenu({ to: "/" })}
                sx={{
                  mr: 2,
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "inherit",
                  textDecoration: "none",
                  cursor: "pointer",
                }}
              >
                Coders Scratch Book
              </Typography>
            </Grid>
          </Grid>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" }, justifyContent: "flex-end" }}>
            {pages.map((page) => (
              <Button
                key={page.label}
                onClick={() => handleCloseNavMenu({ to: page.to })}
                sx={{ my: 2, color: "rgba(255, 255, 255, 0.7)", display: "block" }}
              >
                {page.label}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBar;
