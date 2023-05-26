import PropTypes from 'prop-types';
import { useState } from 'react';
// @mui
import { Typography } from '@mui/material';
//
import ElearningCourseDetailsLessonItem from './ElearningCourseDetailsLessonItem';
import ElearningCourseDetailsLessonsDialog from './ElearningCourseDetailsLessonsDialog';

// ----------------------------------------------------------------------

export default function ElearningCourseDetailsLessonList({ lessons }: any) {
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
    <div>
      <Typography variant="h4" sx={{ mb: 3 }}>
        Lessons
      </Typography>

      {lessons?.map((lesson: any) => (
        <ElearningCourseDetailsLessonItem
          key={lesson.id}
          lesson={lesson}
          // @ts-expect-error TS(2339): Property 'id' does not exist on type 'never'.
          selected={play && selectLesson?.id === lesson.id}
          expanded={expanded === lesson.id}
          onExpanded={handleExpanded(lesson.id)}
          onOpen={() => handleOpen(lesson)}
        />
      ))}

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
