export * from './config-navigation';

// @ts-expect-error TS(6142): Module './mobile/NavMobile' was resolved to '/User... Remove this comment to see the full error message
export { default as NavMobile } from './mobile/NavMobile';
export { default as NavDesktop } from './desktop/NavDesktop';
