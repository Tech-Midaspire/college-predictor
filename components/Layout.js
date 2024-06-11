import React from "react";
import Navbar from "./navbar";
import FormPopup from "./FormPopup";
import Head from "next/head";
const Layout = ({ children }) => {
  return (
    <div className="bg-slate-950">
      
        
      <Head>
        <link rel="icon" href="/favicon-3.png" /> {/* Link to your favicon */}
        <title>Eduaspire</title>
      </Head>
      
      <FormPopup />
      <Navbar item1="College Predictor" item2="Scholarships" />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
