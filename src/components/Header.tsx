'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const menuItems = [
        { href: "/", label: "Home" },
        { href: "/medicos-parceiros", label: "Médicos parceiros" },
        { href: "/pele", label: "Pele" },
        { href: "/quem-somos", label: "Quem somos" },
        { href: "/politica-privacidade", label: "Política de privacidade" },
        { href: "/sistemas", label: "Sistemas" },
    ];

    return (
        <header className="w-full bg-white backdrop-blur-md py-4 shadow-sm sticky top-0 z-50">
            <div className="flex items-center justify-between px-4 h-full w-full">
                <Link href="/">
                    <Image
                        src="/Images/logo.svg"
                        alt="Roalisderma Logo"
                        width={50}
                        height={50}
                        className="h-12 w-12"
                    />
                </Link>
                <div className='hidden md:flex flex-row w-4/5 justify-evenly'>
                    {menuItems.map((item) => (
                        <Link key={item.href} href={item.href} className="hover:text-gray-900 text-gray-700">
                            {item.label}
                        </Link>
                    ))}
                </div>
                {/* Mobile menu button */}
                <div className="md:hidden relative">
                    <button 
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="text-gray-600 hover:text-gray-900"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </button>
                    
                    {/* Dropdown menu */}
                    {isMenuOpen && (
                        <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                            {menuItems.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900 first:rounded-t-lg last:rounded-b-lg"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
}
