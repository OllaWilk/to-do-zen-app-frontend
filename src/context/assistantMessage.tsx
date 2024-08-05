import React, { createContext, ReactNode, useState } from 'react';

interface AssistantMessage {
  message: string | null;
  ikonError?: boolean | null;
}

export const AssistantMessageContext = createContext<{
  messageState: AssistantMessage;
  setMessage: React.Dispatch<React.SetStateAction<AssistantMessage>>;
} | null>(null);

export const AsistantMessageProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [messageState, setMessage] = useState<AssistantMessage>({
    message: null,
    ikonError: true,
  });

  return (
    <AssistantMessageContext.Provider value={{ messageState, setMessage }}>
      {children}
    </AssistantMessageContext.Provider>
  );
};
