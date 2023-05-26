import PropTypes from 'prop-types';
import { memo } from 'react';
// @mui
import { useTheme } from '@mui/material/styles';
import { Box } from '@mui/material';

// ----------------------------------------------------------------------

function Character({ front = false, ...other }) {
  const theme = useTheme();

  const PRIMARY_MAIN = theme.palette.primary.main;

  const PRIMARY_DARK = theme.palette.primary.dark;

  // @ts-expect-error TS(2551): Property 'darker' does not exist on type 'PaletteC... Remove this comment to see the full error message
  const PRIMARY_DARKER = theme.palette.primary.darker;

  const SECONDARY_MAIN = theme.palette.secondary.main;

  const SECONDARY_DARK = theme.palette.secondary.dark;

  // @ts-expect-error TS(2551): Property 'darker' does not exist on type 'PaletteC... Remove this comment to see the full error message
  const SECONDARY_DARKER = theme.palette.secondary.darker;

  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <Box {...other}>
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        fill="none"
        viewBox="0 0 349 450"
      >
        {!front && (
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <path
            fill="#FF928E"
            fillRule="evenodd"
            d="M156.262 105.782l-34.856-27.895c-5.073-8.737-10.352-15.758-15.836-21.064-1.763-1.128-5.005-2.195-2.866 3.867 2.139 6.062 4.116 12.534 2.232 13.953-1.885 1.42-5.419-1.65-7.808.838-1.592 1.66 4.637 5.822 18.686 12.489l25.687 26.531 14.761-8.719z"
            clipRule="evenodd"
          />
        )}

        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <path
          fill={SECONDARY_MAIN}
          fillRule="evenodd"
          d="M175.877 104.395c-13.487-2.525-31.002-8.55-48.078-24.124l-10.514 15.478c10.944 15.478 27.686 29.562 44.07 31.979 12.912 1.905 22.214-12.453 14.522-23.333z"
          clipRule="evenodd"
        />
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <path
          fill={SECONDARY_DARK}
          fillRule="evenodd"
          d="M175.876 104.395c-13.487-2.525-31.002-8.55-48.078-24.124l-10.514 15.478c10.944 15.478 27.686 29.562 44.07 31.979 12.912 1.905 22.214-12.453 14.522-23.333z"
          clipRule="evenodd"
          opacity="0.24"
        />
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <path
          fill="#FDBAB9"
          d="M196.465 52.565c-8.197 2.357-15.683 2.55-18.714.84-7.601-4.288-.362-34.307 9.105-44.37 9.466-10.062 43.312-6.484 38.708 17.245-1.598 8.235-6.931 14.538-13.531 19.079l-2.223 44.324-26.162-7.01 12.817-30.108z"
        />
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <path
          fill={SECONDARY_DARKER}
          fillRule="evenodd"
          d="M197.714 13.62c3.167 2.933 4.73 7.4 6.508 13.226a6.764 6.764 0 012.512.19c3.612.968 5.757 4.676 4.79 8.282a6.73 6.73 0 01-3.222 4.144c.942 2.538 2.041 5.22 3.369 8.04 8.473-2.417 18.35-14.515 14.508-28.726-.359-6.554-4.992-10.222-9.867-13.13-3.795-2.93-8.177-4.32-12.208-4.253-7.509-1.338-14.662-.86-16.875-.03-1.859 6.938-1.064 9.357 10.485 12.258z"
          clipRule="evenodd"
        />
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <path
          fill={SECONDARY_DARKER}
          fillRule="evenodd"
          d="M202.988 22.984s-7.1 20.491-13.545 18.764c-6.446-1.727-10.819-7.277-13.647-8.035-2.062-.552-2.292 2.147-1.437 4.422.705 1.878 5.789 4.868 5.134 7.31-.654 2.443-4.486-.609-4.874.84-.642 2.396-2.612 6.697 1.554 7.814 4.216 1.13 16.714 2.834 20.46-2.858 3.745-5.692 9.686-25.627 9.686-25.627l-3.331-2.63z"
          clipRule="evenodd"
        />
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <path
          fill="#FDBAB9"
          fillRule="evenodd"
          d="M201.813 179.982L117.959 319.95 55.092 438.28H41.55l105.334-258.298h54.928z"
          clipRule="evenodd"
        />
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <path
          fill={PRIMARY_MAIN}
          fillRule="evenodd"
          d="M72.552 419.332l-26.114-7.887S63.6 360.223 88.506 298.708c24.907-61.514 53.497-118.726 53.497-118.726h73.754s-31.786 72.371-67.396 131.516c-35.609 59.145-75.81 107.834-75.81 107.834z"
          clipRule="evenodd"
        />
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <path
          fill={PRIMARY_DARK}
          fillRule="evenodd"
          d="M72.552 419.332l-26.113-7.887S63.6 360.223 88.507 298.708c24.906-61.514 53.497-118.726 53.497-118.726h73.754s-31.787 72.371-67.396 131.516c-35.61 59.145-75.81 107.834-75.81 107.834z"
          clipRule="evenodd"
          opacity="0.48"
        />
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <path
          fill="#FDBAB9"
          fillRule="evenodd"
          d="M207.324 179.982c7.915 49.186 23.179 112.026 24.62 113.965.96 1.293 35.534 12.86 103.721 34.701l-2.925 11.922c-81.313-11.714-124.158-20.801-128.535-27.264-6.565-9.693-39.348-86.269-52.045-133.324h55.164z"
          clipRule="evenodd"
        />
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <path
          fill={PRIMARY_MAIN}
          fillRule="evenodd"
          d="M311.696 318.343l-5.152 19.2c-60.817 5.326-98.081 1.478-111.792-11.544-13.711-13.022-29.337-61.694-46.879-146.017h70.329c11.114 69.049 17.327 105.023 18.64 107.922 1.313 2.898 26.264 13.045 74.854 30.439z"
          clipRule="evenodd"
        />
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <path
          fill={PRIMARY_DARKER}
          fillRule="evenodd"
          d="M60.5 431.444c1.07-.476 2.341.001 2.745 1.099.829 2.254 2.02 5.841 2.02 7.828 0 3.048-1.017 8.895-1.017 8.895H.598s-2.48-8.19 2.865-8.843c5.345-.653 8.88-1.179 8.88-1.179l29.706-13.221a1 1 0 011.331.531l1.952 4.728s4.948 2.305 8.042 2.305c1.965 0 5.1-1.239 7.127-2.143zM330.474 326.272c-.285-1.136.407-2.308 1.561-2.515 2.368-.423 6.11-.971 8.069-.626 3.007.529 8.597 2.544 8.597 2.544l-11.052 62.583s-8.509 1.018-8.225-4.352c.285-5.369.38-8.937.38-8.937l-7.883-31.5a.999.999 0 01.756-1.219l5.001-1.099s3.133-4.465 3.67-7.507c.341-1.93-.334-5.222-.874-7.372z"
          clipRule="evenodd"
        />
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <path
          fill="#FF928E"
          fillRule="evenodd"
          d="M92.707 112.927L77.4 100.646s-1.177-14.178-6.122-15.137c-2.332-1.628.08 10.565-4.562 8.726-4.64-1.839-14.854-12.638-17.192-11.223-3.458 2.093-2.206 10.613.236 15.172 4.563 8.521 8.982 11.939 20.43 17.413 8.978 4.294 18.557 14.137 18.557 14.137l3.959-16.807z"
          clipRule="evenodd"
        />
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <path
          fill={SECONDARY_MAIN}
          fillRule="evenodd"
          d="M223.974 229.735c-19.389-7.489-82.66 2.035-89.043-21.421-12.624-46.395 35.276-99.074 47.57-146.758l30.836 5.438c3.382.596 18.608 48.635 13.591 77.215-4.582 26.099 16.815 46.961-2.954 85.526z"
          clipRule="evenodd"
        />
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <path
          fill={SECONDARY_MAIN}
          fillRule="evenodd"
          d="M185.568 62.096s-7.796 62.266-30.01 65.755c-22.214 3.489-72.564-25.065-72.564-25.065s-17.138 23.732-18.138 34.949c108.332 83.257 171.477 12.112 147.51-70.913l-26.798-4.726z"
          clipRule="evenodd"
        />
      </svg>
    </Box>
  );
}

Character.propTypes = {
  front: PropTypes.bool,
};

export default memo(Character);
