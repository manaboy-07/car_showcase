"use client";
import { CarProps } from "@/types";
import { useState } from "react";
import Image from "next/image";
import { CustomButton } from "./CustomButton";
import { calculateCarRent } from "@/utils";
import CardDetails from "./CardDetails";
interface CarCardProps {
  car: CarProps;
}
//makes sense actually each car has the carProps object
const CarCard = ({ car }: CarCardProps) => {
  const { city_mpg, drive, year, make, model, transmission } = car;
  const carRent = calculateCarRent(city_mpg, year);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="car-card group">
      <div className="car-card_content">
        <h2 className="car-card_content-title">
          {make} {model}
        </h2>
      </div>
      <p className="flex mt-6 text-[32px] font-extrabold">
        <span className="self-start text-[14px] font-semibold">$</span>
        {carRent}
        <span className="self-end font-medium text-[14px] ">/day</span>
      </p>

      <div className="relative w-full h-40 my-3 object-contain">
        <Image src={"/hero.png"} alt="car" priority width={50} height={50} />
      </div>

      <div className="relative flex w-full mt-2">
        {/* research on the group-hover:invisible */}
        <div className="flex group-hover:invisible w-full justify-between text-gray">
          <div className="flex flex-col justify-center items-center gap-2">
            <Image
              src={"/steering-wheel.svg"}
              width={20}
              height={20}
              alt="steering wheel"
            />
            <p className="text-[14px]">
              {transmission === "a" ? "Automatic" : "Manual"}
            </p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <Image src={"/tire.svg"} width={20} height={20} alt="tire" />
            <p className="text-[14px]">{drive.toUpperCase()}</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <Image src={"/gas.svg"} width={20} height={20} alt="gas wheel" />
            <p className="text-[14px]">{city_mpg} MPG</p>
          </div>
        </div>

        <div className="car-card__btn-container">
          <CustomButton
            title="View More"
            containerStyles="w-full py-[16px] rounded-full bg-primary-blue"
            textStyles="text-white text-[14px] leading-[17px] font-bold"
            rightIcon="/right-arrow.svg"
            handleClick={() => setIsOpen(true)}
          />
        </div>
      </div>
      <CardDetails
        isOpen={isOpen}
        closeModal={() => setIsOpen(false)}
        car={car}
      />
    </div>
  );
};

export default CarCard;
