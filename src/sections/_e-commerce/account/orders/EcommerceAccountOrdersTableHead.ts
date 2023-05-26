import PropTypes from 'prop-types';
// @mui
import { Box, TableRow, Checkbox, TableCell, TableHead, TableSortLabel } from '@mui/material';
//
import { visuallyHidden } from './utils';

// ----------------------------------------------------------------------

export default function EcommerceAccountOrdersTableHead({
  order,
  onSort,
  orderBy,
  rowCount,
  headCells,
  numSelected,
  onSelectAllRows
}: any) {
  return (
    // @ts-expect-error TS(2749): 'TableHead' refers to a value, but is being used a... Remove this comment to see the full error message
    <TableHead>
      // @ts-expect-error TS(2749): 'TableRow' refers to a value, but is being used as... Remove this comment to see the full error message
      <TableRow>
        // @ts-expect-error TS(2749): 'TableCell' refers to a value, but is being used a... Remove this comment to see the full error message
        <TableCell padding="checkbox">
          // @ts-expect-error TS(2749): 'Checkbox' refers to a value, but is being used as... Remove this comment to see the full error message
          <Checkbox
            // @ts-expect-error TS(2304): Cannot find name 'indeterminate'.
            indeterminate={numSelected > 0 && numSelected < rowCount}
            // @ts-expect-error TS(2304): Cannot find name 'checked'.
            checked={rowCount > 0 && numSelected === rowCount}
            // @ts-expect-error TS(2552): Cannot find name 'onChange'. Did you mean 'onchang... Remove this comment to see the full error message
            onChange={onSelectAllRows}
          />
        </TableCell>

        // @ts-expect-error TS(2304): Cannot find name 'headCells'.
        {headCells.map((headCell: any) => <TableCell
          // @ts-expect-error TS(2304): Cannot find name 'key'.
          key={headCell.id}
          // @ts-expect-error TS(2304): Cannot find name 'align'.
          align={headCell.align ? 'right' : 'left'}
          // @ts-expect-error TS(2304): Cannot find name 'padding'.
          padding={headCell.disablePadding ? 'normal' : 'normal'}
          // @ts-expect-error TS(2304): Cannot find name 'sortDirection'.
          sortDirection={orderBy === headCell.id ? order : false}
          // @ts-expect-error TS(2304): Cannot find name 'sx'.
          sx={{ width: headCell.width, minWidth: headCell.minWidth }}
        >
          // @ts-expect-error TS(2749): 'TableSortLabel' refers to a value, but is being u... Remove this comment to see the full error message
          <TableSortLabel
            // @ts-expect-error TS(2304): Cannot find name 'active'.
            active={orderBy === headCell.id}
            // @ts-expect-error TS(2304): Cannot find name 'direction'.
            direction={orderBy === headCell.id ? order : 'asc'}
            // @ts-expect-error TS(2304): Cannot find name 'onClick'.
            onClick={() => onSort(headCell.id)}
          >
            // @ts-expect-error TS(18004): No value exists in scope for the shorthand propert... Remove this comment to see the full error message
            {headCell.label}
            // @ts-expect-error TS(2304): Cannot find name 'orderBy'.
            {orderBy === headCell.id ? (
              // @ts-expect-error TS(2749): 'Box' refers to a value, but is being used as a ty... Remove this comment to see the full error message
              <Box component="span" sx={visuallyHidden}>
                // @ts-expect-error TS(18004): No value exists in scope for the shorthand propert... Remove this comment to see the full error message
                {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
              </Box>
            ) : null}
          // @ts-expect-error TS(2365): Operator '<' cannot be applied to types 'boolean' ... Remove this comment to see the full error message
          </TableSortLabel>
        </TableCell>)}
      </TableRow>
    </TableHead>
  );
}

EcommerceAccountOrdersTableHead.propTypes = {
  headCells: PropTypes.array,
  numSelected: PropTypes.number,
  onSelectAllRows: PropTypes.func,
  onSort: PropTypes.func,
  order: PropTypes.string,
  orderBy: PropTypes.string,
  rowCount: PropTypes.number,
};
