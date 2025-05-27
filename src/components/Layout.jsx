import React from "react";
import NavSection from "./NavSection";
import FooterSection from "./FooterSection";
import { Outlet } from "react-router";

function Layout(){
    return(
        <div>
            <NavSection/>
            <main className="max-w-[1200px] m-auto border">
                <Outlet />
            </main>
            <FooterSection/>
        </div>
    )
}

export default Layout;