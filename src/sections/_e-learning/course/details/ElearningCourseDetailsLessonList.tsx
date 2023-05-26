import PropTypes from 'prop-types';
import { useState } from 'react';
// @mui
import { Typography } from '@mui/material';
//
import ElearningCourseDetailsLessonItem from './ElearningCourseDetailsLessonItem';
import ElearningCourseDetailsLessonsDialog from './ElearningCourseDetailsLessonsDialog';

// ----------------------------------------------------------------------

export default function ElearningCourseDetailsLessonList({
  lessons
}: any) {
  const [selectLesson, setSelectLesson] = useState(null);

  const [open, setOpen] = useState(false);

  const [play, setPlay] = useState(false);

  const [expanded, setExpanded] = useState(false);

  const handleSelectVideo = (lesson: any) => {
    setSelectLesson(lesson);
    setPlay(true);
  };

  const handleOpen = (lesson: any) => {
    setOpen(true);
    if (lesson) {
      handleSelectVideo(lesson);
    }
  };

  const handleClose = () => {
    setOpen(false);
    setPlay(false);
    setSelectLesson(null);
  };

  const handleVideoEnded = () => {
    setPlay(false);
  };

  const handleExpanded = (panel: any) => (event: any, isExpanded: any) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <div>
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Typography variant="h4" sx={{ mb: 3 }}>
        Lessons
      </Typography>

      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      {lessons?.map((lesson: any) => <ElearningCourseDetailsLessonItem
        key={lesson.id}
        lesson={lesson}
        // @ts-expect-error TS(2339): Property 'id' does not exist on type 'never'.
        selected={play && selectLesson?.id === lesson.id}
        expanded={expanded === lesson.id}
        onExpanded={handleExpanded(lesson.id)}
        onOpen={() => handleOpen(lesson)}
      />)}

      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <ElearningCourseDetailsLessonsDialog
        selected={play}
        open={open}
        lessons={lessons}
        onClose={handleClose}
        selectLesson={selectLesson}
        onVideoEnded={handleVideoEnded}
        onSelectVideo={(lesson) => setSelectLesson(lesson)}
      />
    </div>
  );
}

ElearningCourseDetailsLessonList.propTypes = {
  lessons: PropTypes.array,
};
