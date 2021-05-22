import { createStore, combineReducers } from 'redux';
import signUpData from './SignUp/data';
import signInData from './SignIn/data';

const reducers = combineReducers({
  signUpData,
  signInData,
});

export type RootState = ReturnType<typeof reducers>;
export const store = createStore(reducers);
