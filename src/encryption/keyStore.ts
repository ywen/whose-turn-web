const keyName = 'my-options-encryption-key';

const fetch = () => localStorage.getItem(keyName);

type Params = {
  key: string;
};

const save = ({ key }: Params) => localStorage.setItem(keyName, key);

const publicMethods = {
  save,
  fetch,
};

export default publicMethods;
