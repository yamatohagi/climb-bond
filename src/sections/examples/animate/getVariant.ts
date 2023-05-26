import {
  varFade,
  varZoom,
  varFlip,
  varSlide,
  varScale,
  varBgPan,
  varBounce,
  varRotate,
  varBgColor,
  varBgKenburns,
} from '../../../components/animate';

// ----------------------------------------------------------------------

export default function getVariant(variant = 'slideInUp') {
  return {
    // Slide
    // @ts-expect-error TS(2554): Expected 1 arguments, but got 0.
    slideInUp: varSlide().inUp,
    // @ts-expect-error TS(2554): Expected 1 arguments, but got 0.
    slideInDown: varSlide().inDown,
    // @ts-expect-error TS(2554): Expected 1 arguments, but got 0.
    slideInLeft: varSlide().inLeft,
    // @ts-expect-error TS(2554): Expected 1 arguments, but got 0.
    slideInRight: varSlide().inRight,
    // @ts-expect-error TS(2554): Expected 1 arguments, but got 0.
    slideOutUp: varSlide().outUp,
    // @ts-expect-error TS(2554): Expected 1 arguments, but got 0.
    slideOutDown: varSlide().outDown,
    // @ts-expect-error TS(2554): Expected 1 arguments, but got 0.
    slideOutLeft: varSlide().outLeft,
    // @ts-expect-error TS(2554): Expected 1 arguments, but got 0.
    slideOutRight: varSlide().outRight,
    // Fade
    // @ts-expect-error TS(2554): Expected 1 arguments, but got 0.
    fadeIn: varFade().in,
    // @ts-expect-error TS(2554): Expected 1 arguments, but got 0.
    fadeInUp: varFade().inUp,
    // @ts-expect-error TS(2554): Expected 1 arguments, but got 0.
    fadeInDown: varFade().inDown,
    // @ts-expect-error TS(2554): Expected 1 arguments, but got 0.
    fadeInLeft: varFade().inLeft,
    // @ts-expect-error TS(2554): Expected 1 arguments, but got 0.
    fadeInRight: varFade().inRight,
    // @ts-expect-error TS(2554): Expected 1 arguments, but got 0.
    fadeOut: varFade().out,
    // @ts-expect-error TS(2554): Expected 1 arguments, but got 0.
    fadeOutUp: varFade().outUp,
    // @ts-expect-error TS(2554): Expected 1 arguments, but got 0.
    fadeOutDown: varFade().outDown,
    // @ts-expect-error TS(2554): Expected 1 arguments, but got 0.
    fadeOutLeft: varFade().outLeft,
    // @ts-expect-error TS(2554): Expected 1 arguments, but got 0.
    fadeOutRight: varFade().outRight,
    // Zoom
    zoomIn: varZoom({ distance: 80 }).in,
    zoomInUp: varZoom({ distance: 80 }).inUp,
    zoomInDown: varZoom({ distance: 80 }).inDown,
    zoomInLeft: varZoom({ distance: 240 }).inLeft,
    zoomInRight: varZoom({ distance: 240 }).inRight,
    // @ts-expect-error TS(2554): Expected 1 arguments, but got 0.
    zoomOut: varZoom().out,
    // @ts-expect-error TS(2554): Expected 1 arguments, but got 0.
    zoomOutLeft: varZoom().outLeft,
    // @ts-expect-error TS(2554): Expected 1 arguments, but got 0.
    zoomOutRight: varZoom().outRight,
    // @ts-expect-error TS(2554): Expected 1 arguments, but got 0.
    zoomOutUp: varZoom().outUp,
    // @ts-expect-error TS(2554): Expected 1 arguments, but got 0.
    zoomOutDown: varZoom().outDown,
    // Bounce
    // @ts-expect-error TS(2554): Expected 1 arguments, but got 0.
    bounceIn: varBounce().in,
    // @ts-expect-error TS(2554): Expected 1 arguments, but got 0.
    bounceInUp: varBounce().inUp,
    // @ts-expect-error TS(2554): Expected 1 arguments, but got 0.
    bounceInDown: varBounce().inDown,
    // @ts-expect-error TS(2554): Expected 1 arguments, but got 0.
    bounceInLeft: varBounce().inLeft,
    // @ts-expect-error TS(2554): Expected 1 arguments, but got 0.
    bounceInRight: varBounce().inRight,
    // @ts-expect-error TS(2554): Expected 1 arguments, but got 0.
    bounceOut: varBounce().out,
    // @ts-expect-error TS(2554): Expected 1 arguments, but got 0.
    bounceOutUp: varBounce().outUp,
    // @ts-expect-error TS(2554): Expected 1 arguments, but got 0.
    bounceOutDown: varBounce().outDown,
    // @ts-expect-error TS(2554): Expected 1 arguments, but got 0.
    bounceOutLeft: varBounce().outLeft,
    // @ts-expect-error TS(2554): Expected 1 arguments, but got 0.
    bounceOutRight: varBounce().outRight,
    // Flip
    // @ts-expect-error TS(2554): Expected 1 arguments, but got 0.
    flipInX: varFlip().inX,
    // @ts-expect-error TS(2554): Expected 1 arguments, but got 0.
    flipInY: varFlip().inY,
    // @ts-expect-error TS(2554): Expected 1 arguments, but got 0.
    flipOutX: varFlip().outX,
    // @ts-expect-error TS(2554): Expected 1 arguments, but got 0.
    flipOutY: varFlip().outY,
    // Scale
    // @ts-expect-error TS(2554): Expected 1 arguments, but got 0.
    scaleInX: varScale().inX,
    // @ts-expect-error TS(2554): Expected 1 arguments, but got 0.
    scaleInY: varScale().inY,
    // @ts-expect-error TS(2554): Expected 1 arguments, but got 0.
    scaleOutX: varScale().outX,
    // @ts-expect-error TS(2554): Expected 1 arguments, but got 0.
    scaleOutY: varScale().outY,
    // Rotate
    // @ts-expect-error TS(2554): Expected 1 arguments, but got 0.
    rotateIn: varRotate().in,
    // @ts-expect-error TS(2554): Expected 1 arguments, but got 0.
    rotateOut: varRotate().out,
    // Background
    // @ts-expect-error TS(2554): Expected 1 arguments, but got 0.
    kenburnsTop: varBgKenburns().top,
    // @ts-expect-error TS(2554): Expected 1 arguments, but got 0.
    kenburnsBottom: varBgKenburns().bottom,
    // @ts-expect-error TS(2554): Expected 1 arguments, but got 0.
    kenburnsLeft: varBgKenburns().left,
    // @ts-expect-error TS(2554): Expected 1 arguments, but got 0.
    kenburnsRight: varBgKenburns().right,
    // @ts-expect-error TS(2554): Expected 1 arguments, but got 0.
    panTop: varBgPan().top,
    // @ts-expect-error TS(2554): Expected 1 arguments, but got 0.
    panBottom: varBgPan().bottom,
    // @ts-expect-error TS(2554): Expected 1 arguments, but got 0.
    panLeft: varBgPan().left,
    // @ts-expect-error TS(2554): Expected 1 arguments, but got 0.
    panRight: varBgPan().right,
    // @ts-expect-error TS(2554): Expected 1 arguments, but got 0.
    color2x: varBgColor(),
    color3x: varBgColor({ colors: ['#19dcea', '#b22cff', '#ea2222'] }),
    color4x: varBgColor({ colors: ['#19dcea', '#b22cff', '#ea2222', '#f5be10'] }),
    color5x: varBgColor({ colors: ['#19dcea', '#b22cff', '#ea2222', '#f5be10', '#3bd80d'] }),
  }[variant];
}
