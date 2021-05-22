import CryptoJS from 'crypto-js';

interface Params {
  key: string;
  value: string;
};

const getEncrypted = ({ key, value }: Params) => {
  return CryptoJS.AES.encrypt(String(value), key).toString();
};

export default getEncrypted;
