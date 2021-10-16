import KidType from 'commons/KidType';
import server from 'server/store';

interface Params {
  navigate: Function;
  dispatch: Function;
  data: KidType;
}

const action = ({ navigate, dispatch, data }: Params) => {
  server.saveKid(data);
}

export default action;
