import { getRandomPhoto } from "@/services/unsplash/getRandomPhoto";

const { NextResponse } = require("next/server");

export async function GET(req) {
	const url = new URL(req.url);
	const query = url.searchParams.get("q");

	const data = await getRandomPhoto(query);

	return NextResponse.json({
		data,
	});
}
