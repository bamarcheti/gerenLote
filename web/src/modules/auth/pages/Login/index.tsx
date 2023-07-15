import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { useRef } from 'react';
import { useNavigate } from 'react-router';
import Button from '../../../../components/Button';
import CheckboxForm from '../../../../components/FormComponents/CheckboxForm';
import InputForm from '../../../../components/FormComponents/InputForm';
import RoutesURL from '../../../_shared/constants/RoutesURL.enum';

const Login = () => {
  const navigate = useNavigate();
  const formRef = useRef<FormHandles>(null);

  const handleLogin = () => {
    console.log('LOGIN');
  };

  return (
    <div className="w-full px-28">
      <h1 className="text-primary flex font-bold font-sans text-center justify-center text-4xl">
        Login
      </h1>
      <div className="flex flex-col w-full">
        <Form onSubmit={handleLogin} ref={formRef}>
          <div className="flex flex-col w-full">
            <InputForm
              name="text"
              type="name"
              label="Nome"
              placeholder="Informe seu nome"
              className="w-full font-medium h-20"
            />
            <InputForm
              name="email"
              type="text"
              label="E-mail"
              placeholder="Informe seu e-mail"
              className="w-full font-medium h-20"
            />
          </div>

          <div className="flex w-full justify-between">
            <CheckboxForm label="Manter-me conectado" name="conectado" />
            <span className="text-textB font-medium text-base hover:underline cursor-pointer">
              Esqueceu a senha?
            </span>
          </div>
          <div className="flex flex-col items-center mt-3 gap-9">
            <div className="flex justify-center">
              <Button buttonText="Entrar" variant="primary" type="submit" />
            </div>
            <span className="flex text-textB font-medium gap-1">
              Não tem uma conta?
              <a
                onClick={() => navigate(RoutesURL.FIRST_ACCESS)}
                className="text-primary font-bold hover:underline cursor-pointer"
              >
                Inscrever-se
              </a>
            </span>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Login;
