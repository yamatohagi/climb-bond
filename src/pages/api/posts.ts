import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// GET /api/posts
export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const posts = await prisma.post.findMany({
      include: {
        gym: true,
        preferredDayAndTimes: true,
      },
    });
    res.json(posts);
  } else {
    // Handle any other HTTP method
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
