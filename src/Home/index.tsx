import { useSelector } from 'react-redux';
import { RootState } from 'store';

import ButtonList from 'Components/ButtonList';
import getChoresKids from './getChoresKids';
import ChoreType from 'commons/ChoreType';

const Home = () => {
  const choresKids = useSelector(getChoresKids);
  const chores: ChoreType[] = useSelector((state: RootState) => state.chores);

  const buttons = chores.map(chore => {
    return ({
      onClick: '/settings/chores/add',
      label: chore.name,
      buttonClass: 'manage-chores__add',
    });
  });
  return (
    <ButtonList buttons={buttons} />
  );
};

export default Home;
