import { FaFacebookF } from "react-icons/fa";
import { AiOutlineTwitter, AiFillYoutube } from "react-icons/ai";
import { BiLogoPinterestAlt } from "react-icons/bi";
import Image from "next/image";

function Footer() {
  const iconsTab = [
    { icon: <FaFacebookF />, style: "hover:bg-blue-500" },
    { icon: <AiOutlineTwitter />, style: "hover:bg-blue-500" },
    { icon: <AiFillYoutube />, style: "hover:bg-[#FF0000]" },
    { icon: <BiLogoPinterestAlt />, style: "hover:bg-[#E60023]" },
  ];
  return (
    <>
      <footer className="bg-white dark:bg-[#0b111f] dark:border-slate-300 dark:border-1">
        <div className="container mx-auto py-[10rem]">
          {/* footer div all */}
          <div className="flex justify-between flex-col md:flex-row  items-center md:items-start  md:gap-[5rem] text-left">
            {/* logo side */}
            <div className="flex flex-col w-1/2 md:p-0 py-4 gap-8">
              <h1 className="text-4xl  font-bold">KinderSprout</h1>
              <Image
                src='/logo.svg'
                width={20}
                height={20}
                alt="footer_logo"
                className="w-[10rem]"
              />
              <p className="text-[15px] font-medium text-[#646464] dark:text-slate-300">
                Take your health and body to the next level with our
                comprehensive program designed to help you reach your fitness
                goals.
              </p>
              {/* socials */}
              <h1 className="text-xl font-semibold">We are in Social Media</h1>
              <div className="flex gap-7 text-[18px] text-[#646464] justify-center md:justify-start">
                {iconsTab.map(({ icon, style }, index) => {
                  return (
                    <div
                      key={index}
                      className={`text-2xl bg-[#efefef] p-2 rounded-full ${style} hover:text-white`}
                      style={{ transition: "all 0.3s" }}
                    >
                      {icon}
                    </div>
                  );
                })}
              </div>
              <p className="text-[16px] font-medium text-[#646464]">
                Privacy Policy | © {new Date().getFullYear()} KinderSprout <br />{" "}
                All rights reserved.
              </p>
            </div>

            {/* middle div */}
            <div className="flex flex-col gap-8 relative">
              <p className="text-[22px] font-bold footer-main ">Our Classes</p>

              <span className="top-[40px] absolute w-[7rem] h-[4px] bg-[#ff0366]"></span>

              <p className="text-[16px] hover:text-[#ff0366] cursor-pointer text-[#646464] font-medium hover:font-bold">
                Art Classes
              </p>
              <p className="text-[16px] hover:text-[#ff0366] cursor-pointer text-[#646464] font-medium hover:font-bold">
                Music Classes
              </p>
              <p className="text-[16px] hover:text-[#ff0366] cursor-pointer text-[#646464] font-medium hover:font-bold">
                Young Inventor
              </p>
              <p className="text-[16px] hover:text-[#ff0366] cursor-pointer text-[#646464] font-medium hover:font-bold">
                Learn Machines
              </p>
              <p className="text-[16px] hover:text-[#ff0366] cursor-pointer text-[#646464] font-medium hover:font-bold">
                Full-body Strength
              </p>
            </div>

            {/* right div */}
            <div className="flex flex-col gap-8 relative ml-4">
              <p className="text-[22px] font-bold footer-main ">Working Hours</p>

              <span className="top-[40px] absolute w-[7rem] h-[4px] bg-[#ff0366]"></span>

              <p className="text-[16px]  text-[#646464] font-bold">
                Monday - Friday:
              </p>
              <p className="text-[16px] text-[#646464] font-medium">
                7:00am - 21:00pm
              </p>
              <p className="text-[16px] text-[#646464] font-bold">Saturday:</p>
              <p className="text-[16px] text-[#646464] font-medium">
                7:00am - 19:00pm
              </p>
              <p className="text-[16px] text-[#646464] font-bold ">
                Sunday - Closed
              </p>
            </div>

            {/* middle div */}
            <span></span>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;