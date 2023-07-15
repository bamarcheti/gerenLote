import InputForm from '../../../../../components/FormComponents/InputForm';

const ContactForm = () => {
  return (
    <div className="flex w-full">
      <InputForm
        name="text"
        type="cellphone"
        label="Telefone"
        placeholder="Informe seu telefone"
        className="w-full font-medium h-20"
      />
    </div>
  );
};

export default ContactForm;
