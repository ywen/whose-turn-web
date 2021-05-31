import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

import SignUp from './SignUp';
import SignIn from './SignIn';
import Home from './Home';
import Settings from './Settings';
import AuthenticatedArea from './AuthenticatedArea';
import UserType from 'UserType';

const Routing = ({ user }: UserType) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/signin' element={<SignIn user={user}/>} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/home' element={<Home />} />
        <Route path='/settings' element={<Settings />} />
        <Route path='/' element={<AuthenticatedArea user={user} />}>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;