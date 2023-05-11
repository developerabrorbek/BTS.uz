const Forgot = () => {
	return (
		<>
			<div className="forgot-password">
				<div className="container mx-auto w-[700px] py-24">
					<div className="signin__inner">
						<h1 className=" text-[32px]">Forgot password?</h1>
                        <p className="text">Enter the email address associated with your account and we will send a link to reset your password</p>
						<form className="mt-8 flex flex-col gap-8 items-start w-full">
							<label htmlFor="email" className="text-green-400 w-full">
								Email
								<input type="email" id="email" placeholder="Enter your Email" className="mt-2 block w-full p-3 rounded-md focus:border-sky-600 focus:border border border-sky-600 " />
							</label>
							<button type="submit" className="p-3 bg-blue-600 rounded-md w-full text-white">Continue</button>
						</form>
						<div className="another-way flex justify-between px-2 mt-5">
							<p className="sign">Don`t have an account? </p>
							<a href="#" className="forgot account text-blue-900">
								Sign up?
							</a>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Forgot;
