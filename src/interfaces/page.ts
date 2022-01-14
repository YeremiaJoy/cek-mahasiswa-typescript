export interface IPage {
  name: string;
}

export interface Univ {
  id: string
}

export interface Major {
  id: string,
}

export interface Detail {
  nim: string,
  university: Univ,
  prodi: Major,
  ipk: string,
  sks: number,
  smst: number,
  in: string
}

export interface Mahasiswa {
  name: string,
  gender: string,
  wn: string,
  terdaftar: Detail
}