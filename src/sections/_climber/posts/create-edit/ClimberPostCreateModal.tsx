import { _jobs } from 'src/_mock';
import { Button, DialogTitle, DialogContent, DialogActions, Grid } from '@mui/material';
import { DialogAnimate } from 'src/components/animate';
import getVariant from 'src/sections/examples/animate/getVariant';
import { Box } from '@mui/system';
import {
  RHFMultiCheckbox,
  RHFMultiCheckboxAddGrid,
  RHFSelectBox,
  RHFTextField,
} from 'src/components/hook-form';
import FormProvider from 'src/components/hook-form/FormProvider';
import { useForm } from 'react-hook-form';
import { ClimbingType, Gym } from '@prisma/client';
import { useEffect, useState } from 'react';
import Iconify from 'src/components/iconify/Iconify';

export default function ClimberPostCreateModal({ open, onClose }: any) {
  const [gyms, setGyms] = useState([]);

  const onSubmit = (params: any) => {
    console.log(params);
    const createPost = async () => {
      const response = await fetch('/api/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: params.title,
          content: params.content,
          gymId: params.gymId,
          climbingType: params.climbingType,
          belayMonths: params.belayMonths,
          experienceMonths: params.experienceMonths,
          grade: params.grade,
          preferredDayAndTimes: params.preferredDayAndTimes,
        }),
      });

      if (!response.ok) {
        console.error('Failed to create post', response.status, response.statusText);
        return;
      }

      const post = await response.json();
      console.log('Created post', post);
    };

    createPost();
  };

  useEffect(() => {
    fetch('/api/gyms')
      .then((response) => response.json())
      .then((data) => setGyms(data.map((item: Gym) => ({ value: item.id, label: item.name }))));
  }, []);

  const methods = useForm({
    defaultValues: {
      title: '',
      content: '',
      gymId: '',
      preferredDayAndTimes: [],
      climbingType: ClimbingType.BOULDER,
    },
  });
  const {
    handleSubmit,
    formState: { isSubmitting, errors },
  } = methods;

  return (
    <>
      {gyms.length > 0 && (
        <DialogAnimate open={open} onClose={onClose} variants={getVariant('bounceInUp')}>
          <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
            <DialogTitle id="alert-dialog-title">{`ガンバ！！`}</DialogTitle>
            <DialogContent>
              <Box>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <RHFTextField name="title" label="ひとこと" />
                  </Grid>
                  {/* <Grid item xs={12}>
                    <RHFTextField name="content" label="Content" multiline rows={4} required />
                  </Grid> */}
                  <Grid item xs={12} sm={6}>
                    <RHFSelectBox
                      name="climbingType"
                      label="好きな壁"
                      options={[
                        { value: ClimbingType.BOULDER, label: 'ボルダー' },
                        { value: ClimbingType.LEAD, label: 'リード' },
                        { value: ClimbingType.BOTH, label: 'どっちも' },
                      ]}
                    ></RHFSelectBox>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <RHFSelectBox name="gymId" label="ジム名" options={gyms}></RHFSelectBox>
                  </Grid>
                  <Grid item xs={6} sm={6}>
                    <RHFSelectBox
                      name="experienceMonths"
                      label="クライミング歴"
                      options={generateMonths()}
                    ></RHFSelectBox>
                  </Grid>
                  <Grid item xs={6} sm={6}>
                    <RHFSelectBox
                      name="belayMonths"
                      label="ビレイ歴"
                      options={generateMonths()}
                    ></RHFSelectBox>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <RHFSelectBox
                      name="grade"
                      label="頑張ってるグレード"
                      options={generateGrades()}
                    ></RHFSelectBox>
                  </Grid>
                  <Grid item xs={12}>
                    <RHFMultiCheckboxAddGrid
                      name="preferredDayAndTimes"
                      label="よく行く日時"
                      options={options}
                    ></RHFMultiCheckboxAddGrid>
                  </Grid>
                </Grid>
              </Box>
            </DialogContent>
            <DialogActions>
              <Button onClick={onClose}>Disagree</Button>
              <Button variant="contained" type="submit" autoFocus>
                Agree
              </Button>
            </DialogActions>
          </FormProvider>
        </DialogAnimate>
      )}
    </>
  );
}

const generateGrades = () => {
  const mainGrades = Array.from({ length: 8 }, (_, i) => i + 8);
  const subGrades = ['a', 'b', 'c', 'd'];

  let grades: { value: string; label: string }[] = [];

  mainGrades.forEach((mainGrade) => {
    if (mainGrade > 9) {
      subGrades.forEach((subGrade) => {
        grades.push({ value: `5.${mainGrade}${subGrade}`, label: `5.${mainGrade}${subGrade}` });
      });
    } else {
      grades.push({ value: `5.${mainGrade}`, label: `5.${mainGrade}` });
    }
  });

  return grades;
};

function generateMonths() {
  let months = [];
  for (let i = 1; i <= 12; i++) {
    months.push({ value: i, label: `${i}ヶ月` });
  }
  for (let i = 1.5; i < 2; i += 0.5) {
    months.push({ value: i * 12, label: `${i}年` });
  }
  for (let i = 2; i <= 10; i++) {
    months.push({ value: i * 12, label: `${i}年` });
  }
  return months;
}

const generateLabelWithIcon = (label: string, icon: string) => (
  <>
    {label}
    <Iconify icon={icon} sx={{ height: '1.5em', verticalAlign: 'middle', pb: 0.5, pl: 0.5 }} />
  </>
);

const options = [
  {
    value: '01',
    label: generateLabelWithIcon('月曜', 'ph:sun-bold'),
  },
  {
    value: '02',
    label: generateLabelWithIcon('月曜', 'icon-park-solid:moon'),
  },
  {
    value: '11',
    label: generateLabelWithIcon('火曜', 'ph:sun-bold'),
  },
  {
    value: '12',
    label: generateLabelWithIcon('火曜', 'icon-park-solid:moon'),
  },
  {
    value: '21',
    label: generateLabelWithIcon('水曜', 'ph:sun-bold'),
  },
  {
    value: '22',
    label: generateLabelWithIcon('水曜', 'icon-park-solid:moon'),
  },
  {
    value: '31',
    label: generateLabelWithIcon('木曜', 'ph:sun-bold'),
  },
  {
    value: '32',
    label: generateLabelWithIcon('木曜', 'icon-park-solid:moon'),
  },
  {
    value: '41',
    label: generateLabelWithIcon('金曜', 'ph:sun-bold'),
  },
  {
    value: '42',
    label: generateLabelWithIcon('金曜', 'icon-park-solid:moon'),
  },
  {
    value: '51',
    label: generateLabelWithIcon('土曜', 'ph:sun-bold'),
  },
  {
    value: '52',
    label: generateLabelWithIcon('土曜', 'icon-park-solid:moon'),
  },
  {
    value: '61',
    label: generateLabelWithIcon('日曜', 'ph:sun-bold'),
  },
  {
    value: '62',
    label: generateLabelWithIcon('日曜', 'icon-park-solid:moon'),
  },
];
