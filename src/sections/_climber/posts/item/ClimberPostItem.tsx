import PropTypes from 'prop-types';
import { useState } from 'react';
import { formatDistanceToNow } from 'date-fns';
import { ja } from 'date-fns/locale';
import NextLink from 'next/link';
// @mui
import {
  Card,
  Link,
  Stack,
  Divider,
  Checkbox,
  Typography,
  Box,
  Unstable_Grid2 as Grid,
} from '@mui/material';
// routes
import { paths } from 'src/routes/paths';
// utils
import { fDate } from 'src/utils/formatTime';
import { fCurrency } from 'src/utils/formatNumber';
// components
import Image from 'src/components/image';
import Label from 'src/components/label';
import Iconify from 'src/components/iconify';
import TextMaxLine from 'src/components/text-max-line';
import { Gym, PreferredDayAndTime, Post as PrismaPost } from '@prisma/client';

// ----------------------------------------------------------------------
interface Post extends PrismaPost {
  gym: Gym;
  preferredDayAndTimes: PreferredDayAndTime[];
}

export default function ClimberPostItem({ post }: { post: Post }) {
  const {
    createdAt,
    content,
    title,
    gym,
    preferredDayAndTimes,
    climbingType,
    experienceMonths,
    belayMonths,
    grade,
  } = post;

  const [favorite, setFavorite] = useState(false);
  const timeAgo = formatDistanceToNow(new Date(createdAt), { addSuffix: true, locale: ja });

  const handleChangeFavorite = (event: any) => {
    setFavorite(event.target.checked);
  };

  return (
    <Card
      sx={{
        '&:hover': {
          boxShadow: (theme) => (theme as any).customShadows.z24,
        },
      }}
    >
      <Checkbox
        color="error"
        checked={favorite}
        onChange={handleChangeFavorite}
        icon={<Iconify icon="carbon:favorite" />}
        checkedIcon={<Iconify icon="carbon:favorite-filled" />}
        sx={{ position: 'absolute', right: 16, top: 16 }}
      />

      <Stack sx={{ p: 3, pb: 0 }}>
        <Stack direction="row" alignItems="center" spacing={2.5}>
          <Image
            alt={gym.name}
            src={'companyLogo'}
            sx={{ width: 48, height: 48, borderRadius: 1 }}
          />

          {true && <Label color="error">Urgent</Label>}
        </Stack>

        <Stack spacing={0.5} sx={{ mt: 3, mb: 2 }}>
          <Link component={NextLink} href={paths.career.job} color="inherit">
            <TextMaxLine variant="h6" line={1}>
              {title}
            </TextMaxLine>
          </Link>

          {/* <Typography variant="body2" sx={{ color: 'info.main' }}>
            {gym.name}
          </Typography> */}

          <Stack
            direction="row"
            alignItems="center"
            sx={{ typography: 'body2', color: 'text.secondary' }}
          >
            <Iconify icon="carbon:location" width={18} sx={{ mr: 0.5 }} />
            {gym.name}
          </Stack>
        </Stack>

        <Typography variant="caption" sx={{ color: 'text.disabled' }}>
          <Iconify
            icon="ion:time"
            sx={{ pt: 0.1, mb: 0.4, height: '1.4em', verticalAlign: 'middle' }}
          />{' '}
          {timeAgo}
        </Typography>

        <Stack spacing={0.5} sx={{ mt: 2 }}>
          <Typography variant="body1" sx={{ color: 'text.disabled' }}>
            {content}
          </Typography>
        </Stack>
      </Stack>

      <Divider sx={{ borderStyle: 'dashed', my: 2 }} />

      <Grid
        container
        spacing={1.5}
        sx={{
          p: 3,
          pt: 0,
          typography: 'body2',
          color: 'text.secondary',
          textTransform: 'capitalize',
        }}
      >
        <Grid xs={7}>
          <Stack direction="row" alignItems="center" sx={{ typography: 'body2' }}>
            <Iconify icon="fluent:mountain-trail-20-filled" sx={{ mr: 1 }} />

            {` ${experienceMonths}年（ﾋﾞﾚｲ歴 ${belayMonths}ヵ月）`}
          </Stack>
        </Grid>

        <Grid xs={5}>
          <Stack direction="row" alignItems="center" sx={{ typography: 'body2' }}>
            <Iconify icon="carbon:upgrade" sx={{ mr: 1 }} />
            {grade}
          </Stack>
        </Grid>

        <Grid xs={7}>
          <Stack direction="row" alignItems="center" sx={{ typography: 'body2' }}>
            <Iconify icon="ic:outline-today" sx={{ mr: 1 }} />
            {preferredDayAndTimes.map((v) => (
              <>
                {v.dayAndTime.match(/夜/) ? (
                  <>
                    <Box sx={{ mr: 1 }}>
                      {v.dayAndTime.replace('・夜', '')}
                      <Iconify
                        icon="icon-park-solid:moon"
                        sx={{ height: '1.4em', verticalAlign: 'middle', pb: 0.4 }}
                      />
                    </Box>
                  </>
                ) : (
                  <>
                    <Box sx={{ mr: 1 }}>
                      {v.dayAndTime.replace('・昼', '')}
                      <Iconify
                        icon="ph:sun-bold"
                        sx={{ height: '1.4em', verticalAlign: 'middle', pb: 0.3 }}
                      />
                    </Box>
                  </>
                )}
              </>
            ))}
          </Stack>
        </Grid>

        <Grid xs={5}>
          <Stack direction="row" alignItems="center" sx={{ typography: 'body2' }}>
            <Iconify icon="guidance:climbing-wall" sx={{ mr: 1 }} />
            {climbingType}
          </Stack>
        </Grid>
      </Grid>
    </Card>
  );
}

ClimberPostItem.propTypes = {
  post: PropTypes.shape({
    companyLogo: PropTypes.string,
    companyName: PropTypes.string,
    createdAt: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.instanceOf(Date),
    ]),
    experience: PropTypes.number,
    favorited: PropTypes.bool,
    isUrgent: PropTypes.bool,
    level: PropTypes.string,
    location: PropTypes.string,
    salary: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    slug: PropTypes.string,
    type: PropTypes.string,
  }),
};
