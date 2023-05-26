// components
// @ts-expect-error TS(2307): Cannot find module 'src/components/iconify' or its... Remove this comment to see the full error message
import Iconify from 'src/components/iconify';
// @ts-expect-error TS(2307): Cannot find module 'src/components/animate' or its... Remove this comment to see the full error message
import { IconButtonAnimate, FabButtonAnimate } from 'src/components/animate';

// ----------------------------------------------------------------------

export default function Button() {
  return (
    <>
      // @ts-expect-error TS(2304): Cannot find name 'color'.
      <FabButtonAnimate color="primary" size="small">
        // @ts-expect-error TS(2304): Cannot find name 'icon'.
        <Iconify icon="eva:plus-fill" width={24} />
      </FabButtonAnimate>

      // @ts-expect-error TS(2304): Cannot find name 'color'.
      <FabButtonAnimate color="primary" size="medium">
        // @ts-expect-error TS(2304): Cannot find name 'icon'.
        <Iconify icon="eva:plus-fill" width={24} />
      </FabButtonAnimate>

      // @ts-expect-error TS(2304): Cannot find name 'color'.
      <FabButtonAnimate color="primary">
        // @ts-expect-error TS(2304): Cannot find name 'icon'.
        <Iconify icon="eva:plus-fill" width={24} />
      </FabButtonAnimate>

      // @ts-expect-error TS(2304): Cannot find name 'color'.
      <IconButtonAnimate color="primary" size="small">
        // @ts-expect-error TS(2304): Cannot find name 'icon'.
        <Iconify icon="eva:plus-fill" width={24} />
      </IconButtonAnimate>

      // @ts-expect-error TS(2304): Cannot find name 'color'.
      <IconButtonAnimate color="primary">
        // @ts-expect-error TS(2304): Cannot find name 'icon'.
        <Iconify icon="eva:plus-fill" width={24} />
      </IconButtonAnimate>

      // @ts-expect-error TS(2304): Cannot find name 'color'.
      <IconButtonAnimate color="primary" size="large">
        // @ts-expect-error TS(2304): Cannot find name 'icon'.
        <Iconify icon="eva:plus-fill" width={24} />
      </IconButtonAnimate>
    </>
  );
}
