import { searchImages } from "@/services/unsplash/searchImages";
import { NextResponse } from "next/server";

export async function GET(req) {
	const url = new URL(req.url);
	const page = url.searchParams.get("page");
	const query = url.searchParams.get("q");

	const images = await searchImages(query, page);

	return NextResponse.json({
		data: images,
	});
}
