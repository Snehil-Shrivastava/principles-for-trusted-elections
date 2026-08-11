"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface ProgressContextType {
  progress: number;
  setProgress: (value: number) => void;
}

const ProgressContext = createContext<ProgressContextType>({
  progress: 8,
  setProgress: () => {},
});

export const ProgressProvider = ({
  children,
  initialProgress = 8,
}: {
  children: ReactNode;
  initialProgress?: number;
}) => {
  const [progress, setProgress] = useState(initialProgress);

  return (
    <ProgressContext.Provider value={{ progress, setProgress }}>
      {children}
    </ProgressContext.Provider>
  );
};

export const useProgress = () => useContext(ProgressContext);
