import { NextResponse } from "next/server";
import connectMongo from "../../../components/libs/mongodb";
import Images from "../../../components/models/uploadImages";

export async function POST(request) {
	try {
		const {
			productName,
			brandName,
			colorOpitons,
			sizeOptions,
			initialPrice,
			finalPrice,
			images,
		} = await request.json();
		// {return NextResponse.json({ message: "Word not valid" }, { status: 501})}
            console.log(request)
		console.log(
			productName,
			brandName,
			colorOpitons,
			sizeOptions,
			initialPrice,
			finalPrice,
			images,
		);
		await connectMongo();

		await Images.create({
			productName,
			brandName,
			colorOpitons,
			sizeOptions,
			initialPrice,
			finalPrice,
			images,
		});
		return NextResponse.json(
			{ message: "Section created" },
			{ status: 201 },
		);
	} catch (err) {
		return NextResponse.json({ message: err.message }, { status: 501 });
	}
}
