import { ReactNode } from "react";

export interface Iemployment {
  title: string;
  keySkill: string;
}

export interface IcreditCard {
  ccNumber: string;
}

export interface Isubscription {
  plan: string;
  status: string;
  paymentMethod: string;
  term: string;
}

export interface Iaddress {
  city: string;
  streetName: string;
  streetAddress: string;
  zipCode: string;
  state: string;
  country: string;
  coordinates: {
    lat: number;
    lng: number;
  };
}

export interface IrandomDataPayload {
  id: number;
  uid: string;
  password: string;
  first_name: string;
  last_name: string;
  userName: string;
  email: string;
  avatar: string;
  gender: string;
  phone_number: string;
  social_insurance_number: string;
  date_of_birth: string;
  employment: Iemployment;
  address: Iaddress;
  credit_card: IcreditCard;
  subscription: Isubscription;
}

export type ChildrenProps = {
  children: ReactNode;
};
