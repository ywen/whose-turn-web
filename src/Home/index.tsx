import { useSelector } from 'react-redux';
import { RootState } from 'store';

import ChoreType from 'commons/ChoreType';
import ButtonList from 'Components/ButtonList';

const Home = () => {
  const chores: ChoreType[] = useSelector((state: RootState) => state.chores);

  const buttons = [
    { link: '/settings/chores/add', label: 'Add', buttonClass: 'manage-chores__add' },
  ];
  return (
    <div>
      <ul className='chores-list__container'>
        {chores.map(chore => (
          <li className='chores-list__chore' key={chore.id}>{chore.name} - {chore.points}</li>
        ))}
      </ul>
      <ButtonList buttons={buttons} />
    </div>
  );
};

export default Home;
