import { UNSPLASH_GET_TOPICS_API_URL } from "../config/unsplash";

export async function getUnsplashTopics(page = 1, perPage = 30) {
	const apiUrl = UNSPLASH_GET_TOPICS_API_URL(page, perPage);
	const response = await fetch(apiUrl);

	const data = await response.json();

	const mappedData = data.map((item) => {
		const { id, title, slug } = item;

		return {
			topicId: id,
			topicTitle: title,
			topicSlug: slug,
		};
	});

	return mappedData;
}
