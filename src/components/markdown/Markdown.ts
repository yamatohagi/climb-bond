import PropTypes from 'prop-types';
import StyledMarkdown from './styles';

// ----------------------------------------------------------------------

export default function Markdown({
  content,
  firstLetter = false,
  sx
}: any) {
  return (
    // @ts-expect-error TS(2749): 'StyledMarkdown' refers to a value, but is being u... Remove this comment to see the full error message
    <StyledMarkdown
      firstLetter={firstLetter}
      // @ts-expect-error TS(2304): Cannot find name 'dangerouslySetInnerHTML'.
      dangerouslySetInnerHTML={{ __html: content }}
      // @ts-expect-error TS(2304): Cannot find name 'sx'.
      sx={sx}
    />
  );
}

Markdown.propTypes = {
  content: PropTypes.string,
  firstLetter: PropTypes.bool,
  sx: PropTypes.object,
};
