"use client";
import React, { useContext, useEffect } from "react";
import Image from "next/image";
import tick from "../../assets/tick.svg";
import { useState } from "react";
import UploadContext from "../Providers/UploadContext";
export default function SizeInput(props) {
	const uploadCtx = useContext(UploadContext);

	const [isClicked, setIsClicked] = useState(false);
    useEffect(()=>{
		uploadCtx.setSizeOption([props.value, isClicked]);
    }, [isClicked])
	
	return (
		<div
			value={props.value}
			className="w-fit rounded-lg p-2 bg-grey-22"
		>
			<button
				onClick={(e) => {
					e.preventDefault();
					setIsClicked(!isClicked);
				}}
				className={`${props.className} font-semibold font-athiti text-grey-67 text-2xl h-10 w-10 flex justify-center items-center rounded`}
			> {props.value}
				{isClicked && (
					<Image
						src={tick}
						alt="tick"
						className="absolute h-5 w-5"
					/>
				)}
			</button>
		</div>
	);
}
