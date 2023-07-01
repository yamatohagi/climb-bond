// next
import Head from 'next/head';
// layouts
import MainLayout from 'src/layouts/main';
import MountainCreateView from 'src/sections/_mountain/view/MountainCreateView';
// sections

GymListPage.getLayout = (page: any) => <MainLayout>{page}</MainLayout>;

export default function GymListPage() {
  return (
    <>
      <Head>
        <title>山の登録 - ヤマイキタイ</title>
      </Head>

      <MountainCreateView />
    </>
  );
}
