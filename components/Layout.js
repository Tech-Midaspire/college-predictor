import React from "react";
import Navbar from "./navbar";
import FormPopup from "./FormPopup";

const Layout = ({ children }) => {
  return (
    <>
     <Head>
        <link rel="icon" href="/favicon-3.png" /> {/* Link to your favicon */}
        <title>Eduaspire</title>
      </Head>
    <FormPopup/>
      <Navbar item1="College Predictor" item2="Scholarships" />
      <main>{children}</main>
    </>
  );
};

export default Layout;
