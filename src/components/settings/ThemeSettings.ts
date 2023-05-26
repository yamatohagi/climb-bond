import PropTypes from 'prop-types';
//
// @ts-expect-error TS(6142): Module './ThemeRtlLayout' was resolved to '/Users/... Remove this comment to see the full error message
import ThemeRtlLayout from './ThemeRtlLayout';
// @ts-expect-error TS(6142): Module './ThemeColorPresets' was resolved to '/Use... Remove this comment to see the full error message
import ThemeColorPresets from './ThemeColorPresets';

// ----------------------------------------------------------------------

ThemeSettings.propTypes = {
  children: PropTypes.node,
};

export default function ThemeSettings({
  children
}: any) {
  return (
    // @ts-expect-error TS(2365): Operator '<' cannot be applied to types 'boolean' ... Remove this comment to see the full error message
    <ThemeColorPresets>
      // @ts-expect-error TS(2709): Cannot use namespace 'ThemeRtlLayout' as a type.
      <ThemeRtlLayout>{children}</ThemeRtlLayout>
    </ThemeColorPresets>
  );
}
