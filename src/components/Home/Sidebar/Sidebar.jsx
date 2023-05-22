import {
	AiOutlineDatabase,
	AiOutlineHome,
	AiOutlineSetting,
} from "react-icons/ai";
import { GrGroup } from "react-icons/gr";
import { Link } from "react-router-dom";

const Sidebar = () => {
	return (
		<div className="w-[316px]  p-4">
			<Link to="/" className=" cursor-pointer text-4xl px-5 text-red-600">
				LOTTE
			</Link>
			<div className="py-6 ">
				<ul className="flex flex-col gap-5">
					<li>
						<Link
							to="/"
							className="flex items-center gap-3 hover:bg-[#FFDECC] hover:border-r-4 hover:border-[#FF5800] py-2 px-5 cursor-pointer transition"
						>
							<AiOutlineHome />
							Dashboard
						</Link>
					</li>
					<li>
						<Link
							to="/quan-ly-giao-dich"
							className="flex items-center gap-3 hover:bg-[#FFDECC] hover:border-r-4 hover:border-[#FF5800] py-2 px-5 cursor-pointer transition"
						>
							<AiOutlineHome />
							Quản lý giao dịch
						</Link>
					</li>
					<li>
						<Link
							to="/quan-ly-don-hang"
							className="flex items-center gap-3 hover:bg-[#FFDECC] hover:border-r-4 hover:border-[#FF5800] py-2 px-5 cursor-pointer transition"
						>
							<AiOutlineHome />
							Quản lý đơn hàng
						</Link>
					</li>
					<li>
						<Link
							to="/quan-ly-loai-ve"
							className="flex items-center gap-3 hover:bg-[#FFDECC] hover:border-r-4 hover:border-[#FF5800] py-2 px-5 cursor-pointer transition"
						>
							<AiOutlineHome />
							Quản lý loại vé
						</Link>
					</li>
					<li>
						<Link
							to="/quan-ly-khach-hang"
							className="flex items-center gap-3 hover:bg-[#FFDECC] hover:border-r-4 hover:border-[#FF5800] py-2 px-5 cursor-pointer transition"
						>
							<GrGroup />
							Quản lý khách hàng
						</Link>
					</li>
					<li>
						<Link
							to="/bao-cao "
							className="flex items-center gap-3 hover:bg-[#FFDECC] hover:border-r-4 hover:border-[#FF5800] py-2 px-5 cursor-pointer transition"
						>
							<AiOutlineDatabase />
							Báo cáo
						</Link>
					</li>
					<li>
						<Link
							to="/setting"
							className="flex items-center gap-3 hover:bg-[#FFDECC] hover:border-r-4 hover:border-[#FF5800] py-2 px-5 cursor-pointer transition"
						>
							<AiOutlineSetting />
							Thiết lập
						</Link>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Sidebar;
