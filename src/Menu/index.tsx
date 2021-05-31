import { Link } from 'react-router-dom';
import signout from 'server/signout';

import './index.scss';
const Menu = () => {
  return (
    <ul className='menu__container'>
      <li className='menu__item'><Link to='/home'>Home</Link></li>
      <li className='menu__item'><Link to='/settings'>Settings</Link></li>
      <li className='menu__item'><button onClick={signout}>Sign out</button></li>
    </ul>
  )
};

export default Menu;
