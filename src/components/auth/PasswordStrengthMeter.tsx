
import React from 'react';
import { cn } from '@/lib/utils';

interface PasswordStrengthMeterProps {
  password: string;
}

const PasswordStrengthMeter: React.FC<PasswordStrengthMeterProps> = ({ password }) => {
  const calculateStrength = (password: string): { strength: number; label: string; color: string } => {
    if (!password) return { strength: 0, label: '', color: '' };
    
    // Calculate password strength
    let strength = 0;
    
    // Length check
    if (password.length >= 8) strength += 1;
    if (password.length >= 12) strength += 1;
    
    // Complexity checks
    if (/[A-Z]/.test(password)) strength += 1;
    if (/[0-9]/.test(password)) strength += 1;
    if (/[^A-Za-z0-9]/.test(password)) strength += 1;
    
    // Map strength to descriptive label and color
    const strengthMap = [
      { label: '', color: '' },
      { label: 'Weak', color: 'bg-red-500' },
      { label: 'Fair', color: 'bg-orange-500' },
      { label: 'Good', color: 'bg-yellow-500' },
      { label: 'Strong', color: 'bg-green-500' },
      { label: 'Very Strong', color: 'bg-green-600' }
    ];
    
    return {
      strength,
      label: strengthMap[strength]?.label || '',
      color: strengthMap[strength]?.color || ''
    };
  };

  const { strength, label, color } = calculateStrength(password);
  
  if (!password) return null;

  return (
    <div className="w-full mt-1 space-y-1">
      <div className="flex h-2 w-full rounded-full overflow-hidden bg-gray-200">
        {Array.from({ length: 5 }).map((_, index) => (
          <div
            key={index}
            className={cn(
              'h-full transition-all duration-300',
              index < strength ? color : 'bg-gray-200'
            )}
            style={{ width: '20%' }}
          />
        ))}
      </div>
      {label && (
        <p className={cn(
          'text-xs font-medium',
          strength <= 1 ? 'text-red-500' : 
          strength === 2 ? 'text-orange-500' : 
          strength === 3 ? 'text-yellow-600' : 
          'text-green-600'
        )}>
          {label}
          {strength <= 2 && (
            <span className="ml-1 text-gray-500">
              {strength === 1 && '• Try adding numbers and special characters'}
              {strength === 2 && '• Try adding uppercase letters and special characters'}
            </span>
          )}
        </p>
      )}
    </div>
  );
};

export default PasswordStrengthMeter;
