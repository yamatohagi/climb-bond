import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const gyms = await prisma.gym.findMany();
    res.json(gyms);
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
