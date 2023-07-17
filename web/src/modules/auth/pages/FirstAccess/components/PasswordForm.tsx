import InputForm from '../../../../../components/FormComponents/InputForm';

const PasswordForm = () => {
  return (
    <>
      <InputForm
        name="password"
        type="password"
        label="Senha"
        placeholder="Informe sua senha"
        className="w-full font-medium h-20"
      />
      <InputForm
        name="password"
        type="passwordConfirmated"
        label="Confirme sua senha"
        placeholder="Informe a mesma senha"
        className="w-full font-medium h-20"
      />
    </>
  );
};

export default PasswordForm;
