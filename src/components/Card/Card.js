import React from "react";
import styles from "./card.module.scss";

// References: ChatGPT & Cursor
const Card = ({
  children,
  variant = "standard",
  className = "",
  style, // <--- THÊM: Để nhận inline style
  ...props // <--- THÊM: Để nhận các props khác (onClick, id, data-*,...)
}) => {
  const baseStyles = styles.card;
  const variantStyles = {
    standard: styles.standard,
    outlined: styles.outlined,
  };

  return (
    <div
      className={`${baseStyles} ${variantStyles[variant] || ""} ${className}`}
      style={style} // <--- Áp dụng style truyền vào
      {...props} // <--- Áp dụng các props còn lại
    >
      {children}
    </div>
  );
};

export default Card;
