import { UNSPLASH_GET_PHOTOS_API_URL } from "@/services/config/unsplash";
import { mappedResponse } from "@/utils/mappedResponse";

export async function getUnsplashGallery(page = 1) {
	const apiUrl = UNSPLASH_GET_PHOTOS_API_URL(page);
	const response = await fetch(apiUrl);
	const data = await response.json();

	const { mappedData } = mappedResponse(data);
	return mappedData;
}
