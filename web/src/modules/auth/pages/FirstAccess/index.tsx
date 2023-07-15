import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { useRef } from 'react';
import { useNavigate } from 'react-router';
import Button from '../../../../components/Button';
import InputForm from '../../../../components/FormComponents/InputForm';
import RoutesURL from '../../../_shared/constants/RoutesURL.enum';

const FirstAccess = () => {
  const navigate = useNavigate();
  const formRef = useRef<FormHandles>(null);

  return (
    <>
      <h1 className="text-primary flex font-bold font-sans text-center justify-center text-4xl">
        BOAS-VINDAS!
      </h1>
      <h2 className="text-primary flex font-medium font-sans text-center justify-center text-2xl">
        CRIE SUA CONTA
      </h2>
      <div className="flex flex-col w-full">
        <Form onSubmit={() => ({})} ref={formRef}>
          <InputForm
            required
            name="text"
            type="name"
            label="Nome"
            placeholder="Informe seu nome"
            className="w-full font-medium h-20"
          />
          <InputForm
            required
            name="email"
            type="text"
            label="E-mail"
            placeholder="Informe seu e-mail"
            className="w-full font-medium h-20"
          />
          <div className="flex flex-col items-center justify-start mt-6 gap-9">
            <span className="flex text-textB font-medium gap-1">
              Já possuo uma conta.
              <a
                onClick={() => navigate(RoutesURL.LOGIN)}
                className="text-primary font-bold hover:underline cursor-pointer"
              >
                Ir para login
              </a>
            </span>
            <div className="flex justify-center">
              <Button buttonText="Próximo" variant="primary" type="submit" />
            </div>
          </div>
        </Form>
      </div>
    </>
  );
};

export default FirstAccess;
