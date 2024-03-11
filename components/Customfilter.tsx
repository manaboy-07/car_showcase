"use client";
import { Fragment, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Listbox, Transition } from "@headlessui/react";
import { CustomFilterProps } from "@/types";
import { Router } from "next/router";
import { updateSearchParams } from "@/utils";

function Customfilter({ title, options }: CustomFilterProps) {
  const [selected, setSelected] = useState(options[0]);

  const router = useRouter();
  //now update the params SSR
  const handleUpdatedParams = (e: { title: string; value: string }) => {
    const newPathname = updateSearchParams(title, e.value.toLowerCase());

    router.push(newPathname); //tigger ssr

    //get the current path
  };
  return (
    <div className="w-fi">
      <Listbox
        value={selected}
        onChange={(e) => {
          setSelected(e);
          handleUpdatedParams(e);
        }}
      >
        <div className="relative z-10 w-fit">
          <Listbox.Button className="custom-filter__btn">
            <span className="block truncate">{selected.title}</span>
            <Image
              src={"/chevron-up-down.svg"}
              width={20}
              height={20}
              alt="chevron up down"
            />
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="custom-filter__options">
              {options.map((option) => (
                <Listbox.Option
                  key={option.title}
                  value={option}
                  className={({ active }) =>
                    `relative cursour-default select-none py-2 px-4 ${
                      active ? "bg-primary-blue text-white" : "text-gray-900"
                    }`
                  }
                >
                  {/* we were able to pass a function to get an active state beacuse of headless ui */}
                  {(
                    { selected } //get the one that is selected
                  ) => (
                    <span
                      className={`block truncate ${
                        selected ? "font-medium" : "font-normal"
                      }`}
                    >
                      {option.title}
                    </span>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
}
export default Customfilter;
