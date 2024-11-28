import { AiFillInstagram } from "react-icons/ai";
import { FaTelegramPlane } from "react-icons/fa";
import { FaTwitter, FaYoutube } from "react-icons/fa6";
import bannerTopShadow from "../../assets/bannerTopShadow.svg";
import colorShape from "../../assets/color-shape.svg";
import logo from "../../assets/logo.svg";
import phoneImg from "../../assets/phone.png";
import pointsShape from "../../assets/points-shpae.svg";
import ContactFrom from "../ContactFrom";
import Features from "../Features";

const Hero = () => {
  return (
    <section className="bg-[#00161A]">
      <img
        src={bannerTopShadow}
        alt="banner shadow one"
        className="absolute top-0 left-1/2 -translate-x-1/2 
    w-full h-[800px] object-cover"
      />
      <div className="container_fluid relative z-10">
        {/* banner text  */}
        <div className="w-full md:w-[550px] lg:w-[884px] text-center mx-auto pt-[120px] lg:pt-[150px] xl:pt-[228px]">
          <h1 className="text-[26px] md:text-[32px] lg:text-[50px] xl:text-[72px] font-bold leading-[40px] md:leading-[50px] lg:leading-[60px] xl:leading-[86px] pb-6 text-white">
            All Your Crypto Trading <br /> Tools in <span className="bg-gradient-to-r from-[#c6ff8d] to-[#22e9d2] bg-clip-text text-transparent">One Place</span>
          </h1>
          <p className="text-[14px] lg:text-[16px] xl:text-[18px] font-medium leading-6 xl:leading-[32px] text-white">
            ACAP Markets – The alternative market trading division designed by traders for traders providing access to over 71,000+ instruments and rewarding $ACAP token holders in stablecoins.
          </p>
        </div>
      </div>
      {/* banner image  */}
      <div className="w-full h-auto  flex items-center justify-center mx-auto relative py-5">
        <img src={phoneImg} alt="mobile png image" className="w-full h-full xl:w-[1138px] lg:h-[940px] z-20 object-cover xl:object-contain" />
        <img src={colorShape} alt="mobile png image" className="w-full h-auto absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0" />{" "}
        <img src={pointsShape} alt="mobile png image" className="w-full h-auto absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0" />
      </div>
      <div className="container_fluid">
        {/* features section  */}
        <Features />
        <div className="h-px w-full bg-gradient-to-r from-transparent via-green-500/10 to-transparent mt-[83px] hidden md:block"></div>
      </div>
      {/* contact form    */}
      <ContactFrom />

      <div className="container_fluid">
        <div className="pt-[75px] pb-[32px] flex justify-between items-center">
          <div className="w-[125px]">
            <img src={logo} alt="logo" className="w-full" />
          </div>
          <ul className="flex items-center gap-3 md:gap-6">
            <li className="w-[24px] h-[24px] flex items-center justify-center">
              <a href="https://twitter.com/acapmarkets" target="_blank">
                <FaTwitter className="text-2xl text-white" />
              </a>
            </li>
            <li className="w-[24px] h-[24px] flex items-center justify-center">
              <a href="https://instagram.com/acapmarkets" target="_blank">
                <AiFillInstagram className="text-2xl text-white" />
              </a>
            </li>
            <li className="w-[24px] h-[24px] flex items-center justify-center">
              <a href="https://youtube.com/@acapmarkets" target="_blank">
                <FaYoutube className="text-2xl text-white" />
              </a>
            </li>
            <li className="w-[24px] h-[24px] flex items-center justify-center">
              <a href="https://t.me/acapmarkets" target="_blank">
                <FaTelegramPlane className="text-2xl text-white" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Hero;

/* https://acapmarkets.com
https://twitter.com/acapmarkets
https://youtube.com/@acapmarkets
https://instagram.com/acapmarkets
https://t.me/acapmarkets
contact@acapmarkets.com  */
