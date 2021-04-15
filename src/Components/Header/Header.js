import React, { useState } from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import AccountCircleSharpIcon from "@material-ui/icons/AccountCircleSharp";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import AddIcon from "@material-ui/icons/Add";
import { TextField } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import LocationList from "../constants";

const useStyles = makeStyles(() => ({
  header: {
    top: "0",
    width: "100%",
    height: "100%",
    backgroundSize: "cover",
    background: "transparent",
    opacity: "1",
  },
  typographyStyles: {
    color: "black",
    flex: 1,
  },
}));
const Header = ({ loc, addLoc }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [textInput, setTextInput] = useState("");
  const classes = useStyles();
  const handleClick = (event) => {
    console.log(event.currentTarget);
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleTextChange = (e) => {
    setTextInput(e.target.value);
  };
  const handleAdd = () => {
    if (!(textInput === "")) {
      const newLoc = { name: textInput };
      setTextInput("");
      addLoc(newLoc);
    }
  };

  return (
    <div>
      <AppBar className={classes.header} position="static">
        <Toolbar>
          <Typography className={classes.typographyStyles}>
            Weather Forecast App
          </Typography>
          <TextField
            value={textInput}
            type="text"
            variant="standard"
            label="Enter New Place"
            onChange={handleTextChange}
          />
          <IconButton aria-label="settings">
            <AddIcon onClick={handleAdd} />
          </IconButton>
          {"  "}
          <IconButton aria-label="settings">
            <AccountCircleSharpIcon
              aria-controls="fade-menu"
              aria-haspopup="true"
              onClick={handleClick}
            />
          </IconButton>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem disabled onClick={handleClose}>
              Profile
            </MenuItem>
            <MenuItem disabled onClick={handleClose}>
              My account
            </MenuItem>
            <MenuItem disabled onClick={handleClose}>
              Logout
            </MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
