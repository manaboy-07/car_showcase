import { MouseEventHandler } from "react";

export interface CustomButtonProps {
  title: string;
  btnType?: "button" | "submit";
  containerStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  textStyles?: string;
  rightIcon?: string;
  isDisabled?: boolean;
}

export interface SearchManufaturerProps {
  manufacturer: string;
  setManufacturer: (manufacturer: string) => void;
}

export interface HomeProps {
  searchParams: FilterProps;
}
export interface CarProps {
  //check out api docs
  city_mpg: number;
  class: string;
  combination_mpg: number;
  cylinders: number;
  displacement: number;
  drive: string;
  fuel_type: string;
  highway_mpg: number;
  make: string;
  model: string;
  transmission: string;
  year: number;
}
export interface FilterProps {
  manufacturer: string;
  year: string | number;
  fuel: string;
  limit: string | number;
  model: string;
}

export interface OptionProps {
  title: string;
  value: string;
}
export interface CustomFilterProps {
  title: string;
  options: OptionProps[]; //it will have an array of title and value pairs
}
