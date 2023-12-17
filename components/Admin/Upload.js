"use client";
import React from "react";
import { UploadButton } from "@uploadthing/react";
import { useState, useEffect } from "react";
export default function Upload() {
	const [images, setImages] = useState([]);
	const [totalImages, setTotalImages] = useState({});
	// useEffect(() => {
	// 	if (images.length > 0){
    //         const imagesObject = {Key: images[0], Url: images[1]}
    //         setTotalImages({...imagesObject});
    //     }
	// }, [images]);
	//console.log(images, totalImages);
	return (
		<>
			<UploadButton
				className="bg-red-600"
				placeholder=""
				endpoint="imageUploader"
				onClientUploadComplete={(res) => {
					res.forEach((response)=> {
						console.log(response)
						//setImages([response.key, response.url])
						if (response.key){
							const imagesObject = {Key: response.key, Url: response.url}
							setTotalImages({...imagesObject});
						}
					})
					//setImages([res[0].key, res[0].url]);
					console.log("Files: ", res, images);
				}}
				onUploadError={(error) => {
					console.log("Error: ", error.message);
				}}
			/>
		</>
	);
}
