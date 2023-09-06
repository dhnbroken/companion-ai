import React from 'react';
import { useToast } from './ui/use-toast';
import { useTheme } from 'next-themes';

interface ChatMessageProps {
  role: 'system' | 'user';
  isLoading: boolean;
  content?: string;
  src?: string;
}

const ChatMessage = ({ role, isLoading, content, src }: ChatMessageProps) => {
  const { toast } = useToast();
  const { theme } = useTheme();

  return <div>ChatMessage</div>;
};

export default ChatMessage;
