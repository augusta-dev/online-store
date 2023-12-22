"use client";
import React from "react";
import { UploadButton } from "@uploadthing/react";
import { useState, useEffect, useContext } from "react";
import UploadContext from "../Providers/UploadContext";
export default function Upload() {
	const [totalImages, setTotalImages] = useState([]);
	const uploadCtx = useContext(UploadContext);
	useEffect(() => {
		uploadCtx.setImages(totalImages);
	}, [totalImages]);
	
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
					setTotalImages((prevImages) => [
						//...prevImages,
						...newImages,
					]);
					console.log("Files: ", res, totalImages);
				}}
				onUploadError={(error) => {
					console.log("Error: ", error.message);
				}}
			/>
		</>
	);
}
