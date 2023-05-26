// next
import Head from 'next/head';
// layouts
// @ts-expect-error TS(2307): Cannot find module 'src/layouts/main' or its corre... Remove this comment to see the full error message
import MainLayout from 'src/layouts/main';
// sections
// @ts-expect-error TS(2307): Cannot find module 'src/sections/_marketing/view' ... Remove this comment to see the full error message
import { MarketingServicesView } from 'src/sections/_marketing/view';

// ----------------------------------------------------------------------

MarketingServicesPage.getLayout = (page: any) => <MainLayout>{page}</MainLayout>;

// ----------------------------------------------------------------------

export default function MarketingServicesPage() {
  return (
    <>
      // @ts-expect-error TS(2749): 'Head' refers to a value, but is being used as a t... Remove this comment to see the full error message
      <Head>
        // @ts-expect-error TS(2304): Cannot find name 'title'.
        <title>Services | ZONE UI</title>
      </Head>

      <MarketingServicesView />
    </>
  );
}
