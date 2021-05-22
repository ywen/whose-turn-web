import produce from 'immer';

import createReducer from 'commons/createReducer';

const initialState = {};

interface Action {
  key: string;
  value: string;
};
interface State {
  readonly email: string;
  readonly password: string;
};

interface Draft {
  [key: string]: string;
};

const logic = (state: State, action: Action) => produce(state, (draft: Draft) => {
  const { key, value} = action;
  draft[key] = value;
});

const data = createReducer({
  initialState,
  handledTypes: [
    { type: 'SIGN_IN_VALUE_CHANGED', logic },
  ],
});

export default data;
