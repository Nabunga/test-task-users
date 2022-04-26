type AddressGeo = {
  lat: number;
  lng: number;
}

type UserAddress = {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: AddressGeo
}

type UserCompany = {
  name: string;
  catchPhrase: string;
  bs: string;
}

export interface IUsers {
  id: number;
  name: string;
  username: string;
  email: string;
  address: UserAddress;
  phone: string;
  website: string;
  company: UserCompany;
}