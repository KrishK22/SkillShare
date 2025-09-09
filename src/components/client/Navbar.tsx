"use client"
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
                        <li className="mx-4 cursor-pointer ">
                            <a href="#" className="cursor-pointer relative after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:w-0 after:h-[2px] after:bg-[#886ef3]  after:transition-all after:duration-300  hover:after:left-0 hover:after:w-full"  >Home</a>
                        </li>
                        <li className="cursor-pointer relative after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:w-0 after:h-[2px] after:bg-[#886ef3] after:transition-all after:duration-300  hover:after:left-0 hover:after:w-full">

                            <a href="" >Matches</a>
                        </li>
                        <li className="mx-4 cursor-pointer ">
                            <DropdownMenu >
                                <DropdownMenuTrigger className=" cursor-pointer relative after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:w-0 after:h-[2px] after:bg-[#886ef3] after:transition-all after:duration-300 hover:after:left-0 hover:after:w-full">
                                    Explore
                                </DropdownMenuTrigger>
                                <DropdownMenuContent >
                                    <DropdownMenuItem>Code Lab </DropdownMenuItem>
                                    <DropdownMenuItem>History of Sessions </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </li>
                        <li className="mx-4 ">
                            <DropdownMenu>
                                <DropdownMenuTrigger className="cursor-pointer relative after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:w-0 after:h-[2px] after:bg-[#886ef3] after:transition-all after:duration-300 hover:after:left-0 hover:after:w-full">
                                    My Sessions
                                </DropdownMenuTrigger>
                                <DropdownMenuContent>
                                    <DropdownMenuItem>Active Sessions </DropdownMenuItem>
                                    <DropdownMenuItem>History of Sessions </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>

                        </li>
                    </div>
                    <li className="ml-8">


                        {/* <DropdownMenu>
                            <DropdownMenuTrigger>
                                <Avatar>
                                    <AvatarImage src="https://github.com/shadcn.png" />
                                    <AvatarFallback>CN</AvatarFallback>
                                </Avatar>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                                <DropdownMenuItem>Settings </DropdownMenuItem>
                                <DropdownMenuItem>Become Mentor </DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem className=' cursor-pointer '>Logout </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu> */}




                    </li>
                </ul>
            </nav>
        </div >

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