"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "@/app/styles/Header.module.css";

const Header = () => {
	const [isOpen, setisOpen] = useState(false);

	return (
		<>
			<div
				className={`text-white bg-[#071E3D] w-screen ${styles["header__container"]} ${styles["container2"]}`}
			>
				<div
					className={`Header flex justify-end items-center ${styles["header__section"]}`}
				>
					<Image
						className={`cursor-pointer mr-auto ${styles["header__logo"]}`}
						src="/logo.png"
						alt="Logo"
						width={100}
						height={100}
					></Image>
					<div className={`outfit text-lg font-bold ${styles["Links"]}`}>
						<button
							className={`hidden ${styles["header__slider"]} mr-2 ml-2 pl-4 pr-4 pt-1 pb-1 hover:bg-[#21E6C1] hover:text-black rounded-lg`}
							onClick={() => setisOpen(!isOpen)}
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="1.5"
								stroke="currentColor"
								class="w-6 h-6"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
								/>
							</svg>
						</button>
						{/* DEKSTOP NAVIGATION */}
						<div>
							<ul className={`list-none ${styles["dekstopNav"]}`}>
								<li
									className={`inline-block mr-2 ml-2 pl-4 pr-4 pt-1 pb-1 ${styles["names"]} hover:bg-[#21E6C1] hover:text-black rounded-lg`}
								>
									<Link href="/">Home</Link>
								</li>
								<li
									className={`inline-block mr-2 ml-2 pl-4 pr-4 pt-1 pb-1 ${styles["names"]} hover:bg-[#21E6C1] hover:text-black rounded-lg`}
								>
									<a href="#aboutus">About Us</a>
								</li>
								<li
									className={`inline-block mr-2 ml-2 pl-4 pr-4 pt-1 pb-1 ${styles["names"]} hover:bg-[#21E6C1] hover:text-black rounded-lg`}
								>
									<a href="#services">Services</a>
								</li>
								<li
									className={`inline-block mr-2 ml-2 pl-4 pr-4 pt-1 pb-1 ${styles["names"]} hover:bg-[#21E6C1] hover:text-black rounded-lg`}
								>
									<a href="#testimonials">Testimonials</a>
								</li>
								<li
									className={`inline-block mr-2 ml-2 pl-4 pr-4 pt-1 pb-1 ${styles["names"]} hover:bg-[#21E6C1] hover:text-black rounded-lg`}
								>
									<a href="#contact">Contact Us</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
				{/* MOBILE NAVIGATION */}
				<div
					className={`${styles["mobileNav_transition"]} ${
						isOpen ? "block" : "hidden"
					}`}
				>
					<ul className={`list-none ult_toggle ${styles["mobileNav"]}`}>
						<li
							className={`inline-block mr-2 ml-2 pl-4 pr-4 pt-1 pb-1 ${styles["names"]} hover:bg-[#21E6C1] hover:text-black rounded-lg`}
						>
							<Link href="/">
								Home <div className={styles.active}></div>
							</Link>
						</li>
						<li
							className={`inline-block mr-2 ml-2 pl-4 pr-4 pt-1 pb-1 ${styles["names"]} hover:bg-[#21E6C1] hover:text-black rounded-lg`}
						>
							<a href="#aboutus">About Us</a>
						</li>
						<li
							className={`inline-block mr-2 ml-2 pl-4 pr-4 pt-1 pb-1 ${styles["names"]} hover:bg-[#21E6C1] hover:text-black rounded-lg`}
						>
							<a href="#services">Services</a>
						</li>
						<li
							className={`inline-block mr-2 ml-2 pl-4 pr-4 pt-1 pb-1 ${styles["names"]} hover:bg-[#21E6C1] hover:text-black rounded-lg`}
						>
							<a href="#testimonials">Testimonials</a>
						</li>
						<li
							className={`inline-block mr-2 ml-2 pl-4 pr-4 pt-1 pb-1 ${styles["names"]} hover:bg-[#21E6C1] hover:text-black rounded-lg`}
						>
							<a href="#contact">Contact Us</a>
						</li>
					</ul>
				</div>
			</div>
		</>
	);
};

export default Header;
