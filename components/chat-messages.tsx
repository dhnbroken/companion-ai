'use client';
import { Companion, Message } from '@prisma/client';
import React from 'react';
import ChatMessage from './chat-message';

interface ChatMessagesProps {
  companion: Companion;
  isLoading: boolean;
  messages: any[];
}

const ChatMessages = ({ messages = [], isLoading, companion }: ChatMessagesProps) => {
  return (
    <div className="flex-1 overflow-y-auto pr-4">
      <ChatMessage />
    </div>
  );
};

export default ChatMessages;
