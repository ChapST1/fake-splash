export async function search(q, page = 1) {
	const response = await fetch(
		`http://localhost:3000/api/search?q=${q}&page=${page}`,
		{
			cache: "no-store",
		},
	);
	const { data } = await response.json();
	return data;
}
