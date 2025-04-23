export interface ICard {
  userId?: number;
  id?: number;
  title?: string;
  body?: string;
  userName?: string;
  cardTitleStyle?: string;
  cardBodyStyle?: string;
}

export interface IUserRoot {
  id?: number;
  name?: string;
  username?: string;
  email?: string;
  address?: IUserAddress;
  phone?: string;
  website?: string;
  company?: IUserCompany;
}

export interface IUserAddress {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: IUserGeo;
}

export interface IUserGeo {
  lat: string;
  lng: string;
}

export interface IUserCompany {
  name: string;
  catchPhrase: string;
  bs: string;
}

export interface IButtonData {
  path: string;
  btnName: string;
  btnStyle?: string;
}
