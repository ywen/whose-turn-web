import produce from 'immer';
import KidType from 'commons/KidType';

import createReducer from 'commons/createReducer';
interface Action {
  data: any[];
};

interface State {
  kids: KidType[];
};

const logic = (state: State, action: Action) => produce(state, (draft: any) => (
  draft = action.data
));

export default createReducer({
  handledTypes: [
    { logic, type: 'KIDS_CHANGED' }
  ],
  initialState: [],
});
