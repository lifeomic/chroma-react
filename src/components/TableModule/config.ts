const configBasic = [
  {
    header: {
      label: 'Description',
    },
    cell: {
      content: (dataValue: any) => {
        return dataValue.description;
      },
    },
    isSticky: false, // can be omitted if false
  },
  {
    header: {
      label: 'Calories',
    },
    cell: {
      content: (dataValue: any) => {
        return dataValue.calories;
      },
    },
    isSticky: false,
  },
  {
    header: {
      label: 'Fat',
    },
    cell: {
      content: (dataValue: any) => {
        return dataValue.fat;
      },
    },
    isSticky: false,
  },
  {
    header: {
      label: 'Carbs',
    },
    cell: {
      content: (dataValue: any) => {
        return dataValue.carbs;
      },
    },
    isSticky: false,
  },
  {
    header: {
      label: 'Category',
    },
    cell: {
      content: (dataValue: any) => {
        return dataValue.category;
      },
    },
    isSticky: false,
  },
];

const configSticky = configBasic.map((item, index) => {
  if (index < 2) {
    return { ...item, isSticky: true };
  }
  return { ...item };
});

// double the items in configSticky so it is wide enough to scroll horizontally on most screens, so the sticky columns can be easily demoed
configSticky.forEach((_item) => {
  configSticky.push({
    header: {
      label: 'Lorem Ipsum',
    },
    cell: {
      content: (dataValue: any) => {
        return dataValue.misc;
      },
    },
    isSticky: false,
  });
});

const configWrapped = configBasic.map((item, index) => {
  if (item.header.label === 'Calories') {
    return {
      ...item,
      cell: {
        content: (dataValue: any) => {
          if (dataValue.description === 'Frozen yoghurt') {
            return 'Vanilla: 250\nStrawberry: 175\nPlain: 80\n\nYogurt is known to provide probiotics through naturally included bacterial cultures. Beware of increaing your sugar intake though.\n\nNon-dairy options exist for those with lactose intolerance.';
          }
          return dataValue.calories;
        },
      },
    };
  }
  return { ...item };
});

export { configBasic, configSticky, configWrapped };
