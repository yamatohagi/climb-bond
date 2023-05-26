import { TreeViewCollapseIcon, TreeViewExpandIcon, TreeViewEndIcon } from './CustomIcons';

// ----------------------------------------------------------------------

export default function TreeView(theme: any) {
  return {
    MuiTreeView: {
      defaultProps: {
        // @ts-expect-error TS(2749): 'TreeViewCollapseIcon' refers to a value, but is b... Remove this comment to see the full error message
        defaultCollapseIcon: <TreeViewCollapseIcon sx={{ width: 20, height: 20 }} />,
        // @ts-expect-error TS(2749): 'TreeViewExpandIcon' refers to a value, but is bei... Remove this comment to see the full error message
        defaultExpandIcon: <TreeViewExpandIcon sx={{ width: 20, height: 20 }} />,
        // @ts-expect-error TS(2749): 'TreeViewEndIcon' refers to a value, but is being ... Remove this comment to see the full error message
        defaultEndIcon: <TreeViewEndIcon sx={{ color: 'text.secondary', width: 20, height: 20 }} />,
      },
    },
    MuiTreeItem: {
      styleOverrides: {
        label: {
          // @ts-expect-error TS(2304): Cannot find name 'theme'.
          ...theme.typography.body2,
        },
        iconContainer: {
          // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
          width: 'auto',
        },
      },
    },
  };
}
