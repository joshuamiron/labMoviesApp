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
  const [movieAnchorEl, setMovieAnchorEl] = useState(null);
  const [myStuffAnchorEl, setMyStuffAnchorEl] = useState(null);
  const [tvAnchorEl, setTVAnchorEl] = useState(null);
  const [peopleAnchorEl, setPeopleAnchorEl] = useState(null);

  const open = Boolean(anchorEl);
  const movieOpen = Boolean(movieAnchorEl);
  const myStuffOpen = Boolean(myStuffAnchorEl);
  const tvOpen = Boolean(tvAnchorEl);
  const peopleOpen = Boolean(peopleAnchorEl);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));

  //----- Un-nested menu items (Home)
  const menuOptions = [
    { label: "Home", path: "/" },
  ];

  //----- All menu items displayed as a flat list for mobile
  const mobileMenuOptions = [
    { label: "Home", path: "/" },
    { label: "Upcoming", path: "/movies/upcoming" },
    { label: "Favorites", path: "/movies/favourites" },
    { label: "My Playlist", path: "/movies/myplaylist" },
    { label: "Popular Movies", path: "/movies/popular" },
    { label: "Made Up Movies", path: "/movies/mymadeupmovies" },
    { label: "Trending Movies", path: "/movies/trending" },
    { label: "Popular People", path: "/people/popular" },
    { label: "Trending People", path: "/people/trending" },
    { label: "Favourite People", path: "/people/favourites" },
    { label: "TV Shows", path: "/tv/shows" },
  ];

  //----- Menu items nexted by category into drop down menus
  const movieMenuOptions = [
    { label: "Home", path: "/" },
    { label: "Upcoming", path: "/movies/upcoming" },
    { label: "Popular Movies", path: "/movies/popular" },
    { label: "Trending Movies", path: "/movies/trending" },
  ];

  const myStuffMenuOptions = [
    { label: "Favorite Movies", path: "/movies/favourites" },
    { label: "My Movie Playlist", path: "/movies/myplaylist" },
    { label: "My Made Up Movies", path: "/movies/mymadeupmovies" },
    { label: "Favourite People", path: "/people/favourites" },
  ];

  const tvMenuOptions = [
    { label: "TV Shows", path: "/tv/shows" },
  ];

  const peopleMenuOptions = [
    //{ label: "Home", path: "/" },
    { label: "Trending People", path: "/people/trending" },
    { label: "Popular People", path: "/people/popular" },
  ];

  const handleMenuSelect = (pageURL) => {
    navigate(pageURL);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  //------ handleClick for Movies
  const handleMovieClick = (event) => {
    setMovieAnchorEl(event.currentTarget);
  };
  const handleMovieClose = () => {
    setMovieAnchorEl(null);
  };

  //------ handleClick for MyStuff
  const handleMyStuffClick = (event) => {
    setMyStuffAnchorEl(event.currentTarget);
  };
  const handleMyStuffClose = () => {
    setMyStuffAnchorEl(null);
  };

  //------ handleClick for TV
  const handleTVClick = (event) => {
    setTVAnchorEl(event.currentTarget);
  };
  const handleTVClose = () => {
    setTVAnchorEl(null);
  };

  //------ handleClick for People
  const handlePeopleClick = (event) => {
    setPeopleAnchorEl(event.currentTarget);
  };
  const handlePeopleClose = () => {
    setPeopleAnchorEl(null);
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
                  onClick={handleMovieClick} color="inherit">
                  Movies
                </Button>
                <Menu
                  anchorEl={movieAnchorEl}
                  open={movieOpen}
                  onClose={handleMovieClose}
                >
                  {movieMenuOptions.map((opt) => (
                    <MenuItem
                      key={opt.label}
                      onClick={() => handleMenuSelect(opt.path)}
                    >
                      {opt.label}
                    </MenuItem>
                  ))}
                </Menu>
                <Button
                  onClick={handleMyStuffClick} color="inherit">
                  My Stuff
                </Button>
                <Menu
                  anchorEl={myStuffAnchorEl}
                  open={myStuffOpen}
                  onClose={handleMyStuffClose}
                >
                  {myStuffMenuOptions.map((opt) => (
                    <MenuItem
                      key={opt.label}
                      onClick={() => handleMenuSelect(opt.path)}>
                      {opt.label}
                    </MenuItem>
                  ))}
                </Menu>
                <Button
                  onClick={handleTVClick} color="inherit">
                  TV Shows
                </Button>
                <Menu
                  anchorEl={tvAnchorEl}
                  open={tvOpen}
                  onClose={handleTVClose}
                >
                  {tvMenuOptions.map((opt) => (
                    <MenuItem
                      key={opt.label}
                      onClick={() => handleMenuSelect(opt.path)}>
                      {opt.label}
                    </MenuItem>
                  ))}
                </Menu>
                <Button
                  onClick={handlePeopleClick} color="inherit">
                  People
                </Button>
                <Menu
                  anchorEl={peopleAnchorEl}
                  open={peopleOpen}
                  onClose={handlePeopleClose}
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
