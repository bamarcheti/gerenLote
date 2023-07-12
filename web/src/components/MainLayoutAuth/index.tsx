interface Props {
  children: React.ReactNode;
}

const MainLayoutAuth: React.FC<Props> = ({ children }) => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen overflow-y-auto bg-primary px-[365px] py-36">
      {children}
    </div>
  );
};

export default MainLayoutAuth;
