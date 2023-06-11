// next
import Head from 'next/head';
// layouts
import MainLayout from 'src/layouts/main';
import GymListView from 'src/sections/_gym/view/GymListView';
// sections

GymListPage.getLayout = (page: any) => <MainLayout>{page}</MainLayout>;

export default function GymListPage() {
  return (
    <>
      <Head>
        <title>Posts | ZONE UI</title>
      </Head>

      <GymListView />
    </>
  );
}
