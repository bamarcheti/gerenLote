import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { useRef, useState } from 'react';
import { useNavigate } from 'react-router';
import Button from '../../../../components/Button';
import DisplayStepper from '../../../../components/FormComponents/DisplayStepper';
import RoutesURL from '../../../_shared/constants/RoutesURL.enum';
import ContactForm from './components/ContactForm';
import PasswordForm from './components/PasswordForm';
import PersonalForm from './components/PersonalForm';

const FirstAccess = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [complete, setComplete] = useState(false);

  const navigate = useNavigate();
  const formRef = useRef<FormHandles>(null);

  const steps = [{ label: 'Pessoal' }, { label: 'Contatos' }, { label: 'Senha' }];

  const displayStep = (step: any) => {
    switch (step) {
      case 1:
        return <PersonalForm />;
      case 2:
        return <ContactForm />;
      case 3:
        return <PasswordForm />;
      default:
    }
  };

  return (
    <div>
      <DisplayStepper steps={steps} currentStep={currentStep} complete={complete} />
      <div className="mt-4">
        {currentStep === 1 && (
          <h1 className="text-primary flex font-bold font-sans text-center justify-center text-4xl">
            BOAS-VINDAS!
          </h1>
        )}
        <h2 className="text-primary flex font-medium font-sans text-center justify-center text-2xl">
          Crie sua conta
        </h2>
      </div>
      <div className="flex flex-col w-full">
        <Form onSubmit={() => ({})} ref={formRef}>
          {displayStep(currentStep)}
          <div className="flex flex-col items-center justify-start mt-1 gap-6">
            {currentStep === 1 && (
              <span className="flex text-textB font-medium gap-1">
                Já possuo uma conta.
                <a
                  onClick={() => navigate(RoutesURL.LOGIN)}
                  className="text-primary font-bold hover:underline cursor-pointer"
                >
                  Ir para login
                </a>
              </span>
            )}
            {!complete && (
              <div className="flex gap-3">
                {currentStep > 1 && (
                  <Button
                    variant="clean"
                    buttonText="Anterior"
                    onClick={() => setCurrentStep((prev) => prev - 1)}
                  />
                )}
                <Button
                  variant="primary"
                  buttonText={currentStep === steps.length ? 'Criar Conta' : 'Próximo'}
                  onClick={() => {
                    currentStep === steps.length
                      ? setComplete(true)
                      : setCurrentStep((prev) => prev + 1);
                  }}
                />
              </div>
            )}
          </div>
        </Form>
      </div>
    </div>
  );
};

export default FirstAccess;
