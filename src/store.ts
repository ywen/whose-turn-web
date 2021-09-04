import { createStore, combineReducers } from 'redux';
import signUpData from './SignUp/data';
import signInData from './SignIn/data';
import kidsFormData from './Settings/Kids/Form/data';
import kids from './kids';

const reducers = combineReducers({
  signUpData,
  signInData,
  kidsFormData,
  kids,
});

export type RootState = ReturnType<typeof reducers>;
export const store = createStore(reducers);
