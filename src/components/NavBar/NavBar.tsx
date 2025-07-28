import Image from "next/image";
import React from "react";
import { Poppins } from "next/font/google";
import { navElements, navElements1 } from "../../../data";
import Link from "next/link";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"]
});

function NavBar() {
  return (
    <nav className={poppins.className}>
      <header className="flex items-center px-[16px] py-[16px] tracking-[-1%] fixed z-10 bg-white w-[100%]">
        <div className="flex items-center gap-4 flex-1">
          <div>
            <Link href="/">
              <Image
                src="/svg/logo.svg"
                alt="site-logo"
                width={50}
                height={50}
                className="cursor-pointer"
              />
            </Link>
          </div>
          <label className="flex gap-1 items-center bg-[#F0F2F5] py-[2px] cursor-pointer">
            <Image
              src="/svg/search.svg"
              alt="site-logo"
              width={25}
              height={25}
              className="pl-2"
            />
            <input
              type="text"
              placeholder="Search"
              className="border-none outline-none placeholder-text-16 py-[10px] px-[6px]"
            />
          </label>
        </div>
        <div className="flex items-center ">
          <ul className="flex items-center gap-4 ">
            {navElements.map((element, index) => (
              <li
                key={index}
                className="flex items-center flex-col gap-2 mb-2 cursor-pointer">
                <Image
                  src={element.icon}
                  alt={`${element.title}-icon`}
                  width={17}
                  height={17}
                />
                <span className="text-[13px] font-medium leading-6 text-[#647995]">
                  {element.title}
                </span>
              </li>
            ))}
          </ul>

          <div className="h-12 bg-[#98A2B3] w-[1px] mx-4"></div>

          <div className="flex items-center gap-4">
            <ul className="flex items-center gap-4">
              <li className="text-[#F0F2F5] bg-[#0D6EFD] px-[16px] py-[8px] text-[11px] rounded-[4px] cursor-pointer">
                Subscribe
              </li>
              {navElements1.map((element, index) => (
                <li
                  key={index}
                  className="flex items-center flex-col gap-2 mb-2 cursor-pointer">
                  <Image
                    src={element.icon}
                    alt={`${element.title}-icon`}
                    width={17}
                    height={17}
                  />
                  <span className="text-[13px] font-medium leading-6 text-[#647995]">
                    {element.title}
                  </span>
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-2">
              <Image
                src="/svg/Ellipse 775.svg"
                alt="user-avatar"
                width={25}
                height={25}
                className="rounded-full cursor-pointer"
              />
              <Image
                src="/svg/CaretDown.svg"
                alt="user-avatar"
                width={13}
                height={13}
                className="cursor-pointer"
              />
            </div>
          </div>
        </div>
      </header>
    </nav>
  );
}

export default NavBar;
