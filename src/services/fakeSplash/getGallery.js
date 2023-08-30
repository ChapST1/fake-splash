export async function getGalery(page = 1) {
	const response = await fetch(
		`http://localhost:3000/api/gallery?page=${page}`,
		{
			cache: "no-store",
		},
	);
	const { data } = await response.json();

	return data;
}
