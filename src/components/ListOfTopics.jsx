import { getTopics } from "@/services/fakeSplash/getTopics";
import Link from "next/link";

export async function ListOfTopics() {
	const data = await getTopics(1, 10);

	return (
		<div
			className=" w-full flex-1 flex gap-5 items-center justify-start overflow-x-scroll"
			id="topicsHeaderContainer"
		>
			{data?.map(({ topicId, topicTitle, topicSlug }) => {
				return (
					<Link
						href={`/topics/${topicSlug}?page=1`}
						key={topicId}
						className="w-[max-content] block whitespace-nowrap bg-[#1b1e23] py-2 px-4 rounded-full"
					>
						{topicTitle}
					</Link>
				);
			})}

			<Link
				href="/topics?page=1"
				className="w-[max-content] block whitespace-nowrap"
			>
				all categories
			</Link>
		</div>
	);
}
