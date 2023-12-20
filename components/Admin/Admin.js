"use client";
import Image from "next/image";
import Input from "../UI/Input";
import Upload from "./Upload";
import UploadProvider from "../Providers/UploadProvider";
import UploadContext from "../Providers/UploadContext";

import avatar from "../../assets/avatar.svg";
import { useContext, useState, useEffect } from "react";

const AdminPage = (props) => {
	const UploadCtx = useContext(UploadContext);
	const images = UploadCtx.images;
	const [isFull, setIsFull] = useState(false);
	//const [productName, brandName, colorOptions, sizeOptions, initialPrice, finalPrice] = "";
	const [productName, setProductName] = useState("");
	const [brandName, setBrandName] = useState("");
	const [colorOptions, setColorOptions] = useState("");
	const [sizeOptions, setSizeOptions] = useState("");
	const [initialPrice, setInitialPrice] = useState("");
	const [finalPrice, setFinalPrice] = useState("");
	const details = {
		pn: productName,
		bn: brandName,
		co: colorOptions,
		so: sizeOptions,
		ip: initialPrice,
		fp: finalPrice,
	};
	const detailsArray = Object.values(details);
	console.log(details);
	useEffect(() => {
		const boolean = [];
		detailsArray.forEach((detail) => {
			boolean.push(detail.length !== 0);
		});
		console.log(boolean)
		setIsFull(boolean);

		// if (
		// 	productName &&
		// 	brandName &&
		// 	colorOptions &&
		// 	sizeOptions &&
		// 	initialPrice &&
		// 	finalPrice
		// ) {
		// 	setIsFull(true);
		// } else{
		// 	setIsFull(false);
		// }
	}, [
		productName,
		brandName,
		colorOptions,
		sizeOptions,
		initialPrice,
		finalPrice,
	]);

	const submitHandler = () => {
		if (UploadCtx.images.length > 0 && isFull) {
			UploadCtx.setDetails();
		}
	};
	return (
		<UploadProvider>
			<form className="flex items-center justify-center py-6 px-4  flex-col">
				<h1 className="text-grey-D9 text-3xl font-source font-semibold pb-3">
					Enter Data
				</h1>

				<button className="text-grey-D9 bg-grey-22 h-24 w-24 rounded-lg mb-1 flex items-center align-middle justify-center">
					<Image
						src={avatar}
						className="self-center h-24 w-16"
						alt="avatar"
					></Image>
				</button>
				<Upload></Upload>
				<Input
					placeholder="Product Name"
					onChange={(e) => {
						setProductName(e.target.value);
						console.log(e.target.value);
					}}
				/>
				<Input
					placeholder="Brand Name"
					onChange={(e) => {
						setBrandName(e.target.value);
						console.log(e.target.value);
					}}
				/>
				<Input
					placeholder="Colour Options"
					onChange={(e) => {
						setColorOptions(e.target.value);
						console.log(e.target.value);
					}}
				/>
				<Input
					placeholder="Size Options"
					onChange={(e) => {
						setSizeOptions(e.target.value);
						console.log(e.target.value);
					}}
				/>
				<Input
					placeholder="Initial Price"
					onChange={(e) => {
						setInitialPrice(e.target.value);
						console.log(e.target.value);
					}}
				/>
				<Input
					placeholder="Final Price"
					onChange={(e) => {
						setFinalPrice(e.target.value);
						console.log(e.target.value);
					}}
				/>

				<button
					onClick={submitHandler}
					className={`${
						isFull ? "bg-grey-D9" : "bg-grey-67"
					} h-12 w-full rounded-lg mt-16 text-grey-12 text-2xl font-medium`}
				>
					Save
				</button>
			</form>
		</UploadProvider>
	);
};
export default AdminPage;
