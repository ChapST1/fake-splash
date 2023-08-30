import { getPhotosByTopic } from "@/services/unsplash/getPhotosByTopic";
import { NextResponse } from "next/server";

export async function GET(req) {
	const url = new URL(req.nextUrl);
	const slug = url.searchParams.get("slug");
	const page = url.searchParams.get("page");

	const data = await getPhotosByTopic(slug, page);

	return NextResponse.json({
		data,
	});
}
