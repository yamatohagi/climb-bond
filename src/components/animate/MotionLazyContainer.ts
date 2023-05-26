import PropTypes from 'prop-types';
import { LazyMotion, m } from 'framer-motion';

// ----------------------------------------------------------------------

// eslint-disable-next-line import/extensions
const loadFeatures = () => import('./features.js').then((res) => res.default);

MotionLazyContainer.propTypes = {
  children: PropTypes.node,
};

export default function MotionLazyContainer({
  children
}: any) {
  return (
    // @ts-expect-error TS(2749): 'LazyMotion' refers to a value, but is being used ... Remove this comment to see the full error message
    <LazyMotion strict features={loadFeatures}>
      // @ts-expect-error TS(2503): Cannot find namespace 'm'.
      <m.div style={{ height: '100%' }}> {children} </m.div>
    </LazyMotion>
  );
}
