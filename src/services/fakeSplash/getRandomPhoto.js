export async function getRandomPhoto(query) {
	const queryApiUrl = `http://localhost:3000/api/random?q=${query}`;

	const res = await fetch(queryApiUrl);
	const { data } = await res.json(queryApiUrl);

	return data;
}
