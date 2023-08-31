import { Pagination } from "@/components/Pagination";
import { ImageGallery } from "@/components/ImagesGallery";
import { search } from "@/services/fakeSplash/search";

export default async function Search(req) {
	const { searchParams } = req;
	const { q, page } = searchParams;
	const currentData = await search(q, page);
	const nextPagePath = `/search?q=${q}&page=${Number(page) + 1}`;
	const prevPagePath = `/search?q=${q}&page=${Number(page) - 1}`;

	return (
		<section className="pt-[150px]">
			<ImageGallery data={currentData} />
			<Pagination
				currentPage={page}
				nextPagePath={nextPagePath}
				prevPagePath={prevPagePath}
			/>
		</section>
	);
}
