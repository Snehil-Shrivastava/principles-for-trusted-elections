"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface UIChromeContextType {
  isBuildingNavVisible: boolean;
  setIsBuildingNavVisible: (visible: boolean) => void;
}

const UIChromeContext = createContext<UIChromeContextType>({
  isBuildingNavVisible: true,
  setIsBuildingNavVisible: () => {},
});

export const UIChromeProvider = ({ children }: { children: ReactNode }) => {
  const [isBuildingNavVisible, setIsBuildingNavVisible] = useState(true);

  return (
    <UIChromeContext.Provider
      value={{ isBuildingNavVisible, setIsBuildingNavVisible }}
    >
      {children}
    </UIChromeContext.Provider>
  );
};

export const useUIChrome = () => useContext(UIChromeContext);
