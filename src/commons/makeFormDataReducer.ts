import produce from 'immer';

import createReducer from 'commons/createReducer';

const initialState = {};

interface Action {
  key: string;
  value: string;
};

interface Draft {
  [key: string]: string;
};

interface Params {
  type: string;
};

const makeFormDataReducer = ({ type }: Params) => {
  const logic = (state: any, action: Action) => produce(state, (draft: Draft) => {
    const { key, value} = action;
    draft[key] = value;
  });
  return createReducer({
    initialState,
    handledTypes: [
      { type, logic },
    ],
  });
};

export default makeFormDataReducer;
