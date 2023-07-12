import { HashRouter, Route, Routes } from 'react-router-dom';
import MainLayoutAuth from '../components/MainLayoutAuth';
import RoutesURL from '../modules/_shared/constants/RoutesURL.enum';
import Login from '../modules/auth/pages/Login';

const AuthRoutes = () => {
  return (
    <HashRouter>
      <MainLayoutAuth>
        <Routes>
          <Route index path={RoutesURL.LOGIN} Component={Login} />
          <Route path="/" Component={Login} />
        </Routes>
      </MainLayoutAuth>
    </HashRouter>
  );
};

export default AuthRoutes;
