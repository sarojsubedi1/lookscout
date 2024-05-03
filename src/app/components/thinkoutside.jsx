import Image from "next/image";
import Check from "../assets/icons/check.svg";
import CheckWhite from "../assets/icons/rightWhite.svg";
import Lamp from "../assets/image/Photo.png";

const ThinkOutside = () => {
  return (
    <section className="px-4 py-8 flex flex-col gap-10 lg:flex-row md:px-[32px] md:py-[40px]">
      <div className="flex-1 flex flex-col gap-10">
        <h1 className="text-[28px] text-[#272D37] font-semibold leading-9 md:text-[32px]">
          Demonstrate branding consequently think outside
        </h1>
        <div>
          <div className="flex gap-2">
            <Image alt="check" src={Check} className="w-5 h-auto" />
            <p className="text-[#5F6D7E]">Enterprise-grade security</p>
          </div>
          <div className="flex gap-2">
            <Image alt="check" src={Check} className="w-5 h-auto" />
            <p className="text-[#5F6D7E]">99.9% guaranteed uptime SLA</p>
          </div>
          <div className="flex gap-2">
            <Image alt="check" src={Check} className="w-5 h-auto" />
            <p className="text-[#5F6D7E]">Designated customer success team</p>
          </div>
        </div>
        <div>
          <button className="flex gap-2 bg-[#437EF7] text-[15px] text-white font-semibold px-[18px] py-3 rounded-lg">
            <p>Start now</p>
            <Image alt="check" src={CheckWhite} className="w-auto h-auto" />
          </button>
        </div>
      </div>
      <div className="flex-1">
        <Image alt="lamp" src={Lamp} className="w-full object-cover" />
      </div>
    </section>
  );
};

export default ThinkOutside;
