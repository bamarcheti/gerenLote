import { HashRouter, Route, Routes } from 'react-router-dom';
import MainLayout from '../components/MainLayout';
import RoutesURL from '../modules/_shared/constants/RoutesURL.enum';
import Home from '../modules/home';

const AppRoutes = () => {
  return (
    <HashRouter>
      <MainLayout>
        <Routes>
          <Route index path={RoutesURL.HOME} Component={Home} />
          <Route path="*" Component={Home} />
        </Routes>
      </MainLayout>
    </HashRouter>
  );
};

export default AppRoutes;
