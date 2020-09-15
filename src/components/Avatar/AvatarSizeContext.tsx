import * as React from 'react';
import { AvatarProps } from './Avatar';

interface AvatarSizeValue {
  size?: AvatarProps['size'];
}

export const AvatarSizeContext = React.createContext<AvatarSizeValue>({
  size: 1,
});

export const useAvatarSize = () => React.useContext(AvatarSizeContext);
