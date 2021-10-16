import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

import SignUp from './SignUp';
import SignIn from './SignIn';
import Home from './Home';
import Settings from './Settings';
import Kids from './Settings/Kids';
import AddKid from './Settings/Kids/Add';
import Chores from './Settings/Chores';
import AddChore from './Settings/Chores/Add';
import AuthenticatedArea from './AuthenticatedArea';
import UserType from 'UserType';

const Routing = ({ user }: UserType) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/signin' element={<SignIn user={user}/>} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/' element={<AuthenticatedArea user={user} />}>
          <Route path='/home' element={<Home />} />
          <Route path='/settings' element={<Settings />} />
          <Route path='/settings/kids' element={<Kids />} />
          <Route path='/settings/kids/add' element={<AddKid />} />
          <Route path='/settings/chores' element={<Chores />} />
          <Route path='/settings/chores/add' element={<AddChore />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
