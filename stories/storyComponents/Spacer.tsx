import * as React from 'react';

export const Spacer: React.FC<any> = ({ children, ...rootProps }) => {
  const stackItems = React.Children.toArray(children);
  return (
    <div {...rootProps}>
      {stackItems &&
        stackItems.map((child, i) => (
          <div key={i} style={{ marginBottom: '1rem' }}>
            {child}
          </div>
        ))}
    </div>
  );
};
