import { HashRouter, Route, Routes } from 'react-router-dom';
import RoutesURL from '../modules/_shared/constants/RoutesURL.enum';
import Login from '../modules/auth/pages/Login';

const AuthRoutes = () => {
  return (
    <HashRouter>
      <Routes>
        <Route index path={RoutesURL.LOGIN} Component={Login} />
      </Routes>
    </HashRouter>
  );
};

export default AuthRoutes;
