export async function getTopics(page = 1, per_page = 5) {
	const res = await fetch(
		`http://localhost:3000/api/topics?page=${page}&per_page=${per_page}`,
	);
	const { data } = await res.json();

	return data;
}
