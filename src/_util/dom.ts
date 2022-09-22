export const contains = function (root: HTMLElement, ele: HTMLElement) {
  let node = ele;
  while (node) {
    if (node === root) {
      return true;
    }
    node = node.parentNode as HTMLElement;
  }
  return false;
};
