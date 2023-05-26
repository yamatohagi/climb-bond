import PropTypes from 'prop-types';
// hooks
// @ts-expect-error TS(2307): Cannot find module 'src/hooks/useOffSetTop' or its... Remove this comment to see the full error message
import useOffSetTop from 'src/hooks/useOffSetTop';
//
import Header from './Header';

// ----------------------------------------------------------------------

export default function SimpleLayout({
  children
}: any) {
  const isOffset = useOffSetTop();

  return (
    <>
      // @ts-expect-error TS(2709): Cannot use namespace 'Header' as a type.
      <Header isOffset={isOffset} />

      {children}
    </>
  );
}

SimpleLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
