import { getRandomPhoto } from "@/services/fakeSplash/getRandomPhoto";

export async function BannerTopic({ title }) {
	const keyword = title.split("-").join(" ");
	const { urls, color } = await getRandomPhoto(keyword);

	return (
		<div
			className="w-full  h-[350px] bg-[#131418d1] bg-blend-overlay bg-cover object-top bg-no-repeat flex flex-col items-center justify-center rounded-md"
			style={{
				backgroundImage: `url(${urls.regular})`,
			}}
		>
			<span className=" text-6xl capitalize font-bold text-[#e7e7e7] ">
				{keyword}
			</span>
		</div>
	);
}
