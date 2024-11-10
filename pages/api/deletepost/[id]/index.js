export default async function handle(req, res) {
  const { id } = req.query;
  const result = await prisma.post.delete({
    where: { id: id },
  });
  return res.json(result);
}
