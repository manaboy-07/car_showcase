"use client";
import { CustomButtonProps } from "@/types";
import Image from "next/image";
export const CustomButton = ({
  title,
  containerStyles,
  btnType,
  textStyles,
  rightIcon,
  isDisabled,
  handleClick,
}: CustomButtonProps) => {
  return (
    <button
      disabled={false}
      type={btnType || "button"}
      className={`custom-btn ${containerStyles}`}
      onClick={handleClick}
    >
      <span className={`flex-1 ${textStyles}`}>{title}</span>

      {rightIcon && (
        <div className="relative w-6 h-6">
          <Image
            alt="right icon"
            src={rightIcon}
            fill
            className="object-contain"
          />
        </div>
      )}
    </button>
  );
};
