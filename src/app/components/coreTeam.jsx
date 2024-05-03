import Image from "next/image";
import Member1 from "../assets/image/Image.png";
import Member2 from "../assets/image/Image(1).png";
import Member3 from "../assets/image/Image(2).png";
import Twiter from "../assets/icons/social/twiter.svg";
import Facebook from "../assets/icons/social/facebook.svg";
import Linkedin from "../assets/icons/social/linkedin.svg";
import Telegram from "../assets/icons/social/telegram.svg";

const CoreTeam = () => {
  return (
    <div className="py-[40px] px-[32px] lg:px-[96px] lg:py-[64px]">
      <div>
        <h2 className="text-[24px] text-[#272D37] text-center font-bold md:text-[32px]">
          The Core of Our Team
        </h2>
        <p className="text-[#5F6D7E] text-center lg:mx-[20%]">
          Organically grow the holistic world view of disruptive innovation via
          workplace diversity and empowerment of people and great talent that
          truly rocks.
        </p>
      </div>

      <div className="mt-[32px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[32px] lg:mt-[64px]">
        <div>
          <div>
            <Image alt="profile" src={Member1} />
            <h4 className="mt-[16px] text-[20px] text-[#272D37] font-semibold md:text-[22px]">
              Morgan Drew
            </h4>
            <p className="text-[#5F6D7E]">Manager</p>
          </div>
          <div className="mt-[12px] flex gap-[16px]">
            <Image
              alt="social"
              src={Twiter}
              className="w-[20xp] aspect-square"
            />
            <Image
              alt="social"
              src={Facebook}
              className="w-[20xp] aspect-square"
            />
            <Image
              alt="social"
              src={Linkedin}
              className="w-[20xp] aspect-square"
            />
            <Image
              alt="social"
              src={Telegram}
              className="w-[20xp] aspect-square"
            />
          </div>
        </div>

        <div>
          <div>
            <Image alt="profile" src={Member2} />
            <h4 className="mt-[16px] text-[20px] text-[#272D37] font-semibold">
              Jeffery Walker
            </h4>
            <p className="text-[#5F6D7E]">Lead Designer</p>
          </div>
          <div className="mt-[12px] flex gap-[16px]">
            <Image
              alt="social"
              src={Twiter}
              className="w-[20xp] aspect-square"
            />
            <Image
              alt="social"
              src={Facebook}
              className="w-[20xp] aspect-square"
            />
            <Image
              alt="social"
              src={Linkedin}
              className="w-[20xp] aspect-square"
            />
            <Image
              alt="social"
              src={Telegram}
              className="w-[20xp] aspect-square"
            />
          </div>
        </div>

        <div>
          <div>
            <Image alt="profile" src={Member3} />
            <h4 className="mt-[16px] text-[20px] text-[#272D37] font-semibold">
              Andrew Steve
            </h4>
            <p className="text-[#5F6D7E]">UI/UX Designer</p>
          </div>
          <div className="mt-[12px] flex gap-[16px]">
            <Image
              alt="social"
              src={Twiter}
              className="w-[20xp] aspect-square"
            />
            <Image
              alt="social"
              src={Facebook}
              className="w-[20xp] aspect-square"
            />
            <Image
              alt="social"
              src={Linkedin}
              className="w-[20xp] aspect-square"
            />
            <Image
              alt="social"
              src={Telegram}
              className="w-[20xp] aspect-square"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoreTeam;
