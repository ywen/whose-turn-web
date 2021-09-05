import produce from 'immer';
import ChoreType from 'commons/ChoreType';

import createReducer from 'commons/createReducer';
interface Action {
  data: any[];
};

interface State {
  chores: ChoreType[];
};

const logic = (state: State, action: Action) => produce(state, (draft: any) => (
  draft = action.data
));

export default createReducer({
  handledTypes: [
    { logic, type: 'CHORES_CHANGED' }
  ],
  initialState: [],
});
