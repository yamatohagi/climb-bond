import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient, ClimbingType } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const posts = await prisma.post.findMany({
      include: {
        gym: true,
        preferredDayAndTimes: true,
      },
    });
    res.json(posts);
  } else if (req.method === 'POST') {
    // Parse the request body
    const { title, content, gymId, preferredDayAndTimes, climbingType, gym } = req.body;

    // Split the preferredDayAndTimes string into an array

    // Validate the data here. If the data is invalid, you can return a 400 status code
    // ...

    // Create the post
    const newPost = await prisma.post.create({
      data: {
        title: title,
        content: content,
        gymId: gymId,
        climbingType: climbingType as ClimbingType,
        preferredDayAndTimes: {
          create: preferredDayAndTimes.map((dayAndTime: any) => ({ dayAndTime: dayAndTime })),
        },
      },
      include: {
        preferredDayAndTimes: true, // Include this to return preferredDayAndTimes in the response
      },
    });

    res.json(newPost);
  } else {
    // Handle any other HTTP method
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
