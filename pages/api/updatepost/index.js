import prisma from "@/prisma/prisma";

export default async function handler(req, res) {
  const { id, title, post } = req.body;

  const updateData = {};
  if (title) updateData.title = title;
  if (post) updateData.post = post;

  if (Object.keys(updateData).length > 0) {
    const updatedPost = await prisma.post.update({
      where: { id: id },
      data: updateData,
    });
    res.status(200).json(updatedPost);
  }
}
