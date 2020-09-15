import { select } from '@storybook/addon-knobs';

const options = {
  undefined: undefined,
  '{0.25}': 0.25,
  '{0.5}': 0.5,
  '{1}': 1,
  '{2}': 2,
  '{3}': 3,
  '{5}': 5,
  '{7}': 7,
  '{10}': 10,
  '{15}': 15,
  '{25}': 25,
  '{40}': 40,
  '"1px"': '1px',
  '"2px"': '2px',
  '"3px"': '3px',
  '"5px"': '5px',
  '"7px"': '7px',
  '"50px"': '50px',
  '"100px"': '100px',
  '"25%"': '25%',
  '"50%"': '50%',
  '"75%"': '75%',
  '"auto"': 'auto',
};

export default (
  name: string,
  groupId: string,
  defaultOption?: string | number
) => select(name, options, defaultOption, groupId);
