import { BasesClient } from '@datasketch/bases-client'
export const removeAccents = (str: string) =>
  str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

export const numberFormat = (x: number) =>
  new Intl.NumberFormat("es-CO").format(x);


export const client = new BasesClient({
  org:"fundacion-saldarriaga-concha",
  db:"datos-plateados",
  token: process.env.ORGANIZATION_TOKEN ??''
})