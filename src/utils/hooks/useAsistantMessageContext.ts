import { useContext } from 'react';
import { AssistantMessageContext } from '../../context/assistantMessage';

export const useAsistantMessageContext = () => {
  const context = useContext(AssistantMessageContext);
  if (context === null) {
    throw new Error(
      'AssistantMessageContext must be used within an AssistantMessageProvider'
    );
  }
  return context;
};
