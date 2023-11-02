import { createContext, useContext, useEffect, useState } from "react";
import { ChildrenProps, IrandomDataPayload } from "../types/IrandomData";

interface RandomDataContextProps {
  randomData: IrandomDataPayload[] | undefined;
  getRandomData: () => Promise<void>;
}

const RandomDataContext = createContext<RandomDataContextProps | undefined>(
  undefined
);

export function useRandomDataContext() {
  const context = useContext(RandomDataContext);
  if (!context) {
    throw new Error(
      "useRandomDataContext must be used within a RandomDataProvider"
    );
  }
  return context;
}

export function RandomDataProvider({ children }: ChildrenProps) {
  const [randomData, setRandomData] = useState<
    IrandomDataPayload | undefined
  >();

  const getRandomData = async () => {
    try {
      const response = await fetch(
        "https://random-data-api.com/api/users/random_user?size=20"
      );

      if (response.ok) {
        const randomDataPayload = await response.json();
        setRandomData(randomDataPayload);
      } else {
        console.log("fetch error");
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getRandomData();
  }, []);

  return (
    <RandomDataContext.Provider value={{ randomData, getRandomData }}>
      {children}
    </RandomDataContext.Provider>
  );
}
