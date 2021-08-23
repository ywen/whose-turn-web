import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import TextField from 'Components/TextField';
import { RootState } from 'store';
import changeValue from './changeValue';
import action from './action';
import './index.scss';

const Form = () => {
  const data = useSelector((state: RootState) => state.kidsFormData);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <div className='kids__container' key='fields-container'>
      <TextField changeValue={changeValue} data={data} name='name' key='name' />
      <TextField changeValue={changeValue} data={data} name='points' key='points' />
      <div className='kids__input-container'>
        <button onClick={() => action({dispatch, data, navigate})}>Save</button>
      </div>
    </div>
  );
};

export default Form;
