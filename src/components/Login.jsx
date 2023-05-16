import { Link } from "react-router-dom";
import Button from "./Button";
import Input from "./Input";

const Login = () => {
	return (
		<div className="flex flex-col  gap-5 w-[393px]">
			<h1 className="mx-auto text-2xl font-bold text-red-600">LOTTE</h1>
			<Input label="Email hoặc tài khoản" />
			<Input label="Mật khẩu" />
			<div className="w-full flex justify-end">
				<Link href="/" className="">
					Quên mật khẩu?
				</Link>
				Link
			</div>
			<Button
				label="Đăng Nhập"
				className="bg-[#FF5B00] text-white p-[8px] hover:bg-red-500 transition duration-150 ease-out rounded "
			/>
		</div>
	);
};

export default Login;
