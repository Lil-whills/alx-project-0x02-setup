
import React from 'react';
import { ButtonProps } from '@/interfaces';

const sizeClasses: Record<string, string> = {
  small: 'px-3 py-1 text-sm',
  medium: 'px-4 py-2 text-base',
  large: 'px-5 py-3 text-lg',
};

export default function Button({ label, size = 'medium', shape = 'rounded-md', onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`bg-blue-600 text-white ${sizeClasses[size]} ${shape} hover:bg-blue-700 transition`}
    >
      {label}
    </button>
  );
}
