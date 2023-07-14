import "./globals.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Featured from "./components/Featured";
import Aboutus from "./components/Aboutus";
import Creative from "./components/Creative";
import Testimonials from "./components/Testimonials";
import Head from "next/head";
export default function Home() {
	return (
		<>
			<div className="text-white bg-[#071E3D] w-screen ;">
				<Header />
				<Hero />
				<Featured />
			</div>
			<div className="text-white bg-[#071E3D]">
				<Aboutus />
			</div>
			<div className="text-white creative__bg  ">
				<Creative />
			</div>
			<div className="text-white  testimonials_bg">
				<Testimonials />
			</div>
			
		</>
	);
}
