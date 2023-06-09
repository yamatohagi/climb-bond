import { _jobs } from 'src/_mock';
import {
  Button,
  DialogTitle,
  DialogContent,
  DialogActions,
  Grid,
  Dialog,
  Typography,
} from '@mui/material';
import { DialogAnimate } from 'src/components/animate';
import getVariant from 'src/sections/examples/animate/getVariant';
import { Box } from '@mui/system';
import {
  RHFAutocompleteAddItem,
  RHFMultiCheckboxAddGrid,
  RHFSelectBox,
  RHFTextField,
} from 'src/components/hook-form';
import FormProvider from 'src/components/hook-form/FormProvider';
import { useForm } from 'react-hook-form';
import { ClimbingType, Gym } from '@prisma/client';
import { useEffect, useState } from 'react';
import Iconify from 'src/components/iconify/Iconify';

import {
  CreateOneGymMutation,
  useCreateOnePostMutation,
  useGymOptionsQuery,
  useGymsQuery,
} from 'src/generated/graphql';
import { SortOrder } from 'src/generated/graphql';
import usePostForm, { PostInput } from './hooks/usePostForm';
import { LoadingButton } from '@mui/lab';
import GymCreateModal from 'src/sections/_gym/create/GymCreateModal';
import { GymSelectInput } from './gym-select/GymSelectInput';
import { GymInput } from 'src/sections/_gym/create/hooks/usePostForm';

export default function ClimberPostCreateModal({
  open,
  onClose,
  refetch,
}: {
  open: boolean;
  onClose: () => void;
  refetch: () => void;
}) {
  const [createOnePostMutation] = useCreateOnePostMutation();
  const methods = usePostForm();

  const {
    error,
    data,
    loading,
    refetch: gymsOptionsRefetch,
  } = useGymOptionsQuery({
    variables: { orderBy: [{ name: SortOrder.Asc }] },
  });

  const {
    handleSubmit,
    formState: { isSubmitting, errors },
  } = methods;

  const onSubmit = async (params: PostInput) => {
    const { gymId, ...otherParams } = params;
    const { data, errors } = await createOnePostMutation({
      variables: {
        data: {
          ...otherParams,
          gym: { connect: { id: Number(params.gymId) } },
          preferredDayAndTimes: {
            create: params.preferredDayAndTimes.map((dayAndTime) => ({
              dayAndTime: dayAndTime,
            })),
          },
        },
      },
    });
    if (errors) return;
    refetch();
    onClose();
  };

  return (
    <>
      <Dialog open={open} onClose={onClose} transitionDuration={350}>
        <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
          <DialogTitle id="alert-dialog-title">{`ガンバ！！`}</DialogTitle>
          <DialogContent>
            <Box>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <RHFTextField size="small" name="title" label="ひとこと" />
                </Grid>
                {/* <Grid item xs={12}>
                    <RHFTextField name="content" label="Content" multiline rows={4} required />
                  </Grid> */}
                <Grid item xs={12} sm={6}>
                  <RHFSelectBox
                    size="small"
                    name="climbingType"
                    label="好きな壁"
                    options={[
                      { value: ClimbingType.BOULDER, label: 'ボルダー' },
                      { value: ClimbingType.LEAD, label: 'リード' },
                      { value: ClimbingType.BOTH, label: 'どっちも' },
                    ]}
                  ></RHFSelectBox>
                </Grid>
                <Grid item xs={8} sm={6}>
                  {data && (
                    <GymSelectInput
                      gyms={data.gyms}
                      refetch={gymsOptionsRefetch}
                      setFormValue={(value: CreateOneGymMutation) => {
                        methods.setValue('gymId', value.createOneGym.id.toString(), {
                          shouldValidate: true,
                        });
                      }}
                    />
                  )}
                </Grid>
                <Grid item xs={4} sm={6}>
                  <Button
                    sx={{ my: 1 }}
                    size="medium"
                    variant="contained"
                    startIcon={<Iconify icon="eva:plus-fill" sx={{ with: 3 }} />}
                  >
                    <Typography variant="subtitle2"> {'登録'}</Typography>
                  </Button>
                </Grid>
                <Grid item xs={6} sm={6}>
                  <RHFSelectBox
                    size="small"
                    name="experienceMonths"
                    label="クライミング歴"
                    options={generateMonths()}
                  ></RHFSelectBox>
                </Grid>
                <Grid item xs={6} sm={6}>
                  <RHFSelectBox
                    size="small"
                    name="belayMonths"
                    label="ビレイ歴"
                    options={generateMonths()}
                  ></RHFSelectBox>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <RHFSelectBox
                    size="small"
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
            <Button onClick={onClose}>キャンセル</Button>
            <LoadingButton variant="contained" type="submit" loading={isSubmitting}>
              投稿！
            </LoadingButton>
          </DialogActions>
        </FormProvider>
      </Dialog>
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
  for (let i = 0; i <= 12; i++) {
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
