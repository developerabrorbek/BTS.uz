
import HeroImage from "../../assets/hero-example.png";
const Hero = () => {
	return (
		<section className="hero mt-6 mb-[35px] lg:mb-11  relative">
			<div className="container mx-auto px-6 flex justify-between max-w-[1340px]">
				<div className="xizmatlar bg-[#aea3a3] w-[300px] ">
					<p className="title text-lg bg-zinc-500 p-3">Kategoriyalar</p>
					<ul className="categoryes flex flex-col gap-2 p-3">
						<li className="item ">
							<a href="#" className="hover:text-cyan-700">
								Telefonlar
							</a>
						</li>
						<li className="item">
							<a href="#" className="hover:text-cyan-700">
								Kompyuterlar
							</a>
						</li>
						<li className="item">
							<a href="#" className="hover:text-cyan-700">
								Elektronika
							</a>
						</li>
						<li className="item">
							<a href="#" className="hover:text-cyan-700">
								Kitoblar
							</a>
						</li>
						<li className="item">
							<a href="#" className="hover:text-cyan-700">
								Maishiy texnika
							</a>
						</li>
						<li className="item">
							<a href="#" className="hover:text-cyan-700">
								Sport jihozlari
							</a>
						</li>
						<li className="item">
							<a href="#" className="hover:text-cyan-700">
								Erkaklar uchun kiyimlar
							</a>
						</li>
					</ul>
				</div>
				<div className="banner">
					<div className="hero__inner  w-[900px] h-[300px] bg-[#101010]  sm:px-8 pb-0 sm:py-5 lg:py-0 text-white shadow flex justify-between lg:justify-center lg:gap-x-16 items-center">
						<h1 className="hero-title font-semibold text-[20px] sm:text-[24px] leading-6 sm:leading-8 w-2/3 md:w-1/2 lg:w-1/3 lg:text-center">
							Shopping products
						</h1>
						{/* <img src="https:picsum.photos/id/287/900/500" alt="" className="absolute left-0" /> */}
						<a href="#">
							<img
								src={HeroImage}
								alt="Image"
								className="sm:w-[300px] sm:scale-125"
							/>
						</a>
					</div>
					{/* <div className="half-banner   w-[900px] h-[300px] left-[506px] bg-slate-400 sm:px-8 pb-0 sm:py-5 lg:py-0 text-white shadow flex justify-between lg:justify-center lg:gap-x-16 items-center ">
						{/* <h1 className="hero-title font-semibold text-[20px] sm:text-[24px] leading-6 sm:leading-8 w-2/3 md:w-1/2 lg:w-1/3 lg:text-center">aaaaaaaaaaaaaaaaaa</h1> */}
						{/* <img src="https:picsum.photos/id/609/900/500" alt="" className="" />	 */}
					{/* </div> */}
				</div>
       
			</div>
		</section>
	);
};

export default Hero;
