import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { useRef } from 'react';
import Button from '../../../../components/Button';
import CheckboxForm from '../../../../components/FormComponents/CheckboxForm';
import InputForm from '../../../../components/FormComponents/InputForm';

const Login = () => {
  const formRef = useRef<FormHandles>(null);

  const handleLogin = () => {
    console.log('LOGIN');
  };

  return (
    <div className="bg-white rounded-md flex flex-col items-center justify-center gap-4 w-full h-full p-[70px]">
      <h1 className="text-primary flex font-normal font-sans justify-center text-2xl">Login</h1>
      <div className="flex flex-col w-full gap-4">
        <Form onSubmit={handleLogin} ref={formRef}>
          <InputForm
            required
            name="email"
            type="text"
            label="E-mail"
            placeholder="Informe seu E-mail"
            className="w-full font-medium h-20"
          />
          <InputForm
            required
            name="senha"
            type="password"
            label="Senha"
            placeholder="Informe seu Senha"
            className="w-full font-medium h-20"
          />

          <div className="flex justify-between">
            <CheckboxForm label="Manter-me conectado" name="conectado" />
            <span className="text-textB font-medium text-sm hover:underline cursor-pointer">
              Esqueceu a senha?
            </span>
          </div>
          <div className="flex flex-col items-center justify-start mt-8 gap-12">
            <div className="flex justify-center">
              <Button buttonText="Entrar" variant="primary" type="submit" />
            </div>
            <span className="flex text-textB font-medium gap-1">
              Não tem uma conta?
              <a className="text-primary font-bold hover:underline cursor-pointer">Inscrever-se</a>
            </span>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Login;
