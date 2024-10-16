"use client";

import { Bars3Icon, XMarkIcon } from "@heroicons/react/20/solid";

import Link from "next/link";
import React, { useState } from "react";

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const renderNavLinks = () => (
        <>
            <Link href="/">
                <p className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:text-white">
                    Inicio
                </p>
            </Link>
            <Link href="/fantasy">
                <p className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:text-white">
                    Fantasy
                </p>
            </Link>
            <Link href="/teams">
                <p className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:text-white">
                    Equipo
                </p>
            </Link>
            <Link href="/players">
                <p className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:text-white">
                    Jugadores
                </p>
            </Link>
        </>
    );

    return (
        <nav className="bg-gray-800 shadow-md">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    {/* Logo y titulo */}
                    <Link href="/" passHref>
                        <div className="flex items-center">
                            <img
                                className="h-8 w-8"
                                src="/img/logo.png"
                                alt="Logo Primera FEB"
                            />
                            <span className="ml-2 text-xl font-semibold text-white">
                                Fantasy Primera FEB
                            </span>
                        </div>
                    </Link>
                    {/* Links del navbar */}
                    <div className="hidden space-x-4 md:flex">
                        {renderNavLinks()}
                    </div>
                    {/* Botón de menú para móviles */}
                    <div className="-mr-2 flex md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            type="button"
                            className="inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:bg-gray-700 focus:text-white focus:outline-none"
                        >
                            <span className="sr-only">
                                Abrir menú de inicio
                            </span>
                            {isOpen ? (
                                <XMarkIcon className="h-8 w-8" />
                            ) : (
                                <Bars3Icon className="h-8 w-8" />
                            )}
                        </button>
                    </div>
                </div>
            </div>
            {/* Menú desplegable en móvil */}
            {isOpen && (
                <div className="md:hidden">
                    <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
                        {renderNavLinks()}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
