import "./globals.css";
import localFont from "next/font/local";
import "tailwindcss/tailwind.css";
import React from "react";
import Background from "../components/layout/Background";
const athiti = localFont({
	src: [
		{
			path: "../assets/fonts/Athiti-Regular.ttf",
		},
	],
	variable: "--font-athiti",
});
const signika = localFont({
	src: [
		{
			path: "../assets/fonts/SignikaNegative-Regular.ttf",
		},
	],
	variable: "--font-signika-negative",
});
const source = localFont({
	src: [
		{
			path: "../assets/fonts/source-sans-pro.regular.ttf",
		},
	],
	variable: "--font-squada-one",
});
export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body
				className={`${athiti.variable} ${signika.variable} ${source.variable}`}
			>
				<main>
					<Background>{children}</Background>
				</main>
			</body>
		</html>
	);
}
