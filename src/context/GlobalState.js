"use client";
import { createContext, useState, useContext } from "react";

const GlobalStateContext = createContext();

export const GlobalStateProvider = ({ children }) => {
  const [statistics, setStatistics] = useState({
    rank: 1,
    percentile: 30,
    currentScore: 10,
  });

  const updateStatistics = (updatedStats) => {
    setStatistics((prevStats) => ({
      ...prevStats,
      ...updatedStats,
    }));
  };

  return (
    <GlobalStateContext.Provider value={{ statistics, updateStatistics }}>
      {children}
    </GlobalStateContext.Provider>
  );
};

export const useGlobalState = () => {
  return useContext(GlobalStateContext);
};
