"use client";
import React, { useEffect } from "react";
import AdminPage from "./Admin";
import { SessionProvider, signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Input from "../UI/Input";
export default function AdminSignin() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const { data: session } = useSession();

	const submitHandler = async (e) => {
		e.preventDefault();
		try {
			const res = await signIn("credentials", {
				email,
				password,
				redirect: false,
			});
			console.log("something", res);
			if (res.error) {
				//console.log(res)
				setError({
					color: "red",
					message: "Invalid Credentials",
					image: "",
					title: "Login Unsuccessful",
				});
				return;
			}
			setError({ color: "green", message: "Successful" });
			//console.log(email)

			console.log(emailCtx, email);
			router.replace("dashboard");
		} catch (err) {
			console.log(err);
		}
	};
	useEffect(() => {
		console.log(session);
	}, [session]);

	if (session && session.user.email === "augustan506@gmail.com") {
		return (
			<>
				<AdminPage></AdminPage>
			</>
		);
	} else {
		return (
			<form className="flex flex-col h-full py-6 px-4 align-middle items-center">
				<h1 className="w-full font-source text-grey-D9 font-semibold text-3xl text-center">Please Sign In</h1>
				<Input 
					type="email"
					onChange={(e) => setEmail(e.target.value)}
					onMouseOver={(e) => setEmail(e.target.value)}
					onMouseOut={(e) => setEmail(e.target.value)}
				/>
				<Input
					type="password"
					onChange={(e) => setPassword(e.target.value)}
					onMouseOut={(e) => setPassword(e.target.value)}
					onMouseOver={(e) => setPassword(e.target.value)}
				/>
				<button
					type="submit"
					onClick={(e) => {
						submitHandler(e);
					}}
					className="bg-red-600 w-24"
				>
					Submit
				</button>
			</form>
		);
	}
}
