import React from "react";
import style from "@/app/styles/Featured.module.css";
import Image from "next/image";
const Featured = () => {
	return (
		<>
			<div>
				<div className={style.featured__container}>
					<h1
						className={`outfit font-medium text-lg ${style["featured__title"]}`}
					>
						Featured On
					</h1>
					<div
						className={`${style["featured__iconholder"]} opacity-80 bg-[#0C4A9D] flex justify-evenly items-center `}
					>
						<Image
							className={style.featured__swiggylogo}
							src="/Swiggy-logo.png"
							width={206}
							height={57}
						></Image>
						<Image
							className={style.featured__realmelogo}
							src="/realme-logo.png"
							width={214}
							height={60}
						></Image>
						<Image
							className={style.featured__mxplayerlogo}
							src="/MXplayer-logo.png"
							width={255}
							height={63}
						></Image>
						<Image
							className={style.featured__whitehilllogo}
							src="/whitehill-logo.jpg"
							width={100}
							height={55}
						></Image>
					</div>
				</div>
			</div>
		</>
	);
};

export default Featured;
