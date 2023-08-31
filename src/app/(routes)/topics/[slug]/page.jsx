import { BannerTopic } from "@/components/BannerTopic";
import { ImageGallery } from "@/components/ImagesGallery";
import { Pagination } from "@/components/Pagination";
import { getPhotosByTopic } from "@/services/fakeSplash/getPhotosByTopic";

export default async function SingleTopic(req) {
	const { params, searchParams } = req;
	const { slug } = params;
	const { page } = searchParams;

	const data = await getPhotosByTopic(slug, page);

	const nextPagePath = `/topics/${slug}?page=${Number(page) + 1}`;
	const prevPagePath = `/topics/${slug}?page=${Number(page) - 1}`;

	return (
		<section className="pt-[150px]">
			<BannerTopic title={slug} />
			<ImageGallery data={data} />
			<Pagination
				currentPage={page}
				nextPagePath={nextPagePath}
				prevPagePath={prevPagePath}
			/>
		</section>
	);
}
