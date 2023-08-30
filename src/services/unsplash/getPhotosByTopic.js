import { mappedResponse } from "@/utils/mappedResponse";
import { UNSPLASH_GET_PHOTOS_BY_TOPIC_API_URL } from "../config/unsplash";

export async function getPhotosByTopic(slugOrId, page) {
	const apiUrl = UNSPLASH_GET_PHOTOS_BY_TOPIC_API_URL(slugOrId, page);
	const response = await fetch(apiUrl);
	const data = await response.json();
	const { mappedData } = mappedResponse(data);
	return mappedData;
}
