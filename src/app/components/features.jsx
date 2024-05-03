import Image from "next/image";
import Icon1 from "../assets/icons/Icon1.svg";
import Icon2 from "../assets/icons/Icon2.svg";
import Icon3 from "../assets/icons/Icon3.svg";
import Icon4 from "../assets/icons/Icon4.svg";
import Icon5 from "../assets/icons/Icon5.svg";
import Icon6 from "../assets/icons/Icon6.svg";
import ArrowRight from "../assets/icons/right.svg";

const Features = () => {
  return (
    <div className="px-4 py-8 lg:px-[96px] lg:py-[64px]">
      <div className="mb-8 lg:mb-[64px]">
        <h2 className="text-[24px] font-bold text-center  md:text-[32px]">
          Message for all
        </h2>
        <p className="hidden lg:block text-center">
          User generated content in real-time will have multiple touchpoints for
          offshoring.
        </p>
      </div>
      <section className="md:flex">
        <div className="flex flex-col lg:flex-row gap-10">
          <div>
            <Image alt="icon" src={Icon1} className="w-[48px] aspect-square" />
            <h3 className="mb-2 mt-4 text-[#272D37] text-[20px] font-semibold leading-7 tracking-tight md:text-[22px]">
              Easier Work Organization
            </h3>
            <p className="text-[#5F6D7E]">
              Efficiently unleash cross-media information without cross-media
              value. Quickly timely deliverables for real-time schemas.{" "}
            </p>
          </div>

          <div>
            <Image alt="icon" src={Icon2} className="w-[48px] aspect-square" />
            <h3 className="mb-2 mt-4 text-[#272D37] text-[20px] font-semibold leading-7 tracking-tight md:text-[22px]">
              Streamlined Processes
            </h3>
            <p className="text-[#5F6D7E]">
              Objectively innovate empowered scalable manufactured products
              whereas parallel platforms predominate extensible.
            </p>
          </div>

          <div>
            <Image alt="icon" src={Icon3} className="w-[48px] aspect-square" />
            <h3 className="mb-2 mt-4 text-[#272D37] text-[20px] font-semibold leading-7 tracking-tight  md:text-[22px]">
              Marketing Analytics
            </h3>
            <p className="text-[#5F6D7E]">
              Phosfluorescently engage worldwide methodologies with web-enabled
              Interactively coordinate.
            </p>
          </div>
        </div>

        <div className="mt-10 md:mt-0 lg:hidden flex flex-col gap-10">
          <div>
            <Image alt="icon" src={Icon4} className="w-[48px] aspect-square" />
            <h3 className="mb-2 mt-4 text-[#272D37] text-[20px] font-semibold leading-7 tracking-tight md:text-[22px]">
              Fast Connection
            </h3>
            <p className="text-[#5F6D7E]">
              Completely pursue scalable customer cross- media through
              potentialities. Holistically quickly installed portals.
            </p>
            <button className="mt-4 flex items-center gap-[5px] text-[#437EF7] font-semibold">
              Learn more <Image alt="arrow right" src={ArrowRight} />
            </button>
          </div>

          <div>
            <Image alt="icon" src={Icon5} className="w-[48px] aspect-square" />
            <h3 className="mb-2 mt-4 text-[#272D37] text-[20px] font-semibold leading-7 tracking-tight md:text-[22px]">
              Easier Integrations
            </h3>
            <p className="text-[#5F6D7E]">
              Completely pursue scalable customer try through potentialities.
              Pontificate portals installed. Efficiently unleash information.
            </p>
            <button className="mt-4 flex items-center gap-[5px] text-[#437EF7] font-semibold">
              Learn more <Image alt="arrow right" src={ArrowRight} />
            </button>
          </div>

          <div>
            <Image alt="icon" src={Icon6} className="w-[48px] aspect-square" />
            <h3 className="mb-2 mt-4 text-[#272D37] text-[20px] font-semibold leading-7 tracking-tight md:text-[22px]">
              Workflow Builder
            </h3>
            <p className="text-[#5F6D7E]">
              Collaboratively administrate turnkey service channels whereas
              virtual e-tailers. This is objectively scalable metrics whereas.
            </p>
            <button className="mt-4 flex items-center gap-[5px] text-[#437EF7] font-semibold">
              Learn more <Image alt="arrow right" src={ArrowRight} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;
