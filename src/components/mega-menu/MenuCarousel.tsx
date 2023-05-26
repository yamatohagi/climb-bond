import PropTypes from 'prop-types';
import { useRef } from 'react';
// next
import NextLink from 'next/link';
// @mui
import { useTheme } from '@mui/material/styles';
import { Box, Link } from '@mui/material';
//
import Image from '../image';
import TextMaxLine from '../text-max-line';
import Carousel, { CarouselDots, CarouselArrows } from '../carousel';

// ----------------------------------------------------------------------

export default function MenuCarousel({
  products,
  numberShow,
  sx
}: any) {
  const theme = useTheme();

  const carouselRef = useRef(null);

  const carouselSettings = {
    dots: true,
    arrows: false,
    slidesToShow: numberShow,
    slidesToScroll: numberShow,
    rtl: Boolean(theme.direction === 'rtl'),
    ...CarouselDots({
      sx: { mt: 3 },
    }),
  };

  const handlePrev = () => {
    // @ts-expect-error TS(2339): Property 'slickPrev' does not exist on type 'never... Remove this comment to see the full error message
    carouselRef.current?.slickPrev();
  };

  const handleNext = () => {
    // @ts-expect-error TS(2339): Property 'slickNext' does not exist on type 'never... Remove this comment to see the full error message
    carouselRef.current?.slickNext();
  };

  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <Box sx={{ position: 'relative', pt: 2, ...sx }}>
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <CarouselArrows
        filled
        onNext={handleNext}
        onPrev={handlePrev}
        leftButtonProps={{
          size: 'small',
          sx: { top: 'calc(50% - 40px)', left: -8 },
        }}
        rightButtonProps={{
          size: 'small',
          sx: { top: 'calc(50% - 40px)', right: -8 },
        }}
      >
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Carousel ref={carouselRef} {...carouselSettings}>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          {products.map((product: any) => <Box key={product.name} sx={{ px: 1, textAlign: 'center' }}>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Link
              component={NextLink}
              href={product.path}
              color="inherit"
              underline="none"
              sx={{
                display: 'block',
                transition: theme.transitions.create('all'),
                '&:hover': { color: 'primary.main' },
              }}
            >
              // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <Image
                // @ts-expect-error TS(2322): Type '{ alt: any; src: any; ratio: string; disable... Remove this comment to see the full error message
                alt={product.image}
                src={product.image}
                ratio="1/1"
                disabledEffect
                sx={{ borderRadius: 1, mb: 1 }}
              />

              // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <TextMaxLine variant="caption" sx={{ fontWeight: 'fontWeightSemiBold' }}>
                {product.name}
              </TextMaxLine>
            </Link>
          </Box>)}
        </Carousel>
      </CarouselArrows>
    </Box>
  );
}

MenuCarousel.propTypes = {
  numberShow: PropTypes.number,
  products: PropTypes.array,
  sx: PropTypes.object,
};
