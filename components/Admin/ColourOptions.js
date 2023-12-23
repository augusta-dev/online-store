import React from "react";
import './colour-options.css'

export default function ColourOptions() {
	return (
		  
			// {/* <select className="w-full bg-grey-22 mt-2 h-12 rounded-lg px-6  text-grey-67 grid grid-cols-4 grid-flow-row col-auto row-auto hover:bg-transparent">
			// 	{/* <option className="w-full" disabled>Choose a colour</option> */}
				// {/* <option
				// 	value="black"
				// 	id="blackSelect"
				// 	className="w-1/ h-12 bg-green-600"
				// >
				// 	<div className="w-12 bg-black h-12">Yes</div>
				// </option>
				// <option
				// 	value="red"
				// 	className="w-6 bg-red-600 h-8 inline-grid"
				// >
				// 	No
				// </option> */}
				// {/* <option
				// 	value="blue"
				// 	className="w-6 bg-blue-600 h-8 inline-grid"
				// >
				// 	No
				// </option>
				// <option
				// 	value="blue"
				// 	className="w-6 bg-green-600 h-8 inline-grid"
				// >
				// 	No
				// </option> */}
			// {/* </select> */} 
		

		<div className="grid grid-cols-6 grid-flow-row col-auto row-auto w-full  gap-1">
			<div className="w-auto p-2 bg-black">
				<input type="checkbox" className="bg-black h-16 w-16 text-black checked:bg-black checked:border-black checked:outline-black checked:fill-black"/>
			</div>
		    <div className="w-auto p-2 bg-red-600">
				<input type="checkbox" className="bg-black h-4 w-4"/>
			</div>
		    <div className="w-auto p-2 bg-blue-600">
				<input type="checkbox" className="bg-black h-4 w-4"/>
			</div>
		    <div className="w-auto p-2 bg-green-600">
				<input type="checkbox" className="bg-black h-4 w-4"/>
			</div>
		</div>
	);
}
