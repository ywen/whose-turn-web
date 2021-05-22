import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

import SignUp from './SignUp';
import SignIn from './SignIn';
import AuthenticatedArea from './AuthenticatedArea';
import firebase from 'firebase/app';

interface Params {
  user: firebase.User | null;
};

const Routing = ({ user }: Params) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/signin' element={<SignIn user={user}/>} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/' element={<AuthenticatedArea user={user} />}>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
