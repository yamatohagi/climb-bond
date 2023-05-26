import PropTypes from 'prop-types';
// @mui
import { List, Stack } from '@mui/material';
//
import { StyledSubheader } from './styles';
// @ts-expect-error TS(6142): Module './NavList' was resolved to '/Users/yamatoh... Remove this comment to see the full error message
import NavList from './NavList';

// ----------------------------------------------------------------------

export default function NavSectionVertical({
  data,
  sx,
  ...other
}: any) {
  return (
    // @ts-expect-error TS(2749): 'Stack' refers to a value, but is being used as a ... Remove this comment to see the full error message
    <Stack sx={sx} {...other}>
      {data.map((group: any) => {
        const key = group.subheader || group.items[0].title;

        return (
          // @ts-expect-error TS(2749): 'List' refers to a value, but is being used as a t... Remove this comment to see the full error message
          <List key={key} disablePadding sx={{ px: 2 }}>
            // @ts-expect-error TS(18004): No value exists in scope for the shorthand propert... Remove this comment to see the full error message
            {group.subheader && <StyledSubheader disableSticky>{group.subheader}</StyledSubheader>}

            // @ts-expect-error TS(2362): The left-hand side of an arithmetic operation must... Remove this comment to see the full error message
            {group.items.map((list: any) => <NavList
              // @ts-expect-error TS(2304): Cannot find name 'key'.
              key={list.title + list.path}
              // @ts-expect-error TS(2552): Cannot find name 'list'. Did you mean 'List'?
              data={list}
              // @ts-expect-error TS(2304): Cannot find name 'depth'.
              depth={1}
              // @ts-expect-error TS(2304): Cannot find name 'hasChild'.
              hasChild={!!list.children}
            />)}
          </List>
        );
      })}
    </Stack>
  );
}

NavSectionVertical.propTypes = {
  data: PropTypes.array,
  sx: PropTypes.object,
};
