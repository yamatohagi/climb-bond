/* eslint-disable import/no-unresolved */
import PropTypes from 'prop-types';
import ReactLightbox from 'yet-another-react-lightbox';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import Video from 'yet-another-react-lightbox/plugins/video';
import Captions from 'yet-another-react-lightbox/plugins/captions';
import Slideshow from 'yet-another-react-lightbox/plugins/slideshow';
import Fullscreen from 'yet-another-react-lightbox/plugins/fullscreen';
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';
import { useLightboxState } from 'yet-another-react-lightbox/core';
// @mui
import { Typography } from '@mui/material';
//
import Iconify from '../iconify';
//
import StyledLightbox from './styles';

// ----------------------------------------------------------------------

const ICON_SIZE = 24;

export default function Lightbox({
  slides,
  disabledZoom,
  disabledVideo,
  disabledTotal,
  disabledCaptions,
  disabledSlideshow,
  disabledThumbnails,
  disabledFullscreen,
  onGetCurrentIndex,
  ...other
}: any) {
  const totalItems = slides ? slides.length : 0;

  return <>
    // @ts-expect-error TS(2749): 'StyledLightbox' refers to a value, but is being u... Remove this comment to see the full error message
    <StyledLightbox />

    <ReactLightbox
      slides={slides}
      // @ts-expect-error TS(2552): Cannot find name 'animation'. Did you mean 'Animat... Remove this comment to see the full error message
      animation={{ swipe: 240 }}
      // @ts-expect-error TS(2304): Cannot find name 'carousel'.
      carousel={{ finite: totalItems < 5 }}
      // @ts-expect-error TS(2304): Cannot find name 'controller'.
      controller={{ closeOnBackdropClick: true }}
      // @ts-expect-error TS(2552): Cannot find name 'plugins'. Did you mean 'Plugin'?
      plugins={getPlugins({
        // @ts-expect-error TS(7031): Binding element 'disabledZoom' implicitly has an '... Remove this comment to see the full error message
        disabledZoom,
        // @ts-expect-error TS(7031): Binding element 'disabledVideo' implicitly has an ... Remove this comment to see the full error message
        disabledVideo,
        // @ts-expect-error TS(7031): Binding element 'disabledCaptions' implicitly has ... Remove this comment to see the full error message
        disabledCaptions,
        // @ts-expect-error TS(7031): Binding element 'disabledSlideshow' implicitly has... Remove this comment to see the full error message
        disabledSlideshow,
        // @ts-expect-error TS(7031): Binding element 'disabledThumbnails' implicitly ha... Remove this comment to see the full error message
        disabledThumbnails,
        // @ts-expect-error TS(7031): Binding element 'disabledFullscreen' implicitly ha... Remove this comment to see the full error message
        disabledFullscreen,
      })}
      // @ts-expect-error TS(2304): Cannot find name 'on'.
      on={{
        // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
        view: ({
          index
        }: any) => {
          // @ts-expect-error TS(2304): Cannot find name 'onGetCurrentIndex'.
          if (onGetCurrentIndex) {
            // @ts-expect-error TS(2304): Cannot find name 'onGetCurrentIndex'.
            onGetCurrentIndex(index);
          }
        },
      }}
      // @ts-expect-error TS(2741): Property 'visible' is missing in type '{}' but req... Remove this comment to see the full error message
      toolbar={{
        // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
        buttons: [
          // @ts-expect-error TS(2709): Cannot use namespace 'DisplayTotal' as a type.
          <DisplayTotal
            // @ts-expect-error TS(2304): Cannot find name 'key'.
            key={0}
            // @ts-expect-error TS(2304): Cannot find name 'totalItems'.
            totalItems={totalItems}
            // @ts-expect-error TS(2304): Cannot find name 'disabledTotal'.
            disabledTotal={disabledTotal}
            // @ts-expect-error TS(2304): Cannot find name 'disabledCaptions'.
            disabledCaptions={disabledCaptions}
          />,
          'close',
        ],
      }}
      // @ts-expect-error TS(2304): Cannot find name 'render'.
      render={{
        // @ts-expect-error TS(2749): 'Iconify' refers to a value, but is being used as ... Remove this comment to see the full error message
        iconClose: () => <Iconify width={ICON_SIZE} icon="carbon:close" />,
        // @ts-expect-error TS(2304): Cannot find name 'iconZoomIn'.
        iconZoomIn: () => <Iconify width={ICON_SIZE} icon="carbon:zoom-in" />,
        // @ts-expect-error TS(2304): Cannot find name 'iconZoomOut'.
        iconZoomOut: () => <Iconify width={ICON_SIZE} icon="carbon:zoom-out" />,
        // @ts-expect-error TS(2304): Cannot find name 'iconSlideshowPlay'.
        iconSlideshowPlay: () => <Iconify width={ICON_SIZE} icon="carbon:play" />,
        // @ts-expect-error TS(2304): Cannot find name 'iconSlideshowPause'.
        iconSlideshowPause: () => <Iconify width={ICON_SIZE} icon="carbon:pause" />,
        // @ts-expect-error TS(2304): Cannot find name 'iconPrev'.
        iconPrev: () => <Iconify width={ICON_SIZE + 8} icon="carbon:chevron-left" />,
        // @ts-expect-error TS(2304): Cannot find name 'iconNext'.
        iconNext: () => <Iconify width={ICON_SIZE + 8} icon="carbon:chevron-right" />,
        // @ts-expect-error TS(2304): Cannot find name 'iconExitFullscreen'.
        iconExitFullscreen: () => <Iconify width={ICON_SIZE} icon="carbon:center-to-fit" />,
        // @ts-expect-error TS(2304): Cannot find name 'iconEnterFullscreen'.
        iconEnterFullscreen: () => <Iconify width={ICON_SIZE} icon="carbon:fit-to-screen" />,
      }}
      // @ts-expect-error TS(2304): Cannot find name 'other'.
      {...other}
    />
  </>;
}

