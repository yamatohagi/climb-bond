import PropTypes from 'prop-types';
import { m } from 'framer-motion';
// @mui
import { Box } from '@mui/material';
// components
// @ts-expect-error TS(2307): Cannot find module 'src/components/image' or its c... Remove this comment to see the full error message
import Image from 'src/components/image';
// @ts-expect-error TS(2307): Cannot find module 'src/components/lightbox' or it... Remove this comment to see the full error message
import Lightbox, { useLightBox } from 'src/components/lightbox';
// @ts-expect-error TS(2307): Cannot find module 'src/components/animate' or its... Remove this comment to see the full error message
import { varTranHover } from 'src/components/animate';

// ----------------------------------------------------------------------

export default function TravelTourDetailsGallery({
  images
}: any) {
  const slides = images.map((slide: any) => ({
    src: slide
  }));

  const {
    selected: selectedImage,
    open: openLightbox,
    onOpen: handleOpenLightbox,
    onClose: handleCloseLightbox,
  } = useLightBox(slides);

  return <>
    // @ts-expect-error TS(2749): 'Box' refers to a value, but is being used as a ty... Remove this comment to see the full error message
    <Box
      // @ts-expect-error TS(2304): Cannot find name 'sx'.
      sx={{
        // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
        gap: 1,
        // @ts-expect-error TS(2304): Cannot find name 'display'.
        display: 'grid',
        // @ts-expect-error TS(2304): Cannot find name 'gridTemplateColumns'.
        gridTemplateColumns: {
          // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
          xs: 'repeat(1, 1fr)',
          // @ts-expect-error TS(2304): Cannot find name 'md'.
          md: 'repeat(2, 1fr)',
        },
        // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
        mb: { xs: 5, md: 10 },
      }}
    >
      // @ts-expect-error TS(2709): Cannot use namespace 'PhotoItem' as a type.
      <PhotoItem photo={slides[0].src} onOpenLightbox={() => handleOpenLightbox(slides[0].src)} />

      <Box
        // @ts-expect-error TS(2304): Cannot find name 'sx'.
        sx={{
          // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
          gap: 1,
          // @ts-expect-error TS(2304): Cannot find name 'display'.
          display: 'grid',
          // @ts-expect-error TS(2304): Cannot find name 'gridTemplateColumns'.
          gridTemplateColumns: 'repeat(2, 1fr)',
        }}
      >
        // @ts-expect-error TS(2362): The left-hand side of an arithmetic operation must... Remove this comment to see the full error message
        {slides.slice(1, 5).map((slide: any) => <PhotoItem
          // @ts-expect-error TS(2304): Cannot find name 'key'.
          key={slide.src}
          // @ts-expect-error TS(2304): Cannot find name 'photo'.
          photo={slide.src}
          // @ts-expect-error TS(2304): Cannot find name 'onOpenLightbox'.
          onOpenLightbox={() => handleOpenLightbox(slide.src)}
        />)}
      </Box>
    </Box>

    <Lightbox
      // @ts-expect-error TS(2304): Cannot find name 'index'.
      index={selectedImage}
      // @ts-expect-error TS(2304): Cannot find name 'slides'.
      slides={slides}
      // @ts-expect-error TS(2630): Cannot assign to 'open' because it is a function.
      open={openLightbox}
      // @ts-expect-error TS(2630): Cannot assign to 'close' because it is a function.
      close={handleCloseLightbox}
    />
  </>;
}

TravelTourDetailsGallery.propTypes = {
  images: PropTypes.array,
};

// ----------------------------------------------------------------------

function PhotoItem({
  photo,
  onOpenLightbox
}: any) {
  return (
    // @ts-expect-error TS(2503): Cannot find namespace 'm'.
    <m.div
      // @ts-expect-error TS(2304): Cannot find name 'whileHover'.
      whileHover="hover"
      // @ts-expect-error TS(2304): Cannot find name 'variants'.
      variants={{
        hover: { opacity: 0.8 },
      }}
      // @ts-expect-error TS(2304): Cannot find name 'transition'.
      transition={varTranHover()}
    >
      <Image
        // @ts-expect-error TS(2304): Cannot find name 'alt'.
        alt="photo"
        // @ts-expect-error TS(2304): Cannot find name 'src'.
        src={photo}
        // @ts-expect-error TS(2304): Cannot find name 'ratio'.
        ratio="1/1"
        // @ts-expect-error TS(2304): Cannot find name 'onClick'.
        onClick={onOpenLightbox}
        // @ts-expect-error TS(2304): Cannot find name 'sx'.
        sx={{ borderRadius: 2, cursor: 'pointer' }}
      />
    </m.div>
  );
}

PhotoItem.propTypes = {
  onOpenLightbox: PropTypes.func,
  photo: PropTypes.string,
};
