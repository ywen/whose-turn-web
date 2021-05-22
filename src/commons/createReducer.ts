import { Action } from 'redux';

interface HandledType {
  type: string;
  logic: Function;
};

interface Params {
  initialState: Object;
  handledTypes: HandledType[];
};

interface State {
};

const createReducer = ({ initialState, handledTypes }: Params) => {
  return (state: State, action: Action) => {
    if (state === undefined) return initialState;
    let result = null;
    handledTypes.forEach(({type, logic}) => {
      if (action.type === type) {
        result = logic(state, action);
      }
    });
    return result !== null ? result : state;
  };
};

export default createReducer;
