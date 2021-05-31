import { Link } from 'react-router-dom';

import './index.scss';
const Settings = () => {
  return (
    <ul className='settings__menu-container'>
      <li className='settings__menu--item'><Link to='/settings/kids' className='settings__menu-button'>Kids</Link></li>
    </ul>
  );
};

export default Settings;
