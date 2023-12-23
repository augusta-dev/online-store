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
	const [details, setDetails] = useState({
		pn: "",
		bn: "",
		co: "",
		so: "",
		ip: "",
		fp: "",
	});
	const detailsArray = Object.values(details);
	useEffect(() => {
		const boolean = [];
		detailsArray.forEach((detail) => {
			boolean.push(detail.length !== 0);
		});
		const allTrue = boolean.every((val) => val === true);
		console.log(images)
		if (images !== undefined) {
			(images.length > 0) ? setIsFull(allTrue) : setIsFull(false);
		}
	}, [details]);

	const submitHandler = (e) => {
		e.preventDefault();
		if (images.length > 0 && isFull) {
			console.log(images.length)
			UploadCtx.setDetails(details);
		}
	};
	return (
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
				type="text"
				onChange={(e) => {
					setDetails({ ...details, pn: e.target.value });
				}}
			/>
			<Input
				placeholder="Brand Name"
				type="text"
				onChange={(e) => {
					setDetails({ ...details, bn: e.target.value });
				}}
			/>
			<Input
				placeholder="Colour Options"
				type="text"
				onChange={(e) => {
					setDetails({ ...details, co: e.target.value });
				}}
			/>
			<Input
				placeholder="Size Options"
				type="text"
				onChange={(e) => {
					setDetails({ ...details, so: e.target.value });
				}}
			/>
			<Input
				placeholder="Initial Price in Naira"
				type="number"
				onChange={(e) => {
					setDetails({ ...details, ip: e.target.value });
				}}
			/>
			<Input
				placeholder="Final Price in Naira"
				type="number"
				onChange={(e) => {
					setDetails({ ...details, fp: e.target.value });
				}}
			/>

			<button
				onClick={(e) => {
					submitHandler(e);
				}}
				type="submit"
				className={`${
					isFull ? "bg-grey-D9" : "bg-grey-67"
				} h-12 w-full rounded-lg mt-16 text-grey-12 text-2xl font-medium`}
			>
				Save
			</button>
		</form>
	);
};
export default AdminPage;
