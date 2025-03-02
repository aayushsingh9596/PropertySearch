'use client'

import { createContext, useContext, useState } from 'react';

const GlabalContext = createContext();

export function GlobalProvider({ children }) {
  const [unreadCount, setUnreadCount] = useState(0);

  return (
    <GlabalContext.Provider value={{ unreadCount, setUnreadCount }}>
      {children}
    </GlabalContext.Provider>
  );
}

export function useGlobalContext() {
  const context = useContext(GlabalContext);
  if (!context) {
    throw new Error('useFullContext must be used within a GlobalProvider');
  }
  return context;
}
