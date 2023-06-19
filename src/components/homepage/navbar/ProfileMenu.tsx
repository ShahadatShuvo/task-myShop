"use client";

import { useContext } from "react";
import { AllContext } from "../../../app/context";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ListAltOutlinedIcon from "@mui/icons-material/ListAltOutlined";
import Logout from "@mui/icons-material/Logout";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Settings from "@mui/icons-material/Settings";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Tooltip from "@mui/material/Tooltip";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Switch from "@mui/material/Switch";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

const AntSwitch = styled(Switch)(({ theme }) => ({
  width: 28,
  height: 16,
  padding: 0,
  display: "flex",
  "&:active": {
    "& .MuiSwitch-thumb": {
      width: 15,
    },
    "& .MuiSwitch-switchBase.Mui-checked": {
      transform: "translateX(9px)",
    },
  },
  "& .MuiSwitch-switchBase": {
    padding: 2,
    "&.Mui-checked": {
      transform: "translateX(12px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: theme.palette.mode === "dark" ? "#177ddc" : "#1890ff",
      },
    },
  },
  "& .MuiSwitch-thumb": {
    boxShadow: "0 2px 4px 0 rgb(0 35 11 / 20%)",
    width: 12,
    height: 12,
    borderRadius: 6,
    transition: theme.transitions.create(["width"], {
      duration: 200,
    }),
  },
  "& .MuiSwitch-track": {
    borderRadius: 16 / 2,
    opacity: 1,
    backgroundColor:
      theme.palette.mode === "dark"
        ? "rgba(255,255,255,.35)"
        : "rgba(0,0,0,.25)",
    boxSizing: "border-box",
  },
}));

export default function MenuBarIcon({
  openHeadline,
  setOpenHeadline,
}: {
  openHeadline: boolean;
  setOpenHeadline: any;
}) {
  const { isLightTheme, toggleTheme } = useContext(AllContext);

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  let fullName = "Shahadat Shuvo";
  return (
    <div>
      <Box sx={{ display: "flex", alignItems: "center", textAlign: "center" }}>
        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            className="text-white"
          >
            <AccountCircleIcon fontSize="large" />
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            ".css-6hp17o-MuiList-root-MuiMenu-list": { padding: 0 },
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <div
          className={isLightTheme ? "py-2" : "bg-[#1F2937] text-white  py-2"}
        >
          <MenuItem onClick={handleClose}>
            <div className="w-full flex justify-between">
              <div className="mr-2">
                <Image
                  src="/img/me.jpg"
                  alt="shopbag"
                  width={45}
                  height={45}
                  className="rounded-full"
                />
              </div>
              <div>
                <p className="text-lg font-semibold">{fullName}</p>
                <p className="text-sm">Cumilla, Bangladesh</p>
              </div>
            </div>
          </MenuItem>
          <Divider />
          <Link href="/account">
            <MenuItem onClick={handleClose}>
              <Avatar /> My account
            </MenuItem>
          </Link>

          <MenuItem onClick={handleClose}>
            <ListAltOutlinedIcon /> <p className="ml-3">My Order</p>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <FavoriteBorderIcon /> <p className="ml-3">Wishlist</p>
          </MenuItem>
          <MenuItem
            onClick={() => {
              setOpenHeadline((prevState: any) => !prevState);
            }}
          >
            {openHeadline ? (
              <div className="flex">
                <LockOutlinedIcon /> <p className="ml-3">Close Headline Bar</p>
              </div>
            ) : (
              <div className="flex">
                <LockOpenIcon /> <p className="ml-3">Open Headline Bar</p>
              </div>
            )}
          </MenuItem>

          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <PersonAdd
                fontSize="small"
                className={isLightTheme ? "" : "text-white"}
              />
            </ListItemIcon>
            Add another account
          </MenuItem>
          {/* Theme control start */}
          <MenuItem onClick={toggleTheme}>
            <AntSwitch checked={isLightTheme} />
            <span className="ml-2">
              Switch to{isLightTheme ? " Dark Theme" : " Light Theme"}
            </span>
          </MenuItem>
          {/* Theme control end */}
          <Link href="/dashboard">
            <MenuItem>
              <ListItemIcon>
                <Settings
                  fontSize="small"
                  className={isLightTheme ? "" : "text-white"}
                />
              </ListItemIcon>
              Settings
            </MenuItem>
          </Link>
          <MenuItem>
            <ListItemIcon>
              <Logout
                fontSize="small"
                className={isLightTheme ? "" : "text-white"}
              />
            </ListItemIcon>
            Logout
          </MenuItem>
        </div>
      </Menu>
    </div>
  );
}
