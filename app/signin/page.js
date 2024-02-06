"use client";
import React from "react";
import { useState, useEffect } from "react";
import Input from "../../components/UI/Input";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import animation from "../../assets/animation3.json";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import "../../components/Admin/colour-options.css";

export default function Signin() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const { data: session } = useSession();
	const [error, setError] = useState({});
	const router = useRouter();

	const submitHandler = async (e) => {
		e.preventDefault();
		try {
			const res = await signIn("credentials", {
				email,
				password,
				redirect: false,
			});
			console.log("something", res, email, password);
			if (res.error) {
				setError({
					color: "bg-red-6",
					message: "Invalid Credentials",
					image: "",
					title: "Login Unsuccessful",
				});
				return;
			}
			setError({ color: "bg-green-6", message: "Successful" });
			router.replace("/");
			session.user.email === "augustan506@gmail.com"
				? router.replace("/admin")
				: null;
		} catch (err) {
			console.log(err);
		}
	};
	useEffect(() => {
		console.log(session);
	}, [session]);

	return (
		<form className="flex flex-col h-full py-6 px-4 align-middle items-center">
			<h1 className="w-full font-signika text-grey-67 font-semibold text-3xl text-center">
				Sign In to Continue
			</h1>
			<div>
				<Player
					autoplay
					loop
					src={animation}
					style={{ height: "300px", width: "300px" }}
				></Player>
			</div>

			<Input
				id="input"
				type="email"
				onChange={(e) => setEmail(e.target.value)}
				onMouseOver={(e) => setEmail(e.target.value)}
				onMouseOut={(e) => setEmail(e.target.value)}
			/>
			<Input
				id="input"
				type="password"
				onChange={(e) => setPassword(e.target.value)}
				onMouseOut={(e) => setPassword(e.target.value)}
				onMouseOver={(e) => setPassword(e.target.value)}
			/>
			{error && (
				<div
					className={`${error.color} text-lg text-semibold font-athiti text-grey-22 mt-2 w-full text-center h-12  rounded-lg items-center flex`}
				>
					<h2 className="w-full h-fit py-auto self-center ">
						{error.message}
					</h2>
				</div>
			)}
			<button
				type="submit"
				onClick={(e) => {
					submitHandler(e);
				}}
				className="bg-grey-67 w-full h-12 mt-10 rounded-lg focus:bg-grey-C3"
			>
				Submit
			</button>
		</form>
	);
}
