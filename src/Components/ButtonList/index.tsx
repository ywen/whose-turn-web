import { Link } from 'react-router-dom';

import './ButtonList.scss';

interface ButtonType {
  link?: string;
  onClick?: string;
  label: string;
  buttonClass: string;
};

interface SingleButtonType {
  button: ButtonType;
};

interface Params {
  buttons: ButtonType[];
};

const LinkButton = ({ button }: SingleButtonType) => (
  <Link to={button.link!} className={`button-list__menu-button ${button.buttonClass}`}>
    {button.label}
  </Link>
);

const OnClickButton = ({ button }: SingleButtonType) => (
  <button className={`button-list__menu-button ${button.buttonClass}`}>
    {button.label}
  </button>
)

const Button = ({ button }: SingleButtonType) => {
  const ButtonType = button.link ? LinkButton : OnClickButton;
  return (
    <li className='button-list__menu--item'>
      <ButtonType button={button} />
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
