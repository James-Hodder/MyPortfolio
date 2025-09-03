import { cookies } from "next/headers";
import EditorClient from "./EditorClient";

export default function NewPostPage() {
    const auth = cookies().get("auth");

    if (!auth) {
        return <p className="text-red-500">You must be logged in to post.</p>;
    }

    return <EditorClient />;
}