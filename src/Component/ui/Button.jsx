// components/ui/Button.jsx
import "../../App.css"
import { Loader2 } from 'lucide-react';
import clsx from 'clsx';

const variants = {
  primary: 'bg-custom-gradient text-white hover:bg-blue-700',
  search: 'bg-custom-gradient text-white hover:bg-light-blue',
  danger: 'bg-red-600 text-white hover:bg-red-700',
};

const sizes = {
  sm: 'py-3 px-[40px] text-lg ',
  md: ' text-2xl font-inter font-normal leading-[130%] cursor-pointer',
  lg: 'px-5 py-3 text-lg',
};

export default function Button({
  children,
  onClick,
  variant = 'primary',
  size = 'md',
  isLoading = false,
  disabled = false,
  icon = null,
  className = '',
  ...props
}) {
  return (
    <button
    
      disabled={disabled || isLoading}
      onClick={onClick}
      className={clsx(
        'inline-flex items-center justify-center font-medium rounded-2xl transition duration-200',
        variants[variant],
        sizes[size],
        (disabled || isLoading) && 'opacity-60 cursor-not-allowed',
        className
      )}
      {...props}
    >
      {isLoading ? (
        <Loader2 className="w-5 h-5 animate-spin text-white" />
      ) : (
        <>
          {icon && <span className="mr-2">{icon}</span>}
          {children}
        </>
      )}
    </button>
  );
}
