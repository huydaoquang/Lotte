import { AiOutlineUser } from "react-icons/ai";

const Header = ({ title }) => {
	return (
		<div className="flex justify-between items-center border-b border-[#666666] py-3 px-4">
			<h1 className=" text-[#FF5B00] text-3xl">{title}</h1>
			<div>
				<div className="w-5 h-5 border border-black flex items-center justify-center  rounded-full">
					<AiOutlineUser size={20} />
				</div>
			</div>
		</div>
	);
};

export default Header;
