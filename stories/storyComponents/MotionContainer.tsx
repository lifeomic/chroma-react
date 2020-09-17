import * as React from 'react';

interface MotionContainerProps {
  actions?: React.ReactNode;
}

export const MotionContainer: React.FC<MotionContainerProps> = ({
  actions,
  children,
}) => (
  <div
    style={{
      display: 'grid',
      gridTemplateAreas: 'actions content',
      gridTemplateColumns: 'max-content 1fr',
      gridTemplateRows: '100% 1fr',
      padding: '1rem',
      background: 'white',
    }}
  >
    <div>{actions}</div>
    <div style={{ padding: '2rem' }}>{children}</div>
  </div>
);
