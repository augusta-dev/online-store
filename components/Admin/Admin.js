"use client";
import Image from "next/image";
import Input from "../UI/Input";
import Upload from "./Upload";
import UploadProvider from "../Providers/UploadProvider";
import UploadContext from "../Providers/UploadContext";
import ColourOptions from "./ColourOptions";
import SizeOptions from "./SizeOptions";
import avatar from "../../assets/gamer.png";
import { useContext, useState, useEffect } from "react";
import Link from "next/link";
import cross from "../../assets/cross.svg";
import { signOut } from "next-auth/react";
import Categories from "./Categories";
const AdminPage = (props) => {
	const UploadCtx = useContext(UploadContext);
	const images = UploadCtx.images;
	const co = UploadCtx.colorOptions;
	const [isFull, setIsFull] = useState(false);
	const [showCO, setShowCO] = useState(false);
	const [showSO, setShowSO] = useState(false);
	const [showCat, setShowCat] = useState(false);
	const [details, setDetails] = useState({
		pn: "",
		bn: "",
		ip: 0,
		fp: 0,
	});
	const detailsArray = Object.values(details);
	useEffect(() => {
		const boolean = [];
		detailsArray.forEach((detail) => {
			boolean.push(detail.length !== 0);
		});
		const allTrue = boolean.every((val) => val === true);
		console.log(images);
		if (images !== undefined) {
			images.length > 0 ? setIsFull(allTrue) : setIsFull(false);
		}
	}, [details, images, co]);

	const submitHandler = (e) => {
		e.preventDefault();
		if (images.length > 0 && co && isFull) {
			console.log(images.length);
			UploadCtx.setDetails(details);
			sendImages();
		}
	};
	const sendImages = async () => {
		try {
			const response = await fetch("/api/image-upload", {
				method: "POST",
				body: JSON.stringify({
					productName: details.pn,
					brandName: details.bn,
					colorOptions: UploadCtx.colorOptions,
					sizeOptions: UploadCtx.sizeOptions,
					categories: UploadCtx.categories,
					initialPrice: details.ip,
					finalPrice: details.fp,
					images: images,
				}),
				headers: {
					"Content-Type": "application/json",
				},
			});
			const data = await response.json();
			console.log(data);
		} catch (error) {
			console.error(error);
		}
	};

	const signout = (e) => {
		e.preventDefault();
		signOut();
	};
	return (
		<form className="flex items-center justify-center py-6 px-4  flex-col">
			<div className="flex w-36 justify-center items-center align-middle text-center">
				<div className="w-full justify-center">
					<h1 className="text-grey-D9 text-3xl font-source font-semibold pb-3 ">
						Enter Data
					</h1>
				</div>

				<button
					// href="/signout"
					onClick={(e) => {
						signout(e);
					}}
					className="w-fit absolute mb-2 ml-[calc(85%-20px)]"
				>
					<Image
						src={cross}
						className="w-5 h-5"
						alt="cross"
					></Image>
				</button>
			</div>

			{/* <button className="text-grey-D9 bg-grey-22 h-24 w-24 rounded-lg mb-1 flex items-center align-middle justify-center"> */}
			<Image
				src={avatar}
				className="self-center h-20 w-20 my-1"
				alt="avatar"
			></Image>
			{/* </button> */}
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
			<button
				className="w-full h-12 mt-2 text-grey-67 bg-grey-22 text-left px-6 rounded-lg"
				onClick={(e) => {
					e.preventDefault();
					setShowCO(!showCO);
				}}
			>
				Colour Options
			</button>
			{showCO && <ColourOptions />}
			<button
				className="w-full h-12 mt-2 text-grey-67 bg-grey-22 text-left px-6 rounded-lg"
				onClick={(e) => {
					e.preventDefault();
					setShowSO(!showSO);
				}}
			>
				Size Options
			</button>
			{showSO && <SizeOptions />}
			<button
				className="w-full h-12 mt-2 text-grey-67 bg-grey-22 text-left px-6 rounded-lg"
				onClick={(e) => {
					e.preventDefault();
					setShowCat(!showCat);
				}}
			>
				Categories
			</button>

			{showCat && (
				<>
					<p className="text-left font-athithi font-thin text-base text-grey-67 italic mt-1 w-full">
						Please select all applicable categories!
					</p>{" "}
					<Categories />
				</>
			)}

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
