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
// @ts-expect-error TS(2307): Cannot find module 'src/routes/paths' or its corre... Remove this comment to see the full error message
import { paths } from 'src/routes/paths';
// utils
// @ts-expect-error TS(2307): Cannot find module 'src/utils/formatTime' or its c... Remove this comment to see the full error message
import { fDate } from 'src/utils/formatTime';
// @ts-expect-error TS(2307): Cannot find module 'src/utils/formatNumber' or its... Remove this comment to see the full error message
import { fCurrency } from 'src/utils/formatNumber';
// components
// @ts-expect-error TS(2307): Cannot find module 'src/components/image' or its c... Remove this comment to see the full error message
import Image from 'src/components/image';
// @ts-expect-error TS(2307): Cannot find module 'src/components/label' or its c... Remove this comment to see the full error message
import Label from 'src/components/label';
// @ts-expect-error TS(2307): Cannot find module 'src/components/iconify' or its... Remove this comment to see the full error message
import Iconify from 'src/components/iconify';
// @ts-expect-error TS(2307): Cannot find module 'src/components/text-max-line' ... Remove this comment to see the full error message
import TextMaxLine from 'src/components/text-max-line';

// ----------------------------------------------------------------------

export default function CareerJobItem({ job }: any) {
  const {
    slug,
    type,
    level,
    salary,
    location,
    isUrgent,
    createdAt,
    favorited,
    experience,
    companyName,
    companyLogo,
  } = job;

  const [favorite, setFavorite] = useState(favorited);

  const handleChangeFavorite = (event: any) => {
    setFavorite(event.target.checked);
  };

  return (
    <Card
      sx={{
        '&:hover': {
          // @ts-expect-error TS(2339): Property 'customShadows' does not exist on type 'T... Remove this comment to see the full error message
          boxShadow: (theme) => theme.customShadows.z24,
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
            alt={companyName}
            src={companyLogo}
            sx={{ width: 48, height: 48, borderRadius: 1 }}
          />

          {isUrgent && <Label color="error">Urgent</Label>}
        </Stack>

        <Stack spacing={0.5} sx={{ mt: 3, mb: 2 }}>
          <Link component={NextLink} href={paths.career.job} color="inherit">
            <TextMaxLine variant="h6" line={1}>
              {slug}
            </TextMaxLine>
          </Link>

          <Typography variant="body2" sx={{ color: 'info.main' }}>
            {companyName}
          </Typography>

          <Stack
            direction="row"
            alignItems="center"
            sx={{ typography: 'body2', color: 'text.secondary' }}
          >
            <Iconify icon="carbon:location" width={18} sx={{ mr: 0.5 }} />
            {location}
          </Stack>
        </Stack>

        <Typography variant="caption" sx={{ color: 'text.disabled' }}>
          Posted day: {fDate(createdAt)}
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
            {`${experience} year exp`}
          </Stack>
        </Grid>

        <Grid xs={6}>
          <Stack direction="row" alignItems="center" sx={{ typography: 'body2' }}>
            <Iconify icon="carbon:time" sx={{ mr: 1 }} />
            {type}
          </Stack>
        </Grid>

        <Grid xs={6}>
          <Stack direction="row" alignItems="center" sx={{ typography: 'body2' }}>
            <Iconify icon="carbon:money" sx={{ mr: 1 }} />
            {typeof salary === 'number' ? fCurrency(salary) : salary}
          </Stack>
        </Grid>

        <Grid xs={6}>
          <Stack direction="row" alignItems="center" sx={{ typography: 'body2' }}>
            <Iconify icon="carbon:user" sx={{ mr: 1 }} />
            {level}
          </Stack>
        </Grid>
      </Grid>
    </Card>
  );
}

CareerJobItem.propTypes = {
  job: PropTypes.shape({
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
