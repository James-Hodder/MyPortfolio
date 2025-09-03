import prisma from "@/lib/prisma";

export async function GET() {
    const posts = await prisma.post.findMany({ orderBy: { createdAt: "desc" } });
    return Response.json(posts);
}

export async function POST(req) {
    const body = await req.json();
    const { title, content, media } = body;

    const post = await prisma.post.create({
        data: { title, content, media },
    });

    return Response.json(post);
}
