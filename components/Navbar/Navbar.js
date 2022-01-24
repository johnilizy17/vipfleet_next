import React, { useState } from 'react';
import Image from 'next/image';
import logo from '../../asset/logo.png';
import { BiSearchAlt } from "react-icons/bi";
import { useRouter } from 'next/router';
import Link from 'next/link';
import { HiMenuAlt3 } from 'react-icons/hi';
import { FiX } from 'react-icons/fi';

export default function Navbar() {

    const route = useRouter()
    const [menubar, setmenubar] = useState(true);

    return (
        <>
            <div className="md:hidden sm:hidden lg:flex flex-row items-center mt-8 m-20 mb-10" >
                <Link passHref={true} href="/">
                    <div className="basis-2/3 cursor-pointer" >
                        <Image src={logo} alt="vipfleets logo" width={50} height={50} />
                    </div>
                </Link>
                <div className="basis-full flex">
                    <div className="flex flex-row items-center basis-2/3 justify-between font-semibold">
                        <Link passHref={true} href="/">
                            <div className={route.pathname == "/" ? "cursor-pointer text-brand-color" : "cursor-pointer"}>Home</div>
                        </Link>
                        <Link passHref={true} href="/service">
                            <div className={route.pathname == "/service" ? "cursor-pointer text-brand-color" : "cursor-pointer"}>Our Service</div>
                        </Link>
                        <Link passHref={true} href="/FAQ">
                            <div className={route.pathname == "/FAQ" ? "cursor-pointer text-brand-color" : "cursor-pointer"}>FAQ</div>
                        </Link>
                        <Link passHref={true} href="/about">
                            <div className={route.pathname == "/about" ? "cursor-pointer text-brand-color" : "cursor-pointer"}>About</div>
                        </Link>
                    </div>
                </div>
                <div className="flex flex-row items-center justify-between">
                    <BiSearchAlt className="mr-10 cursor-pointer" />
                    <select>
                        <option className="font-semibold cursor-pointer">EN</option>
                    </select>
                </div>
            </div>
            <div>
                <div className="lg:hidden sm:flex m-5 items-center">
                    <div className="basis-full">
                        <Link passHref={true} href="/">
                            <div className="cursor-pointer" >
                                <Image src={logo} alt="vipfleets logo" width={50} height={50} />
                            </div>
                        </Link>
                    </div>
                    <div onClick={() => {
                        if (menubar) {
                            setmenubar(false)
                        } else {
                            setmenubar(true)
                        }
                    }}>
                        {menubar ? <HiMenuAlt3 style={{ width: 50, height: 50 }} />
                            : <FiX style={{ width: 50, height: 50, color:"#3e4095" }} />}
                    </div>
                </div>
                {!menubar &&
                <>
                    <div className="flex flex-col basis-2/3 pb-10 fixed bg-white-color font-semibold" style={{width:"100%"}}>
                        <Link passHref={true} href="/">
                            <div className={route.pathname == "/" ? "cursor-pointer pl-5 pb-5 text-brand-color" : "cursor-pointer pl-5 pb-5"}>Home</div>
                        </Link>
                        <Link passHref={true} href="/service">
                            <div className={route.pathname == "/service" ? "cursor-pointer pl-5 pb-5 text-brand-color" : "cursor-pointer pl-5 pb-5"}>Our Service</div>
                        </Link>
                        <Link passHref={true} href="/FAQ">
                            <div className={route.pathname == "/FAQ" ? "cursor-pointer pl-5 pb-5 text-brand-color" : "cursor-pointer pl-5 pb-5"}>FAQ</div>
                        </Link>
                        <Link passHref={true} href="/about">
                            <div className={route.pathname == "/about" ? "cursor-pointer pl-5 pb-5 text-brand-color" : "cursor-pointer pl-5 pb-5"}>About</div>
                        </Link>
                    </div>
                    <div className="flex flex-row pl-5 pb-5 items-center justify-between">
                    <select>
                        <option className="font-semibold cursor-pointer">EN</option>
                    </select>
                    </div>
                    </>
                    }
            </div>
        </>
    )
}