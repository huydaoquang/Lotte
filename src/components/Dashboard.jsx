import Header from "./Home/Header";
import { CiBadgeDollar } from "react-icons/ci";

const Dashboard = () => {
	return (
		<div className="w-full h-full">
			<Header title="Dashboard" />
			<div className="flex flex-col h-full overflow-y-auto">
				<div className="h-[140px] p-2 grid grid-col-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
					<div className=" h-full border flex flex-col justify-around p-4 shadow-md">
						<h3>Tổng số đơn hàng</h3>
						<div className="flex items-center justify-between">
							<div className="w-[30px] h-[30px] border bg-stone-200 flex justify-center items-center rounded-md">
								<CiBadgeDollar />
							</div>
							<div className="flex flex-col items-end">
								<span className="font-bold">100</span>
								<span className="text-xs opacity-50">Đơn hàng</span>
							</div>
						</div>
					</div>
					<div className=" h-full border flex flex-col justify-around p-4 shadow-md">
						<h3>Tổng doanh thu</h3>
						<div className="flex items-center justify-between">
							<div className="w-[30px] h-[30px] border bg-stone-200 flex justify-center items-center rounded-md">
								<CiBadgeDollar />
							</div>
							<div className="flex flex-col items-end">
								<span className="font-bold">200.000.000</span>
								<span className="text-xs opacity-50">VND</span>
							</div>
						</div>
					</div>
					<div className=" h-full border flex flex-col justify-around p-4 shadow-md">
						<h3>Tổng số vé đã thanh toán</h3>
						<div className="flex items-center justify-between">
							<div className="w-[30px] h-[30px] border bg-stone-200 flex justify-center items-center rounded-md">
								<CiBadgeDollar />
							</div>
							<div className="flex flex-col items-end">
								<span className="font-bold">1.000</span>
								<span className="text-xs opacity-50">Vé</span>
							</div>
						</div>
					</div>
					<div className=" h-full border flex flex-col justify-around p-4 shadow-md">
						<h3>Tổng số vé đã giao dịch</h3>
						<div className="flex items-center justify-between">
							<div className="w-[30px] h-[30px] border bg-stone-200 flex justify-center items-center rounded-md">
								<CiBadgeDollar />
							</div>
							<div className="flex flex-col items-end">
								<span className="font-bold">609</span>
								<span className="text-xs opacity-50">Vé đã giao dịch</span>
							</div>
						</div>
					</div>
				</div>
				<div className="h-[302px] md:w-[700px] p-2">
					<div className="h-full w-full border shadow-md"></div>
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
