import Link from "next/link";

export default function Header() {
  return (
    <div className="flex items-center justify-between gap-4 h-20 bg-zinc-800 p-4">
      <Link
        className="bg-zinc-600 text-white rounded-lg p-2 hover:bg-zinc-500 transition-colors"
        href={"/"}
      >
        BlogPost
      </Link>
      <Link
        className="bg-zinc-600 text-white rounded-lg p-2 hover:bg-zinc-500 transition-colors"
        href={"/signup"}
      >
        Sign Up
      </Link>
      <div className="flex gap-4">
        <Link
          className="bg-zinc-600 text-white rounded-lg p-2 hover:bg-zinc-500 transition-colors"
          href={"/allposts"}
        >
          All Posts
        </Link>
        <Link
          className="bg-green-700 text-white rounded-lg p-2 hover:bg-green-800 transition-colors"
          href={"/createpost"}
        >
          + Create Post
        </Link>
      </div>
    </div>
  );
}
