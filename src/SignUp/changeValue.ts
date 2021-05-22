import { Dispatch } from 'redux';

interface Params {
  dispatch: Dispatch;
  key: string;
  value: string;
};

const changeValue = ({ dispatch, key, value}: Params) => {
  dispatch({ type: 'SIGN_UP_VALUE_CHANGED', key, value });
}

export default changeValue;
