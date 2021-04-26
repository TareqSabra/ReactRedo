import Navbar from "react-bootstrap/Navbar";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import Badge from "@material-ui/core/Badge";
import logo from "../../Resources/Pictures/Logo/logo.svg";
import React from "react";
function navBar({ taps, NavInfo }) {
  return (
    <div>
      <div>
        <Navbar expand="lg" variant="dark" bg="light" className="mh-25">
          <Navbar.Brand className="ml-5">
            <img src={logo} width="120" height="70" alt="logo" />
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end ">
            <Navbar.Brand className="text-dark mr-3">
              <Badge badgeContent={NavInfo.retweetValue} color="error">
                <RepeatIcon />
              </Badge>
            </Navbar.Brand>
            <Navbar.Brand className="text-dark mr-4">
              <Badge badgeContent={NavInfo.favValue} color="error">
                <FavoriteBorderIcon />
              </Badge>
            </Navbar.Brand>
            <Navbar.Brand className="text-dark mr-4">
              <Badge badgeContent={NavInfo.cart_badeValue} color="error">
                <ShoppingCartOutlinedIcon />
              </Badge>
            </Navbar.Brand>
            <Navbar.Brand>
              <Navbar.Text className="text-dark text-center">
                <div>Your Cart</div>
                <div>{"$" + NavInfo.cartValue}</div>
              </Navbar.Text>
            </Navbar.Brand>
          </Navbar.Collapse>
        </Navbar>
        <Navbar expand="lg" variant="dark" bg="dark" className="mh-20">
          <Navbar.Toggle />
          <Navbar.Collapse>
            {taps.map((item, index) => {
              return (
                <Navbar.Brand
                  href={item.tapUrl}
                  className={"ml-5 font-weight-bold text-light"}
                >
                  {item.tapTitel}
                </Navbar.Brand>
              );
            })}
          </Navbar.Collapse>
        </Navbar>
      </div>
    </div>
  );
}

export default navBar;
