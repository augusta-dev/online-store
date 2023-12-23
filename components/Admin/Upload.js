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
	const [errorMessage, setErrorMessage] = useState("")

	return (
		<>
			<UploadButton
				className=" font-athiti !bg-grey-12 text-grey-67 w-full h-fit rounded my-2 !px-8"
				placeholder=""
				endpoint="imageUploader"
				onClientUploadComplete={(res) => {
					const newImages = res.map((response) => ({
						Key: response.key,
						Url: response.url,
					}));
					setTotalImages([...newImages]);
					setErrorMessage("")
					console.log("Files: ", res, totalImages);
				}}
				onUploadError={(error) => {
					console.log("Error: ", error.code);
					if(error.code == "INTERNAL_SERVER_ERROR"){
						setErrorMessage("Please Check Your Internet Connection")
					}
				}}
			/>
			{errorMessage && <p className="text-red-500">{errorMessage}</p>}
		</>
	);
}
