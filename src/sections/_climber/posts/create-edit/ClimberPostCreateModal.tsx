import { _jobs } from 'src/_mock';
import { Button, DialogTitle, DialogContent, DialogActions, Grid } from '@mui/material';
import { DialogAnimate } from 'src/components/animate';
import getVariant from 'src/sections/examples/animate/getVariant';
import { Box } from '@mui/system';
import { RHFMultiCheckbox, RHFSelectBox, RHFTextField } from 'src/components/hook-form';
import FormProvider from 'src/components/hook-form/FormProvider';
import { useForm } from 'react-hook-form';
import { ClimbingType, Gym } from '@prisma/client';
import { useEffect, useState } from 'react';

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
          preferredDayAndTimes: params.preferredDayAndTimes,
          climbingType: params.climbingType,
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
      climbingType: [ClimbingType.BOULDER],
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
            <DialogTitle id="alert-dialog-title">{`Use Google's location service?`}</DialogTitle>
            <DialogContent>
              <Box sx={{ p: 3 }}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <RHFTextField name="title" label="Title" required />
                  </Grid>
                  <Grid item xs={12}>
                    <RHFTextField name="content" label="Content" multiline rows={4} required />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <RHFSelectBox
                      name="climbingType"
                      label="Climbing Type"
                      options={[
                        { value: ClimbingType.BOULDER, label: 'ボルダー' },
                        { value: ClimbingType.LEAD, label: 'リード' },
                        { value: ClimbingType.BOTH, label: '両方' },
                      ]}
                    ></RHFSelectBox>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <RHFSelectBox name="gymId" label="ジム名" options={gyms}></RHFSelectBox>
                  </Grid>
                  <Grid item xs={12}>
                    <RHFMultiCheckbox
                      name="preferredDayAndTimes"
                      label="よく行く日時"
                      options={[
                        { value: '日・昼', label: '日・昼' },
                        { value: '日・夜', label: '日・夜' },
                      ]}
                    ></RHFMultiCheckbox>
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
