import PropTypes from 'prop-types';
// @mui
import { styled } from '@mui/material/styles';
import { Box, Accordion, Typography, AccordionSummary, AccordionDetails } from '@mui/material';
// components
// @ts-expect-error TS(2307): Cannot find module 'src/components/iconify' or its... Remove this comment to see the full error message
import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

const StyledAccordion = styled(Accordion)(({ theme }) => ({
  '&.Mui-expanded': {
    overflow: 'hidden',
    borderRadius: '8px !important',
    marginBottom: theme.spacing(2.5),
    // @ts-expect-error TS(2339): Property 'customShadows' does not exist on type 'T... Remove this comment to see the full error message
    boxShadow: theme.customShadows.z16,
  },
}));

const StyledAccordionSummary = styled(AccordionSummary)(({ theme }) => ({
  '&.Mui-expanded': {
    minHeight: 'auto',
    backgroundColor: theme.palette.action.selected,
  },
  '& .MuiAccordionSummary-content': {
    margin: theme.spacing(2, 0),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(1),
    '&.Mui-expanded': { margin: theme.spacing(2, 0) },
  },
}));

// ----------------------------------------------------------------------

export default function ElearningCourseDetailsLessonItem({
  lesson,
  expanded,
  selected,
  onExpanded,
  onOpen
}: any) {
  const { title, duration, description, isUnLock } = lesson;

  const handleOpen = () => {
    if (!isUnLock) {
      onOpen();
    }
  };

  const playIcon = selected ? 'carbon:pause-outline' : 'carbon:play';

  return (
    // @ts-expect-error TS(2749): 'Box' refers to a value, but is being used as a ty... Remove this comment to see the full error message
    <Box sx={{ position: 'relative' }}>
      <Iconify
        // @ts-expect-error TS(2304): Cannot find name 'width'.
        width={24}
        // @ts-expect-error TS(2304): Cannot find name 'icon'.
        icon={isUnLock ? 'carbon:locked' : playIcon}
        // @ts-expect-error TS(2552): Cannot find name 'onClick'. Did you mean 'onclick'... Remove this comment to see the full error message
        onClick={handleOpen}
        // @ts-expect-error TS(2304): Cannot find name 'sx'.
        sx={{
          // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
          mr: 2,
          // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
          top: 18,
          // @ts-expect-error TS(2304): Cannot find name 'left'.
          left: 8,
          // @ts-expect-error TS(2304): Cannot find name 'zIndex'.
          zIndex: 9,
          // @ts-expect-error TS(2304): Cannot find name 'cursor'.
          cursor: 'pointer',
          // @ts-expect-error TS(2304): Cannot find name 'position'.
          position: 'absolute',
          // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
          ...(selected && {
            color: 'primary.main',
          }),
          // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
          ...(isUnLock && {
            color: 'text.disabled',
          }),
        }}
      // @ts-expect-error TS(2365): Operator '<' cannot be applied to types 'RegExp' a... Remove this comment to see the full error message
      />

      // @ts-expect-error TS(2304): Cannot find name 'expanded'.
      <StyledAccordion expanded={expanded} onChange={onExpanded} disabled={isUnLock}>
        // @ts-expect-error TS(2749): 'StyledAccordionSummary' refers to a value, but is... Remove this comment to see the full error message
        <StyledAccordionSummary>
          // @ts-expect-error TS(2749): 'Typography' refers to a value, but is being used ... Remove this comment to see the full error message
          <Typography
            // @ts-expect-error TS(2304): Cannot find name 'variant'.
            variant="subtitle1"
            // @ts-expect-error TS(2304): Cannot find name 'sx'.
            sx={{
              // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
              flexGrow: 1,
              // @ts-expect-error TS(2304): Cannot find name 'pl'.
              pl: 3,
              // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
              ...(selected && {
                color: 'primary.main',
              }),
            }}
          // @ts-expect-error TS(2365): Operator '<' cannot be applied to types 'boolean' ... Remove this comment to see the full error message
          >
            // @ts-expect-error TS(18004): No value exists in scope for the shorthand propert... Remove this comment to see the full error message
            {title}
          </Typography>

          // @ts-expect-error TS(2304): Cannot find name 'variant'.
          <Typography variant="body2" sx={{ mr: 2 }}>
            // @ts-expect-error TS(18004): No value exists in scope for the shorthand propert... Remove this comment to see the full error message
            {duration} m
          </Typography>

          <Iconify
            // @ts-expect-error TS(2304): Cannot find name 'icon'.
            icon={expanded ? 'carbon:chevron-down' : 'carbon:chevron-right'}
            // @ts-expect-error TS(2304): Cannot find name 'sx'.
            sx={{
              // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
              color: 'text.secondary',
              // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
              ...(isUnLock && { color: 'text.disabled' }),
            }}
          // @ts-expect-error TS(2365): Operator '<' cannot be applied to types 'boolean' ... Remove this comment to see the full error message
          />
        </StyledAccordionSummary>

        // @ts-expect-error TS(2304): Cannot find name 'sx'.
        <AccordionDetails sx={{ p: 2 }}>
          // @ts-expect-error TS(2749): 'Typography' refers to a value, but is being used ... Remove this comment to see the full error message
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            // @ts-expect-error TS(18004): No value exists in scope for the shorthand propert... Remove this comment to see the full error message
            {description}
          </Typography>
        </AccordionDetails>
      </StyledAccordion>
    </Box>
  );
}

ElearningCourseDetailsLessonItem.propTypes = {
  expanded: PropTypes.bool,
  lesson: PropTypes.shape({
    description: PropTypes.string,
    duration: PropTypes.number,
    isUnLock: PropTypes.bool,
    title: PropTypes.string,
  }),
  onExpanded: PropTypes.func,
  onOpen: PropTypes.func,
  selected: PropTypes.bool,
};
