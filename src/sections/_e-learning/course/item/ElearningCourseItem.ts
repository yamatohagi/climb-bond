import PropTypes from 'prop-types';
// next
import NextLink from 'next/link';
// @mui
import { Divider, Stack, Card, Typography, Box, Link, Avatar } from '@mui/material';
// routes
// @ts-expect-error TS(2307): Cannot find module 'src/routes/paths' or its corre... Remove this comment to see the full error message
import { paths } from 'src/routes/paths';
// utils
// @ts-expect-error TS(2307): Cannot find module 'src/utils/formatNumber' or its... Remove this comment to see the full error message
import { fCurrency, fShortenNumber } from 'src/utils/formatNumber';
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

export default function ElearningCourseItem({
  course,
  vertical
}: any) {
  const {
    slug,
    level,
    price,
    ratings,
    reviews,
    teachers,
    students,
    coverImg,
    category,
    priceSale,
    bestSeller,
    totalHours,
    description,
  } = course;

  return (
    // @ts-expect-error TS(2749): 'Card' refers to a value, but is being used as a t... Remove this comment to see the full error message
    <Card
      // @ts-expect-error TS(2304): Cannot find name 'sx'.
      sx={{
        display: { sm: 'flex' },
        '&:hover': {
          // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
          boxShadow: (theme: any) => theme.customShadows.z24,
        },
        // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
        ...(vertical && {
          flexDirection: 'column',
        }),
      }}
    >
      // @ts-expect-error TS(2749): 'Box' refers to a value, but is being used as a ty... Remove this comment to see the full error message
      <Box sx={{ flexShrink: { sm: 0 } }}>
        <Image
          // @ts-expect-error TS(2304): Cannot find name 'alt'.
          alt={slug}
          // @ts-expect-error TS(2304): Cannot find name 'src'.
          src={coverImg}
          // @ts-expect-error TS(2304): Cannot find name 'sx'.
          sx={{
            // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
            height: 1,
            // @ts-expect-error TS(2304): Cannot find name 'objectFit'.
            objectFit: 'cover',
            // @ts-expect-error TS(2304): Cannot find name 'width'.
            width: { sm: 240 },
            // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
            ...(vertical && {
              width: { sm: 1 },
            }),
          }}
        />
      </Box>

      // @ts-expect-error TS(2304): Cannot find name 'bestSeller'.
      {bestSeller && (
        <Label
          // @ts-expect-error TS(2304): Cannot find name 'color'.
          color="warning"
          // @ts-expect-error TS(2304): Cannot find name 'variant'.
          variant="filled"
          // @ts-expect-error TS(2304): Cannot find name 'sx'.
          sx={{ top: 12, left: 12, position: 'absolute', textTransform: 'uppercase' }}
        >
          // @ts-expect-error TS(2304): Cannot find name 'Best'.
          Best Seller
        </Label>
      )}

      // @ts-expect-error TS(2749): 'Stack' refers to a value, but is being used as a ... Remove this comment to see the full error message
      <Stack spacing={3} sx={{ p: 3 }}>
        // @ts-expect-error TS(2749): 'Stack' refers to a value, but is being used as a ... Remove this comment to see the full error message
        <Stack
          // @ts-expect-error TS(2304): Cannot find name 'spacing'.
          spacing={{
            // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
            xs: 3,
            // @ts-expect-error TS(2304): Cannot find name 'sm'.
            sm: vertical ? 3 : 1,
          }}
        >
          // @ts-expect-error TS(2749): 'Stack' refers to a value, but is being used as a ... Remove this comment to see the full error message
          <Stack direction="row" alignItems="center" justifyContent="space-between">
            // @ts-expect-error TS(2749): 'Typography' refers to a value, but is being used ... Remove this comment to see the full error message
            <Typography variant="overline" sx={{ color: 'primary.main' }}>
              // @ts-expect-error TS(18004): No value exists in scope for the shorthand propert... Remove this comment to see the full error message
              {category}
            </Typography>

            // @ts-expect-error TS(2304): Cannot find name 'variant'.
            <Typography variant="h4">
              // @ts-expect-error TS(18004): No value exists in scope for the shorthand propert... Remove this comment to see the full error message
              {priceSale > 0 && (
                // @ts-expect-error TS(2749): 'Box' refers to a value, but is being used as a ty... Remove this comment to see the full error message
                <Box
                  // @ts-expect-error TS(2304): Cannot find name 'component'.
                  component="span"
                  // @ts-expect-error TS(2304): Cannot find name 'sx'.
                  sx={{ mr: 0.5, color: 'text.disabled', textDecoration: 'line-through' }}
                // @ts-expect-error TS(2365): Operator '<' cannot be applied to types 'boolean' ... Remove this comment to see the full error message
                >
                  {fCurrency(priceSale: any)}
                </Box>
              )}
              // @ts-expect-error TS(2304): Cannot find name 'price'.
              {fCurrency(price)}
            // @ts-expect-error TS(2365): Operator '<' cannot be applied to types 'boolean' ... Remove this comment to see the full error message
            </Typography>
          </Stack>

          // @ts-expect-error TS(2304): Cannot find name 'spacing'.
          <Stack spacing={1}>
            // @ts-expect-error TS(2749): 'Link' refers to a value, but is being used as a t... Remove this comment to see the full error message
            <Link component={NextLink} href={paths.eLearning.course} color="inherit">
              // @ts-expect-error TS(2304): Cannot find name 'variant'.
              <TextMaxLine variant="h6" line={1}>
                // @ts-expect-error TS(18004): No value exists in scope for the shorthand propert... Remove this comment to see the full error message
                {slug}
              </TextMaxLine>
            </Link>

            <TextMaxLine
              // @ts-expect-error TS(2304): Cannot find name 'variant'.
              variant="body2"
              // @ts-expect-error TS(2304): Cannot find name 'color'.
              color="text.secondary"
              // @ts-expect-error TS(2304): Cannot find name 'sx'.
              sx={{
                // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
                ...(vertical && {
                  display: { sm: 'none' },
                }),
              }}
            // @ts-expect-error TS(2365): Operator '<' cannot be applied to types 'boolean' ... Remove this comment to see the full error message
            >
              // @ts-expect-error TS(18004): No value exists in scope for the shorthand propert... Remove this comment to see the full error message
              {description}
            </TextMaxLine>
          </Stack>
        </Stack>

        <Stack
          // @ts-expect-error TS(2304): Cannot find name 'spacing'.
          spacing={1.5}
          // @ts-expect-error TS(2304): Cannot find name 'direction'.
          direction="row"
          // @ts-expect-error TS(2304): Cannot find name 'alignItems'.
          alignItems="center"
          // @ts-expect-error TS(2304): Cannot find name 'flexWrap'.
          flexWrap="wrap"
          // @ts-expect-error TS(2304): Cannot find name 'divider'.
          divider={<Divider orientation="vertical" sx={{ height: 20, my: 'auto' }} />}
        >
          // @ts-expect-error TS(2749): 'Stack' refers to a value, but is being used as a ... Remove this comment to see the full error message
          <Stack spacing={0.5} direction="row" alignItems="center">
            // @ts-expect-error TS(2304): Cannot find name 'icon'.
            <Iconify icon="carbon:star-filled" sx={{ color: 'warning.main' }} />
            // @ts-expect-error TS(2304): Cannot find name 'sx'.
            <Box sx={{ typography: 'h6' }}>
              // @ts-expect-error TS(2304): Cannot find name 'ratings'.
              {Number.isInteger(ratings) ? `${ratings}.0` : ratings}
            </Box>

            // @ts-expect-error TS(2304): Cannot find name 'reviews'.
            {reviews && (
              // @ts-expect-error TS(2749): 'Link' refers to a value, but is being used as a t... Remove this comment to see the full error message
              <Link variant="body2" sx={{ color: 'text.secondary' }}>
                // @ts-expect-error TS(2304): Cannot find name 'reviews'.
                ({fShortenNumber(reviews: any)} reviews)
              </Link>
            )}
          </Stack>

          // @ts-expect-error TS(2304): Cannot find name 'direction'.
          <Stack direction="row" sx={{ typography: 'subtitle2' }}>
            {fShortenNumber(students: any)}
            // @ts-expect-error TS(2304): Cannot find name 'component'.
            <Box component="span" typography="body2" sx={{ ml: 0.5 }}>
              // @ts-expect-error TS(2304): Cannot find name 'students'.
              students
            </Box>
          </Stack>
        </Stack>

        // @ts-expect-error TS(2304): Cannot find name 'direction'.
        <Stack direction="row" alignItems="center">
          // @ts-expect-error TS(2749): 'Avatar' refers to a value, but is being used as a... Remove this comment to see the full error message
          <Avatar src={teachers[0]?.picture} />

          // @ts-expect-error TS(2304): Cannot find name 'variant'.
          <Typography variant="body2" sx={{ ml: 1, mr: 0.5 }}>
            // @ts-expect-error TS(18004): No value exists in scope for the shorthand propert... Remove this comment to see the full error message
            {teachers[0]?.name}
          </Typography>

          // @ts-expect-error TS(2304): Cannot find name 'teachers'.
          {teachers?.length > 0 && (
            // @ts-expect-error TS(2749): 'Link' refers to a value, but is being used as a t... Remove this comment to see the full error message
            <Link underline="always" color="text.secondary" variant="body2">
              // @ts-expect-error TS(18004): No value exists in scope for the shorthand propert... Remove this comment to see the full error message
              + {teachers?.length} teachers
            </Link>
          )}
        </Stack>

        <Divider
          // @ts-expect-error TS(2304): Cannot find name 'sx'.
          sx={{
            // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
            borderStyle: 'dashed',
            // @ts-expect-error TS(2304): Cannot find name 'display'.
            display: { sm: 'none' },
            // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
            ...(vertical && {
              display: 'block',
            }),
          }}
        // @ts-expect-error TS(2365): Operator '<' cannot be applied to types 'RegExp' a... Remove this comment to see the full error message
        />

        <Stack
          // @ts-expect-error TS(2304): Cannot find name 'direction'.
          direction="row"
          // @ts-expect-error TS(2304): Cannot find name 'flexWrap'.
          flexWrap="wrap"
          // @ts-expect-error TS(2304): Cannot find name 'alignItems'.
          alignItems="center"
          // @ts-expect-error TS(2304): Cannot find name 'sx'.
          sx={{ color: 'text.disabled', '& > *:not(:last-child)': { mr: 2.5 } }}
        >
          // @ts-expect-error TS(2749): 'Stack' refers to a value, but is being used as a ... Remove this comment to see the full error message
          <Stack direction="row" alignItems="center" sx={{ typography: 'body2' }}>
            // @ts-expect-error TS(2304): Cannot find name 'icon'.
            <Iconify icon="carbon:time" sx={{ mr: 1 }} /> {`${totalHours} hours`}
          </Stack>

          // @ts-expect-error TS(2304): Cannot find name 'direction'.
          <Stack direction="row" alignItems="center" sx={{ typography: 'body2' }}>
            <Iconify
              // @ts-expect-error TS(2304): Cannot find name 'icon'.
              icon={
                // @ts-expect-error TS(2304): Cannot find name 'level'.
                (level === 'Beginner' && 'carbon:skill-level-basic') ||
                // @ts-expect-error TS(2304): Cannot find name 'level'.
                (level === 'Intermediate' && 'carbon:skill-level-intermediate') ||
                'carbon:skill-level-advanced'
              }
              // @ts-expect-error TS(2304): Cannot find name 'sx'.
              sx={{ mr: 1 }}
            />
            // @ts-expect-error TS(2304): Cannot find name 'level'.
            {level}
          // @ts-expect-error TS(2365): Operator '<' cannot be applied to types 'boolean' ... Remove this comment to see the full error message
          </Stack>
        </Stack>
      </Stack>
    </Card>
  );
}

ElearningCourseItem.propTypes = {
  course: PropTypes.shape({
    bestSeller: PropTypes.bool,
    category: PropTypes.string,
    coverImg: PropTypes.string,
    description: PropTypes.string,
    level: PropTypes.string,
    price: PropTypes.number,
    priceSale: PropTypes.number,
    ratings: PropTypes.number,
    reviews: PropTypes.number,
    slug: PropTypes.string,
    students: PropTypes.number,
    teachers: PropTypes.array,
    totalHours: PropTypes.number,
  }),
  vertical: PropTypes.bool,
};
