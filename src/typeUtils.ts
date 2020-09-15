// eslint-disable-next-line no-restricted-imports
export { Omit } from '@material-ui/core';

export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends Array<infer U>
    ? Array<DeepPartial<U>>
    : T[P] extends ReadonlyArray<infer U>
    ? ReadonlyArray<DeepPartial<U>>
    : DeepPartial<T[P]>;
};

export type GetClasses<T extends (...args: any) => any> = keyof ReturnType<T>;

export type ClassOverrides<ClassKey extends string> = {
  classes?: { [K in ClassKey]?: string };
};

export type StandardProps<
  C,
  ClassKey extends string,
  AcceptsRef = true
> = React.DetailedHTMLProps<React.HTMLAttributes<C>, C> &
  ClassOverrides<ClassKey> & {
    ref?: AcceptsRef extends true
      ? C extends { ref?: infer RefType }
        ? RefType
        : React.Ref<C>
      : never;
  };
