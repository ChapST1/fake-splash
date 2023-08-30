import { Pagination } from "@/components/Pagination";
import { TopicsCard } from "@/components/TopicsCard";
import { getTopics } from "@/services/fakeSplash/getTopics";

export default async function TopicsPage(req) {
	const { searchParams } = req;
	const { page } = searchParams;

	const nextPagePath = `/topics?page=${Number(page) + 1}`;
	const prevPagePath = `/topics?page=${Number(page) - 1}`;

	const topics = await getTopics(page, 10);

	return (
		<section className="pt-[70px]">
			<h2 className="text-center py-5 text-2xl">Topics</h2>

			<div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-7">
				{topics.map((item) => {
					return <TopicsCard key={item.topicId} {...item} />;
				})}
			</div>

			<Pagination
				currentPage={page}
				nextPagePath={nextPagePath}
				prevPagePath={prevPagePath}
			/>
		</section>
	);
}
