import { FindFirstGymQuery, FindFirstPostQuery } from 'src/generated/graphql';
import { Fragment } from 'react';
import { formatDistanceToNow } from 'date-fns';
import { ja } from 'date-fns/locale';
import { Card, Stack, Divider, Typography, Box, Unstable_Grid2 as Grid } from '@mui/material';
import Image from 'src/components/image';
import Iconify from 'src/components/iconify';
import TextMaxLine from 'src/components/text-max-line';

const DetailCard = ({ gym }: { gym: FindFirstGymQuery['findFirstGym'] }) => {
  if (!gym) return null;
  const { id, createdAt, climbingType, image, name } = gym;

  const timeAgo = formatDistanceToNow(new Date(createdAt), { addSuffix: true, locale: ja });
  return (
    <Card
      sx={{
        mb: 2,
        '&:hover': {
          boxShadow: (theme) => (theme as any).customShadows.z24,
        },
      }}
    >
      <Stack sx={{ p: 3, mb: 3 }}>
        <Stack direction="row" alignItems="center" justifyContent="space-between" spacing={2.5}>
          <TextMaxLine variant="h6" line={1}>
            {name}
          </TextMaxLine>
          {image && (
            <Image alt={name} src={image} sx={{ width: 78, height: 78, borderRadius: 1, mr: 3 }} />
          )}
        </Stack>

        <Stack spacing={0.5} sx={{ mt: 3, mb: 2 }}>
          <Stack
            direction="row"
            alignItems="center"
            sx={{ typography: 'body2', color: 'text.secondary' }}
          >
            <Iconify icon="carbon:location" width={18} sx={{ mr: 0.5 }} />
            {name}
          </Stack>
        </Stack>

        <Typography variant="caption" sx={{ color: 'text.disabled' }}>
          <Iconify
            icon="ion:time"
            sx={{ pt: 0.1, mb: 0.4, height: '1.4em', verticalAlign: 'middle' }}
          />{' '}
          {timeAgo}
        </Typography>

        <Stack spacing={0.5} sx={{ mt: 2, pb: 2 }}>
          <Typography variant="body1" sx={{ color: 'text.disabled' }}>
            {climbingType}
          </Typography>
        </Stack>
      </Stack>
    </Card>
  );
};

export default DetailCard;
