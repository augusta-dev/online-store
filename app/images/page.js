"use client";
import React, { useState } from "react";
import AccessDenied from "../../components/UI/AccessDenied";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Header from "../../components/UI/Header";
import { useEffect } from "react";
export default function Storepage() {
	const { data: session } = useSession();
	let [images, setImages] = useState([]);
	let gottenImages = [];
	const fetchImages = async () => {
		try {
			let list = await fetch("/api/get-images");
			const lists = await list.json();
			const gottenImages = lists.reduce((acc, item) => {
				const imageUrls = item.images.map((imag) => imag.Url);
				return acc.concat(imageUrls);
			}, []);
			console.log(gottenImages);
			setImages(gottenImages);
		} catch (e) {
			console.error(e);
		}
	};
	useEffect(() => {
		console.log(images);
		fetchImages();
	}, []);
	if (session && session.user.email === "augustan506@gmail.com") {
		return (
			<div className="flex items-center justify-center py-6 px-4 font-source flex-col">
				<div className="flex w-36 justify-center items-center align-middle text-center flex-col">
					<Header value="Images" />
					<p className="italic mb-1">Total Number of Images: {images.length}</p>
					<div className="flex w-full bg-grey-12 gap-1">
					{images.map((image) => {
						console.log(image);
						return (
							<button
								className="bg-grey-22 w-1/3 rounded-lg focus:w-[calc(100vw-16px)] focus:z-2 focus:h-auto"
								key={Math.random()}
							>
								<Image
									width="5000"
									height="5000"
									src={image}
									alt="image" className="h-auto w-full"
									
								/>
							</button>
						);
					})}
					</div>
					
				</div>
			</div>
		);
	} else {
		return <AccessDenied />;
	}
}
