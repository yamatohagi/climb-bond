import { FindFirstPostQueryResult } from 'src/generated/graphql';

import { Fragment } from 'react';
import { formatDistanceToNow } from 'date-fns';
import { ja } from 'date-fns/locale';
import NextLink from 'next/link';
// @mui
import { Card, Link, Stack, Divider, Typography, Box, Unstable_Grid2 as Grid } from '@mui/material';
// routes
import { paths } from 'src/routes/paths';
// utils
// components
import Image from 'src/components/image';
import Iconify from 'src/components/iconify';
import TextMaxLine from 'src/components/text-max-line';
import { dayOfWeek } from '../item/ClimberPostItem';
import { CreateReply, PostReplies } from './reply';

type PostReply = {
  id: string;
  username: string;
  replyText: string;
};

const mockReplies: PostReply[] = [
  {
    id: '1',
    username: 'User1',
    replyText: 'これはテスト返信です',
  },
  {
    id: '2',
    username: 'User2',
    replyText: 'これもテスト返信です',
  },
  // 他の返信をここに追加できます
];

export default function ClimberPostDetail({ data }: { data: FindFirstPostQueryResult['data'] }) {
  const post = data?.findFirstPost!;
  const {
    id,
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
  const timeAgo = formatDistanceToNow(new Date(createdAt), { addSuffix: true, locale: ja });
  return (
    <Card
      sx={{
        '&:hover': {
          boxShadow: (theme) => (theme as any).customShadows.z24,
        },
      }}
    >
      <Link
        component={NextLink}
        href={`${paths.climber.posts}/${id}`}
        color="inherit"
        underline="none"
      >
        <Stack sx={{ p: 3, pb: 0 }}>
          <Stack direction="row" alignItems="center" justifyContent="space-between" spacing={2.5}>
            <TextMaxLine variant="h6" line={1}>
              {title}
            </TextMaxLine>
            <Image
              alt={gym.name}
              src={'companyLogo'}
              sx={{ width: 48, height: 48, borderRadius: 1, mr: 3 }}
            />
          </Stack>

          <Stack spacing={0.5} sx={{ mt: 3, mb: 2 }}>
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
            pb: 0,
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
              {preferredDayAndTimes.map((v) => {
                return (
                  <Fragment key={v.id}>
                    {v.dayAndTime[1] === '1' ? ( //'01'なら日曜・昼
                      <>
                        <Box sx={{ mr: 1 }}>
                          {dayOfWeek[Number(v.dayAndTime[0])]}
                          <Iconify
                            icon="ph:sun-bold"
                            sx={{ height: '1.5em', verticalAlign: 'middle', pb: 0.5 }}
                          />
                        </Box>
                      </>
                    ) : (
                      //'12'なら月曜・夜
                      <>
                        <Box sx={{ mr: 1 }}>
                          {dayOfWeek[Number(v.dayAndTime[0])]}
                          <Iconify
                            icon="icon-park-solid:moon"
                            sx={{ height: '1.5em', verticalAlign: 'middle', pb: 0.5 }}
                          />
                        </Box>
                      </>
                    )}
                  </Fragment>
                );
              })}
            </Stack>
          </Grid>

          <Grid xs={5}>
            <Stack direction="row" alignItems="center" sx={{ typography: 'body2' }}>
              <Iconify icon="guidance:climbing-wall" sx={{ mr: 1 }} />
              {climbingType}
            </Stack>
          </Grid>
        </Grid>

        <Stack
          spacing={0.5}
          sx={{ px: 3, pb: 2, pt: 2.3, mx: 4, color: 'text.secondary' }}
          direction="row"
          justifyContent="space-between"
        >
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Iconify icon="ps:chat-alt" width={17} sx={{ mr: 1 }} />1
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Iconify icon="foundation:graph-bar" width={17} sx={{ mr: 1 }} />1
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Iconify icon="mdi:heart-outline" width={17} sx={{ mr: 1 }} />1
          </Box>
        </Stack>
      </Link>
      <PostReplies replies={mockReplies} />
      <CreateReply />
    </Card>
  );
}