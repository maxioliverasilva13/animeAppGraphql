const Input = ({ value, setValue, type, name, id, icon, placeholder }) => {
  return (
    <div className="flex w-full flex-row shadow-sm items-center justify-start gap-[6px] px-[18px] py-[14px] rounded-[16px] !bg-[#F0EDFF]">
      <span className="!text-black">
      {icon}
      </span>
      <input
        onChange={(e) => setValue(e?.target?.value)}
        value={value}
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        className="bg-transparent text-[12px] placeholder-[#1C1C1C] font-normal outline-none text-black text-base w-full flex-grow flex"
      />
    </div>
  );
};

export default Input;
