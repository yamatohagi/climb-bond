import { useState } from 'react';
// next
import Head from 'next/head';
// @mui
import {
  Box,
  Card,
  Grid,
  Paper,
  Stack,
  Switch,
  Container,
  FormLabel,
  FormControl,
  FormControlLabel,
} from '@mui/material';
// routes
// @ts-expect-error TS(2307): Cannot find module 'src/routes/paths' or its corre... Remove this comment to see the full error message
import { paths } from 'src/routes/paths';
// _mock
// @ts-expect-error TS(2307): Cannot find module 'src/_mock' or its correspondin... Remove this comment to see the full error message
import _mock from 'src/_mock';
// layouts
// @ts-expect-error TS(2307): Cannot find module 'src/layouts/main' or its corre... Remove this comment to see the full error message
import MainLayout from 'src/layouts/main';
// components
// @ts-expect-error TS(2307): Cannot find module 'src/components/image' or its c... Remove this comment to see the full error message
import Image from 'src/components/image';
// @ts-expect-error TS(2307): Cannot find module 'src/components/lightbox' or it... Remove this comment to see the full error message
import Lightbox, { useLightBox } from 'src/components/lightbox';
// @ts-expect-error TS(2307): Cannot find module 'src/components/custom-breadcru... Remove this comment to see the full error message
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';

// ----------------------------------------------------------------------

const images = [...Array(4)].map((_, index) => ({
  src: _mock.image.travel(index + 1),
  title: 'Flamingo',
  description: 'Vicko Mozara \n Veliki zali, Dubravica, Croatia',
}));

const slides = [
  ...images,
  {
    type: 'video',
    width: 1280,
    height: 720,
    poster:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg',
    sources: [
      {
        src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
        type: 'video/mp4',
      },
    ],
  },
];

// ----------------------------------------------------------------------

DemoLightboxPage.getLayout = (page: any) => <MainLayout>{page}</MainLayout>;

// ----------------------------------------------------------------------

export default function DemoLightboxPage() {
  const { selected: selectedImage, open, onOpen, onClose } = useLightBox(slides);

  const [state, setState] = useState({
    disabledZoom: false,
    disabledVideo: false,
    disabledTotal: false,
    disabledCaptions: false,
    disabledSlideshow: false,
    disabledThumbnails: false,
    disabledFullscreen: false,
  });

  const handleChange = (event: any) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };

  return (
    <>
      <Head>
        <title>Components: Lightbox | ZONE UI</title>
      </Head>

      <Box
        sx={{
          pt: 6,
          pb: 1,
          mb: 10,
          bgcolor: (theme) => (theme.palette.mode === 'light' ? 'grey.200' : 'grey.800'),
        }}
      >
        <Container>
          <CustomBreadcrumbs
            heading="Lightbox"
            links={[
              {
                name: 'Components',
                href: paths.components.root,
              },
              { name: 'Lightbox' },
            ]}
            moreLink={['https://www.npmjs.com/package/yet-another-react-lightbox']}
          />
        </Container>
      </Box>

      <Container sx={{ my: 10 }}>
        <Card sx={{ p: 3 }}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={9}>
              <Box
                gap={1}
                display="grid"
                gridTemplateColumns={{
                  xs: 'repeat(2, 1fr)',
                  sm: 'repeat(3, 1fr)',
                  md: 'repeat(4, 1fr)',
                }}
              >
                {slides.map((slide) => {
                  // @ts-expect-error TS(2339): Property 'type' does not exist on type '{ src: any... Remove this comment to see the full error message
                  const thumbnail = slide.type === 'video' ? slide.poster : slide.src;

                  return (
                    <Image
                      key={thumbnail}
                      alt={thumbnail}
                      src={thumbnail}
                      ratio="1/1"
                      onClick={() => onOpen(thumbnail || '')}
                      sx={{
                        borderRadius: 1,
                        cursor: 'pointer',
                      }}
                    />
                  );
                })}
              </Box>
            </Grid>

            <Grid item xs={12} md={3}>
              <Paper sx={{ p: 3, bgcolor: 'background.neutral', borderRadius: 2 }}>
                <FormControl component="fieldset" variant="standard">
                  <Stack spacing={2}>
                    <FormLabel component="legend" sx={{ typography: 'body2' }}>
                      Controls
                    </FormLabel>

                    <FormControlLabel
                      control={
                        <Switch
                          size="small"
                          name="disabledZoom"
                          checked={state.disabledZoom}
                          onChange={handleChange}
                        />
                      }
                      label="Disabled Zoom"
                    />

                    <FormControlLabel
                      control={
                        <Switch
                          size="small"
                          name="disabledTotal"
                          checked={state.disabledTotal}
                          onChange={handleChange}
                        />
                      }
                      label="Disabled Total"
                    />

                    <FormControlLabel
                      control={
                        <Switch
                          size="small"
                          name="disabledVideo"
                          checked={state.disabledVideo}
                          onChange={handleChange}
                        />
                      }
                      label="Disabled Video"
                    />

                    <FormControlLabel
                      control={
                        <Switch
                          size="small"
                          name="disabledCaptions"
                          checked={state.disabledCaptions}
                          onChange={handleChange}
                        />
                      }
                      label="Disabled Captions"
                    />

                    <FormControlLabel
                      control={
                        <Switch
                          size="small"
                          name="disabledSlideshow"
                          checked={state.disabledSlideshow}
                          onChange={handleChange}
                        />
                      }
                      label="Disabled Slideshow"
                    />

                    <FormControlLabel
                      control={
                        <Switch
                          size="small"
                          name="disabledThumbnails"
                          checked={state.disabledThumbnails}
                          onChange={handleChange}
                        />
                      }
                      label="Disabled Thumbnails"
                    />

                    <FormControlLabel
                      control={
                        <Switch
                          size="small"
                          name="disabledFullscreen"
                          checked={state.disabledFullscreen}
                          onChange={handleChange}
                        />
                      }
                      label="Disabled Fullscreen"
                    />
                  </Stack>
                </FormControl>
              </Paper>
            </Grid>
          </Grid>
        </Card>
      </Container>

      <Lightbox
        open={open}
        close={onClose}
        slides={slides}
        index={selectedImage}
        disabledZoom={state.disabledZoom}
        disabledTotal={state.disabledTotal}
        disabledVideo={state.disabledVideo}
        disabledCaptions={state.disabledCaptions}
        disabledSlideshow={state.disabledSlideshow}
        disabledThumbnails={state.disabledThumbnails}
        disabledFullscreen={state.disabledFullscreen}
      />
    </>
  );
}
