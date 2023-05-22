import Button from "./Button";
import Header from "./Home/Header";
import Input from "./Input";

const CustomerManagement = () => {
	return (
		<div className="w-full">
			<Header title="Quản lý khách hàng" />
			<div className="p-5">
				<div className="w-full h-[205px] border p-2 flex flex-col justify-between">
					<div className="flex justify-between px-10">
						<div className="flex items-center gap-10  w-[400px]">
							<label className="w-[150px]">Mã giao dịch</label>
							<Input />
						</div>
						<div className="flex items-center gap-10 w-[400px]">
							<label className="w-[150px]">Email</label>
							<Input />
						</div>
					</div>
					<div className="flex justify-between px-10">
						<div className="flex  items-center gap-10 w-[400px]">
							<label className="w-[150px]">Mã đơn hàng</label>
							<Input />
						</div>
						<div className="flex  items-center gap-10 w-[400px]">
							<label className="w-[150px]">Trạng thái</label>
							<Input />
						</div>
					</div>
					<div className="flex justify-center gap-5 pb-3">
						<Button className="border px-6 py-1 border-[#FF5B00] text-xs  rounded ">
							Hủy
						</Button>
						<Button className="bg-[#FF5B00] px-3 text-xs rounded">
							Tìm kiếm
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CustomerManagement;
