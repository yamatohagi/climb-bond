import PropTypes from 'prop-types';
import { useState } from 'react';
// next
import NextLink from 'next/link';
// @mui
import {
  Card,
  Link,
  Stack,
  Divider,
  Checkbox,
  Typography,
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
import { Gym, Post as PrismaPost } from '@prisma/client';

// ----------------------------------------------------------------------
interface Post extends PrismaPost {
  gym: Gym;
}

export default function ClimberPostItem({ post }: { post: Post }) {
  const { createdAt, content, title, gym } = post;

  const [favorite, setFavorite] = useState(false);

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

          <Typography variant="body2" sx={{ color: 'info.main' }}>
            {gym.name}
          </Typography>

          <Stack
            direction="row"
            alignItems="center"
            sx={{ typography: 'body2', color: 'text.secondary' }}
          >
            <Iconify icon="carbon:location" width={18} sx={{ mr: 0.5 }} />
            {content}
          </Stack>
        </Stack>

        <Typography variant="caption" sx={{ color: 'text.disabled' }}>
          Posted day: {fDate(createdAt, undefined)}
        </Typography>
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
        <Grid xs={6}>
          <Stack direction="row" alignItems="center" sx={{ typography: 'body2' }}>
            <Iconify icon="carbon:increase-level" sx={{ mr: 1 }} />
            {`${content} year exp`}
          </Stack>
        </Grid>

        <Grid xs={6}>
          <Stack direction="row" alignItems="center" sx={{ typography: 'body2' }}>
            <Iconify icon="carbon:time" sx={{ mr: 1 }} />
            {content}
          </Stack>
        </Grid>

        <Grid xs={6}>
          <Stack direction="row" alignItems="center" sx={{ typography: 'body2' }}>
            <Iconify icon="carbon:money" sx={{ mr: 1 }} />
            {typeof content === 'number' ? fCurrency(content) : content}
          </Stack>
        </Grid>

        <Grid xs={6}>
          <Stack direction="row" alignItems="center" sx={{ typography: 'body2' }}>
            <Iconify icon="carbon:user" sx={{ mr: 1 }} />
            {content}
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
