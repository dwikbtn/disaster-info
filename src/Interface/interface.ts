interface Data {
  tanggal: string;
  jam: string;
  coordinates: string;
  magnitude: string;
  kedalaman: string;
  wilayah: string;
  potensi: string;
  dirasakan: string;
  shakemap: string;
}

export interface Info {
  data: Data;
  message: null | string;
  succses: boolean;
}
