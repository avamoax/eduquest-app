import React from 'react';

export interface AvatarProps {
  src?: string;
  alt?: string;
  name?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

const Avatar: React.FC<AvatarProps> = ({
  src,
  alt,
  name,
  size = 'md',
  className = '',
}) => {
  const sizes = {
    sm: 'w-8 h-8 text-xs',
    md: 'w-12 h-12 text-sm',
    lg: 'w-16 h-16 text-base',
    xl: 'w-24 h-24 text-xl',
  };

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  const getBackgroundColor = (name: string) => {
    const colors = [
      'bg-primary',
      'bg-secondary',
      'bg-accent',
      'bg-success',
      'bg-premium',
    ];
    const index = name.charCodeAt(0) % colors.length;
    return colors[index];
  };

  return (
    <div
      className={`
        ${sizes[size]}
        rounded-full flex items-center justify-center
        ${src ? 'bg-gray-200' : `${getBackgroundColor(name || 'User')} text-white`}
        overflow-hidden ${className}
      `}
    >
      {src ? (
        <img src={src} alt={alt || name} className="w-full h-full object-cover" />
      ) : (
        <span className="font-semibold">
          {name ? getInitials(name) : 'U'}
        </span>
      )}
    </div>
  );
};

export default Avatar;

