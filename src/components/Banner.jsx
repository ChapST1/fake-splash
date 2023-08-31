import { getRandomPhoto } from "@/services/fakeSplash/getRandomPhoto";
import { BannerForm } from "./BannerForm";

export async function Banner() {
	const radomPhoto = await getRandomPhoto("nature");
	return (
		<div
			className=" w-full  h-[550px] bg-[#131418d1] bg-blend-overlay bg-center bg-cover bg-fixed bg-no-repeat flex items-center justify-center "
			style={{
				backgroundImage: `url(${radomPhoto.urls.regular})`,
			}}
		>
			<BannerForm />
		</div>
	);
}
