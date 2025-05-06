
import React from 'react';
import { Button } from '@/components/ui/button';

interface SocialLoginButtonProps {
  provider: 'google' | 'facebook' | 'github' | 'apple';
  onClick: () => void;
  disabled?: boolean;
}

const SocialLoginButton: React.FC<SocialLoginButtonProps> = ({ 
  provider, 
  onClick, 
  disabled = false 
}) => {
  const getProviderDetails = (provider: string) => {
    switch (provider) {
      case 'google':
        return {
          label: 'Google',
          icon: (
            <svg className="h-4 w-4 mr-2" viewBox="0 0 24 24">
              <g transform="matrix(1, 0, 0, 1, 27.009001, -39.238998)">
                <path fill="#4285F4" d="M -3.264 51.509 C -3.264 50.719 -3.334 49.969 -3.454 49.239 L -14.754 49.239 L -14.754 53.749 L -8.284 53.749 C -8.574 55.229 -9.424 56.479 -10.684 57.329 L -10.684 60.329 L -6.824 60.329 C -4.564 58.239 -3.264 55.159 -3.264 51.509 Z"/>
                <path fill="#34A853" d="M -14.754 63.239 C -11.514 63.239 -8.804 62.159 -6.824 60.329 L -10.684 57.329 C -11.764 58.049 -13.134 58.489 -14.754 58.489 C -17.884 58.489 -20.534 56.379 -21.484 53.529 L -25.464 53.529 L -25.464 56.619 C -23.494 60.539 -19.444 63.239 -14.754 63.239 Z"/>
                <path fill="#FBBC05" d="M -21.484 53.529 C -21.734 52.809 -21.864 52.039 -21.864 51.239 C -21.864 50.439 -21.724 49.669 -21.484 48.949 L -21.484 45.859 L -25.464 45.859 C -26.284 47.479 -26.754 49.299 -26.754 51.239 C -26.754 53.179 -26.284 54.999 -25.464 56.619 L -21.484 53.529 Z"/>
                <path fill="#EA4335" d="M -14.754 43.989 C -12.984 43.989 -11.404 44.599 -10.154 45.789 L -6.734 42.369 C -8.804 40.429 -11.514 39.239 -14.754 39.239 C -19.444 39.239 -23.494 41.939 -25.464 45.859 L -21.484 48.949 C -20.534 46.099 -17.884 43.989 -14.754 43.989 Z"/>
              </g>
            </svg>
          ),
          bgClass: 'bg-white hover:bg-gray-100',
          textClass: 'text-gray-800'
        };
      case 'facebook':
        return {
          label: 'Facebook',
          icon: (
            <svg className="h-4 w-4 mr-2 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
              <path d="M9.19795 21.5H13.198V13.4901H16.8021L17.198 9.50977H13.198V7.5C13.198 6.94772 13.6457 6.5 14.198 6.5H17.198V2.5H14.198C11.4365 2.5 9.19795 4.73858 9.19795 7.5V9.50977H7.19795L6.80206 13.4901H9.19795V21.5Z" />
            </svg>
          ),
          bgClass: 'bg-white hover:bg-gray-100',
          textClass: 'text-gray-800'
        };
      case 'github':
        return {
          label: 'GitHub',
          icon: (
            <svg className="h-4 w-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z" />
            </svg>
          ),
          bgClass: 'bg-gray-800 hover:bg-gray-900',
          textClass: 'text-white'
        };
      case 'apple':
        return {
          label: 'Apple',
          icon: (
            <svg className="h-4 w-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M16.047 4.145c1.678-2.032 1.457-4.14 1.457-4.14s-2.047.187-3.765 2.257c-1.717 2.07-1.375 4.069-1.375 4.069s1.985-.155 3.683-2.186zm3.967 16.510c.24-.673.413-1.324.518-1.955a3.077 3.077 0 01-.828-.266c-1.198-.578-2.176-2.067-2.176-3.714 0-1.92 1.113-3.446 2.855-3.879-.244-.624-.565-1.216-.968-1.768-1.078-.14-2.02.57-2.692.57-.702 0-1.545-.532-2.557-.516-1.814.03-3.429 1.095-4.295 2.734-1.865 3.225-.477 7.951 1.307 10.556.899 1.277 1.944 2.697 3.307 2.649 1.335-.05 1.834-.845 3.446-.845 1.596 0 2.062.845 3.454.822 1.429-.032 2.334-1.271 3.19-2.559.67-.958 1.168-2.056 1.496-3.268-1.643-.63-2.625-2.355-2.654-4.507z" />
            </svg>
          ),
          bgClass: 'bg-black hover:bg-gray-900',
          textClass: 'text-white'
        };
      default:
        return {
          label: provider.charAt(0).toUpperCase() + provider.slice(1),
          icon: null,
          bgClass: 'bg-gray-200 hover:bg-gray-300',
          textClass: 'text-gray-800'
        };
    }
  };

  const { label, icon, bgClass, textClass } = getProviderDetails(provider);

  return (
    <Button
      variant="outline"
      onClick={onClick}
      disabled={disabled}
      type="button"
      className={`w-full flex items-center justify-center ${bgClass} ${textClass} border transition-all duration-200`}
    >
      {icon}
      <span>{label}</span>
    </Button>
  );
};

export default SocialLoginButton;
