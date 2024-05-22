"use client";

import { useState } from "react";

import Logo from "./Logo";
import Searchbar from "./Searchbar";
import Navlinks from "./Navlinks";
import Menubar from "./Menubar";

export default function Header() {
    const [toggle, setToggle] = useState(false);

    const toggleMenubar = () => {
        console.log(toggle);
        setToggle(!toggle);
    }

    return (
        <div className="px-4 py-2 bg-zinc-800 text-white border-b-4 border-violet-600 md:px-28">
            <div className="flex justify-between items-center">
                <div className="flex items-center gap-4">
                    <Logo />
                    <Searchbar />
                </div>
                <div className="hidden items-center gap-4 lg:flex">
                    <Navlinks />
                </div>
                <div 
                    onClick={() => toggleMenubar()}
                    className="px-2 flex flex-col gap-1 cursor-pointer lg:hidden">
                    <span className="w-1 h-1 bg-white"></span>
                    <span className="w-1 h-1 bg-white"></span>
                    <span className="w-1 h-1  bg-white"></span>
                </div>
                <div className="absolute right-5 top-12  bg-zinc-950 border border-slate-700 rounded-xl lg:hidden">
                    <Menubar toggle={toggle}/>                    
                </div>
            </div>
        </div>
    );
}