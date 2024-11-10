"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SignUp() {
  const [name, setName] = useState("");
  const router = useRouter();
  const submitData = async (e) => {
    e.preventDefault();
    if (!name) {
      alert("Enter Name");
    }
    try {
      const body = { name };
      await fetch(`/api/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      router.push("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="p-6 bg-gray-600 min-h-screen flex items-center justify-center">
      <div className="w-full max-w-sm bg-white p-6 rounded-lg shadow-lg border border-gray-300">
        <h1 className="text-center text-3xl font-semibold text-gray-800 mb-6">
          Sign Up
        </h1>
        <form className="flex flex-col gap-4" onSubmit={submitData}>
          <div className="flex flex-col gap-2">
            <label className="text-gray-700 font-medium" htmlFor="name">
              Name
            </label>
            <input
              className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              id="name"
              onChange={(e) => setName(e.target.value)}
              type="text"
              value={name}
            />
          </div>
          <div>
            <button
              className="w-full py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="submit"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
