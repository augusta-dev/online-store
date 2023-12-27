"use client";
import Image from "next/image";
import Input from "../UI/Input";
import Upload from "./Upload";
import UploadContext from "../Providers/UploadContext";
import ColourOptions from "./ColourOptions";
import SizeOptions from "./SizeOptions";
import avatar from "../../assets/gamer.png";
import { useContext, useState, useEffect } from "react";
import cross from "../../assets/cross.svg";
import { signOut, useSession } from "next-auth/react";
import Categories from "./Categories";
import warning from "../../assets/warning.svg";
import Router from "next/router";
import { useRouter } from "next/navigation";
const AdminPage = (props) => {
	const UploadCtx = useContext(UploadContext);
	const images = UploadCtx.images;
	const co = UploadCtx.colorOptions;
	const { data: session } = useSession();
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
	const router = useRouter();

	const clearall = () => {
		setDetails({ pn: "", bn: "", ip: 0, fp: 0 });
		setIsFull(false);
		setShowCO(false);
		setShowSO(false);
		setShowCat(false);
		UploadCtx.setImages({});
	};

	const submitHandler = (e) => {
		e.preventDefault();
		if (images.length > 0 && co && isFull) {
			console.log(images.length);
			UploadCtx.setDetails(details);
			sendImages();
			clearall();
		}
		console.log(details);
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

	if (session && session.user.email === "augustan506@gmail.com") {
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
					value={details.pn}
					onChange={(e) => {
						setDetails({ ...details, pn: e.target.value });
					}}
				/>
				<Input
					placeholder="Brand Name"
					type="text"
					value={details.bn}
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
					value={details.ip}
					onChange={(e) => {
						setDetails({ ...details, ip: e.target.value });
					}}
				/>
				<Input
					placeholder="Final Price in Naira"
					type="number"
					value={details.fp}
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
	} else {
		return (
			<div className="flex flex-col wrap justify-center align-middle items-center h-[calc(100dvh-176px)]">
				<Image
					src={warning}
					className="w-36 h-36"
					alt="warning"
				></Image>
				<p className=" text-grey-67 pt-6 text-lg font-athiti ">
					You do not have access to this page!
				</p>
			</div>
		);
	}
};
export default AdminPage;
