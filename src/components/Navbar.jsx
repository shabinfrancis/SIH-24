import React from 'react'
import { navItems } from '../constants'
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const Navbar = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);

    const toggleNavbar = () => {
        setDrawerOpen(!drawerOpen);
    }
    return (
        <>
            <nav className="sticky top-0 z-50 py-4 backdrop-blur-sm border-b border-neutral-50">
                <div className="container mx-auto px-4 relative text-md">
                    {/* <div className='flex justify-center text-xl'>Online OCR</div> */}
                    <div className="flex justify-between items-center">
                        <ul className='hidden lg:flex ml-14 space-x-12'>
                            {navItems.map((item, index) => (
                                <li key={index}>
                                    <a href={item.href}>{item.label}</a>
                                </li>
                            ))}
                        </ul>
                        <div className="lg:hidden md:flex flex-col justify-end">
                            <button onClick={toggleNavbar}>
                                {drawerOpen ? <X /> : <Menu />}
                            </button>
                        </div>
                    </div>
                    {drawerOpen && (
                        <div className="fixed right-0 z-20 bg-blue-100 w-full p-12 flex flex-col justify-center items center lg:hidden">
                            <ul>
                                {navItems.map((item, index) => (
                                    <li key={index} className='py-2'>
                                        <a href={item.href}>{item.label}</a>
                                    </li>
                                ))}
                            </ul>
                            {/* <div className="flex space-x-8">
                                <a href="#" className='px-3 py-2 bg-gradient-to-r from-blue-100 to-blue-400 border rounded-md'>
                                    Sign In
                                </a>
                                <a href="#" className='px-3 py-2 bg-gradient-to-r from-blue-100 to-blue-400 rounded-md'>
                                    Login
                                </a>
                            </div> */}
                        </div>
                    )}
                </div>
            </nav>
        </>

    )
}

export default Navbar