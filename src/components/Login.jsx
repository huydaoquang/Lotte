import Button from "./Button";
import Input from "./Input";

const Login = () => {
	return (
		<div className="flex justify-center items-center w-full px-3">
			<div className="flex flex-col w-full sm:w-[393px] gap-5 ">
				<h1 className="mx-auto text-2xl font-bold text-red-600">LOTTE</h1>
				<Input label="Email hoặc tài khoản" />
				<Input label="Mật khẩu" />
				<div className="w-full flex justify-end">
					<a href="/" className="">
						Quên mật khẩu?
					</a>
				</div>
				<Button
					label="Đăng Nhập"
					className="bg-[#FF5B00] text-white p-[8px] hover:bg-red-500 transition duration-150 ease-out rounded w-full"
				/>
			</div>
		</div>
	);
};

export default Login;
