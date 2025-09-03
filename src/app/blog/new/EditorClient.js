"use client";
import { useState } from "react";

export default function EditorClient() {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [media, setMedia] = useState("");
    const [message, setMessage] = useState("");

    async function handleSubmit(e){
        e.preventDefault();
        setMessage("");

        const res = await fetch("/api/posts", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ title, content, media }),
        });

        if (res.ok) {
            setMessage("✅ Post saved!");
            setTitle("");
            setContent("");
            setMedia("");
        } else {
            setMessage("❌ Failed to save post");
        }

        console.log({ title, content, media });
        alert(message);
    };




    return (
        <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">New Blog Post</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label className="block mb-2 font-medium">Title</label>
                    <input
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="w-full p-3 rounded-lg bg-gray-900 border border-gray-700 text-white"
                    />
                </div>
                <div>
                    <label className="block mb-2 font-medium">Content</label>
                    <textarea
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        rows={6}
                        className="w-full p-3 rounded-lg bg-gray-900 border border-gray-700 text-white"
                    />
                </div>
                <div>
                    <label className="block mb-2 font-medium">Media (Image/Video URL)</label>
                    <input
                        value={media}
                        onChange={(e) => setMedia(e.target.value)}
                        className="w-full p-3 rounded-lg bg-gray-900 border border-gray-700 text-white"
                    />
                </div>
                <button type="submit" className="bg-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-700">
                    Publish Post
                </button>
            </form>
        </div>
    );
}