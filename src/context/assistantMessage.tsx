import React, { createContext, ReactNode, useState } from 'react';

interface AssistantMessage {
  message: string | null;
  setMessage: (message: string | null) => void;
}

export const AssistantMessageContext = createContext<AssistantMessage | null>(
  null
);

export const AsistantMessageProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [message, setMessage] = useState<string | null>(null);

  return (
    <AssistantMessageContext.Provider value={{ message, setMessage }}>
      {children}
    </AssistantMessageContext.Provider>
  );
};
