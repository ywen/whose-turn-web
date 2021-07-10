import ButtonList from 'Components/ButtonList';

import './index.scss';

const Kids = () => {
  const buttons = [
    { link: '/settings/kids/add', label: 'Add', buttonClass: 'manage-kids__add' },
  ];
  return (
    <ButtonList buttons={buttons} />
  );
};

export default Kids;
