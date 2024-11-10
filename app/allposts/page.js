import prisma from "@/prisma/prisma";
import Link from "next/link";

export default async function Posts() {
  const posts = await prisma.post.findMany({
    include: {
      user: {
        select: {
          name: true,
        },
      },
    },
  });
  return (
    <div>
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
}

function Post({ post }) {
  return (
    <Link href={`/post/${post.id}`}>
      <div className="m-4 bg-white border-2 border-zinc-300 rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">
        <h1 className="text-xl font-semibold text-gray-800">
          Title: <span className="font-normal text-gray-600">{post.title}</span>
        </h1>
        <p className="text-gray-700">
          Post: <span className="font-normal text-gray-600">{post.post}</span>
        </p>
        <p className="text-gray-700">
          User:{" "}
          <span className="font-normal text-gray-600">{post.user.name}</span>
        </p>
      </div>
    </Link>
  );
}
