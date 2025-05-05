
import React from 'react';

export const Plant = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M15 8a5 5 0 0 0-9.7-1c-1.4 1.1-2.2 2.7-2.3 4.3-.1 2.3.9 4.7 2.5 6.5A3 3 0 0 0 8 21a3 3 0 0 0 4 0 3 3 0 0 0 2.5-3" />
    <path d="M10 17V5c0-1.7 1.3-3 3-3s3 1.3 3 3v12c0 1.7-1.3 3-3 3s-3-1.3-3-3z" />
    <path d="M13 14h1" />
    <path d="M13 10h1" />
    <path d="M13 6h1" />
    <path d="M13 2h1" />
  </svg>
);

export const Rainfall = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" />
    <path d="M8 19v1" />
    <path d="M8 14v1" />
    <path d="M16 19v1" />
    <path d="M16 14v1" />
    <path d="M12 21v1" />
    <path d="M12 16v1" />
  </svg>
);
