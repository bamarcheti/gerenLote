interface Props {
  className?: string;
  children: React.ReactNode;
}

const MainLayoutAuth: React.FC<Props> = ({ className, children }) => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen overflow-y-auto bg-primary px-[365px] py-36">
      <div className="bg-white rounded-md flex flex-col items-center justify-center gap-4 w-full h-full">
        {children}
      </div>
    </div>
  );
};

export default MainLayoutAuth;
