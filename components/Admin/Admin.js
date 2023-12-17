"use client";
import Input from "../UI/Input";
import Upload from "./Upload";
//import UploadButton from "../UI/UploadThing";
const AdminPage = (props) => {
	return (
		<div className="flex items-center justify-center py-6 px-4  flex-col">
			<h1 className="text-grey-D9 text-3xl font-source font-semibold pb-3">
				Enter Data
			</h1>
			<Upload></Upload>

			<button className="bg-grey-22 h-24 w-24 rounded-lg mb-3"></button>
			{/* <div>Product Name</div> */}
			<Input placeholder="Product Name" />
			<Input placeholder="Brand Name" />
			<Input placeholder="Colour Options" />
			<Input placeholder="Size Options" />
			<Input placeholder="Initial Price" />
			<Input placeholder="Final Price" />

			<button className="bg-grey-67 h-12 w-full rounded-lg mt-16 text-grey-12 text-2xl font-medium">
				Save
			</button>
		</div>
	);
};
export default AdminPage;
