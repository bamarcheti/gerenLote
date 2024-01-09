import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import RoutesURL from '../../modules/_shared/constants/RoutesURL.enum';
import Footer from '../Footer';
import DropdownForm, { Action } from '../FormComponents/DropdownForm';

interface Props {
  children: React.ReactNode;
}

const MainLayout: React.FC<Props> = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [registrationPage, setRegistrationPage] = useState(false);
  // const { signOut, signed, user } = useAuth();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const menuItens: Action[] = [
    { label: 'Candidatos', onClick: () => navigate(RoutesURL.HOME) },
    { label: 'Oportunidades', onClick: () => navigate(RoutesURL.HOME) },
    { label: 'Usuários', onClick: () => navigate(RoutesURL.HOME) }
  ];

  const logout = () => {
    // signOut();
    navigate(RoutesURL.LOGIN);
  };

  const showLoginMenu = () => {
    return !pathname.includes('login');
    // && !signed;
  };

  const getPathname = () => {
    if (pathname === RoutesURL.HOME) {
      setRegistrationPage(true);
    } else {
      setRegistrationPage(false);
    }
  };

  const toggleOpen = () => {
    setOpen((old) => !old);
  };

  useEffect(() => {
    getPathname();
  }, [pathname]);

  return (
    <div
      className={`flex flex-col ${
        registrationPage ? 'min-h-screen h-full lg:bg-gray-200' : 'h-screen'
      } `}
    >
      <div
        className={`w-full shadow-lg text-white
      ${open ? 'bg-white text-black' : 'bg-stone-900 shadow-lg'}`}
      >
        <div className="xl:max-w-6xl mx-auto">
          <div className="flex flex-row xl:px-0 md:px-10 px-6 py-2 items-center flex-wrap">
            <div className="grow flex flex-row gap-2 items-center">
              <Link to="/">
                <div className="w-28 py-2">
                  <img
                    src={open ? '/images/inovati_colorido.png' : '/images/inovati_branco.png'}
                    className="w-full h-auto"
                    alt="INOVVATI Logo"
                  />
                </div>
              </Link>
            </div>
            <ul className="hidden sm:flex px-4">
              {/* {signed && ( */}
              <li className="flex items-center py-1 px-3 ">
                Bem vindo!
                {/* {user?.name.split(' ').shift()}! */}
              </li>
              {/* )} */}
              <div className="hidden md:flex place-content-end gap-4">
                {showLoginMenu() && (
                  <li
                    className="cursor-pointer hover:text-teal-400 transition-all border-[1px] rounded border-teal-900 py-1 px-3 ease-in-out"
                    onClick={logout}
                  >
                    Entrar
                  </li>
                )}
                {/* {user?.isAdmin && signed && ( */}
                <DropdownForm menuItens={menuItens} nameButton="Gerenciar" />
                {/* )} */}
                {/* {signed && ( */}
                <li
                  className="cursor-pointer hover:text-teal-400 transition-all border-[1px] font-medium rounded border-teal-900 py-1 px-3 ease-in-out"
                  onClick={logout}
                >
                  Sair
                </li>
                {/* )} */}
              </div>
            </ul>
            <div className="md:hidden visible text-right place-content-end">
              <div onClick={toggleOpen}>
                {open ? (
                  <svg
                    className="h-8 w-8 text-black"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    className={`h-8 w-8 text-white`}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="3" y1="12" x2="21" y2="12" /> <line x1="3" y1="6" x2="21" y2="6" />{' '}
                    <line x1="3" y1="18" x2="21" y2="18" />
                  </svg>
                )}
              </div>
            </div>
          </div>
          <ul
            className={`flex flex-col bg-white text-black gap-2 p-2 text-center ${
              open ? '' : 'hidden'
            }`}
          >
            {showLoginMenu() && (
              <li
                className="cursor-pointer hover:bg-stone-100 hover:text-teal-400 hover:font-semibold transition-all ease-in-out w-full py-5 rounded"
                onClick={logout}
              >
                Entrar
              </li>
            )}
            {/* {user?.isAdmin && signed && ( */}
            <>
              <li
                className="cursor-pointer hover:bg-stone-100 hover:text-teal-400 hover:font-semibold transition-all ease-in-out w-full py-5 rounded"
                onClick={() => navigate(RoutesURL.HOME)}
              >
                Entrada
              </li>
              <li
                className="cursor-pointer hover:bg-stone-100 hover:text-teal-400 hover:font-semibold transition-all ease-in-out w-full py-5 rounded"
                onClick={() => navigate(RoutesURL.HOME)}
              >
                Saída
              </li>
            </>
            {/* )} */}
            {/* {signed && ( */}
            <li
              className="cursor-pointer hover:bg-stone-100 hover:text-teal-400 hover:font-semibold transition-all ease-in-out w-full py-5 rounded"
              onClick={logout}
            >
              Sair
            </li>
            {/* )} */}
          </ul>
        </div>
      </div>
      <div
        className={`grow w-full xl:max-w-6xl mx-auto xl:px-0 ${
          registrationPage
            ? 'bg-white lg:mt-12 rounded-sm lg:max-w-5xl px-4 md:px-0'
            : 'md:px-10 px-4'
        } `}
      >
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
