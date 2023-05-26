import PropTypes from 'prop-types';
// hooks
import useOffSetTop from 'src/hooks/useOffSetTop';
//
import Header from './Header';

// ----------------------------------------------------------------------

export default function SimpleLayout({ children }: any) {
  const isOffset = useOffSetTop(undefined, undefined);

  return (
    <>
      <Header isOffset={isOffset} />

      {children}
    </>
  );
}

SimpleLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
