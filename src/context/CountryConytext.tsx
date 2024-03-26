import { createContext, useContext, useEffect, useState } from "react";
import { fetchData } from "../utils/data";
import { ChildrenProp } from "../types/types";

// @ts-ignore
const CountryContext = createContext("country");

function CountryProvider({ children }: ChildrenProp) {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchDataForComponent() {
      setData(await fetchData());
    }

    fetchDataForComponent();
  }, []);

  return (
    // @ts-ignore
    <CountryContext.Provider value={{ data, setData }}>
      {children}
    </CountryContext.Provider>
  );
}

function useCountry() {
  const context = useContext(CountryContext);
  if (context === undefined)
    throw new Error("Country context was used outside of country provider");
  return context;
}

export { CountryProvider, useCountry };
