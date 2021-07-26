import { useSelector, useDispatch } from 'react-redux';
import TextField from 'Components/TextField';
import { RootState } from 'store';
import changeValue from './changeValue';

const Form = () => {
  const data = useSelector((state: RootState) => state.kidsFormData);
  return (
    <div className='kids__container' key='fields-container'>
      <TextField changeValue={changeValue} data={data} name='name' key='name' />
      <TextField changeValue={changeValue} data={data} name='points' key='points' />
    </div>
  );
};

export default Form;
