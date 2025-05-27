import React from "react";
import NavSection from "./NavSection";
import FooterSection from "./FooterSection";
import { Outlet } from "react-router";

function Layout(){
    return(
        <div>
            <NavSection/>
            <main>
                <h1>LAYOUT HERE 🙌</h1>
                <Outlet />
            </main>
            <FooterSection/>
        </div>
    )
}

export default Layout;