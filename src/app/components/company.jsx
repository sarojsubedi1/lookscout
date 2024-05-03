import Image from "next/image";
import Logo1 from "../assets/icons/Company Logo.svg";
import Logo2 from "../assets/icons/Company Logo(1).svg";
import Logo3 from "../assets/icons/Company Logo(2).svg";
import Logo4 from "../assets/icons/Company Logo(3).svg";
import Logo5 from "../assets/icons/Company Logo(4).svg";
import Logo6 from "../assets/icons/Company Logo(5).svg";

const Company = () => {
  return (
    <>
      <div className="bg-[#2B63D9] px-[16px] py-[32px] lg:py-[64px]">
        <div className="text-white text-center mb-[16px] md:mb-[32px] lg:mx-[20%]">
          <p className="text-[14px] font-semibold">1% OF THE INDUSTRY</p>
          <h2 className="text-[28px] font-semibold leading-9 md:text-[32px]">
            Welcome to your new digital reality that which will rock your world
            truly at all.
          </h2>
        </div>
        <div className="flex flex-col gap-[16px] justify-center md:flex-row">
          <div>
            <button className="bg-white text-[#2B63D9] font-semibold w-full rounded-lg px-[18px] py-[12px]">
              Sign Up
            </button>
          </div>
          <div>
            <button className="text-white bg-[#437EF7] font-semibold w-full rounded px-[18px] py-[12px]">
              Sign In
            </button>
          </div>
        </div>
      </div>
      <div className="bg-[#2B63D9] px-[16px] py-[32px] grid grid-cols-1 gap-[32px] md:grid-cols-4 lg:grid-cols-6 lg:py-[64px] lg:px-[64px]">
        <div className="grid place-items-center">
          <Image
            alt="Company Logo"
            src={Logo1}
            className="w-[128px] h-[32] object-contain"
          />
        </div>
        <div className="grid place-items-center">
          <Image
            alt="Company Logo"
            src={Logo2}
            className="w-[128px] h-[32] object-contain"
          />
        </div>
        <div className="grid place-items-center">
          <Image
            alt="Company Logo"
            src={Logo3}
            className="w-[128px] h-[32] object-contain"
          />
        </div>
        <div className="grid place-items-center">
          <Image
            alt="Company Logo"
            src={Logo4}
            className="w-[128px] h-[32] object-contain"
          />
        </div>
        <div className="hidden md:block lg:hidden"></div>
        <div className="grid place-items-center">
          <Image
            alt="Company Logo"
            src={Logo5}
            className="w-[128px] h-[32] object-contain"
          />
        </div>
        <div className="grid place-items-center">
          <Image
            alt="Company Logo"
            src={Logo6}
            className="w-[128px] h-[32] object-contain"
          />
        </div>
      </div>
    </>
  );
};

export default Company;
