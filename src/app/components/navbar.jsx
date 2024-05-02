import Image from "next/image";
import CompanyLogo from "../assets/icons/Company.svg";
import Menu from "../assets/icons/Button frame.svg";

export default function Navbar() {
  return (
    <div className="border-b-2 border-gray-200 p-4 flex justify-between items-center">
      <div>
        <Image alt="company logo" src={CompanyLogo} />
      </div>
      <div>
        <Image alt="menu" src={Menu} />
      </div>
    </div>
  );
}
