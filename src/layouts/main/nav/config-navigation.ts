// routes
import { paths } from 'src/routes/paths';

// ----------------------------------------------------------------------

export const pageLinks = [
  {
    order: '4',
    subheader: 'Common',
    items: [
      { title: '404 Error', path: paths.page404 },
      { title: '500 Error', path: paths.page500 },
      { title: 'Maintenance', path: paths.maintenance },
      { title: 'ComingSoon', path: paths.comingsoon },
      { title: 'Pricing 01', path: paths.pricing01 },
      { title: 'Pricing 02', path: paths.pricing02 },
      { title: 'Payment', path: paths.payment },
      { title: 'Support', path: paths.support },
    ],
  },
];

export const navConfig = [
  { title: 'Home', path: '/' },
  { title: 'Gyms', path: paths.gym.index },
];
