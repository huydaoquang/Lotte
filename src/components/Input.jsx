const Input = ({ id, onChange, value, label, type, disabled }) => {
	return (
		<input
			disabled={disabled}
			onChange={onChange}
			type={type}
			value={value}
			id={id}
			className="
        mt-1 
        block 
        w-full 
        px-3 
        py-2 
        bg-white 
        border  
        rounded-md 
        text-sm 
        shadow-sm 
        placeholder-slate-400
        focus:outline-none 
        focus:ring-1 
      "
			placeholder={label}
		/>
	);
};

export default Input;
