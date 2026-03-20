import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const navItems = [
    { label: 'About Institute', path: '/about-institute' },
    { label: 'Ecosystem', path: '/ecosystem' },
    { label: 'Courses', path: '/courses' },
    { label: 'Blogs', path: '/blogs' },
    { label: 'Contact', path: '/contact' },
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="container mx-auto top-0 left-0 w-full py-8 z-50 bg-transparent border-b-[0.5px] border-[#FFFFFF29]">
            <div className="flex justify-between items-center">
                <Link to="/" className="flex items-center gap-3 text-white no-underline group">
                    <span className="font-sans italic font-bold text-3xl tracking-wide group-hover:opacity-90 transition-opacity">
                        I.T.L
                    </span>
                    <span className="font-sans text-xs leading-tight text-white border-l border-white/30 pl-3 sm:border-0 sm:pl-0 uppercase tracking-wide">
                        Institute for <br />
                        Trusted Leadership
                    </span>
                </Link>

                <div className="hidden lg:flex items-center">
                    <ul className="flex gap-10">
                        {navItems.map((item) => (
                            <li key={item.label}>
                                <Link
                                    to={item.path}
                                    className="font-sans text-sm text-white hover:text-white transition-colors duration-300 font-normal tracking-wide"
                                >
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div
                    className="lg:hidden flex flex-col justify-between w-8 h-5 cursor-pointer z-[60]"
                    onClick={toggleMenu}
                >
                    <span className={`block w-full h-[2px] bg-white transition-all duration-300 ease-in-out ${isOpen ? 'rotate-[-45deg] translate-y-[9px]' : ''}`}></span>
                    <span className={`block w-full h-[2px] bg-white transition-all duration-300 ease-in-out ${isOpen ? 'opacity-0' : ''}`}></span>
                    <span className={`block w-full h-[2px] bg-white transition-all duration-300 ease-in-out ${isOpen ? 'rotate-[45deg] -translate-y-[9px]' : ''}`}></span>
                </div>
                <div
                    className={`fixed inset-0 bg-[#0A0A0A] backdrop-blur-md z-[55] flex flex-col justify-center items-center gap-8 transition-transform duration-500 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
                >
                    <ul className="flex flex-col items-center gap-8">
                        {navItems.map((item) => (
                            <li key={item.label}>
                                <Link
                                    to={item.path}
                                    className="font-sans text-2xl text-white hover:text-white transition-colors duration-300 font-light"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
