import React from 'react'
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import LoginForm from '@/components/client/LoginForm'
import Link from 'next/link'
import { Separator } from "@/components/ui/separator"
import { Button } from '@/components/ui/button'
import Image from 'next/image'


const Login = () => {
    return (
        <div className=' flex flex-col md:flex-row items-center justify-center min-h-screen  gap-20 '>
            <Card className=' bg-[#FFFFFF] flex flex-col justify-center items-center w-full md:w-96 shadow-lg'>
                <CardHeader className='w-full'>
                    <CardTitle className='text-[#0F172A] font-medium text-2xl text-center '>Sign In</CardTitle>
                </CardHeader>
                <CardContent className=' w-full' >
                    <LoginForm />
                </CardContent>
                <CardFooter className='w-full justify-center'>
                    <div className='flex flex-col items-center justify-center gap-5 w-full'>
                        <p>Don't have an account? <Link href={'/signup'} className='text-[#1D00FD] hover:underline'>Sign up</Link> </p>
                        <div className="flex items-center w-1/2">
                            <Separator className="flex-1" />
                            <span className="px-2 text-sm text-muted-foreground">OR</span>
                            <Separator className="flex-1" />
                        </div>
                        <div className='w-72'>
                            <form action="">
                                <Button type='submit' variant={'outline'} className="w-full">
                                    <Image src="/google.png" alt="Google logo" width={24} height={24} className='' />
                                </Button>
                            </form>
                        </div>
                    </div>
                </CardFooter>
            </Card>
            <div className='hidden md:block h-auto w-auto ml-8'>
                {/* <Image src="collaborate.svg" alt="collaborate" width={670} height={513} className='' /> */}
                <img src="collaborate.svg" alt="Collaboration illustration" className='w-[670px] h-auto object-contain' />
            </div>
        </div>
    )
}

export default Login