import { getRandomPhoto } from "@/services/fakeSplash/getRandomPhoto";
import Link from "next/link";

export async function TopicsCard({ topicId, topicTitle, topicSlug }) {
	const { urls, color } = await getRandomPhoto(topicTitle);
	const { small } = urls;

	return (
		<Link
			key={topicId}
			href={`/topics/${topicSlug}?page=1`}
			className={`h-72 bg-[${color}] bg-[#131418d1] bg-blend-overlay bg-cover bg-top bg-no-repeat flex items-center justify-center rounded-xl hover:bg-[#131418a1] duration-300 `}
			style={{
				backgroundImage: `url(${small})`,
			}}
		>
			<span className="text-2xl">{topicTitle}</span>
		</Link>
	);
}
