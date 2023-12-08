import React from "react";

export default function Input(props) {
	return (
		<>
			<input
				type="text"
				placeholder={props.placeholder}
				className="bg-grey-22 h-12 w-full text-grey-67 rounded-lg mt-2 px-6 font-athiti font-medium text-lg focus:outline-none"
			/>
		</>
	);
}
