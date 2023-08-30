export async function getPhotosByTopic(slugOrId, page) {
	const response = await fetch(
		`http://localhost:3000/api/topics/photos?slug=${slugOrId}&page=${page}`,
	);
	const { data } = await response.json();

	return data;
}
