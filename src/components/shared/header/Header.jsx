import logo from "../../../assets/logo.svg";
import Button from "../../button/Button";
import Hr from "../Hr";
const Header = () => {
  return (
    <section className="absolute z-20 left-0 right-0 max-w-[1920px] mx-auto">
      <div className="container_fluid">
        <div className="flex justify-between items-center py-[19px] ">
          <div className="w-[125px]">
            <a href="/">
              <img src={logo} alt="logo" className="w-full cursor-pointer" />
            </a>
          </div>
          <div className="header_btn">
            <Button>Register</Button>
          </div>
        </div>
      </div>
      <Hr />
    </section>
  );
};

export default Header;
