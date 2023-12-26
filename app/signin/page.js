'use client'
import React from 'react'
import { useState, useSession, useEfect } from 'react';

export default function page() {
    const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const { data: session } = useSession();
	const [error, setError] = useState({});

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
				setError({
					color: "red",
					message: "Invalid Credentials",
					image: "",
					title: "Login Unsuccessful",
				});
				return;
			}
			setError({ color: "green", message: "Successful" });
		} catch (err) {
			console.log(err);
		}
	};
	useEffect(() => {
		console.log(session);
	}, [session]);

  return (
    <div>
      
    </div>
  )
}
