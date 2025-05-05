
import React from 'react';
import { Loader2 } from 'lucide-react';

export const LoadingSpinner: React.FC<{ size?: number }> = ({ size = 6 }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white/80 z-50">
      <Loader2 className={`h-${size} w-${size} animate-spin text-farmfilo-primary`} />
    </div>
  );
};
