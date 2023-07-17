import InputForm from '../../../../../components/FormComponents/InputForm';

const PersonalForm = () => {
  return (
    <>
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
    </>
  );
};

export default PersonalForm;
