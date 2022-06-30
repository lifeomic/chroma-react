import { hexToRgb } from '@material-ui/core';

export function hexToRgba(hex: string, opacity: number): string {
  const rgb = hexToRgb(hex);
  let rgba = '';
  if (rgb.length) {
    const rgbStart = rgb.slice(0, rgb.length - 1);
    const rgbEnd = rgb.slice(-1);
    let opacityStr = `${opacity}`;
    if (opacity > 1) {
      opacityStr = `${opacity}%`;
    }
    rgba = rgbStart + `, ${opacityStr}` + rgbEnd;
    console.log(rgba);
  }
  return rgba;
}
