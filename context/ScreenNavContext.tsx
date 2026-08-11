"use client";

import {
  createContext,
  useContext,
  useState,
  useCallback,
  ReactNode,
} from "react";

interface ScreenNavContextValue {
  index: number;
  total: number;
  isFirst: boolean;
  isLast: boolean;
  next: () => void;
  back: () => void;
  goTo: (i: number) => void;
}

const ScreenNavContext = createContext<ScreenNavContextValue | null>(null);

export const ScreenNavProvider = ({
  total,
  children,
}: {
  total: number;
  children: ReactNode;
}) => {
  const [index, setIndex] = useState(0);

  const next = useCallback(
    () => setIndex((i) => Math.min(i + 1, total - 1)),
    [total],
  );
  const back = useCallback(() => setIndex((i) => Math.max(i - 1, 0)), []);
  const goTo = useCallback(
    (i: number) => setIndex(Math.max(0, Math.min(i, total - 1))),
    [total],
  );

  return (
    <ScreenNavContext.Provider
      value={{
        index,
        total,
        isFirst: index === 0,
        isLast: index === total - 1,
        next,
        back,
        goTo,
      }}
    >
      {children}
    </ScreenNavContext.Provider>
  );
};

export const useScreenNav = () => {
  const ctx = useContext(ScreenNavContext);
  if (!ctx)
    throw new Error("useScreenNav must be used within a ScreenNavProvider");
  return ctx;
};
