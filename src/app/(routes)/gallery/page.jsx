import { Banner } from "@/components/Banner";
import { Pagination } from "@/components/Pagination";
import { ImageGallery } from "@/components/ImagesGallery";
import { getGalery } from "@/services/fakeSplash/getGallery";

export default async function Gallery(req) {
	const { searchParams } = req;
	const { page } = searchParams;

	const data = await getGalery(page);
	const prevPagePath = `/gallery?page=${Number(page) - 1}`;
	const nextPagePath = `/gallery?page=${Number(page) + 1}`;

	return (
		<section className="pt-[150px]">
			<Banner />
			<ImageGallery data={data} />
			<Pagination
				nextPagePath={nextPagePath}
				prevPagePath={prevPagePath}
				currentPage={page}
			/>
		</section>
	);
}
