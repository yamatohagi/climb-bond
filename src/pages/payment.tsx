// next
import Head from 'next/head';
// layouts
import SimpleLayout from 'src/layouts/simple';
// sections
import { PaymentView } from 'src/sections/payment/view';

// ----------------------------------------------------------------------

PaymentPage.getLayout = (page: any) => <SimpleLayout>{page}</SimpleLayout>;

// ----------------------------------------------------------------------

export default function PaymentPage() {
  return (
    <>
      <Head>
        <title>Payment | ZONE UI</title>
      </Head>

      <PaymentView />
    </>
  );
}
