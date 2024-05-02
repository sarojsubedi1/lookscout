import Image from "next/image";
import CompanyLogo from "../assets/icons/Company.svg";
import Facebook from "../assets/icons/social/facebook.svg";
import Google from "../assets/icons/google.svg";
import Apple from "../assets/icons/apple.svg";
import Instagram from "../assets/icons/social/instagram.svg";
import Icon from "../assets/icons/Icon.svg";

const Footer = () => {
  return (
    <div className="px-[16px] py-[32px] grid gap-[32px] grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
      <div className="col-span-2 md:w-1/2">
        <Image
          alt="company logo"
          src={CompanyLogo}
          className="w-[160px] h-[40px] mb-[16px]"
        />
        <p className="text-[#5F6D7E] leading-6">
          Generate outside the box thinking with the possibility to targtet the
          low.
        </p>
        <div className="mt-8 flex justify-around md:hidden lg:flex">
          <Image
            alt="facebook"
            src={Facebook}
            className="w-[24px] aspect-square"
          />
          <Image alt="google" src={Google} className="w-[24px] aspect-square" />
          <Image alt="apple" src={Apple} className="w-[24px] aspect-square" />
          <Image
            alt="instagram"
            src={Instagram}
            className="w-[24px] aspect-square"
          />
        </div>
      </div>

      <div>
        <h3 className="text-[#272D37] leading-6 font-semibold">Products</h3>
        <ul className="text-[#5F6D7E]">
          <li className="">Features</li>
          <li>Solutions</li>
          <li>Integrations</li>
          <li>Enterprise</li>
          <li>Solutions</li>
        </ul>
      </div>
      <div>
        <h3 className="text-[#272D37] leading-6 font-semibold">Resources</h3>
        <ul className="text-[#5F6D7E]">
          <li>Partners</li>
          <li>Community</li>
          <li>Developers</li>
          <li>App</li>
          <li>Blog</li>
        </ul>
      </div>
      <div>
        <h3 className="text-[#272D37] leading-6 font-semibold">
          Why Choose Us?
        </h3>
        <ul className="text-[#5F6D7E]">
          <li>Channels</li>
          <li>Scale</li>
          <li>Watch the Demo</li>
          <li>Our Competition</li>
        </ul>
      </div>
      <div>
        <h3 className="text-[#272D37] leading-6 font-semibold">Company</h3>
        <ul className="text-[#5F6D7E]">
          <li>About Us</li>
          <li>News</li>
          <li>Leadership</li>
          <li>Media Kit</li>
        </ul>
      </div>
      <div className="col-span-2  md:col-span-3 lg:col-span-6">
        <div className="grid place-items-center mb-2">
          <div className="rounded-full bg-[#437EF7/25] w-[26px] aspect-square">
            <Image alt="icon" src={Icon} className="w-[24px] aspect-square" />
          </div>
        </div>
        <div className="flex justify-between">
          <div className="w-full">
            <p className="text-[#5F6D7E] text-center md:text-left lg:text-center">
              © 2023 Lookscout. All Rights Reserved.
            </p>
          </div>
          <div className="w-1/3 hidden justify-between md:flex lg:hidden">
            <Image
              alt="facebook"
              src={Facebook}
              className="w-[24px] aspect-square"
            />
            <Image
              alt="google"
              src={Google}
              className="w-[24px] aspect-square"
            />
            <Image alt="apple" src={Apple} className="w-[24px] aspect-square" />
            <Image
              alt="instagram"
              src={Instagram}
              className="w-[24px] aspect-square"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
