import React from 'react';
import styles from './typography.module.scss';

// References: ChatGPT & Cursor & the CodeSandbox file from David’s session
const Typography = ({ 
  variant = 'body1', 
  children, 
  color = 'default',
  className = '',
  component,
  ...props
}) => {
  const variantClasses = {
    h1: styles.h1,
    h2: styles.h2,
    h3: styles.h3,
    h4: styles.h4,
    h5: styles.h5,
    h6: styles.h6,
    subtitle1: styles.subtitle1,
    subtitle2: styles.subtitle2,
    body1: styles.body1,
    body2: styles.body2,
    button: styles.button,
    caption: styles.caption,
    overline: styles.overline
  };
  
  const colorClasses = {
    default: '',
    success: styles.colorSuccess,
    error: styles.colorError
  };
  
  // Default tag mapping based on variant
  const defaultTagMapping = {
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    h4: 'h4',
    h5: 'h5',
    h6: 'h6',
    subtitle1: 'h6',
    subtitle2: 'h6',
    body1: 'p',
    body2: 'p',
    button: 'span',
    caption: 'span',
    overline: 'span'
  };
  
  const Tag = component || defaultTagMapping[variant] || 'p';
  const variantClass = variantClasses[variant] || styles.body1;
  const colorClass = colorClasses[color] || '';
  
  return (
    <Tag className={`${variantClass} ${colorClass} ${className}`} {...props}>
      {children}
    </Tag>
  );
};

export default Typography;

