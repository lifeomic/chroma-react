export function hexToRgba(hex: string, opacity?: number): string {
  let rgba = '';
  if (isHex(hex)) {
    const hexArr = sliceHex(hex);
    const r = hexToDec(hexArr[0]);
    const g = hexToDec(hexArr[1]);
    const b = hexToDec(hexArr[2]);
    if (opacity) {
      const percent = opacity > 1 ? '%' : '';
      rgba = `rgba(${r},${g},${b},${opacity}${percent})`;
    } else {
      rgba = `rgba(${r},${g},${b},1)`;
    }
  } else {
    throw new Error('Invalid hex code');
  }
  return rgba;
}

export function hexToDec(hex: string): number {
  if (hex.length === 2) {
    return parseInt(hex[0], 16) * 16 + parseInt(hex[1], 16);
  } else {
    return parseInt(hex[0], 16) * 16 + parseInt(hex[0], 16);
  }
}

export function isHex(hex: string): boolean {
  return /^#([A-Fa-f0-9]{3}){1,2}$/.test(hex);
}

export function sliceHex(hex: string): Array<string> {
  const arr = [];
  hex = hex.slice(1); // remove #
  const l = hex.length;
  arr.push(hex.slice(0, l / 3));
  arr.push(hex.slice(l / 3, (l / 3) * 2));
  arr.push(hex.slice((l / 3) * 2, l));
  return arr;
}
