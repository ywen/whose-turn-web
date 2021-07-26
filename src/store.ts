import { createStore, combineReducers } from 'redux';
import signUpData from './SignUp/data';
import signInData from './SignIn/data';
import kidsFormData from './Settings/Kids/Form/data';

const reducers = combineReducers({
  signUpData,
  signInData,
  kidsFormData,
});

export type RootState = ReturnType<typeof reducers>;
export const store = createStore(reducers);
