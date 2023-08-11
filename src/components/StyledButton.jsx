import clsx from "clsx";

const StyledButton = ({ text, onClick, type, className }) => {
  return (
    <button
      type={type}
      onClick={() => (onClick ? onClick() : null)}
      className={clsx("text-white text-[12px] font-bold px-[30px] py-[17px] rounded-[16px]", className)}
    >
      {text}
    </button>
  );
};

export default StyledButton;
