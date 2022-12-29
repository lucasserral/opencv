import React from "react";

type Props = {
  title?: string;
  children: React.ReactNode;
};

const MainContext = React.createContext({});

const MainContextProvider = ({ children }: Props): JSX.Element => {
  const [templates, setTemplates] = React.useState();

  return (
    <MainContext.Provider
      value={{
        templates,
        setTemplates,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};

export { MainContextProvider, MainContext };
