// next
import Head from 'next/head';
// layouts

import MainLayout from 'src/layouts/main';
// sections

import HomeView from 'src/sections/_home/view';

import ClimberPostsView from 'src/sections/_climber/view/ClimberPostsView';

// ----------------------------------------------------------------------

HomePage.getLayout = (page: any) => <MainLayout>{page}</MainLayout>;

// ----------------------------------------------------------------------

export default function HomePage() {
  return (
    <>
      <Head>
        <title>The starting point for your next project | ZONE UI</title>
      </Head>

      <ClimberPostsView />
    </>
  );
}
