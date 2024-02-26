import { usePage } from '@inertiajs/react'
import React from 'react'

function Header() {
    const { imageProfil } = usePage().props;

    return (
    
     <nav class="flex items-center content-start bg-gray-100 text-gray-600  p-3 flex-wrap  border-b border-gray-600">
        <a href="#" class="p-2 mr-4 inline-flex items-center">
            <span class="text-xl  font-bold  tracking-wide text-gray-800">Bjr 11 Store </span>
        </a>
        <button
            class="text-white inline-flex p-3 hover:bg-gray-900 rounded lg:hidden ml-auto hover:text-white outline-none nav-toggler"
            data-target="#navigation"
        >
            <i class="material-icons">menu</i>
        </button>
        <div
            class="hidden top-navbar w-full lg:inline-flex lg:flex-grow lg:w-auto"
            id="navigation"
        >
            <div class="lg:inline-flex lg:flex-row lg:ml-10 lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto"
            >
            <a
                href="#"
                class="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-gray-400 items-center justify-center hover:bg-gray-900 hover:text-white"
            >
                <span>Home</span>
            </a>
            <a
                href="#"
                class="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-gray-400 items-center justify-center hover:bg-gray-900 hover:text-white"
            >
                <span>About</span>
            </a>
            <a
                href="#"
                class="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-gray-400 items-center justify-center hover:bg-gray-900 hover:text-white"
            >
                <span>Services</span>
            </a>
            <a
                href="#"
                class="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-gray-400 items-center justify-center hover:bg-gray-900 hover:text-white"
            >
                <span>Gallery</span>
            </a>
            <a
                href="#"
                class="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-gray-400 items-center justify-center hover:bg-gray-900 hover:text-white"
            >
                <span>Products</span>
            </a>
            <a
                href="#"
                class="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-gray-400 items-center justify-center hover:bg-gray-900 hover:text-white"
            >
                <span>Contact Us</span>
            </a>
            </div>

            <div class="lg:inline-flex lg:gap-5 lg:ml-auto lg:flex-row lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto">
                <span className="text-2xl ">
                    <i className="bi bi-cart3"></i>
                </span>
                <img src={imageProfil} className='w-12 h-10 rounded-full'
                alt="mon profil" />

            </div>
        </div>
    </nav>


  )
}

export default Header