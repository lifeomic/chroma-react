const zIndex = {
  byValueUpTo20: {} as { [key: number]: number },
  dayPicker: 99999,
  header: 1100,
  menu: 40,
  modal: 1200,
  popover: 40,
  select: 1300,
  slideOver: 100,
  snackbar: 1500,
  tooltip: 1300,
};

// populate byValueUpToX
const populateByValueUpToX = (object: { [key: number]: number }, x: number) => {
  for (let i = 0; i <= x; i++) {
    object[i] = i;
  }
};

populateByValueUpToX(zIndex.byValueUpTo20, 20);

export default zIndex;
