import { PrismaClient, ClimbingType } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const gyms = await prisma.gym.createMany({
    data: [
      {
        name: 'パンプ1',
        image: 'https://example.com/gym1.jpg',
        climbingType: ClimbingType.BOULDER,
      },
      {
        name: 'パンプ2',
        image: 'https://example.com/gym2.jpg',
        climbingType: ClimbingType.LEAD,
      },
      {
        name: 'パンプ3',
        image: 'https://example.com/gym3.jpg',
        climbingType: ClimbingType.BOTH,
      },
    ],
  });

  const posts = await prisma.post.createMany({
    data: [
      {
        title: '初めてのボルダリング',
        content: '初めてボルダリングをやってみたいと思います。一緒に行ってくれる方を探しています。',
        climbingType: ClimbingType.BOULDER,
        gymId: 1,
        experienceMonths: 1, // example values
        belayMonths: 5,
        grade: '11A',
      },
      {
        title: 'リードクライミングパートナー募集',
        content: '週末のリードクライミングのパートナーを探しています。経験者優先です。',
        climbingType: ClimbingType.LEAD,
        gymId: 2,
        experienceMonths: 2, // example values
        belayMonths: 6,
        grade: '11B',
      },
      {
        title: 'ボルダリングとリードの両方を楽しみたい',
        content:
          'ボルダリングとリードの両方をやってみたいです。同じように考えている方、一緒に行きませんか？',
        climbingType: ClimbingType.BOTH,
        gymId: 3,
        experienceMonths: 3, // example values
        belayMonths: 7,
        grade: '11C',
      },
    ],
  });

  const replies = await prisma.reply.createMany({
    data: [
      {
        userName: 'John Doe',
        title: 'My First Reply',
        content: 'いいですね、興味があります',
        postId: 1,
      },
      {
        userName: 'もつ',
        title: '私も',
        content: 'みんなで登りましょう！',
        postId: 1,
      },
    ],
  });

  const preferredDayAndTimes = await prisma.preferredDayAndTime.createMany({
    data: [
      {
        dayAndTime: '12',
        postId: 1,
      },
      {
        dayAndTime: '32',
        postId: 1,
      },
      {
        dayAndTime: '61',
        postId: 2,
      },
      {
        dayAndTime: '01',
        postId: 2,
      },
      {
        dayAndTime: '02',
        postId: 3,
      },
    ],
  });

  console.log('Created gyms:', gyms);
  console.log('Created posts:', posts);
  console.log('Created preferredDayAndTimes:', preferredDayAndTimes);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
