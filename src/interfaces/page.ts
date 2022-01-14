export interface IPage {
  name: string;
}

export interface Address {
  street: string,
  number: number,
  zip: number,
}

export interface User {
  name: string,
  age: number,
  country: string,
  address: Address
}