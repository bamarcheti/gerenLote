interface Props {
  children: React.ReactNode;
}

const MainLayoutAuth: React.FC<Props> = ({ children }) => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen overflow-y-auto md:bg-primary bg-white">
      <div className="bg-white md:rounded-md rounded-none flex flex-col items-center justify-center w-auto h-auto">
        {children}
      </div>
    </div>
  );
};

export default MainLayoutAuth;
