"use client";
import { useReducer} from "react";
import React from "react";
import UploadContext from "./UploadContext";

const uploadReducer = (state, action) => {
	if (action.type === "DETAIL") {
		const detail = action.detail;
		console.log(detail)
		return {
			...state,
			productName: detail.pn,
			brandName: detail.bn,
			// colorOptions: detail.co,
			sizeOptions: detail.so,
			initialPrice: detail.ip,
			finalPrice: detail.fp,
		};
	}
	if (action.type === "IMAGES") {
		const currentImages = (	state.images==undefined) ? [] : state.images;
		const images = currentImages.concat(action.images);
		console.log(state.images, action.images)
		console.log(images)
		return { ...state, images: images };
	}
	if (action.type === "COLOUR"){
		const colours = state.colorOptions == undefined ? {} : state.colorOptions;
		// const updateColour = colours.filter(color => action.colour)
		console.log(action)
		colours[action.colour[0]] = action.colour[1];
		console.log(colours);
		return{...state, colorOptions: colours}
	}
};

const UploadProvider = (props) => {
	const [uploadState, dispatchUploadAction] = useReducer(uploadReducer, {});

	const setDetailHandler = (detail) => {
		dispatchUploadAction({ type: "DETAIL", detail: detail });
	};

	const setImagesHandler = (images) =>
		dispatchUploadAction({ type: "IMAGES", images: images });
	const setColourOptionsHandler = (colour, value) => {
		dispatchUploadAction({ type: "COLOUR", colour: colour});
	}

	const uploadContext = {
		images: uploadState.images,
		productName: uploadState.productName,
		brandName: uploadState.brandName,
		colorOptions: uploadState.colorOptions,
		sizeOptions: uploadState.sizeOptions,
		initialPrice: uploadState.initialPrice,
		finalPrice: uploadState.finalPrice,
		setDetails: setDetailHandler,
		setImages: setImagesHandler,
		setColourOption: setColourOptionsHandler,
	};

	return (
		<UploadContext.Provider value={uploadContext}>
			{props.children}
		</UploadContext.Provider>
	);
};

export default UploadProvider;
