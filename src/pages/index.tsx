// next
import Head from 'next/head';
// layouts
import MainLayout from 'src/layouts/main';
import ClimberPostsView from 'src/sections/_climber/view/ClimberPostsView';
// sections

// ----------------------------------------------------------------------

HomePage.getLayout = (page: React.ReactElement) => <MainLayout>{page}</MainLayout>;

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
