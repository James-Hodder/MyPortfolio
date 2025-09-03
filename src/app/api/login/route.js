import prisma from "@/lib/prisma";
import { cookies } from "next/headers";

export async function POST(req) {
    const { username, password } = await req.json();

    const user = await prisma.user.findUnique({ where: { username } });

    if (!user || user.password !== password) {
        return new Response(JSON.stringify({ error: "Invalid credentials" }), {
            status: 401,
        });
    }

    // Fake session cookie
    cookies().set("auth", "true", { httpOnly: true });

    return Response.json({ success: true });
}