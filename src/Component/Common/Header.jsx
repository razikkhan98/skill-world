import {
  Avatar,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import LogoutVariant from "mdi-material-ui/LogoutVariant";
const Header = () => {
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  return (
    <>
      {/* <!--Start topbar header--> */}
      <header className="topbar-nav">
        <nav className="navbar navbar-expand fixed-top">
          <ul className="navbar-nav mr-auto align-items-center">
            <li className="nav-item">
              <a className="nav-link toggle-menu" href="javascript:void();">
                <i className="icon-menu menu-icon"></i>
              </a>
            </li>
            <li className="nav-item">
              <form className="search-bar">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter keywords"
                />
                <a href="javascript:void();">
                  <i className="icon-magnifier"></i>
                </a>
              </form>
            </li>
          </ul>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem onClick={handleCloseUserMenu}>
                <Typography textAlign="center">
                  <LogoutVariant sx={{ marginRight: "10px" }} />
                  <Link to="/" className="logout">
                    Logout
                  </Link>
                </Typography>
              </MenuItem>
            </Menu>
          </Box>
        </nav>
      </header>
      {/* <!--End topbar header-->    </> */}
    </>
  );
};
export default Header;
