import formBg from "../assets/formBg.svg";
import DropDown from "./DropDown";
import Button from "./button/Button";
import Checkbox from "./checkbox/Checkbox";
const ContactFrom = () => {
  return (
    <section className="pt-[86px] pb-[81px]">
      <div className="container_fluid">
        <div className="w-full lg:w-[981px] mx-auto rounded-xl relative border bg-[#BAF7D2]/[2%] backdrop-blur-sm border-[#E2E8FF]/20">
          <img src={formBg} alt="form background image" className="w-full h-full object-cover absolute top-0 left-0 z-0" />
          <form onSubmit={(e) => e.preventDefault()} className="w-full py-9 px-6 lg:py-[48px] lg:px-[48px] relative z-[55]">
            <h2 className="text-2xl xl:text-[28px] font-bold leading-[30px] -tracking-[.52px] text-white text-center pb-[28px]">Register to attend our next investor conference</h2>
            <div className="flex flex-col gap-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full px-[12px] py-[4px] rounded-[6px] bg-transparent text-[16px] font-medium leading-10 text-white focus:outline-none bg-gradient-to-b from-[#0a2023] to-slate-50/10 border border-[#E2E8FF]/10"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full px-[12px] py-[4px] rounded-[6px] bg-transparent text-[16px] font-medium leading-10 text-white focus:outline-none bg-gradient-to-b from-[#0a2023] to-slate-50/10 border border-[#E2E8FF]/10"
                />
              </div>
              <div className="w-full">
                <input
                  type="email"
                  placeholder="Email address"
                  className="w-full px-[12px] py-[4px] rounded-[6px] bg-transparent text-[16px] font-medium leading-10 text-white focus:outline-none bg-gradient-to-b from-[#0a2023] to-slate-50/10 border border-[#E2E8FF]/10"
                />
              </div>
              <div className="w-full">
                <input
                  type="text"
                  placeholder="Telephone (optional)"
                  className="w-full px-[12px] py-[4px] rounded-[6px] bg-transparent text-[16px] font-medium leading-10 text-white focus:outline-none bg-gradient-to-b from-[#0a2023] to-slate-50/10 border border-[#E2E8FF]/10"
                />
              </div>
              <div className="w-full">
                <DropDown />
              </div>
              <div className="flex items-center gap-2 justify-start">
                <Checkbox />
              </div>
              <div className="w-full">
                <Button className="!w-full">Submit</Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactFrom;
