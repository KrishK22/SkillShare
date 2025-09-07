import React from 'react'
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from '../ui/button'

const LoginForm = () => {
    return (
        <>
            <form action="" className=' p-1 flex flex-col gap-4 w-full'>
                <div>
                    <label htmlFor="email">Email</label>
                    <div className='relative'>
                        <Input placeholder='example@gmail.com' />
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 ">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                        </svg>
                    </div>
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <div className='relative'>
                        <Input placeholder='●●●●●●●●●' />
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 ">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        </svg>
                    </div>
                </div>
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <Checkbox id="remember" />
                        <label htmlFor="remember" className="text-sm select-none cursor-pointer">
                            Remember me
                        </label>
                    </div>
                    <div>
                        <button type="button" className="text-[#1D00FD] text-sm hover:underline focus:outline-none">
                            Forgot Password?
                        </button>
                    </div>

                </div>

                <Button type='submit' className='bg-[#7B5FF1] hover:bg-[#886ef3] '>Sign in</Button>
            </form>

        </>
    )
}

export default LoginForm