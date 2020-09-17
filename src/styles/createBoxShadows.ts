export interface BoxShadows {
  table: string;
  header: string;
  elevatedContent: string;
  popover: string;
  tooltip: string;
  focusVisible: string;
  focusVisibleInverse: string;
}

export type BoxShadowsOptions = Partial<BoxShadows>;

export const baseBoxShadows: BoxShadows = {
  table: '0px 2px 8px rgba(0, 0, 0, 0.13)',
  header: '0px 0px 24px rgba(0, 0, 0, 0.15)',
  elevatedContent: '0px 10px 64px rgba(0, 0, 0, 0.15)',
  popover: '0px 10px 64px rgba(0, 0, 0, 0.2)',
  tooltip: '0px 0px 24px rgba(0, 0, 0, 0.15)',
  focusVisible: '0 0 0 2px rgba(0, 150, 225, .3)',
  focusVisibleInverse: '0 0 0 2px rgba(255, 255, 255, .3)',
};

export const createBoxShadows = (
  shadows: BoxShadowsOptions = {}
): BoxShadows => ({
  ...baseBoxShadows,
  ...shadows,
});
