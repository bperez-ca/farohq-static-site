import React from 'react';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'hover' | 'feature' | 'stats';
  children: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({
  variant = 'default',
  className = '',
  children,
  ...props
}) => {
  const baseClasses = 'rounded-2xl border border-gray-200 bg-white shadow-soft dark:border-gray-700 dark:bg-gray-900';
  
  const variantClasses = {
    default: '',
    hover: 'hover:shadow-medium transition-shadow duration-200',
    feature: 'hover:shadow-medium transition-shadow duration-200 p-8',
    stats: 'p-8 text-center'
  };

  return (
    <div
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};
