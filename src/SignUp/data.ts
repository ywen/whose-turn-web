import produce from 'immer';
import createReducer from 'commons/createReducer';
import SignupData from './SignupData';

const initialState = {};
interface Action {
  key: string;
  value: string;
};

interface Draft {
  [key: string]: string;
};

const logic = (state: SignupData, action: Action) => produce(state, (draft: Draft) => {
  const { key, value } = action;
  draft[key] = value;
});

const reducer = createReducer({
  initialState,
  handledTypes: [
    {
      type: 'SIGN_UP_VALUE_CHANGED',
      logic,
    }
  ]
});

export default reducer;
