import { UNSPLASH_GET_RANDOM_PHOTO_API_URL } from "../config/unsplash";

export async function getRandomPhoto(query) {
	const apiUrl = UNSPLASH_GET_RANDOM_PHOTO_API_URL(query);
	const response = await fetch(apiUrl);
	const data = await response.json();

	return data;
}