Lightbox.propTypes = {
  slides: PropTypes.array,
  disabledZoom: PropTypes.bool,
  disabledVideo: PropTypes.bool,
  disabledTotal: PropTypes.bool,
  disabledCaptions: PropTypes.bool,
  disabledSlideshow: PropTypes.bool,
  disabledThumbnails: PropTypes.bool,
  disabledFullscreen: PropTypes.bool,
  onGetCurrentIndex: PropTypes.func,
};

// ----------------------------------------------------------------------

export function getPlugins({
  disabledZoom,
  disabledVideo,
  disabledCaptions,
  disabledSlideshow,
  disabledThumbnails,
  disabledFullscreen
}: any) {
  let plugins = [Captions, Fullscreen, Slideshow, Thumbnails, Video, Zoom];

  if (disabledThumbnails) {
    plugins = plugins.filter((plugin) => plugin !== Thumbnails);
  }
  if (disabledCaptions) {
    plugins = plugins.filter((plugin) => plugin !== Captions);
  }
  if (disabledFullscreen) {
    plugins = plugins.filter((plugin) => plugin !== Fullscreen);
  }
  if (disabledSlideshow) {
    plugins = plugins.filter((plugin) => plugin !== Slideshow);
  }
  if (disabledZoom) {
    plugins = plugins.filter((plugin) => plugin !== Zoom);
  }
  if (disabledVideo) {
    plugins = plugins.filter((plugin) => plugin !== Video);
  }

  return plugins;
}

// ----------------------------------------------------------------------

export function DisplayTotal({
  totalItems,
  disabledTotal,
  disabledCaptions
}: any) {
  const { state } = useLightboxState();

  const { currentIndex } = state;

  if (disabledTotal) {
    return null;
  }

  return (
    // @ts-expect-error TS(2749): 'Typography' refers to a value, but is being used ... Remove this comment to see the full error message
    <Typography
      // @ts-expect-error TS(2304): Cannot find name 'className'.
      className="yarl__button"
      // @ts-expect-error TS(2304): Cannot find name 'sx'.
      sx={{
        // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
        pl: 3,
        // @ts-expect-error TS(2304): Cannot find name 'left'.
        left: 0,
        // @ts-expect-error TS(2304): Cannot find name 'position'.
        position: 'fixed',
        // @ts-expect-error TS(2304): Cannot find name 'typography'.
        typography: 'body2',
        // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
        ...(!disabledCaptions && {
          px: 'unset',
          minWidth: 64,
          position: 'unset',
          textAlign: 'center',
        }),
      }}
    >
      // @ts-expect-error TS(2304): Cannot find name 'strong'.
      <strong> {currentIndex + 1} </strong> / {totalItems}
    </Typography>
  );
}

DisplayTotal.propTypes = {
  disabledCaptions: PropTypes.bool,
  disabledTotal: PropTypes.bool,
  totalItems: PropTypes.number,
};
