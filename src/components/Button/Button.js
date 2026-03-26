import React from 'react';
import styles from './button.module.scss';

//References: ChatGPT & Cursor
const Button = ({
  children,
  variant = 'text',
  color = 'primary',
  size = 'medium',
  disabled = false,
  disableElevation = false,
  href,
  onClick,
  className = '',
  ...props
}) => {
  const buttonClasses = [styles.button];
  
  // Variant classes
  const variantClasses = {
    text: styles.text,
    contained: styles.contained,
    outlined: styles.outlined
  };
  if (variantClasses[variant]) {
    buttonClasses.push(variantClasses[variant]);
  }
  
  // Color classes
  const colorClasses = {
    primary: styles.colorPrimary,
    secondary: styles.colorSecondary,
    success: styles.colorSuccess,
    error: styles.colorError,
    warning: styles.colorWarning,
    info: styles.colorInfo
  };
  if (colorClasses[color]) {
    buttonClasses.push(colorClasses[color]);
  }
  
  // Size classes
  const sizeClasses = {
    small: styles.sizeSmall,
    medium: styles.sizeMedium,
    large: styles.sizeLarge
  };
  if (sizeClasses[size]) {
    buttonClasses.push(sizeClasses[size]);
  }
  
  // Disabled state
  if (disabled) {
    buttonClasses.push(styles.disabled);
  }
  
  // Disable elevation
  if (disableElevation && variant === 'contained') {
    buttonClasses.push(styles.disableElevation);
  }
  
  const finalClassName = `${buttonClasses.join(' ')} ${className}`.trim();
  
  // If href is provided, render as anchor tag
  if (href && !disabled) {
    return (
      <a
        href={href}
        className={finalClassName}
        onClick={onClick}
        {...props}
      >
        {children}
      </a>
    );
  }
  
  // Otherwise render as button
  return (
    <button
      type="button"
      className={finalClassName}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;

