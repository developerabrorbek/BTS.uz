import { Link } from "react-router-dom";
import { isAuth } from "../../Hooks/Auth";




const Login = () => {


	const getToken = (e)=>{
		e.preventDefault();
		fetch("http://localhost:8080/api/v1/auth/login", {
			method: "POST",
			accept: "/",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				username : e.target.username.value,
				password: e.target.password.value
			})
		}).then(res => res.json()).then(data =>{
			let token = data.body.token;
			localStorage.setItem("token", token);
			isAuth()
			
		})
	}


	return (
		<>
			<section className="register ">
				<div className="login">
					<div className="container mx-auto w-[700px] py-24">
						<div className="login__inner border border-lime-950 rounded-md p-2">
							<h1 className=" text-[32px]">Login</h1>
							<form onSubmit={(e)=> getToken(e)} className="mt-8 flex flex-col gap-8 items-start w-full">
								<label htmlFor="name" className="text-green-400 w-full">
									Username
									<input
										type="text"
										id="name"
										name="username"
										value="admin"
										placeholder="Enter your Username"
										className="mt-2 block w-full p-3 rounded-md focus:border-sky-600 focus:border border border-sky-600 "
									/>
								</label>
								<label htmlFor="password" className="text-green-400 w-full">
									Password
									<input
										type="password"
										id="password"
										name="password"
										value="123"
										placeholder="Enter your Password"
										className="mt-2 block w-full p-3 rounded-md focus:border-sky-600 focus:border border border-sky-600 "
									/>
								</label>
								<button
									type="submit"
									className="p-3 bg-blue-600 rounded-md w-full text-white"
								>
									Login
								</button>
							</form>
							<div className="another-way flex justify-between px-2 mt-5">
								<Link to="/register" className="account text-blue-900">
									Don`t have an account?
								</Link>
								<Link to="/forgot" className="forgot account text-blue-900">
									Forgot password?
								</Link>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Login;
