import React from 'react';
import { LucideIcon } from 'lucide-react';
import { Card } from './Card';

export interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  iconColor?: string;
  className?: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
  icon: Icon,
  title,
  description,
  iconColor = 'text-primary-600 dark:text-primary-400',
  className = ''
}) => {
  return (
    <Card variant="feature" className={className}>
      <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-6 transition-transform duration-200 group-hover:scale-110 bg-primary-100 dark:bg-primary-900/30 ${iconColor}`}>
        <Icon className="w-6 h-6" />
      </div>
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
        {title}
      </h3>
      <p className="text-gray-600 dark:text-gray-300">
        {description}
      </p>
    </Card>
  );
};
