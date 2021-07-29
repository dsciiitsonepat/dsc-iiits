import {
  AppBar,
  Drawer,
  IconButton,
  Link,
  makeStyles,
  MenuItem,
  Toolbar,
  Button
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import * as Md from "react-icons/md";
import logo from "../assets/logo4.JPG";

const navData = [
	{
	  label: "Home",
	  href: "/home",
	},
	{
	  label: "Team",
	  href: "/team",
	},
	{
	  label: "Events",
	  href: "/events",
	},
	{
	  label: "Contact Us",
	  href: "/contact",
	},
  ];
  

const useStyles = makeStyles(() => ({
  header: {
    backgroundColor: "transparent",
	paddingTop:"32px",
    paddingRight: "79px",
    paddingLeft: "118px",
    "@media (max-width: 900px)": {
      paddingLeft: 0,
    },
  },
  logo: {
    fontFamily: "Work Sans, sans-serif",
    fontWeight: 600,
    color: "#FFFEFE",
    textAlign: "left",
  },
  menuButton: {
    fontFamily: "Open Sans, sans-serif",
    fontWeight: 700,
    size: "18px",
    marginLeft: "38px",
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
	color:"black"
  },
  drawerContainer: {
    padding: "20px 30px",
  },
}));

export default function Header() {
  const { header,toolbar } = useStyles();
  const [state, setState] = useState({
    mobileView: false,
    drawerOpen: false,
  });

  const { mobileView, drawerOpen } = state;

  useEffect(() => {
    const setResponsive = () => {
      return window.innerWidth < 900
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }));
    };
    setResponsive();
    window.addEventListener("resize", setResponsive);
    return () => {
      window.removeEventListener("resize", setResponsive);
    };
  }, []);

  const navBarDesktop = () => {
    return (
      <Toolbar className={toolbar}>
        <img src={logo} style={{width:"30%"}}></img>
        <div style={{width:"55%", display:"flex", justifyContent:"space-around"}}>{getMenu()}</div>
      </Toolbar>
    );
  };

  const navBarMobile = () => {
    const handleDrawerOpen = () => {
      setState((prevState) => ({ ...prevState, drawerOpen: true }));
    };
    const handleDrawerClose = () => {
      setState((prevState) => ({ ...prevState, drawerOpen: false }));
    };

    return (
      <Toolbar>
        <IconButton onClick={handleDrawerOpen}>
          <Md.MdMenu />
        </IconButton>
        <Drawer open={drawerOpen} onClose={handleDrawerClose}>
          <div>{getMobileMenu()}</div>
        </Drawer>
        <img src={logo} style={{width:"100%"}}></img>
      </Toolbar>
    );
  };

  const getMobileMenu = () => {
    return navData.map(({ label, link }) => {
      return (
        <Link
          {...{
            to: link,
            color: "inherit",
            style: { textDecoration: "none" },
            key: label,
          }}
        >
			<MenuItem>{label}</MenuItem>
		</Link>
      );
    });
  };


  const getMenu = () => {
    return navData.map(({ label, href }) => {
      return (
        <Button
          {...{
            key: label,
            color: "inherit",
            to: href,
          }}
        >
          {label}
        </Button>
      );
    });
  };

  return (
    <header>
      <AppBar className={header} elevation={0}>
        {mobileView ? navBarMobile() : navBarDesktop()}
      </AppBar>
    </header>
  );
}
