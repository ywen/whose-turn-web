import { useSelector } from 'react-redux';
import { RootState } from 'store';
import KidType from 'commons/KidType';

import ButtonList from 'Components/ButtonList';

import './index.scss';

const Kids = () => {
  const kids: KidType[] = useSelector((state: RootState) => state.kids);

  const buttons = [
    { link: '/settings/kids/add', label: 'Add', buttonClass: 'manage-kids__add' },
  ];
  return (
    <div>
      <ul className='kids-list__container'>
        {kids.map(kid => (
          <li className='kids-list__kid' key={kid.id}>{kid.name} - {kid.points}</li>
        ))}
      </ul>
      <ButtonList buttons={buttons} />
    </div>
  );
};

export default Kids;
