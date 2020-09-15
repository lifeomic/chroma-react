import { select } from '@storybook/addon-knobs';
import colorOptions from '../../../src/components/Box/colorOptions';

interface ColorOptions {
  [key: string]: string;
}

const options = colorOptions.reduce(
  (acc: ColorOptions, colorOption: string) => {
    acc[colorOption] = colorOption;
    return acc;
  },
  {}
);

export default (name: string, groupId: string, defaultOption?: string) =>
  select(name, { undefined: undefined, ...options }, defaultOption, groupId);
