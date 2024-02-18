import React from "react";
import {
    Navbar,
    Collapse,
    IconButton,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import './NavBar.css'

function NavList() {
    return (
        <div className="flex flex-col ml-0 gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            <a href="main" className="font-display max-w-sm text-2xl font-bold leading-tight">
                <span className="link link-underline link-underline-black"> Home </span>
            </a>
            <a href="#about" className="font-display max-w-sm text-2xl font-bold leading-tight">
                <span className="link link-underline link-underline-black"> About </span>
            </a>
            <a href="projects" className="font-display max-w-sm text-2xl font-bold leading-tight">
                <span className="link link-underline link-underline-black"> Projects </span>
            </a>     <a href="#" className="font-display max-w-sm text-2xl font-bold leading-tight">
                <span className="link link-underline link-underline-black"> Contact </span>
            </a>
        </div>
    );
}

export function NavbarSimple() {
    const [openNav, setOpenNav] = React.useState(false);

    const handleWindowResize = () =>
        window.innerWidth >= 960 && setOpenNav(false);

    React.useEffect(() => {
        window.addEventListener("resize", handleWindowResize);

        return () => {
            window.removeEventListener("resize", handleWindowResize);
        };
    }, []);

    return (
        <Navbar
            placeholder='null'
            className="top-0 right-20 w-min absolute drop-shadow-none shadow-none bg-transparent border-none rounded-none z-50 backdrop-blur-none backdrop-saturate-100 ">

            <div className="flex items-end justify-end text-primary">

                <div className="hidden lg:block">
                    <NavList />
                </div>
                <IconButton
                    placeholder='null'

                    variant="text"
                    className="h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                    ripple={false}
                    onClick={() => setOpenNav(!openNav)}
                >
                    {openNav ? (
                        <XMarkIcon className="h-6 w-6" strokeWidth={2} />
                    ) : (
                        <Bars3Icon className="h-6 w-6" strokeWidth={2} />
                    )}
                </IconButton>
            </div>
            <Collapse open={openNav}>
                <NavList />
            </Collapse>
        </Navbar>
    );
}

export default NavbarSimple