export const testIdProp = 'data-testid';

export const getTestProps = (id: string) => ({
  [testIdProp]: id,
});
