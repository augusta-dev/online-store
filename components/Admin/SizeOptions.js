import React from "react";
import "./colour-options.css";
import SizeInput from "./SizeInput";

export default function ColourOptions() {
	return (
		<div className="flex flex-wrap flex-row w-full gap-2 mt-2 justify-start">
			<SizeInput value="4XL"></SizeInput>
			<SizeInput value="3XL"></SizeInput>
			<SizeInput value="2XL"></SizeInput>
			<SizeInput value="XXL"></SizeInput>
			<SizeInput value="L"></SizeInput>
			<SizeInput value="M"></SizeInput>
			<SizeInput value="S"></SizeInput>
			<SizeInput value="XS"></SizeInput>
			<SizeInput value="XXS"></SizeInput>
		</div>
	);
}
