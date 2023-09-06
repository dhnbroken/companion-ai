'use client';

import React, { FormEvent } from 'react';
import { ChatRequestOptions } from 'ai';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { SendHorizonal } from 'lucide-react';

interface ChatFormProps {
  isLoading: boolean;
  input: string;
  onSubmit: (e: FormEvent<HTMLFormElement>, chatRequestOptions?: ChatRequestOptions | undefined) => void;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const ChatForm = ({ isLoading, input, onSubmit, handleInputChange }: ChatFormProps) => {
  return (
    <form onSubmit={onSubmit} className="border-t border-primary/10 py-4 flex items-center gap-x-2">
      <Input
        disabled={isLoading}
        value={input}
        onChange={handleInputChange}
        placeholder="Type a message"
        className="rounded-lg bg-primary/10"
      />
      <Button disabled={isLoading} variant={'ghost'}>
        <SendHorizonal className="w-6 h-6" />
      </Button>
    </form>
  );
};

export default ChatForm;
