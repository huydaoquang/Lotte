import { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { Table, Modal } from "antd";
import { DeleteOutlined, EditOutlined, EyeOutlined } from "@ant-design/icons";

import Button from "./Button";
import Header from "./Home/Header";
import Input from "./Input";

const OrderManagement = () => {
	const [dataSource, setDataSource] = useState([
		{
			id: 1,
			typeCode: "VN002",
			name: "Trần Thị Giang",
			date1: "22/07/2022",
			date2: "22/07/2022",
			sum: "119.000",
			status: "Chưa thanh toán",
			action: "Hoạt động",
		},
		{
			id: 2,
			typeCode: "VN003",
			name: "Trần Thị Giang",
			date1: "22/07/2022",
			date2: "22/07/2022",
			sum: "119.000",
			status: "Chưa thanh toán",
			action: "Hoạt động",
		},
		{
			id: 3,
			typeCode: "VN004",
			name: "Trần Thị Giang",
			date1: "22/07/2022",
			date2: "22/07/2022",
			sum: "119.000",
			status: "Chưa thanh toán",
			action: "Hoạt động",
		},
		{
			id: 4,
			typeCode: "VN005",
			name: "Trần Thị Giang",
			date1: "22/07/2022",
			date2: "22/07/2022",
			sum: "119.000",
			status: "Chưa thanh toán",
			action: "Hoạt động",
		},
		{
			id: 5,
			typeCode: "VN006",
			name: "Trần Thị Giang",
			date1: "22/07/2022",
			date2: "22/07/2022",
			sum: "119.000",
			status: "Chưa thanh toán",
			action: "Hoạt động",
		},
		{
			id: 6,
			typeCode: "VN007",
			name: "Trần Thị Giang",
			date1: "22/07/2022",
			date2: "22/07/2022",
			sum: "119.000",
			status: "Chưa thanh toán",
			action: "Hoạt động",
		},
		{
			id: 7,
			typeCode: "VN008",
			name: "Trần Thị Giang",
			date1: "22/07/2022",
			date2: "22/07/2022",
			sum: "119.000",
			status: "Chưa thanh toán",
			action: "Hoạt động",
		},
	]);
	const [isOpenAddUser, setIsOpenAddUser] = useState(false);
	const [isEditing, setIsEditing] = useState(false);
	const [editingUser, setEditingUser] = useState(null);
	const [isOpenUser, setIsOpenUser] = useState(false);
	const [viewUser, setViewUser] = useState(null);

	const columns = [
		{
			key: "1",
			title: "STT",
			dataIndex: "id",
		},
		{
			key: "2",
			title: "Mã đơn hàng",
			dataIndex: "typeCode",
		},
		{
			key: "3",
			title: "Khách  hàng",
			dataIndex: "name",
		},
		{
			key: "4",
			title: "Ngày tham gia",
			dataIndex: "date1",
		},
		{
			key: "5",
			title: "Ngày mua vé",
			dataIndex: "date2",
		},
		{
			key: "6",
			title: "Trạng thái ",
			dataIndex: "status",
		},
		{
			key: "7",
			title: "Tổng tiền (VND)",
			dataIndex: "sum",
		},
		{
			key: "8",
			title: "Hành động",
			render: (record) => {
				return (
					<div className="flex gap-3">
						<EyeOutlined
							onClick={() => {
								onViewUser(record);
							}}
						/>
						<EditOutlined
							onClick={() => {
								onEditUser(record);
							}}
						/>
						<DeleteOutlined
							onClick={() => {
								onDeleteUser(record);
							}}
						/>
					</div>
				);
			},
		},
	];

	const onDeleteUser = (record) => {
		Modal.confirm({
			title: "Bạn có muốn xóa không ?",
			okText: "Xác nhận",
			okType: "danger",
			onOk: () => {
				setDataSource((prev) => {
					return prev.filter((user) => user.id !== record.id);
				});
			},
		});
	};

	const onEditUser = (record) => {
		setIsEditing(true);
		setEditingUser({ ...record });
	};

	const resetEditing = () => {
		setIsEditing(false);
		setEditingUser(null);
	};

	const onViewUser = (record) => {
		setIsOpenUser(true);
		setViewUser({ ...record });
	};
	return (
		<div className="w-full">
			<Header title="Quản lý đơn hàng" />
			<div className="p-5">
				<div className="w-full border p-4 flex flex-col justify-between gap-6">
					<div className="flex flex-col lg:flex-row lg:justify-between px-10 gap-4">
						<div className="flex items-center gap-10  w-[400px]">
							<label className="w-[150px]">Mã đơn hàng</label>
							<Input />
						</div>
						<div className="flex items-center gap-10 w-[400px]">
							<label className="w-[150px]">Ngày mua vé</label>
							<Input type="date" />
						</div>
					</div>
					<div className="flex flex-col lg:flex-row lg:justify-between px-10 gap-4">
						<div className="flex  items-center gap-10 w-[400px]">
							<label className="w-[150px]">Khách hàng</label>
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
			<div className="flex justify-between py-2 px-5">
				<h3 className="font-bold ">Danh sách đơn hàng</h3>
				<Button
					onClick={() => setIsOpenAddUser(true)}
					className="bg-[#FF5B00] p-2  flex items-center text-white gap-2 "
				>
					<AiOutlinePlus />
					<span className="text-xs">Tạo mới</span>
				</Button>
			</div>
			<div className="pl-1">
				<Table dataSource={dataSource} columns={columns} />
			</div>

			{/* modal add */}
			<Modal
				open={isOpenAddUser}
				onOk={() => setIsOpenAddUser(false)}
				onCancel={() => setIsOpenAddUser(false)}
				width={1200}
				okType="danger"
				okText="Xác nhận"
			>
				<p className="text-[#FF5B00] text-2xl pb-4">Thêm mới đơn hàng</p>
				<div className="border-t border-2 w-full "></div>
				<div className="p-5 ">
					<div className="w-full  p-4 flex flex-col justify-between gap-6">
						<div className="flex flex-col lg:flex-row lg:justify-between -mx-8 gap-4">
							<div className="flex items-center gap-10  w-[400px]">
								<label className="w-[200px]">Mã đơn hàng</label>
								<Input disabled />
							</div>
							<div className="flex items-center gap-10 w-[400px]">
								<label className="w-[200px]">Mã khách hàng *</label>
								<Input type="date1" />
							</div>
						</div>
						<div className="flex flex-col lg:flex-row lg:justify-between -mx-8 gap-4">
							<div className="flex  items-center gap-10 w-[400px]">
								<label className="w-[200px]">Tên khách hàng</label>
								<Input />
							</div>
							<div className="flex  items-center gap-10 w-[400px]">
								<label className="w-[200px]">Trạng thái</label>
								<Input />
							</div>
						</div>
						<div className="flex flex-col lg:flex-row lg:justify-between -mx-8 gap-4">
							<div className="flex  items-center gap-10 w-[400px]">
								<label className="w-[200px]">Trạng thái *</label>
								<Input />
							</div>
							<div className="flex  items-center gap-10 w-[400px]">
								<label className="w-[200px]">Khoảng thời gian hết hạn *</label>
								<Input />
							</div>
							<div className="flex  items-center gap-10 w-[400px]">
								<label className="w-[200px]">Ngày hết hạn *</label>
								<Input type="date" />
							</div>
						</div>
					</div>
				</div>
			</Modal>

			{/* modal edit */}
			<Modal
				open={isEditing}
				onCancel={() => resetEditing()}
				onOk={() => {
					setDataSource((prev) => {
						return prev.map((user) => {
							if (user.id === editingUser.id) {
								return editingUser;
							} else {
								return user;
							}
						});
					});
					resetEditing();
				}}
				width={1000}
				okType="danger"
				okText="Xác nhận"
			>
				<p className="text-[#FF5B00] text-2xl pb-4">Cập nhật đơn hàng</p>
				<div className="border-t border-2 w-full "></div>
				<div className="p-5 ">
					<div className="w-full  p-4 flex flex-col justify-between gap-6">
						<div className="flex flex-col lg:flex-row lg:justify-between -mx-8 gap-4">
							<div className="flex items-center gap-10  w-[400px]">
								<label className="w-[200px]">Mã đơn hàng</label>
								<Input
									value={editingUser?.typeCode}
									onChange={(e) => {
										setEditingUser((prev) => {
											return { ...prev, typeCode: e.target.value };
										});
									}}
								/>
							</div>
							<div className="flex items-center gap-10 w-[400px]">
								<label className="w-[200px]">Mã khách hàng *</label>
								<Input type="date1" />
							</div>
						</div>
						<div className="flex flex-col lg:flex-row lg:justify-between -mx-8 gap-4">
							<div className="flex  items-center gap-10 w-[400px]">
								<label className="w-[200px]">Tên khách hàng</label>
								<Input
									value={editingUser?.name}
									onChange={(e) => {
										setEditingUser((prev) => {
											return { ...prev, name: e.target.value };
										});
									}}
								/>
							</div>
							<div className="flex  items-center gap-10 w-[400px]">
								<label className="w-[200px]">Địa chỉ email</label>
								<Input />
							</div>
						</div>
						<div className="flex flex-col lg:flex-row lg:justify-between -mx-8 gap-4">
							<div className="flex  items-center gap-10 w-[400px]">
								<label className="w-[200px]">Trạng thái *</label>
								<Input
									value={editingUser?.status}
									onChange={(e) => {
										setEditingUser((prev) => {
											return { ...prev, status: e.target.value };
										});
									}}
								/>
							</div>
							<div className="flex  items-center gap-10 w-[400px]">
								<label className="w-[200px]">Khoảng thời gian hết hạn *</label>
								<Input />
							</div>
							<div className="flex  items-center gap-10 w-[400px]">
								<label className="w-[200px]">Ngày hết hạn *</label>
								<Input type="date" />
							</div>
						</div>
					</div>
				</div>
			</Modal>

			{/* modal view */}
			<Modal
				open={isOpenUser}
				onOk={() => setIsOpenUser(false)}
				onCancel={() => setIsOpenUser(false)}
				width={1200}
				okType=""
				okText=" "
			>
				<p className="text-[#FF5B00] text-2xl pb-4">Chi tiết đơn hàng</p>
				<div className="border-t border-2 w-full "></div>
				<div className="p-5 ">
					<div className="w-full  p-4 flex flex-col justify-between gap-6">
						<div className="flex flex-col lg:flex-row lg:justify-between -mx-8 gap-4">
							<div className="flex items-center gap-10  w-[400px]">
								<label className="w-[200px]">Mã đơn hàng</label>
								<p>{viewUser?.typeCode}</p>
							</div>
							<div className="flex items-center gap-10 w-[400px]">
								<label className="w-[200px]">Mã khách hàng *</label>
								<p>VN007</p>
							</div>
						</div>
						<div className="flex flex-col lg:flex-row lg:justify-between -mx-8 gap-4">
							<div className="flex  items-center gap-10 w-[400px]">
								<label className="w-[200px]">Tên khách hàng</label>
								<p>{viewUser?.name}</p>
							</div>
							<div className="flex  items-center gap-10 w-[400px]">
								<label className="w-[200px]">Địa chỉ email</label>
								<p>ABC@gmail.com</p>
							</div>
						</div>
						<div className="flex flex-col lg:flex-row lg:justify-between -mx-8 gap-4">
							<div className="flex  items-center gap-10 w-[400px]">
								<label className="w-[200px]">Trạng thái *</label>
								<p>{viewUser?.status}</p>
							</div>
							<div className="flex  items-center gap-10 w-[400px]">
								<label className="w-[200px]">Khoảng thời gian hết hạn *</label>
								<p>30 Ngày</p>
							</div>
							<div className="flex  items-center gap-10 w-[400px]">
								<label className="w-[200px]">Ngày hết hạn *</label>
								<p>25/08/2022</p>
							</div>
						</div>
					</div>
				</div>
			</Modal>
		</div>
	);
};

export default OrderManagement;
