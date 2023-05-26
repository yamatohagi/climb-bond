import PropTypes from 'prop-types';
// @mui
import { Box, Stack, Dialog, Typography, ListItemButton, IconButton } from '@mui/material';
// components
// @ts-expect-error TS(2307): Cannot find module 'src/components/player' or its ... Remove this comment to see the full error message
import Player from 'src/components/player';
// @ts-expect-error TS(2307): Cannot find module 'src/components/iconify' or its... Remove this comment to see the full error message
import Iconify from 'src/components/iconify';
// @ts-expect-error TS(2307): Cannot find module 'src/components/scrollbar' or i... Remove this comment to see the full error message
import Scrollbar from 'src/components/scrollbar';

// ----------------------------------------------------------------------

export default function ElearningCourseDetailsLessonsDialog({
  open,
  selected,
  lessons,
  onClose,
  selectLesson,
  onVideoEnded,
  onSelectVideo
}: any) {
  return (
    // @ts-expect-error TS(2749): 'Dialog' refers to a value, but is being used as a... Remove this comment to see the full error message
    <Dialog
      // @ts-expect-error TS(2304): Cannot find name 'fullWidth'.
      fullWidth
      // @ts-expect-error TS(2304): Cannot find name 'maxWidth'.
      maxWidth="lg"
      open={open}
      onClose={onClose}
      // @ts-expect-error TS(2304): Cannot find name 'PaperProps'.
      PaperProps={{ sx: { overflow: 'hidden' } }}
    >
      // @ts-expect-error TS(2749): 'Stack' refers to a value, but is being used as a ... Remove this comment to see the full error message
      <Stack direction={{ xs: 'column', md: 'row' }}>
        // @ts-expect-error TS(2749): 'Box' refers to a value, but is being used as a ty... Remove this comment to see the full error message
        <Box
          // @ts-expect-error TS(2304): Cannot find name 'sx'.
          sx={{
            // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
            position: 'relative',
            // @ts-expect-error TS(2304): Cannot find name 'width'.
            width: { xs: 1, md: 0.5 },
            // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
            height: { xs: 320, md: 640 },
          }}
        >
          // @ts-expect-error TS(2749): 'IconButton' refers to a value, but is being used ... Remove this comment to see the full error message
          <IconButton onClick={onClose} sx={{ top: 16, left: 16, zIndex: 9, position: 'absolute' }}>
            // @ts-expect-error TS(2304): Cannot find name 'icon'.
            <Iconify icon="carbon:close" />
          </IconButton>

          <Player
            // @ts-expect-error TS(2304): Cannot find name 'controls'.
            controls
            // @ts-expect-error TS(2304): Cannot find name 'url'.
            url={selectLesson?.videoPath}
            // @ts-expect-error TS(2304): Cannot find name 'playing'.
            playing={selected}
            // @ts-expect-error TS(2304): Cannot find name 'onEnded'.
            onEnded={onVideoEnded}
          />
        </Box>

        // @ts-expect-error TS(2304): Cannot find name 'sx'.
        <Scrollbar sx={{ p: 1, maxHeight: 640 }}>
          // @ts-expect-error TS(2349): This expression is not callable.
          {lessons?.map((lesson) => (
            // @ts-expect-error TS(2709): Cannot use namespace 'LessonItem' as a type.
            <LessonItem
              // @ts-expect-error TS(2304): Cannot find name 'key'.
              key={lesson.id}
              // @ts-expect-error TS(2304): Cannot find name 'lesson'.
              lesson={lesson}
              // @ts-expect-error TS(2304): Cannot find name 'selected'.
              selected={selectLesson?.id === lesson.id}
              // @ts-expect-error TS(2304): Cannot find name 'onSelectVideo'.
              onSelectVideo={() => onSelectVideo(lesson)}
            />
          ))}
        // @ts-expect-error TS(2365): Operator '<' cannot be applied to types 'boolean' ... Remove this comment to see the full error message
        </Scrollbar>
      </Stack>
    </Dialog>
  );
}

ElearningCourseDetailsLessonsDialog.propTypes = {
  lessons: PropTypes.array,
  onClose: PropTypes.func,
  onSelectVideo: PropTypes.func,
  onVideoEnded: PropTypes.func,
  open: PropTypes.bool,
  selectLesson: PropTypes.bool,
  selected: PropTypes.bool,
};

// ----------------------------------------------------------------------

function LessonItem({
  lesson,
  selected,
  onSelectVideo
}: any) {
  const { title, description, isUnLock } = lesson;

  const playIcon = selected ? 'carbon:pause-outline' : 'carbon:play';

  return (
    // @ts-expect-error TS(2749): 'ListItemButton' refers to a value, but is being u... Remove this comment to see the full error message
    <ListItemButton
      selected={selected}
      // @ts-expect-error TS(2304): Cannot find name 'disabled'.
      disabled={isUnLock}
      // @ts-expect-error TS(2304): Cannot find name 'onClick'.
      onClick={onSelectVideo}
      // @ts-expect-error TS(2304): Cannot find name 'sx'.
      sx={{ borderRadius: 1 }}
    >
      <Iconify
        // @ts-expect-error TS(2304): Cannot find name 'width'.
        width={24}
        // @ts-expect-error TS(2304): Cannot find name 'icon'.
        icon={isUnLock ? 'carbon:locked' : playIcon}
        // @ts-expect-error TS(2304): Cannot find name 'sx'.
        sx={{
          // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
          mr: 2,
          // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
          ...(selected && {
            color: 'primary.main',
          }),
          // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
          ...(isUnLock && {
            color: 'text.disabled',
          }),
        }}
      />

      // @ts-expect-error TS(2304): Cannot find name 'div'.
      <div>
        // @ts-expect-error TS(2749): 'Typography' refers to a value, but is being used ... Remove this comment to see the full error message
        <Typography
          // @ts-expect-error TS(2304): Cannot find name 'noWrap'.
          noWrap
          // @ts-expect-error TS(2304): Cannot find name 'variant'.
          variant="subtitle1"
          // @ts-expect-error TS(2304): Cannot find name 'sx'.
          sx={{
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

        // @ts-expect-error TS(2304): Cannot find name 'noWrap'.
        <Typography noWrap variant="body2" sx={{ maxWidth: 0.98 }}>
          // @ts-expect-error TS(18004): No value exists in scope for the shorthand propert... Remove this comment to see the full error message
          {description}
        </Typography>
      </div>
    </ListItemButton>
  );
}

LessonItem.propTypes = {
  lesson: PropTypes.shape({
    description: PropTypes.string,
    isUnLock: PropTypes.bool,
    title: PropTypes.string,
  }),
  onSelectVideo: PropTypes.func,
  selected: PropTypes.bool,
};
