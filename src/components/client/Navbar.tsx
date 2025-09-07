import Image from 'next/image'
import React from 'react'


import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"



const Navbar = () => {
    return (

        //logo, home , matches , explore , mysessions,  avatar, 

        <div className="sticky top-0 z-50  ">
            <nav className="text-black">
                <ul className="flex items-center justify-between px-6 ">
                    <li className="mr-8">
                        <Image src="/Logo.svg" alt="SkillShare" width={70} height={70} className='object-contain' />
                    </li>
                    <div className='flex items-center  '>
                        <li className="mx-4 cursor-pointer hover:text-blue-600 transition-colors">
                            <a href="">Home</a>
                        </li>
                        <li className="mx-4 cursor-pointer hover:text-blue-600 transition-colors">
                            <a href="">Matches</a>
                        </li>
                        <li className="mx-4 cursor-pointer hover:text-blue-600 transition-colors">
                            <a href="">Explore</a>
                        </li>
                        <li className="mx-4">
                            <DropdownMenu>
                                <DropdownMenuTrigger>Open</DropdownMenuTrigger>
                                <DropdownMenuContent>
                                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem>Profile</DropdownMenuItem>
                                    <DropdownMenuItem>Billing</DropdownMenuItem>
                                    <DropdownMenuItem>Team</DropdownMenuItem>
                                    <DropdownMenuItem>Subscription</DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                            <a href="#" className="hover:text-blue-600 transition-colors">MySessions</a>
                        </li>
                    </div>
                    <li className="ml-8">
                        {/* Replace 'avatar' with an actual avatar image or component as needed */}
                        <span className="inline-block w-8 h-8 bg-gray-300 rounded-full text-center leading-8">A</span>
                    </li>
                </ul>
            </nav>
        </div>

        // <div className="sticky top-0 z-50 ">
        //     <nav className=" text-black py-4">
        //         <ul className="flex list-none m-0 p-0">
        //             <li className="mr-6">
        //                 <a href="/" className="text-white no-underline hover:underline">
        //                     <Image src="/Logo.svg" alt='SkillShare' width={100} height={100}></Image>
        //                 </a>
        //             </li>
        //             <li className="mr-6">
        //                 <a href="/about" className="text-white no-underline hover:underline">About</a>
        //             </li>
        //             <li>
        //                 <a href="/contact" className="text-white no-underline hover:underline">Contact</a>
        //             </li>
        //         </ul>
        //     </nav>
        // </div>


    )
}

export default Navbar