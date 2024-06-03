import React from "react";
import Navbar from "./navbar";
import FormPopup from "./FormPopup";

const Layout = ({ children }) => {
  return (
    <>
    <FormPopup/>
      <Navbar item1="College Predictor" item2="Scholarships" />
      <main>{children}</main>
    </>
  );
};

export default Layout;
