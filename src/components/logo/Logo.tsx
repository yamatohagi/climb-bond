import { memo } from 'react';
// next
import NextLink from 'next/link';
import Image from 'src/components/image';
import { useTheme } from '@mui/material/styles';
import { Box, BoxProps, Link } from '@mui/material';

interface LogoProps extends BoxProps {
  single?: boolean;
}

function Logo({ single = false, sx }: LogoProps) {
  const theme = useTheme();

  const PRIMARY_MAIN = theme.palette.primary.main;

  const singleLogo = (
    <Image
      alt="500"
      src="/assets/logo-main/logo.svg"
      sx={{
        width: 100, // Set the width you want here
        height: 65, // This will keep the aspect ratio intact
      }}
    />
  );

  const fullLogo = (
    <Image
      alt="500"
      src="/assets/logo-main/logo.svg"
      sx={{
        width: 100, // Set the width you want here
        height: 65, // This will keep the aspect ratio intact
      }}
    />
  );

  return (
    <Link
      component={NextLink}
      href="/"
      color="inherit"
      aria-label="go to homepage"
      sx={{ lineHeight: 0 }}
    >
      <Box
        sx={{
          width: single ? 74 : 85,
          lineHeight: 0,
          cursor: 'pointer',
          display: 'inline-flex',
          ...sx,
        }}
      >
        {single ? singleLogo : fullLogo}
      </Box>
    </Link>
  );
}

export default memo(Logo);
