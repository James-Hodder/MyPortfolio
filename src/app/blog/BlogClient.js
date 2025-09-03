"use client";

import { useEffect, useState } from "react";

export default function BlogClient() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        async function loadPosts() {
            const res = await fetch("/api/posts");
            if (res.ok) {
                setPosts(await res.json());
            }
        }
        loadPosts();
    }, []);

    return (
        <div>
            <h2 className="text-3xl font-bold mb-8">Blog</h2>
            {posts.length === 0 && (
                <p className="text-gray-500">No posts yet. Add one!</p>
            )}
            <div className="space-y-8">
                {posts.map((post) => (
                    <article
                        key={post.id}
                        className="bg-gray-900 p-6 rounded-2xl shadow"
                    >
                        <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                        <p className="text-gray-400 mb-4">{post.content}</p>
                        {post.media && (
                            post.media.endsWith(".mp4") ? (
                                <video controls className="rounded-lg">
                                    <source src={post.media} type="video/mp4" />
                                </video>
                            ) : (
                                <img
                                    src={post.media}
                                    alt="post media"
                                    className="rounded-lg"
                                />
                            )
                        )}
                        <p className="text-sm text-gray-500 mt-2">
                            {new Date(post.createdAt).toLocaleString()}
                        </p>
                    </article>
                ))}
            </div>
        </div>
    );
}
