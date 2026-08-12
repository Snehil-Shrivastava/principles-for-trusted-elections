// "use client";

// import {
//   createContext,
//   useContext,
//   useState,
//   useCallback,
//   ReactNode,
// } from "react";

// interface ScreenNavContextValue {
//   index: number;
//   total: number;
//   isFirst: boolean;
//   isLast: boolean;
//   next: () => void;
//   back: () => void;
//   goTo: (i: number) => void;
// }

// const ScreenNavContext = createContext<ScreenNavContextValue | null>(null);

// export const ScreenNavProvider = ({
//   total,
//   children,
// }: {
//   total: number;
//   children: ReactNode;
// }) => {
//   const [index, setIndex] = useState(0);

//   const next = useCallback(
//     () => setIndex((i) => Math.min(i + 1, total - 1)),
//     [total],
//   );
//   const back = useCallback(() => setIndex((i) => Math.max(i - 1, 0)), []);
//   const goTo = useCallback(
//     (i: number) => setIndex(Math.max(0, Math.min(i, total - 1))),
//     [total],
//   );

//   return (
//     <ScreenNavContext.Provider
//       value={{
//         index,
//         total,
//         isFirst: index === 0,
//         isLast: index === total - 1,
//         next,
//         back,
//         goTo,
//       }}
//     >
//       {children}
//     </ScreenNavContext.Provider>
//   );
// };

// export const useScreenNav = () => {
//   const ctx = useContext(ScreenNavContext);
//   if (!ctx)
//     throw new Error("useScreenNav must be used within a ScreenNavProvider");
//   return ctx;
// };

// ------------------------- nav tree context

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
  const [history, setHistory] = useState<number[]>([0]);
  const index = history[history.length - 1];

  const goTo = useCallback(
    (i: number) => {
      const clamped = Math.max(0, Math.min(i, total - 1));
      setHistory((h) => {
        const current = h[h.length - 1];
        if (clamped === current) return h; // no-op, avoid duplicate stack entries
        return [...h, clamped];
      });
    },
    [total],
  );

  const next = useCallback(() => {
    setHistory((h) => {
      const current = h[h.length - 1];
      const target = Math.min(current + 1, total - 1);
      if (target === current) return h; // already at last, nothing to push
      return [...h, target];
    });
  }, [total]);

  const back = useCallback(() => {
    setHistory((h) => (h.length > 1 ? h.slice(0, -1) : h)); // pop to the actual previous screen
  }, []);

  return (
    <ScreenNavContext.Provider
      value={{
        index,
        total,
        isFirst: history.length <= 1,
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
