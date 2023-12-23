"use client";
import React, { useContext, useEffect } from "react";
import Image from "next/image";
import tick from "../../assets/tick.svg";
import { useState } from "react";
import UploadContext from "../Providers/UploadContext";
export default function ColourInput(props) {
	const uploadCtx = useContext(UploadContext);

	const [isClicked, setIsClicked] = useState(false);
    useEffect(()=>{
		uploadCtx.setColourOption([props.value, isClicked]);
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
				className={`${props.className} h-10 w-10 flex justify-center items-center rounded`}
			>
				{isClicked && (
					<Image
						src={tick}
						alt="tick"
						className="h-5 w-5"
					/>
				)}
			</button>
		</div>
	);
}
