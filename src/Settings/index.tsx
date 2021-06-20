import ButtonList from 'Components/ButtonList';

import './index.scss';

const Settings = () => {
  const buttons = [
    { link: '/settings/kids', label: 'Kids', buttonClass: 'settings__kids-button' },
  ];
  return (
    <ButtonList buttons={buttons} />
  );
};

export default Settings;
