import prisma from "@/prisma/prisma";

export default async function handle(req, res) {
  const { title, post, name } = req.body;
  console.log(req.body);
  const result = await prisma.post.create({
    data: {
      title: title,
      post: post,
      user: { connect: { name: name } },
    },
  });
  return res.status(201).json(result);
}
