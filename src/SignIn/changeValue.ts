interface Params {
  dispatch: Function;
  key: string;
  value: string;
};

const changeValue = ({ dispatch, key, value }: Params) => {
  dispatch({ type: 'SIGN_IN_VALUE_CHANGED', key, value });
}

export default changeValue;
