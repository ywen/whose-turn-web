import produce from 'immer';
import ChoreKidType from 'commons/ChoreKidType';

import createReducer from 'commons/createReducer';
interface Action {
  data: any[];
};

interface State {
  choreKids: ChoreKidType[];
};

const logic = (state: State, action: Action) => produce(state, (draft: any) => (
  draft = action.data
));

export default createReducer({
  handledTypes: [
    { logic, type: 'CHORE_KIDS_CHANGED' }
  ],
  initialState: [],
});
