"use client";
import { useRouter } from "next/navigation";

import { useState } from "react";

export default function SinglePost({ post }) {
  const router = useRouter();

  const [isUpdate, setIsUpdate] = useState(false);

  async function DeletePost(id) {
    try {
      await fetch(`/api/deletepost/${id}`, {
        method: "DELETE",
      });
      router.push("/");
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <div className="flex flex-col items-center p-6 bg-gray-600 min-h-screen">
      <h1 className="text-3xl font-bold text-center text-green-400 mb-4">
        POST
      </h1>
      <div className="w-full max-w-md bg-white shadow-md rounded-lg overflow-hidden border border-gray-300">
        <form className="p-6 space-y-4" onSubmit={() => DeletePost(post.id)}>
          <h1 className="font-semibold text-xl text-gray-800">
            Title: <span className="font-semibold">{post.title}</span>
          </h1>
          <p className="text-gray-700">
            Post: <span className="font-semibold">{post.post}</span>
          </p>
          <p className="text-gray-700">
            User: <span className="font-semibold">{post.user.name}</span>
          </p>
          <button
            type="submit"
            className="w-full py-2 mt-4 text-white bg-red-600 rounded hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-red-700 focus:ring-offset-2"
          >
            Delete
          </button>
        </form>
      </div>
      <button
        onClick={() => setIsUpdate((value) => !value)}
        className="mt-4 px-4 py-2 bg-green-600 text-white font-semibold rounded hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-yellow-700 focus:ring-offset-2"
      >
        Update
      </button>
      {isUpdate && <Update id={post.id} />}
    </div>
  );
}

function Update({ id }) {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [post, setPost] = useState("");

  const HandleSubmit = async (e) => {
    e.preventDefault();

    try {
      await fetch("/api/updatepost", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, title, post }),
      });
      router.push(`/post/${id}`);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="m-4 max-w-md w-full bg-white shadow-lg rounded-lg overflow-hidden border border-gray-300">
      <h1 className="text-3xl font-bold text-center text-green-800 p-4">
        UPDATE
      </h1>
      <form className="p-6 space-y-4" onSubmit={HandleSubmit}>
        <div>
          <p className="text-gray-800 font-semibold">Title</p>
          <input
            className="w-full p-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-700 focus:border-green-700"
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            value={title}
          />
        </div>
        <div>
          <p className="text-gray-800 font-semibold">Post</p>
          <input
            className="w-full p-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-700 focus:border-green-700"
            onChange={(e) => setPost(e.target.value)}
            type="text"
            value={post}
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 mt-4 text-white bg-green-700 rounded hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-green-700 focus:ring-offset-2"
        >
          Update
        </button>
      </form>
    </div>
  );
}
