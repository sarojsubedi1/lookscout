import Image from "next/image";
import CompanyLogo from "../assets/icons/Company.svg";
import Menu from "../assets/icons/Button frame.svg";
import Down from "../assets/icons/down.svg";

export default function Navbar() {
  return (
    <div className="border-b-2 border-gray-200 flex justify-between items-center p-4 lg:py-5 lg:px-32">
      <div className="flex gap-[64px] items-center">
        <Image alt="company logo" src={CompanyLogo} />
        <ul className="hidden lg:flex gap-[32px] text-[15px] font-semibold">
          <li>Home</li>
          <li>Our Products</li>
          <li className="flex gap-[12px] items-center">
            <p>Resources</p>
            <Image alt="down arrow" src={Down} />
          </li>
          <li>Contacts</li>
        </ul>
      </div>
      <div className="lg:hidden">
        <Image alt="menu" src={Menu} />
      </div>
      <div className="hidden lg:grid grid-cols-2 gap-[24px] items-center">
        <button className="bg-white text-[#2B63D9] text-[15px] font-semibold w-full rounded-lg px-[18px] py-[12px]">
          Sign Up
        </button>
        <button className="text-white bg-[#437EF7] text-[15px] font-semibold w-full rounded-lg px-[18px] py-[12px]">
          Sign In
        </button>
      </div>
    </div>
  );
}
