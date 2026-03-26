import React from "react";
import styles from "./stack.module.scss";

// References: ChatGPT & Cursor
const Stack = ({
  children,
  direction = "column",
  spacing = 0,
  gap, // <--- THÊM MỚI: Để nhận trực tiếp giá trị gap (vd: 20, "20px")
  divider,
  alignItems,
  justifyContent,
  flexWrap,
  useFlexGap = true, // <--- SỬA: Đổi mặc định thành true để luôn dùng Flex Gap (hiện đại hơn)
  className = "",
  style, // <--- Lấy style ra để merge
  ...props
}) => {
  const directionClasses = {
    row: styles.directionRow,
    "row-reverse": styles.directionRowReverse,
    column: styles.directionColumn,
    "column-reverse": styles.directionColumnReverse,
  };

  const alignItemsClasses = {
    "flex-start": styles.alignItemsFlexStart,
    center: styles.alignItemsCenter,
    "flex-end": styles.alignItemsFlexEnd,
    stretch: styles.alignItemsStretch,
    baseline: styles.alignItemsBaseline,
  };

  const justifyContentClasses = {
    "flex-start": styles.justifyContentFlexStart,
    center: styles.justifyContentCenter,
    "flex-end": styles.justifyContentFlexEnd,
    "space-between": styles.justifyContentSpaceBetween,
    "space-around": styles.justifyContentSpaceAround,
    "space-evenly": styles.justifyContentSpaceEvenly,
  };

  const stackClasses = [
    styles.stack,
    directionClasses[direction] || "",
    alignItemsClasses[alignItems] || "",
    justifyContentClasses[justifyContent] || "",
    flexWrap && styles.flexWrap,
    // useFlexGap && styles.useFlexGap, // Bỏ class này nếu không cần thiết trong SCSS, hoặc giữ lại nếu SCSS cần
    className,
  ]
    .filter(Boolean)
    .join(" ");

  // LOGIC MỚI:
  // 1. Nếu có prop 'gap' truyền vào -> dùng luôn (ưu tiên số 1)
  // 2. Nếu không có 'gap', dùng 'spacing'. Nếu spacing là số -> nhân 8, nếu string -> giữ nguyên.
  let finalGap;
  if (gap !== undefined) {
    finalGap = typeof gap === "number" ? `${gap}px` : gap;
  } else {
    finalGap = typeof spacing === "number" ? `${spacing * 8}px` : spacing;
  }

  const stackStyle = {
    // Luôn áp dụng gap nếu có giá trị (vì Flex Gap hỗ trợ tốt hơn margin truyền thống)
    gap: finalGap,
    ...style, // Merge các style khác (như background, color) truyền từ bên ngoài vào
  };

  const childrenArray = React.Children.toArray(children);
  const childrenWithDividers = [];

  childrenArray.forEach((child, index) => {
    childrenWithDividers.push(child);
    if (divider && index < childrenArray.length - 1) {
      childrenWithDividers.push(
        <div key={`divider-${index}`} className={styles.divider}>
          {divider}
        </div>
      );
    }
  });

  return (
    <div className={stackClasses} style={stackStyle} {...props}>
      {divider ? childrenWithDividers : children}
    </div>
  );
};

export default Stack;
