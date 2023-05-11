const Signin = () => {
	return (
		<>
			<div className="sign-up">
				<div className="container mx-auto w-[700px] py-24">
					<div className="signin__inner">
						<h1 className=" text-[32px]">Sign up</h1>
						<form className="mt-8 flex flex-col gap-8 items-start w-full">
							<label htmlFor="name" className="text-green-400 w-full">
								Username
								<input type="text" id="name" placeholder="Enter your Username" className="mt-2 block w-full p-3 rounded-md focus:border-sky-600 focus:border border border-sky-600 " />
							</label>
							<label htmlFor="email" className="text-green-400 w-full">
								Email
								<input type="email" id="email" placeholder="Enter your Email" className="mt-2 block w-full p-3 rounded-md focus:border-sky-600 focus:border border border-sky-600 " />
							</label>
							<label htmlFor="password" className="text-green-400 w-full">
								Password
								<input type="password" id="password" placeholder="Enter your Password" className="mt-2 block w-full p-3 rounded-md focus:border-sky-600 focus:border border border-sky-600 " />
							</label>
							<button type="submit" className="p-3 bg-blue-600 rounded-md w-full text-white">Sign up</button>
						</form>
						<div className="another-way flex justify-between px-2 mt-5">
							
							<a href="#" className="forgot account text-blue-900">
								Forgot password?
							</a>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Signin;
