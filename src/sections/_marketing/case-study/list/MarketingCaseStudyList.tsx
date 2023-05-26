import PropTypes from 'prop-types';
import { useState } from 'react';
// @mui
import { Pagination, Tabs, Tab, Box } from '@mui/material';
//
import MarketingCaseStudyItem from '../item';

// ----------------------------------------------------------------------

export default function MarketingCaseStudyList({
  caseStudies
}: any) {
  const [tab, setTab] = useState('All');

  const getCategories = caseStudies.map((project: any) => project.category);

  const categories = ['All', ...Array.from(new Set(getCategories))];

  const filtered = applyFilter(caseStudies, tab);

  const handleChangeTab = (event: any, newValue: any) => {
    setTab(newValue);
  };

  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  return <>
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <Tabs
      value={tab}
      scrollButtons="auto"
      variant="scrollable"
      allowScrollButtonsMobile
      onChange={handleChangeTab}
    >
      {categories.map((category) => (
        // @ts-expect-error TS(2769): No overload matches this call.
        <Tab key={category} value={category} label={category} />
      ))}
    </Tabs>

    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <Box
      sx={{
        pt: 5,
        pb: 10,
        gap: 4,
        display: 'grid',
        gridTemplateColumns: {
          xs: 'repeat(1, 1fr)',
          sm: 'repeat(2, 1fr)',
          md: 'repeat(3, 1fr)',
        },
      }}
    >
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      {filtered.map((project: any) => <MarketingCaseStudyItem key={project.id} project={project} />)}
    </Box>

    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <Pagination
      count={10}
      color="primary"
      size="large"
      sx={{
        pb: 10,
        '& .MuiPagination-ul': {
          justifyContent: 'center',
        },
      }}
    />
  </>;
}

MarketingCaseStudyList.propTypes = {
  caseStudies: PropTypes.array,
};

// ----------------------------------------------------------------------

function applyFilter(arr: any, category: any) {
  if (category !== 'All') {
    arr = arr.filter((project: any) => project.category === category);
  }
  return arr;
}
