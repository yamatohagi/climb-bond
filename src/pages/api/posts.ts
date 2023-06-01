import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient, ClimbingType } from '@prisma/client';
import { create } from 'domain';
import path from 'path';
const prisma = new PrismaClient();

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  console.log(path.resolve(__dirname, '../generated/schema.gql'));
  if (req.method === 'GEdT') {
    const posts = await prisma.post.findMany({
      include: {
        gym: true,
        preferredDayAndTimes: true,
      },
      orderBy: { createdAt: 'desc' },
    });
    res.json(posts);
  } else if (req.method === 'POSdT') {
    // Parse the request body
    const {
      title,
      content,
      gymId,
      preferredDayAndTimes,
      climbingType,
      belayMonths,
      experienceMonths,
      grade,
    } = req.body;

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
        belayMonths: belayMonths,
        experienceMonths: experienceMonths,
        grade: grade,
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
