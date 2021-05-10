import React from 'react';
import LogoutButton from "./LogoutButton";
import L0ginButton from "./LoginButton";
import Profile from "./Profile";
import ProductListing from "./ProductListing";



const Header = () => {
  return (
      <div className={"heads"}>
              <h2 className={"akashShop"}><a href={"/"}>Akash Shop</a></h2>
              <LogoutButton/>
              <L0ginButton/>
              <Profile/>
      </div>
  )
};

export default Header;
