import "./Checkbox.css";
const Checkbox = () => {
  return (
    <div className="checkbox-wrapper-65">
      <label htmlFor="cbk1-65" className="flex">
        <input id="cbk1-65" type="checkbox" />
        <span className="cbx">
          <svg viewBox="0 0 12 11" height="11px" width="12px">
            <polyline points="1 6.29411765 4.5 10 11 1"></polyline>
          </svg>
        </span>
        <span className="text-white text-[11px] lg:text-[13px] font-medium leading-[15px] w-[90%] md:w-auto">
          I agree to allow ACAP to store my data and contact me for future market updates and information.{" "}
        </span>
      </label>
    </div>
  );
};

export default Checkbox;
