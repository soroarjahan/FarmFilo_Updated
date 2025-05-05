
import React from 'react';
import { Loader2 } from 'lucide-react';

export const LoadingSpinner: React.FC<{ size?: number; fullScreen?: boolean }> = ({ size = 6, fullScreen = true }) => {
  const sizeClass = `h-${size} w-${size}`;
  
  if (fullScreen) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-white/80 z-50">
        <Loader2 className={`${sizeClass} animate-spin text-farmfilo-primary`} />
      </div>
    );
  }
  
  return (
    <div className="flex items-center justify-center my-4">
      <Loader2 className={`${sizeClass} animate-spin text-farmfilo-primary`} />
    </div>
  );
};
