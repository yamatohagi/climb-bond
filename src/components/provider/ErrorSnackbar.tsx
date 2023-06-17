import { useStoreState, useStoreActions } from 'easy-peasy';
import * as React from 'react';
import { Model } from './snackbarStore';

export const ErrorSnackbar: React.FC<{}> = () => {
  const { open, message } = useStoreState<Model>((state) => state.snackbar);
  const { handleClose } = useStoreActions<Model>((actions) => actions.snackbar);

  return open ? (
    <div
      onClick={handleClose}
      onKeyDown={handleClose} // キーボードイベントリスナーを追加
      role="button"
      tabIndex={0}
      style={{
        position: 'absolute',
        bottom: 20,
        right: 20,
        backgroundColor: '#0d0d0d',
        padding: 10,
        color: '#fff',
        cursor: 'pointer',
      }}
    >
      {message}
    </div>
  ) : null;
};
