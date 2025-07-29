export function getElement(selector: string, parent: Document | Element = document): HTMLElement {
  const el = parent.querySelector<HTMLElement>(selector);
  if (!el) throw new Error(`Element not found: ${selector}`);
  return el;
}