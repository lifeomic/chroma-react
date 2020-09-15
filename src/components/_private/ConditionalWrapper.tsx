export interface ConditionalWrapperProps {
  condition: boolean;
  wrapper: any;
  children: React.ReactNode;
}

export const ConditionalWrapper: React.FC<ConditionalWrapperProps> = ({
  condition,
  wrapper,
  children,
}) => (condition ? wrapper(children) : children);
