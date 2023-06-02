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
    slideInUp: varSlide(undefined).inUp,
    slideInDown: varSlide(undefined).inDown,
    slideInLeft: varSlide(undefined).inLeft,
    slideInRight: varSlide(undefined).inRight,
    slideOutUp: varSlide(undefined).outUp,
    slideOutDown: varSlide(undefined).outDown,
    slideOutLeft: varSlide(undefined).outLeft,
    slideOutRight: varSlide(undefined).outRight,
    // Fade
    fadeIn: varFade(undefined).in,
    fadeInUp: varFade(undefined).inUp,
    fadeInDown: varFade(undefined).inDown,
    fadeInLeft: varFade(undefined).inLeft,
    fadeInRight: varFade(undefined).inRight,
    fadeOut: varFade(undefined).out,
    fadeOutUp: varFade(undefined).outUp,
    fadeOutDown: varFade(undefined).outDown,
    fadeOutLeft: varFade(undefined).outLeft,
    fadeOutRight: varFade(undefined).outRight,
    // Zoom
    zoomIn: varZoom({ distance: 80 }).in,
    zoomInUp: varZoom({ distance: 80 }).inUp,
    zoomInDown: varZoom({ distance: 80 }).inDown,
    zoomInLeft: varZoom({ distance: 240 }).inLeft,
    zoomInRight: varZoom({ distance: 240 }).inRight,
    zoomOut: varZoom(undefined).out,
    zoomOutLeft: varZoom(undefined).outLeft,
    zoomOutRight: varZoom(undefined).outRight,
    zoomOutUp: varZoom(undefined).outUp,
    zoomOutDown: varZoom(undefined).outDown,
    // Bounce
    bounceIn: varBounce(undefined).in,
    bounceInUp: varBounce(undefined).inUp,
    bounceInDown: varBounce(undefined).inDown,
    bounceInLeft: varBounce(undefined).inLeft,
    bounceInRight: varBounce(undefined).inRight,
    bounceOut: varBounce(undefined).out,
    bounceOutUp: varBounce(undefined).outUp,
    bounceOutDown: varBounce(undefined).outDown,
    bounceOutLeft: varBounce(undefined).outLeft,
    bounceOutRight: varBounce(undefined).outRight,
    // Flip
    flipInX: varFlip(undefined).inX,
    flipInY: varFlip(undefined).inY,
    flipOutX: varFlip(undefined).outX,
    flipOutY: varFlip(undefined).outY,
    // Scale
    scaleInX: varScale(undefined).inX,
    scaleInY: varScale(undefined).inY,
    scaleOutX: varScale(undefined).outX,
    scaleOutY: varScale(undefined).outY,
    // Rotate
    rotateIn: varRotate(undefined).in,
    rotateOut: varRotate(undefined).out,
    // Background
    kenburnsTop: varBgKenburns(undefined).top,
    kenburnsBottom: varBgKenburns(undefined).bottom,
    kenburnsLeft: varBgKenburns(undefined).left,
    kenburnsRight: varBgKenburns(undefined).right,
    panTop: varBgPan(undefined).top,
    panBottom: varBgPan(undefined).bottom,
    panLeft: varBgPan(undefined).left,
    panRight: varBgPan(undefined).right,
    color2x: varBgColor(undefined),
    color3x: varBgColor({ colors: ['#19dcea', '#b22cff', '#ea2222'] }),
    color4x: varBgColor({ colors: ['#19dcea', '#b22cff', '#ea2222', '#f5be10'] }),
    color5x: varBgColor({ colors: ['#19dcea', '#b22cff', '#ea2222', '#f5be10', '#3bd80d'] }),
  }[variant];
}
