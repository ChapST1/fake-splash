import { UNSPLASH_SEARCH_PHOTOS_API_URL } from "@/services/config/unsplash";
import { mappedResponse } from "@/utils/mappedResponse";

export async function searchImages(query, page = 1) {
	const apiUrl = UNSPLASH_SEARCH_PHOTOS_API_URL(page, query);
	const response = await fetch(apiUrl);
	const { results } = await response.json();

	const { mappedData } = mappedResponse(results);

	return mappedData;
}
