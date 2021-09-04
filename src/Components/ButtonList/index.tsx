import { Link } from 'react-router-dom';

import './ButtonList.scss';

interface ButtonType {
  link: string;
  label: string;
  buttonClass: string;
};

interface SingleButtonType {
  button: ButtonType;
};

interface Params {
  buttons: ButtonType[];
};

const Button = ({ button }: SingleButtonType) => {
  return (
    <li className='button-list__menu--item'>
      <Link to={button.link} className={`button-list__menu-button ${button.buttonClass}`}>
        {button.label}
      </Link>
    </li>
  )
}
const ButtonList = ({ buttons }: Params) => {
  return (
    <div className='button-list__menu-container'>
      {buttons.map((button: ButtonType) => <Button button={button} key={`${button.label}-key`} />)}
    </div>
  );
};


export default ButtonList;
