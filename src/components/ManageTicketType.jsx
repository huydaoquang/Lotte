import { useState } from "react";
import { Table, Modal, Input as InputAnt, Form } from "antd";
import { DeleteOutlined, EditOutlined, EyeOutlined } from "@ant-design/icons";
import { AiOutlinePlus } from "react-icons/ai";

import Button from "./Button";
import Header from "./Home/Header";
import Input from "./Input";

const ManageTicketType = () => {
	const [dataSource, setDataSource] = useState([
		{
			id: 1,
			typeCode: "VN002",
			name: "[Khách Việt Nam] Vé vào cửa",
			price1: "119.000",
			price2: "119.000",
			vat: "0",
			status: "Hoạt động",
		},
		{
			id: 2,
			typeCode: "VN003",
			name: "[Khách Việt Nam] Vé vào cửa",
			price1: "119.000",
			price2: "119.000",
			vat: "0",
			status: "Hoạt động",
		},
		{
			id: 3,
			typeCode: "VN004",
			name: "[Khách Việt Nam] Vé vào cửa",
			price1: "119.000",
			price2: "119.000",
			vat: "0",
			status: "Hoạt động",
		},
		{
			id: 4,
			typeCode: "VN005",
			name: "[Khách Việt Nam] Vé vào cửa",
			price1: "119.000",
			price2: "119.000",
			vat: "0",
			status: "Hoạt động",
		},
		{
			id: 5,
			typeCode: "VN006",
			name: "[Khách Việt Nam] Vé vào cửa",
			price1: "119.000",
			price2: "119.000",
			vat: "0",
			status: "Hoạt động",
		},
		{
			id: 6,
			typeCode: "VN007",
			name: "[Khách Việt Nam] Vé vào cửa",
			price1: "119.000",
			price2: "119.000",
			vat: "0",
			status: "Hoạt động",
		},
		{
			id: 7,
			typeCode: "VN008",
			name: "[Khách Việt Nam] Vé vào cửa",
			price1: "119.000",
			price2: "119.000",
			vat: "0",
			status: "Hoạt động",
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
			title: "Mã loại vé",
			dataIndex: "typeCode",
		},
		{
			key: "3",
			title: "Tên loại vé",
			dataIndex: "name",
		},
		{
			key: "4",
			title: "Giá cước VAT (VND)",
			dataIndex: "price1",
		},
		{
			key: "5",
			title: "VAT (%)",
			dataIndex: "vat",
		},
		{
			key: "6",
			title: "Giá sau VAT (VND)",
			dataIndex: "price2",
		},
		{
			key: "7",
			title: "Trạng thái",
			dataIndex: "status",
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
		<>
			<div className="w-full overflow-x-hidden">
				<Header title="Quản lý loại vé" />
				<div className="p-5">
					<div className="w-full gap-10 border p-2 flex flex-col justify-between">
						<div className="flex flex-col md:flex-row md:justify-between gap-2 px-10">
							<div className="flex items-center gap-10  w-[400px]">
								<label className="w-[150px]">Mã loại vé</label>
								<Input />
							</div>
							<div className="flex items-center gap-10 w-[400px]">
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
				<div className="flex justify-between px-5 py-2">
					<h3 className="font-bold ">Danh sách loại vé</h3>
					<Button
						onClick={() => setIsOpenAddUser(true)}
						className="bg-[#FF5B00] p-2  flex items-center text-white gap-2 "
					>
						<AiOutlinePlus />
						Tạo mới
					</Button>
				</div>
				<Table dataSource={dataSource} columns={columns} />

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
									<label className="w-[200px]">
										Khoảng thời gian hết hạn *
									</label>
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
					<p className="text-[#FF5B00] text-2xl pb-4">Cập nhật loại vé</p>
					<div className="border-t border-2 w-full "></div>
					<div className="p-5 ">
						<div className="w-full  p-4 flex flex-col justify-between gap-6">
							<div className="flex flex-col lg:flex-row lg:justify-between -mx-8 gap-4">
								<div className="flex items-center gap-10  w-[400px]">
									<label className="w-[200px]">Mã vé *</label>
									<InputAnt
										disabled
										value={editingUser?.typeCode}
										onChange={(e) => {
											setEditingUser((prev) => {
												return { ...prev, typeCode: e.target.value };
											});
										}}
									/>
								</div>
								<div className="flex items-center gap-10 w-[400px]">
									<label className="w-[200px]">Tên vé *</label>
									<InputAnt value={editingUser?.typeCode} />
								</div>
							</div>
							<div className="flex flex-col lg:flex-row lg:justify-between -mx-8 gap-4">
								<div className="flex items-center gap-10 w-[400px]">
									<label className="w-[200px]">Giá trước VAT *</label>
									<InputAnt value={editingUser?.price1} suffix="VND" />
								</div>
								<div className="flex  items-center gap-10 w-[400px]">
									<label className="w-[200px]">VAT</label>
									<InputAnt value={editingUser?.vat} suffix="%" />
								</div>
							</div>
							<div className="flex flex-col lg:flex-row lg:justify-between -mx-8 gap-4">
								<div className="flex  items-center gap-10 w-[400px]">
									<label className="w-[200px]">Giá sau VAT *</label>
									<InputAnt value={editingUser?.price1} suffix="VND" disabled />
								</div>
								<div className="flex  items-center gap-10 w-[400px]">
									<label className="w-[200px]">Trạng thái</label>
									<Input value={editingUser?.status} />
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
					<p className="text-[#FF5B00] text-2xl pb-4">Chi tiết loại vé</p>
					<div className="border-t border-2 w-full "></div>
					<div className="p-5 ">
						<div className="w-full  p-4 flex flex-col justify-between gap-6">
							<div className="flex flex-col lg:flex-row lg:justify-between -mx-8 gap-4">
								<div className="flex items-center gap-10  w-[400px]">
									<label className="w-[200px]">Mã vé</label>
									<p>{viewUser?.typeCode}</p>
								</div>
								<div className="flex items-center gap-10 w-[400px]">
									<label className="w-[200px]">Tên vé</label>
									<p>VN007</p>
								</div>
							</div>
							<div className="flex flex-col lg:flex-row lg:justify-between -mx-8 gap-4">
								<div className="flex  items-center gap-10 w-[400px]">
									<label className="w-[200px]">Giá trước VAT</label>
									<p>{viewUser?.price1} VND</p>
								</div>
								<div className="flex  items-center gap-10 w-[400px]">
									<label className="w-[200px]">VAT</label>
									<p>{viewUser?.vat} %</p>
								</div>
							</div>
							<div className="flex flex-col lg:flex-row lg:justify-between -mx-8 gap-4">
								<div className="flex  items-center gap-10 w-[400px]">
									<label className="w-[200px]">Giá sau VAT</label>
									<p>{viewUser?.price2} VND</p>
								</div>
								<div className="flex  items-center gap-10 w-[400px]">
									<label className="w-[200px]">Trạng thái</label>
									<p>{viewUser?.status}</p>
								</div>
							</div>
						</div>
					</div>
				</Modal>
			</div>
		</>
	);
};

export default ManageTicketType;
