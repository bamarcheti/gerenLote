import { CheckIcon } from '@heroicons/react/24/solid';

export interface Action {
  label: string;
}

interface Props {
  steps?: Action[];
  currentStep: number;
  complete: boolean;
}
const DisplayStepper = ({ steps, currentStep, complete }: Props) => {
  return (
    <>
      <div className="flex justify-between">
        {steps?.map((step, index) => (
          <div
            key={index}
            className={`step-item ${currentStep === index + 1 && 'active'} ${
              (index + 1 < currentStep || complete) && 'complete'
            }`}
          >
            <div className="step">
              {index + 1 < currentStep || complete ? <CheckIcon className="w-6" /> : index + 1}
            </div>
            <p className="text-gray-500">{step.label}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default DisplayStepper;

// return (
//   <div className="w-full py-4 px-8">
//     <Stepper
//       activeStep={activeStep}
//       isLastStep={(value) => setIsLastStep(value)}
//       isFirstStep={(value) => setIsFirstStep(value)}
//     >
//       <Step onClick={() => setActiveStep(0)}>
//         <UserIcon className="h-5 w-5" />
//         <div
//           className={`absolute -bottom-[4.5rem] w-max text-center ${
//             activeStep === 0 ? 'text-primary' : ''
//           }`}
//         >
//           <Typography variant="h6" color={activeStep === 0 ? 'blue' : 'blue-gray'}>
//             Pessoal
//           </Typography>
//         </div>
//       </Step>
//       <Step onClick={() => setActiveStep(1)}>
//         <CogIcon className="h-5 w-5" />
//         <div className="absolute -bottom-[4.5rem] w-max text-center">
//           <Typography variant="h6" color={activeStep === 1 ? 'blue' : 'blue-gray'}>
//             Contatos
//           </Typography>
//         </div>
//       </Step>
//       <Step onClick={() => setActiveStep(2)}>
//         <BuildingLibraryIcon className="h-5 w-5" />
//         <div className="absolute -bottom-[4.5rem] w-max text-center">
//           <Typography variant="h6" color={activeStep === 2 ? 'blue' : 'blue-gray'}>
//             Senha
//           </Typography>
//         </div>
//       </Step>
//     </Stepper>
//     <div className="mt-32 flex justify-between">
//       <Button onClick={handlePrev} disabled={isFirstStep}>
//         Prev
//       </Button>
//       <Button onClick={handleNext} disabled={isLastStep}>
//         Next
//       </Button>
//     </div>
//   </div>
// );
