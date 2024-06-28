export const removeAccents = (str: string) =>
  str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

export const numberFormat = (x: number) =>
  new Intl.NumberFormat("es-CO").format(x);
