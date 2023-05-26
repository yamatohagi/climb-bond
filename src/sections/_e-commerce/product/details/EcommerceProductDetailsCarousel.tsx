import PropTypes from 'prop-types';
import { useState, useRef, useEffect } from 'react';
// @mui
import { alpha, useTheme, styled } from '@mui/material/styles';
import { Box } from '@mui/material';
// utils
// @ts-expect-error TS(2307): Cannot find module 'src/utils/cssStyles' or its co... Remove this comment to see the full error message
import { bgGradient } from 'src/utils/cssStyles';
// components
// @ts-expect-error TS(2307): Cannot find module 'src/components/image' or its c... Remove this comment to see the full error message
import Image from 'src/components/image';
// @ts-expect-error TS(2307): Cannot find module 'src/components/carousel' or it... Remove this comment to see the full error message
import Carousel, { CarouselArrows } from 'src/components/carousel';
// @ts-expect-error TS(2307): Cannot find module 'src/components/lightbox' or it... Remove this comment to see the full error message
import Lightbox, { useLightBox } from 'src/components/lightbox';

// ----------------------------------------------------------------------

const THUMB_SIZE = 64;

const StyledThumbnailsContainer = styled('div', {
  shouldForwardProp: (prop) => prop !== 'length',
  // @ts-expect-error TS(2339): Property 'length' does not exist on type 'MUIStyle... Remove this comment to see the full error message
})(({ length, theme }) => ({
  margin: theme.spacing(0, 'auto'),
  position: 'relative',

  '& .slick-slide': {
    opacity: 0.48,
    '&.slick-current': {
      opacity: 1,
    },
    '& > div': {
      padding: theme.spacing(0, 0.75),
    },
  },

  ...(length === 1 && {
    maxWidth: THUMB_SIZE * 1 + 16,
  }),
  ...(length === 2 && {
    maxWidth: THUMB_SIZE * 2 + 32,
  }),
  ...((length === 3 || length === 4) && {
    maxWidth: THUMB_SIZE * 3 + 48,
  }),
  ...(length >= 5 && {
    maxWidth: THUMB_SIZE * 6,
  }),
  ...(length > 2 && {
    '&:before, &:after': {
      ...bgGradient({
        direction: 'to left',
        startColor: `${alpha(theme.palette.background.default, 0)} 0%`,
        endColor: `${theme.palette.background.default} 100%`,
      }),
      top: 0,
      zIndex: 9,
      content: "''",
      height: '100%',
      position: 'absolute',
      width: (THUMB_SIZE * 2) / 3,
    },
    '&:after': {
      right: 0,
      transform: 'scaleX(-1)',
    },
  }),
}));

// ----------------------------------------------------------------------

export default function EcommerceProductDetailsCarousel({ images }: any) {
  const theme = useTheme();

  const slides = images.map((slide: any) => ({
    src: slide,
  }));

  const {
    selected: selectedImage,
    open: openLightbox,
    onOpen: handleOpenLightbox,
    onClose: handleCloseLightbox,
    setSelected: setSelectedImage,
  } = useLightBox(slides);

  const carousel1 = useRef(null);

  const carousel2 = useRef(null);

  const [nav1, setNav1] = useState();

  const [nav2, setNav2] = useState();

  const carouselSettings1 = {
    dots: false,
    arrows: false,
    slidesToShow: 1,
    draggable: false,
    slidesToScroll: 1,
    adaptiveHeight: true,
  };

  const carouselSettings2 = {
    dots: false,
    arrows: false,
    centerMode: true,
    swipeToSlide: true,
    focusOnSelect: true,
    variableWidth: true,
    centerPadding: '0px',
    slidesToShow: slides.length > 3 ? 3 : slides.length,
  };

  useEffect(() => {
    if (carousel1.current) {
      setNav1(carousel1.current);
    }
    if (carousel2.current) {
      setNav2(carousel2.current);
    }
  }, []);

  useEffect(() => {
    if (openLightbox) {
      // @ts-expect-error TS(2339): Property 'slickGoTo' does not exist on type 'never... Remove this comment to see the full error message
      carousel1.current?.slickGoTo(selectedImage);
    }
  }, [openLightbox, selectedImage]);

  const handlePrev = () => {
    // @ts-expect-error TS(2339): Property 'slickPrev' does not exist on type 'never... Remove this comment to see the full error message
    carousel2.current?.slickPrev();
  };

  const handleNext = () => {
    // @ts-expect-error TS(2339): Property 'slickNext' does not exist on type 'never... Remove this comment to see the full error message
    carousel2.current?.slickNext();
  };

  const renderLargeImg = (
    <Box
      sx={{
        mb: 3,
        borderRadius: 3,
        overflow: 'hidden',
        position: 'relative',
        bgcolor: 'background.neutral',
      }}
    >
      <CarouselArrows onNext={handleNext} onPrev={handlePrev}>
        <Carousel {...carouselSettings1} asNavFor={nav2} ref={carousel1}>
          {slides.map((slide: any) => (
            <Image
              key={slide.src}
              alt="product"
              src={slide.src}
              ratio="1/1"
              onClick={() => handleOpenLightbox(slide.src)}
              sx={{ cursor: 'zoom-in' }}
            />
          ))}
        </Carousel>
      </CarouselArrows>
    </Box>
  );

  const renderThumbnails = (
    <StyledThumbnailsContainer
      // @ts-expect-error TS(2322): Type '{ children: Element; length: any; sx: { '& .... Remove this comment to see the full error message
      length={slides.length}
      sx={{
        '& .slick-current img': {
          borderRadius: 1.5,
          border: `solid 2px ${theme.palette.primary.main}`,
        },
      }}
    >
      <Carousel {...carouselSettings2} asNavFor={nav1} ref={carousel2}>
        {slides.map((slide: any) => (
          <Image
            className="thumbnail"
            key={slide.src}
            disabledEffect
            alt="thumbnail"
            src={slide.src}
            sx={{
              width: THUMB_SIZE,
              height: THUMB_SIZE,
              borderRadius: 1.5,
              cursor: 'pointer',
            }}
          />
        ))}
      </Carousel>
    </StyledThumbnailsContainer>
  );

  return (
    <>
      <Box
        sx={{
          '& .slick-slide': {
            float: theme.direction === 'rtl' ? 'right' : 'left',
          },
        }}
      >
        {renderLargeImg}

        {renderThumbnails}
      </Box>

      <Lightbox
        index={selectedImage}
        slides={slides}
        open={openLightbox}
        close={handleCloseLightbox}
        onGetCurrentIndex={(index: any) => setSelectedImage(index)}
      />
    </>
  );
}

EcommerceProductDetailsCarousel.propTypes = {
  images: PropTypes.array,
};
