import { getUnsplashTopics } from "@/services/unsplash/getUnsplashTopics";
import { NextResponse } from "next/server";

export async function GET(req) {
	const { searchParams } = new URL(req.url);

	const page = searchParams.get("page");
	const per_page = searchParams.get("per_page");
	const data = await getUnsplashTopics(page, per_page);

	return NextResponse.json({
		data,
	});
}
