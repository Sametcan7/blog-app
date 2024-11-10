import SinglePost from "@/components/singlepost";
import prisma from "@/prisma/prisma";

export default async function Post({ params }) {
  const { id } = await params;
  const post = await prisma.post.findUnique({
    where: { id },
    include: {
      user: {
        select: {
          name: true,
        },
      },
    },
  });

  return <div>{post && <SinglePost post={post} />}</div>;
}
