import { Link } from "react-router-dom";
import Button from "./Button";
import Input from "./Input";

const Login = () => {
	return (
		<div className="fixed h-full w-full bg-neutral-100 flex justify-center items-center  px-3 ">
			<div className="flex flex-col w-full sm:w-[393px] gap-5 ">
				<Link to="/" className="mx-auto text-2xl font-bold text-red-600">
					LOTTE
				</Link>
				<Input label="Email hoặc tài khoản" />
				<Input label="Mật khẩu" />
				<div className="w-full flex justify-end">
					<a href="/" className="">
						Quên mật khẩu?
					</a>
				</div>
				<Button className="bg-[#FF5B00] text-white p-[8px] hover:bg-red-500 transition duration-150 ease-out rounded w-full">
					Đăng Nhập
				</Button>
			</div>
		</div>
	);
};

export default Login;
