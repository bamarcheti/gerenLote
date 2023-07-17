interface Props {
  className?: string;
  children: React.ReactNode;
}

const MainLayoutAuth: React.FC<Props> = ({ className, children }) => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen overflow-y-auto bg-primary xl:px-[365px] md:px-44 md:py-20">
      <div className="bg-white md:rounded-md rounded-none flex flex-col items-center justify-center w-full h-full">
        {children}
      </div>
    </div>
  );
};

export default MainLayoutAuth;
