"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
export default function CreateNote() {
  const [title, setTitle] = useState("");
  const [post, setPost] = useState("");
  const [name, setName] = useState("");
  const router = useRouter();
  const submitData = async (e) => {
    e.preventDefault();

    if (!title || !post || !name) alert("Fill In All Fields");
    try {
      const body = { title, post, name };
      await fetch(`/api/createpost`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      router.push("/allposts");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="p-6 bg-gray-600 min-h-screen flex items-center justify-center">
      <div className="w-full max-w-2xl bg-white p-6 rounded-lg shadow-lg border border-gray-300">
        <h1 className="text-center text-3xl font-semibold text-gray-800 mb-6">
          Create Post
        </h1>
        <form className="flex flex-col gap-4" onSubmit={submitData}>
          <div className="flex gap-4">
            <div className="w-full">
              <p className="text-gray-700 font-medium">Title</p>
              <input
                className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                onChange={(e) => setTitle(e.target.value)}
                type="text"
                value={title}
              />
            </div>
            <div className="w-full">
              <p className="text-gray-700 font-medium">User Name</p>
              <input
                className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                onChange={(e) => setName(e.target.value)}
                type="text"
                value={name}
              />
            </div>
          </div>
          <div>
            <p className="text-gray-700 font-medium">Post</p>
            <textarea
              className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              cols={50}
              rows={8}
              onChange={(e) => setPost(e.target.value)}
              value={post}
            />
          </div>
          <div className="mt-4">
            <button
              className="w-full py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="submit"
            >
              Create Post
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
