import React from "react";
import {
    Navbar,
    Collapse,
    Typography,
    IconButton,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import './NavBar.css'

function NavList() {
    return (
        <div className="flex flex-col ml-0 gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            {/* <Typography
                placeholder='null'
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-extrabold"
            >
                <a href="#" className="font-display max-w-sm text-2xl font-bold leading-tight">
                    <span className="link link-underline link-underline-black text-black" >
                    Home
                    </span>
                </a>
            </Typography>
            <Typography
                placeholder='null'

                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-extrabold"
            >
                <a href="#" className="font-display max-w-sm text-2xl font-bold leading-tight">
                    <span className="link link-underline link-underline-black text-black" >
                    Projects
                    </span>
                </a>
            </Typography>
            <Typography
                placeholder='null'

                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-extrabold"
            >
                <a href="#" className="font-display max-w-sm text-2xl font-bold leading-tight">
                    <span className="link link-underline link-underline-black text-black" >
                    About
                    </span>
                </a>
            </Typography>
            <Typography
                placeholder='null'

                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-extrabold"
            >
                <a href="#" className="font-display max-w-sm text-2xl font-bold leading-tight">
                    <span className="link link-underline link-underline-black text-black" >
                    Contact
                    </span>
                </a>
            </Typography> */}
            <a href="#" className="font-display max-w-sm text-2xl font-bold leading-tight">
                <span className="link link-underline link-underline-black text-brown-800"> Home </span>
            </a>
            <a href="#" className="font-display max-w-sm text-2xl font-bold leading-tight">
                <span className="link link-underline link-underline-black text-brown-800"> Projects </span>
            </a>            <a href="#" className="font-display max-w-sm text-2xl font-bold leading-tight">
                <span className="link link-underline link-underline-black text-brown-800"> About </span>
            </a>            <a href="#" className="font-display max-w-sm text-2xl font-bold leading-tight">
                <span className="link link-underline link-underline-black text-brown-800"> Contact </span>
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
            className="sticky top-0 w-[calc(100%+4vh)] absolute drop-shadow-none shadow-none bg-transparent border-none rounded-none z-10 backdrop-blur-none backdrop-saturate-100">

            <div className="flex items-end justify-end text-blue-gray-900">
                {/* <Typography
                    placeholder='null'

                    as="a"
                    href="#"
                    variant="h6"
                    className="cursor-pointer py-1.5"
                >
                    {''}
                </Typography> */}
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