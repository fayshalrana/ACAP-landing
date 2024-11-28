import arrow from "../assets/arrow.svg";
import batch from "../assets/batch.svg";
import playIcon from "../assets/playIcon.svg";
import shall from "../assets/shall.svg";
const Features = () => {
  return (
    <div className="w-full py-9 px-6 lg:py-[50px] lg:px-[44px] backdrop-blur-sm rounded-xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 bg-[#BAF7D2]/5 border border-[#BAF7D2]/10 gap-8 md:gap-12 lg:gap-16">
      {/* features items  */}
      <div className="flex items-center justify-start gap-6 cursor-pointer">
        <div className="w-[72px] h-[72px] rounded-xl bg-[#112c2c] inline-flex justify-center items-center">
          <img src={playIcon} alt="play icon" />
        </div>
        <div className="w-[60%]">
          <h3 className="text-[22px] font-bold bg-gradient-to-r from-[#c6ff8d] to-[#22e9d2] bg-clip-text text-transparent tracking-[.15px] pb-1">Fast</h3>
          <p className="text-[13px] font-medium -tracking-[.13px] text-white leading-[20px]">Fast, easy-to-use platform </p>
        </div>
      </div>
      <div className="flex items-center justify-start gap-6 cursor-pointer">
        <div className="w-[72px] h-[72px] rounded-xl bg-[#112c2c]  inline-flex justify-center items-center">
          <img src={arrow} alt="arrow icon" />
        </div>
        <div className="w-[60%]">
          <h3 className="text-[22px] font-bold bg-gradient-to-r from-[#c6ff8d] to-[#22e9d2] bg-clip-text text-transparent tracking-[.15px] pb-1">Seamless</h3>
          <p className="text-[13px] font-medium -tracking-[.13px] text-white leading-[20px]">Apps optimised for all devices </p>
        </div>
      </div>
      <div className="flex items-center justify-start gap-6 cursor-pointer">
        <div className="w-[72px] h-[72px] rounded-xl bg-[#112c2c] flex justify-center items-center">
          <img src={shall} alt="arrow icon" />
        </div>
        <div className="w-[60%]">
          <h3 className="text-[22px] font-bold bg-gradient-to-r from-[#c6ff8d] to-[#22e9d2] bg-clip-text text-transparent tracking-[.15px] pb-1">Secured</h3>
          <p className="text-[13px] font-medium -tracking-[.13px] text-white leading-[20px]">Fully regulated and protected funds </p>
        </div>
      </div>
      <div className="flex items-center justify-start gap-6 cursor-pointer">
        <div className="w-[72px] h-[72px] rounded-xl bg-[#112c2c] flex justify-center items-center">
          <img src={batch} alt="batch icon" />
        </div>
        <div className="w-[60%]">
          <h3 className="text-[22px] font-bold bg-gradient-to-r from-[#c6ff8d] to-[#22e9d2] bg-clip-text text-transparent tracking-[.15px] pb-1">Reliable</h3>
          <p className="text-[13px] font-medium -tracking-[.13px] text-white leading-[20px]">Trusted trading platform for reliable execution </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
