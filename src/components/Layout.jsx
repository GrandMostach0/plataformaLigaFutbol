import React from "react";
import NavSection from "./NavSection";
import FooterSection from "./FooterSection";
import { Outlet } from "react-router";

function Layout(){
    return(
        <div>
            <NavSection/>
            <main className="px-3 m-auto">
                <Outlet />
            </main>
            <FooterSection/>
        </div>
    )
}

export default Layout;