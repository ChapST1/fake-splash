import { getUnsplashGallery } from "@/services/unsplash/getUnsplashGallery";

const { NextResponse } = require("next/server");

export async function GET(req) {
	const url = new URL(req.url);
	const page = url.searchParams.get("page");
	const images = await getUnsplashGallery(page);

	return NextResponse.json({
		data: images,
	});
}
