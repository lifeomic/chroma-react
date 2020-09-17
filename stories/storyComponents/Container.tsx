import * as React from 'react';
import { createPalette } from '../../src/styles';

interface ContainerProps {
  children: React.ReactNode;
  containerStyles?: React.CSSProperties;
  theme?: 'light' | 'dark';
}

const palette = createPalette();

export const Container: React.FunctionComponent<ContainerProps> = ({
  children,
  containerStyles,
  theme,
}) => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      padding: '1rem',
      backgroundColor: theme === 'light' ? palette.common.white : undefined,
      ...containerStyles,
    }}
  >
    {children}
  </div>
);
