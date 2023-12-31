"use client";

import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu"
import Link from "next/link"
import Image from "next/image";
import React from 'react'
import { useState } from 'react'
import { Button } from "@/components/ui/button"

function NavMenu() {
    const navigation = [
        { name: 'Product', href: '#' },
        { name: 'Features', href: '#' },
        { name: 'Marketplace', href: '#' },
        { name: 'Company', href: '#' },
    ]

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    const handleMobileMenuToggle = () => {
        setMobileMenuOpen(!mobileMenuOpen)
    }

    return (

        <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <Link href="https://flowbite.com/" className="flex items-center">
                    <Image src="./mascot.png" className="" alt="Flowbite Logo" width={50} height={50} />
                    <span className="self-center text-xl whitespace-nowrap dark:text-white">Git Hubba Bubba</span>
                </Link>
                <div className="flex md:order-2">
                    <Button variant="secondary" className='hidden md:flex items-center gap-x-3'>
                        <Image src="./github.svg" alt="Github Logo" width={24} height={24} />
                        <Link href="https://github.com/">Github</Link>
                    </Button>
                    <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false" onClick={handleMobileMenuToggle}>
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                </div>
                {mobileMenuOpen && (<div className="items-center justify-between w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                    <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 gap-y-4">
                        <li>
                            <a href="./" className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">GHB</a>
                        </li>
                        <li>
                            <Button variant="secondary" className='items-center gap-x-3 w-full'>
                                <Image src="./github.svg" alt="Github Logo" width={24} height={24} />
                                <Link href="https://github.com/">Github</Link>
                            </Button>
                        </li>
                    </ul>

                </div>)}
            </div>
        </nav>

    )
}

export default NavMenu