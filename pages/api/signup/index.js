import prisma from "@/prisma/prisma";

export default async function handle(req, res) {
  const { name } = req.body;
  const result = await prisma.user.create({
    data: {
      name: name,
    },
  });
  return res.status(201).json(result);
}
