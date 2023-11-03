import React, { useState } from 'react';

interface TooltipProps {
  text: string;
  children: React.ReactNode;
}

export function Tooltip({ text, children }: TooltipProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <span
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ position: 'relative', display: 'inline-block' }}
    >
      {children}
      {isHovered && (
        <div
          style={{
            position: 'absolute',
            top: '100%',
            left: '20%',
            transform: 'translateX(-50%)',
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            color: '#fff',
            padding: '5px',
            borderRadius: '4px',
            whiteSpace: 'nowrap',
            zIndex: 200,
          }}
        >
          {text}
        </div>
      )}
    </span>
  );
}
