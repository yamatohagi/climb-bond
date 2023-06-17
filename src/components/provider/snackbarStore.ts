import { createStore, action, Action } from 'easy-peasy';

export interface SnackbarModel {
  open: boolean;
  message: string;
  handleClose: Action<SnackbarModel, void>;
  handleOpen: Action<SnackbarModel, string>;
}

export interface Model {
  snackbar: SnackbarModel;
}

const model: Model = {
  snackbar: {
    open: false,
    message: '',
    handleClose: action((s: any) => {
      s.open = false;
    }),
    handleOpen: action((s: any, message: any) => {
      s.open = true;
      s.message = message;
    }),
  },
};

export const snackbarStore = createStore(model);
