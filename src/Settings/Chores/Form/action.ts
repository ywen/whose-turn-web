import ChoreType from 'commons/ChoreType';
import server from 'server/store';

interface Params {
  navigate: Function;
  dispatch: Function;
  data: ChoreType;
}

const action = ({ navigate, dispatch, data }: Params) => {
  server.saveChore(data);
}

export default action;
