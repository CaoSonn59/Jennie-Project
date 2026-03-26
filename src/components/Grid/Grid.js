import React from 'react';
import styles from './grid.module.scss';

// References: ChatGPT & Cursor
const Grid = ({
  children,
  container = false,
  item = false,
  size,
  xs,
  sm,
  md,
  lg,
  xl,
  offset,
  spacing,
  rowSpacing,
  columnSpacing,
  direction,
  alignItems,
  justifyContent,
  columns,
  className = '',
  ...props
}) => {
  const gridClasses = [styles.grid];

  if (container) {
    gridClasses.push(styles.container);
  }

  if (item) {
    gridClasses.push(styles.item);
  }

  // Size classes
  if (size) {
    if (typeof size === 'number') {
      gridClasses.push(styles[`size${size}`]);
    } else if (typeof size === 'object') {
      if (size.xs) {
        if (size.xs === 'grow') {
          gridClasses.push(styles.grow);
        } else {
          gridClasses.push(styles[`xs${size.xs}`]);
        }
      }
      if (size.sm) {
        if (size.sm === 'grow') {
          gridClasses.push(styles.grow);
        } else {
          gridClasses.push(styles[`sm${size.sm}`]);
        }
      }
      if (size.md) {
        if (size.md === 'grow') {
          gridClasses.push(styles.grow);
        } else if (typeof size.md === 'number' && size.md % 1 !== 0) {
          // Handle decimal values - create class name with dot replaced
          const decimalClass = `md${size.md.toString().replace('.', '\\.')}`;
          if (styles[decimalClass]) {
            gridClasses.push(styles[decimalClass]);
          }
        } else {
          gridClasses.push(styles[`md${size.md}`]);
        }
      }
      if (size.lg) {
        if (size.lg === 'grow') {
          gridClasses.push(styles.grow);
        } else {
          gridClasses.push(styles[`lg${size.lg}`]);
        }
      }
      if (size.xl) {
        if (size.xl === 'grow') {
          gridClasses.push(styles.grow);
        } else {
          gridClasses.push(styles[`xl${size.xl}`]);
        }
      }
    } else if (size === 'grow') {
      gridClasses.push(styles.grow);
    }
  }

  // Individual breakpoint sizes
  if (xs) gridClasses.push(styles[`xs${xs}`]);
  if (sm) gridClasses.push(styles[`sm${sm}`]);
  if (md) gridClasses.push(styles[`md${md}`]);
  if (lg) gridClasses.push(styles[`lg${lg}`]);
  if (xl) gridClasses.push(styles[`xl${xl}`]);

  // Offset classes
  if (offset) {
    if (typeof offset === 'number') {
      gridClasses.push(styles[`offset${offset}`]);
    } else if (typeof offset === 'object') {
      if (offset.xs) gridClasses.push(styles[`offsetXs${offset.xs}`]);
      if (offset.sm) gridClasses.push(styles[`offsetSm${offset.sm}`]);
      if (offset.md) gridClasses.push(styles[`offsetMd${offset.md}`]);
      if (offset.lg) gridClasses.push(styles[`offsetLg${offset.lg}`]);
      if (offset.xl) gridClasses.push(styles[`offsetXl${offset.xl}`]);
    }
  }

  // Direction classes
  if (direction) {
    const directionClasses = {
      row: styles.directionRow,
      'row-reverse': styles.directionRowReverse,
      column: styles.directionColumn,
      'column-reverse': styles.directionColumnReverse
    };
    if (directionClasses[direction]) {
      gridClasses.push(directionClasses[direction]);
    }
  }

  // Align items classes
  if (alignItems) {
    const alignItemsClasses = {
      'flex-start': styles.alignItemsFlexStart,
      center: styles.alignItemsCenter,
      'flex-end': styles.alignItemsFlexEnd,
      stretch: styles.alignItemsStretch,
      baseline: styles.alignItemsBaseline
    };
    if (alignItemsClasses[alignItems]) {
      gridClasses.push(alignItemsClasses[alignItems]);
    }
  }

  // Justify content classes
  if (justifyContent) {
    const justifyContentClasses = {
      'flex-start': styles.justifyContentFlexStart,
      center: styles.justifyContentCenter,
      'flex-end': styles.justifyContentFlexEnd,
      'space-between': styles.justifyContentSpaceBetween,
      'space-around': styles.justifyContentSpaceAround,
      'space-evenly': styles.justifyContentSpaceEvenly
    };
    if (justifyContentClasses[justifyContent]) {
      gridClasses.push(justifyContentClasses[justifyContent]);
    }
  }

  const gridStyle = {
    ...props.style
  };

  // Handle decimal sizes for items using inline styles
  // Note: Inline styles don't support media queries, so we apply md value as default
  // and let CSS classes handle xs breakpoint
  if (item && size) {
    if (typeof size === 'object') {
      // For decimal md values, apply as default (will work on desktop)
      if (size.md && typeof size.md === 'number' && size.md % 1 !== 0) {
        // Only apply if xs is not a decimal or doesn't exist
        // CSS classes will handle xs breakpoint
        gridStyle.flexBasis = `${(size.md / 12) * 100}%`;
        gridStyle.maxWidth = `${(size.md / 12) * 100}%`;
        gridStyle.width = `${(size.md / 12) * 100}%`;
      }
      // Handle xs if it's decimal (applies to mobile)
      if (size.xs && typeof size.xs === 'number' && size.xs % 1 !== 0) {
        // Apply xs value, will be overridden by md on larger screens via CSS
        gridStyle.flexBasis = `${(size.xs / 12) * 100}%`;
        gridStyle.maxWidth = `${(size.xs / 12) * 100}%`;
        gridStyle.width = `${(size.xs / 12) * 100}%`;
      }
    } else if (typeof size === 'number' && size % 1 !== 0) {
      // Handle decimal number directly
      gridStyle.flexBasis = `${(size / 12) * 100}%`;
      gridStyle.maxWidth = `${(size / 12) * 100}%`;
      gridStyle.width = `${(size / 12) * 100}%`;
    }
  }

  // Handle spacing for container
  if (container && spacing) {
    const spacingValue = typeof spacing === 'number' ? spacing * 8 : spacing;
    gridStyle.gap = spacingValue;
    gridStyle['--grid-gap'] = `${spacingValue}px`;
  }

  // Handle row and column spacing
  if (container && rowSpacing) {
    const rowSpacingValue = typeof rowSpacing === 'number' ? rowSpacing * 8 : rowSpacing;
    gridStyle.rowGap = rowSpacingValue;
  }

  if (container && columnSpacing) {
    const columnSpacingValue = typeof columnSpacing === 'number' ? columnSpacing * 8 : columnSpacing;
    gridStyle.columnGap = columnSpacingValue;
  }

  // Handle columns
  if (container && columns) {
    gridStyle.gridTemplateColumns = `repeat(${columns}, 1fr)`;
  }

  return (
    <div className={`${gridClasses.join(' ')} ${className}`} style={gridStyle} {...props}>
      {children}
    </div>
  );
};

export default Grid;

