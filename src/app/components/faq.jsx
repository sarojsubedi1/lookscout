import Image from "next/image";
import Down from "../assets/icons/down.svg";

const Faq = () => {
  return (
    <div className="px-[16px] py-[40px] lg:py-[64px] lg:px-[96px]">
      <div>
        <h2 className="text-[#272D37] text-[24px] text-center font-bold md:text-[32px]">
          Frequently asked questions
        </h2>
        <p className="text-[#5F6D7E] text-center lg:mx-[20%] lg:mt-2">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s,
        </p>
      </div>
      <div className="border rounded mt-[32px] lg:mt-[64px]">
        <div className="py-[16px] px-[32px] border-b flex justify-between items-center">
          <div>
            <h4 className="text-[18px] text-[#272D37] font-medium">
              Authentification Issues
            </h4>
            <p className="text-[#5F6D7E]">Porttitor nec est nisi, id nunc.</p>
          </div>
          <div className="bg-[#F5FAFF] text-[#437EF7] px-[12px] py-[4px] rounded">
            New
          </div>
        </div>

        <div className="py-[16px] px-[32px] border-b flex justify-between">
          <p className="text-[#272D37]">
            Mi est diam hendrerit ut ipsum, sodales aliquam mauris neque.
          </p>
          <div className="hidden lg:flex gap-6">
            <p className="text-[#5F6D7E]">Updated last week</p>
            <Image alt="down" src={Down} />
          </div>
        </div>
        <div className="py-[16px] px-[32px] border-b flex justify-between">
          <p>Cras vitae, scelerisque tortor augue.</p>
          <div className="hidden lg:flex gap-6">
            <p className="text-[#5F6D7E]">Updated 2 days ago</p>
            <Image alt="down" src={Down} />
          </div>
        </div>
        <div className="py-[16px] px-[32px] border-b flex justify-between">
          <p className="text-[#272D37]">
            Venenatis malesuada turpis sit integer felis rhoncus dictum eget ut.
          </p>
          <div className="hidden lg:flex gap-6">
            <p className="text-[#5F6D7E]">Updated 3 days ago</p>
            <Image alt="down" src={Down} />
          </div>
        </div>
        <div className="py-[16px] px-[32px] flex justify-between">
          <p className="text-[#272D37]">
            Pretium ultricies donec non mollis senectus lectus libero tellus.
          </p>
          <div className="hidden lg:flex gap-6">
            <p className="text-[#5F6D7E]">Updated 4 days ago</p>
            <Image alt="down" src={Down} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Faq;
