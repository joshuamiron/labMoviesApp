import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Grid from "@mui/material/Grid";

const styles = {
  title: {
    flexGrow: 1,
  },
  appbar: {
    // background: 'none',
  },
  // offset: theme.mixins.toolbar,
};

const Offset = styled("div")(({ theme }) => theme.mixins.toolbar);

const SiteHeader = () => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));

  /* const menuOptions = [
    { label: "Home", path: "/" },
    { label: "Upcoming", path: "/movies/upcoming"},
    { label: "Favorites", path: "/movies/favourites" },
    { label: "My Playlist", path: "/movies/myplaylist" },
    { label: "Popular Movies", path: "/movies/popular" },
    { label: "Made Up Movies", path: "/movies/mymadeupmoviespage" },
    { label: "Trending Movies", path: "/movies/trending" },
    { label: "Trending People", path: "/people/trending" },
  ]; */

  const mobileMenuOptions = [
    { label: "Home", path: "/" },
    { label: "Upcoming", path: "/movies/upcoming"},
    { label: "Favorites", path: "/movies/favourites" },
    { label: "My Playlist", path: "/movies/myplaylist" },
    { label: "Popular Movies", path: "/movies/popular" },
    { label: "Made Up Movies", path: "/movies/mymadeupmoviespage" },
    { label: "Trending Movies", path: "/movies/trending" },
    { label: "Trending People", path: "/people/trending" },
  ]; 

  const movieMenuOptions = [
    { label: "Home", path: "/" },
    { label: "Upcoming", path: "/movies/upcoming"},
    { label: "Favorites", path: "/movies/favourites" },
    { label: "My Playlist", path: "/movies/myplaylist" },
    { label: "Popular Movies", path: "/movies/popular" },
    { label: "Made Up Movies", path: "/movies/mymadeupmoviespage" },
    { label: "Trending Movies", path: "/movies/trending" },
  ];

  const tvMenuOptions = [
    { label: "Home", path: "/" },
  ];

  const peopleMenuOptions = [
    { label: "Home", path: "/" },
    { label: "Trending People", path: "/people/trending" },
  ];

  const handleMenuSelect = (pageURL) => {
    navigate(pageURL);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <AppBar sx={styles.appbar} position="fixed" elevation={0} color="primary">
        <Toolbar>
          <Typography variant="h4" sx={styles.title}>
            TMDB Client
          </Typography>
          <Typography variant="h6" sx={styles.title}>
            All you ever wanted to know about Movies!
          </Typography>
          {isMobile ? (
            <>
              <IconButton
                aria-label="menu"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
                size="large"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={open}
                onClose={() => setAnchorEl(null)}
              >
                {mobileMenuOptions.map((opt) => (
                  <MenuItem
                    key={opt.label}
                    onClick={() => handleMenuSelect(opt.path)}
                  >
                    {opt.label}
                  </MenuItem>
                ))}
              </Menu>
            </>
          ) : (
            <>
              {/*{menuOptions.map((opt) => (
                <Button
                  key={opt.label}
                  color="inherit"
                  onClick={() => handleMenuSelect(opt.path)}
                >
                  {opt.label}
                </Button>
              ))}*/}
              <Grid>
                <Button
                  onClick={handleClick} color="inherit">
                    Movies
                </Button>
                <Menu
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                >
                  {movieMenuOptions.map((opt) => (
                    <MenuItem 
                      key={opt.label}
                      onClick={() => handleMenuSelect(opt.path)}>
                        {opt.label}
                    </MenuItem>
                  ))}
                </Menu>
                <Button
                  onClick={handleClick} color="inherit">
                    People
                </Button>
                <Menu
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                >
                  {peopleMenuOptions.map((opt) => (
                    <MenuItem 
                      key={opt.label}
                      onClick={() => handleMenuSelect(opt.path)}>
                        {opt.label}
                    </MenuItem>
                  ))}
                </Menu>         
              </Grid>
            </>
          )}
        </Toolbar>
      </AppBar>
      <Offset />

      {/* <div className={classes.offset} /> */}
    </>
  );
};

export default SiteHeader;
