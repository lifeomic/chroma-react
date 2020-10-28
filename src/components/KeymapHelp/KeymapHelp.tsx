import * as React from 'react';
import { GlobalHotKeys } from 'react-hotkeys';
import { makeStyles } from '../../styles';
import { GetClasses } from '../../typeUtils';
import { Button } from '../Button';
import { Chip } from '../Chip';
import { Modal } from '../Modal';

const KEY_MAP = {
  SHOW_KEYMAP_HELP: 'shift+?',
};

const BASE_KEY_MAP_DOCS: KeyBindingDoc[] = [
  {
    sequences: ['shift+?'],
    description: 'Show keyboard shortcuts',
  },
  {
    sequences: ['['],
    description: 'Toggle sidebar',
  },
];

export const KeymapHelpStylesKey = 'ChromaKeymapHelp';

export const useStyles = makeStyles(
  (theme) => ({
    root: {},
    sequence: {
      paddingLeft: theme.spacing(3.75),
    },
  }),
  { name: KeymapHelpStylesKey }
);

export interface KeyBindingDoc {
  sequences: string[];
  description: string;
}

export type KeymapHelpClasses = GetClasses<typeof useStyles>;

export interface KeymapHelpProps {
  /**
   * Additional key map docs to display. We can't use getApplicationKeyMap()
   * because of https://github.com/greena13/react-hotkeys/issues/228
   */
  keyMapDocs?: KeyBindingDoc[];
  closeButtonText?: string;
}

export const KeymapHelp: React.FC<KeymapHelpProps> = ({
  closeButtonText,
  keyMapDocs,
}) => {
  const classes = useStyles({});
  const [isOpen, setIsOpen] = React.useState(false);
  const onClose = () => {
    setIsOpen(false);
  };

  const HANDLERS = {
    SHOW_KEYMAP_HELP: () => setIsOpen(true),
  };

  const docs = [...BASE_KEY_MAP_DOCS];
  if (keyMapDocs) {
    keyMapDocs.forEach((x) => docs.push(x));
  }

  return (
    <>
      <GlobalHotKeys keyMap={KEY_MAP} handlers={HANDLERS}>
        <span />
      </GlobalHotKeys>
      <Modal
        isOpen={isOpen}
        title="Keyboard shortcuts"
        onDismiss={onClose}
        actions={
          <Button variant="contained" onClick={onClose}>
            {closeButtonText || 'Close'}
          </Button>
        }
      >
        <>
          <table>
            <tbody>
              {docs.map(({ sequences, description }) => {
                const name = sequences.join('|');
                return (
                  <tr key={name}>
                    <td>{description}</td>
                    <td className={classes.sequence}>
                      {sequences.map((sequence) => (
                        <Chip key={sequence} label={sequence} />
                      ))}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </>
      </Modal>
    </>
  );
};
