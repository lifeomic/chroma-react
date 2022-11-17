import { ZIndex as MUIZIndex } from '@mui/material/styles';

export interface ZIndex extends MUIZIndex {
  byValueUpTo20: { [key: number]: number };
  dayPicker: number;
  header: number;
  menu: number;
  popover: number;
  select: number;
  slideOver: number;
}

export type ZIndexOptions = Partial<ZIndex>;

export const baseZIndex: ZIndex = {
  mobileStepper: 1000,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500,
  byValueUpTo20: {} as { [key: number]: number },
  dayPicker: 99999,
  header: 1100,
  menu: 40,
  popover: 40,
  select: 1350, // must be > MUI modal zIndex (1300), will be < MUI snackbar (1400) and tooltip (1500)
  slideOver: 100,
};

// populate byValueUpToX
const populateByValueUpToX = (object: { [key: number]: number }, x: number) => {
  for (let i = 0; i <= x; i++) {
    object[i] = i;
  }
};

populateByValueUpToX(baseZIndex.byValueUpTo20, 20);

export const createZIndex = (zIndex: ZIndexOptions = {}): ZIndex => ({
  ...baseZIndex,
  ...zIndex,
});
