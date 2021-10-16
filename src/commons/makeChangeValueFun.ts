import { Dispatch } from 'redux';

interface Params {
  dispatch: Dispatch;
  key: string;
  value: string;
};

interface MakeParams {
  type: string;
};

const makeChangeValueFunc = ({ type }: MakeParams) => {
  return ({ dispatch, key, value}: Params) => {
    dispatch({ type, key, value });
  }
};

export default makeChangeValueFunc;
