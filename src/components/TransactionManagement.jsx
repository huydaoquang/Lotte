import { AiFillEye, AiOutlineQrcode } from "react-icons/ai";

import Button from "./Button";
import Header from "./Home/Header";
import Input from "./Input";

const TransactionManagement = () => {
	return (
		<div className="w-full">
			<Header title="Quản lý giao dịch" />
			<div className="p-5">
				<div className="w-full border p-2 flex flex-col justify-between gap-4">
					<div className="flex flex-col md:flex-row md:justify-between px-10 gap-4">
						<div className="flex items-center gap-10  w-[400px]">
							<label className="w-[150px]">Mã giao dịch</label>
							<Input />
						</div>
						<div className="flex items-center gap-10 w-[400px]">
							<label className="w-[150px]">Email</label>
							<Input />
						</div>
					</div>
					<div className="flex flex-col md:flex-row md:justify-between px-10 gap-4">
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
			<div className="flex justify-between px-5">
				<h3 className="font-bold ">Thông tin giao dịch</h3>
				<Button className="bg-[#FF5B00] p-2  flex items-center text-white gap-2 ">
					<AiOutlineQrcode />
					<span className="text-xs">QR Code</span>
				</Button>
			</div>
			<div className="flex flex-col px-3">
				<div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
					<div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
						<div className="overflow-hidden">
							<table className="min-w-full text-left text-sm font-light">
								<thead className="border-b font-medium dark:border-neutral-500">
									<tr>
										<th scope="col" className="px-2 py-4">
											STT
										</th>
										<th scope="col" className="px-6 py-4">
											Mã giao dịch
										</th>
										<th scope="col" className="px-6 pr-[100px] py-4">
											Mã đơn hàng
										</th>
										<th scope="col" className="px-4 py-4">
											Tổng số vé
										</th>
										<th scope="col" className="px-4 py-4">
											Email
										</th>
										<th scope="col" className="px-4 py-4">
											Trạng thái
										</th>
										<th scope="col" className="px-4 py-4">
											Hành động
										</th>
									</tr>
								</thead>
								<tbody>
									<tr className="border-b dark:border-neutral-500">
										<td className="whitespace-nowrap px-4 py-4 font-medium">
											1
										</td>
										<td className="whitespace-nowrap px-6 py-4">DH01</td>
										<td className="whitespace-nowrap px-6 py-4">DH01</td>
										<td className="whitespace-nowrap px-6 py-2">105</td>
										<td className="whitespace-nowrap px-6 py-4">
											ABC@gmail.com
										</td>
										<td className="whitespace-nowrap px-6 py-4">
											Chờ giao dịch
										</td>
										<td className="whitespace-nowrap px-6 py-4">
											<span>
												<AiFillEye />
											</span>
										</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default TransactionManagement;
