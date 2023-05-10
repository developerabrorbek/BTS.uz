// import bgimg from "../../assets/login-bg.png"
const Login = () => {
	return (
		<><section className="register bg-[url('../../assets/login-bg.png')]">
			<div className="login">
				<div className="container mx-auto w-[700px] py-24">
					<div className="login__inner border border-lime-950 rounded-md p-2">
						<h1 className=" text-[32px]">Login</h1>
						<form className="mt-8 flex flex-col gap-8 items-start w-full">
							<label htmlFor="name" className="text-green-400 w-full">
								Username
								<input type="text" id="name" placeholder="Enter your Username" className="mt-2 block w-full p-3 rounded-md focus:border-sky-600 focus:border border border-sky-600 " />
							</label>
							<label htmlFor="password" className="text-green-400 w-full">
								Password
								<input type="password" id="password" placeholder="Enter your Password" className="mt-2 block w-full p-3 rounded-md focus:border-sky-600 focus:border border border-sky-600 " />
							</label>
							<button type="submit" className="p-3 bg-blue-600 rounded-md w-full text-white">Login</button>
						</form>
						<div className="another-way flex justify-between px-2 mt-5">
							<a href="#" className="account text-blue-900">
								Don`t have an account?
							</a>
							<a href="#" className="forgot account text-blue-900">
								Forgot password?
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
			
		</>
	);
};

export default Login;
