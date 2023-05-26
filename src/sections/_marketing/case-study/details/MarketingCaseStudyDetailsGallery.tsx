import PropTypes from 'prop-types';
import { m } from 'framer-motion';
import { useRef, useEffect } from 'react';
// @mui
import { useTheme } from '@mui/material/styles';
import { Typography, Box, Stack } from '@mui/material';
// components
// @ts-expect-error TS(2307): Cannot find module 'src/components/image' or its c... Remove this comment to see the full error message
import Image from 'src/components/image';
// @ts-expect-error TS(2307): Cannot find module 'src/components/lightbox' or it... Remove this comment to see the full error message
import Lightbox, { useLightBox } from 'src/components/lightbox';
// @ts-expect-error TS(2307): Cannot find module 'src/components/carousel' or it... Remove this comment to see the full error message
import Carousel, { CarouselArrows } from 'src/components/carousel';
// @ts-expect-error TS(2307): Cannot find module 'src/components/animate' or its... Remove this comment to see the full error message
import { varHover, varTranHover } from 'src/components/animate';

// ----------------------------------------------------------------------

export default function MarketingCaseStudyDetailsGallery({
  images
}: any) {
  const theme = useTheme();

  const carouselRef = useRef(null);

  const slides = images.map((slide: any) => ({
    src: slide
  }));

  const {
    selected: selectedImage,
    open: openLightbox,
    onOpen: handleOpenLightbox,
    onClose: handleCloseLightbox,
    setSelected: setSelectedImage,
  } = useLightBox(slides);

  useEffect(() => {
    if (openLightbox) {
      // @ts-expect-error TS(2339): Property 'slickGoTo' does not exist on type 'never... Remove this comment to see the full error message
      carouselRef.current?.slickGoTo(selectedImage);
    }
  }, [openLightbox, selectedImage]);

  const handlePrev = () => {
    // @ts-expect-error TS(2339): Property 'slickPrev' does not exist on type 'never... Remove this comment to see the full error message
    carouselRef.current?.slickPrev();
  };

  const handleNext = () => {
    // @ts-expect-error TS(2339): Property 'slickNext' does not exist on type 'never... Remove this comment to see the full error message
    carouselRef.current?.slickNext();
  };

  const carouselSettings = {
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    rtl: Boolean(theme.direction === 'rtl'),
    responsive: [
      {
        breakpoint: theme.breakpoints.values.md,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: theme.breakpoints.values.sm,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  return <>
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <Stack direction="row" justifyContent="space-between" sx={{ mt: 3, mb: 5 }}>
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Typography variant="h4">Gallery</Typography>
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <CarouselArrows spacing={2} onNext={handleNext} onPrev={handlePrev} />
    </Stack>

    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <Carousel ref={carouselRef} {...carouselSettings}>
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      {slides.map((slide: any) => <Box
        key={slide.src}
        component={m.div}
        whileHover="hover"
        sx={{ px: 1 }}
        onClick={() => handleOpenLightbox(slide.src)}
      >
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Box sx={{ borderRadius: 2, overflow: 'hidden', cursor: 'pointer' }}>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <m.div variants={varHover(1.25)} transition={varTranHover()}>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Image alt={slide.src} src={slide.src} ratio="4/3" />
          </m.div>
        </Box>
      </Box>)}
    </Carousel>

    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <Lightbox
      index={selectedImage}
      slides={slides}
      open={openLightbox}
      close={handleCloseLightbox}
      onGetCurrentIndex={(index: any) => setSelectedImage(index)}
    />
  </>;
}

MarketingCaseStudyDetailsGallery.propTypes = {
  images: PropTypes.array,
};
