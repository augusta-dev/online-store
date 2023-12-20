"use client";
import React from "react";
import { UploadButton } from "@uploadthing/react";
import { useState, useEffect } from "react";
export default function Upload() {
	const [images, setImages] = useState([]);
	const [totalImages, setTotalImages] = useState([]);
	//console.log(totalImages);
	return (
		<>
			<UploadButton
				className=" font-athiti text-grey-67 w-full h-fit rounded my-2 !px-8"
				placeholder=""
				endpoint="imageUploader"
				onClientUploadComplete={(res) => {
					const newImages = res.map((response) => ({
						Key: response.key,
						Url: response.url,
					  }));
					  setTotalImages((prevImages) => [...prevImages, ...newImages]);
					console.log("Files: ", res, totalImages);
				}}
				onUploadError={(error) => {
					console.log("Error: ", error.message);
				}}
			/>
		</>
	);
}
