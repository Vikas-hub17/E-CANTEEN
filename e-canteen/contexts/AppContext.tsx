import React, { createContext, useState, ReactNode } from 'react';

interface AppContextProps {
  liveOrders: any[];
  pastOrders: any[];
  setLiveOrders: (orders: any[]) => void;
  setPastOrders: (orders: any[]) => void;
}

const defaultValue: AppContextProps = {
  liveOrders: [],
  pastOrders: [],
  setLiveOrders: () => {},
  setPastOrders: () => {},
};

export const AppContext = createContext<AppContextProps>(defaultValue);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [liveOrders, setLiveOrders] = useState<any[]>([]);
  const [pastOrders, setPastOrders] = useState<any[]>([]);

  return (
    <AppContext.Provider value={{ liveOrders, pastOrders, setLiveOrders, setPastOrders }}>
      {children}
    </AppContext.Provider>
  );
};
