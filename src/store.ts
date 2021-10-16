import { createStore, combineReducers } from 'redux';
import signUpData from './SignUp/data';
import signInData from './SignIn/data';
import kidsFormData from './Settings/Kids/Form/data';
import choresFormData from './Settings/Chores/Form/data';
import kids from './kids';
import chores from './chores';
import choresKids from './choreKid';

const reducers = combineReducers({
  signUpData,
  signInData,
  kidsFormData,
  choresFormData,
  kids,
  chores,
  choresKids,
});

export type RootState = ReturnType<typeof reducers>;
export const store = createStore(reducers);
