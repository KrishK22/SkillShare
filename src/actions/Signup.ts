"use server"
import { auth } from "@/auth";
import { prisma } from "@/lib/Prisma";
import { signUpSchema } from "@/lib/zod";
import bcrypt from "bcryptjs";
import { redirect } from "next/navigation";
import { toast } from "sonner";

export const signUpAction = async (data: { name: string, email: string, password: string }) => {
    try {

        const { name, email, password } = data;

        const user = await prisma.user.findFirst({
            where: { email }
        })

        if (user) return "User Already Exists "

        const hashedPassword = await bcrypt.hash(password, 10);

        await prisma.user.create({
            data: {
                name,
                email,
                password: hashedPassword, // Change this to match your Prisma schema field name
                profilePic: ''
            }
        }
        )
        return null;

    } catch (error) {
        return "Something went wrong "

    }
}
