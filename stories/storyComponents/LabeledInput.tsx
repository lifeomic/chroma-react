import * as React from 'react';
import black from '../../src/colors/black';
import { spacing } from '../storyStyles';

interface LabeledInputProps {
  label?: string;
  value?: string;
  type?: string;
  onChange?: (e: any) => void;
}

export const LabeledInput: React.FC<LabeledInputProps> = ({
  label,
  value,
  type = 'number',
  onChange,
}) => {
  return (
    <div style={{ marginBottom: spacing[4] }}>
      <label
        htmlFor={label}
        style={{
          display: 'block',
          marginBottom: spacing[2],
          fontWeight: 'bold',
          color: black[700],
        }}
      >
        {label}
      </label>
      <input
        type={type}
        name={label}
        id={label}
        value={value}
        onInput={onChange}
        style={{
          appearance: 'none',
          borderRadius: '0.25rem',
          border: `1px solid ${black[100]}`,
          paddingTop: '0.5rem',
          paddingBottom: '0.5rem',
          paddingLeft: '0.75rem',
          paddingRight: '0.75rem',
          boxShadow: '0 1px 3px 0 rgba(0,0,0,.1), 0 1px 2px 0 rgba(0,0,0,.06)',
        }}
      />
    </div>
  );
};
